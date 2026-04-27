"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ZodError } from "zod";

import { requireAdmin } from "@/lib/auth/session";
import { createClient } from "@/lib/supabase/server";
import { parseAdminGuideForm } from "@/lib/validations/admin-guide";
import type { ProcessGuideInsert } from "@/types/database";
import type { ProcessStatus } from "@/types/process";

function guideErrorRedirect(path: string, error: unknown): never {
  const message =
    error instanceof ZodError
      ? error.issues.map((issue) => issue.message).join(", ")
      : error instanceof Error
        ? error.message
        : "Unable to save guide.";

  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

export async function createAdminGuideAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  let guide: ProcessGuideInsert;
  try {
    guide = parseAdminGuideForm(formData);
  } catch (error) {
    guideErrorRedirect("/admin/guides/new", error);
  }

  const { data, error } = await supabase
    .from("process_guides")
    .insert(guide)
    .select("id")
    .single();

  if (error) {
    guideErrorRedirect("/admin/guides/new", error);
  }

  revalidatePath("/admin");
  revalidatePath("/explore");
  redirect(`/admin/guides/${data.id}/edit`);
}

export async function updateAdminGuideAction(formData: FormData) {
  await requireAdmin();
  const guideId = String(formData.get("guideId") ?? "");
  const supabase = await createClient();
  const errorPath = `/admin/guides/${guideId}/edit`;

  let guide: ProcessGuideInsert;
  try {
    guide = parseAdminGuideForm(formData);
  } catch (error) {
    guideErrorRedirect(errorPath, error);
  }

  const { error } = await supabase
    .from("process_guides")
    .update(guide)
    .eq("id", guideId);

  if (error) {
    guideErrorRedirect(errorPath, error);
  }

  revalidatePath("/admin");
  revalidatePath("/explore");
  revalidatePath(`/process/${guide.slug}`);
  redirect(`${errorPath}?message=${encodeURIComponent("Guide saved.")}`);
}

export async function updateGuideStatusAction(formData: FormData) {
  await requireAdmin();
  const guideId = String(formData.get("guideId") ?? "");
  const status = String(formData.get("status") ?? "draft");
  const supabase = await createClient();

  const allowedStatuses: ProcessStatus[] = ["draft", "review", "published", "archived"];

  if (!allowedStatuses.includes(status as ProcessStatus)) {
    throw new Error("Invalid status.");
  }

  const { error } = await supabase
    .from("process_guides")
    .update({ status: status as ProcessStatus })
    .eq("id", guideId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin");
  revalidatePath("/explore");
}
