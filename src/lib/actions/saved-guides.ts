"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCurrentUser, requireUser } from "@/lib/auth/session";
import { processSeedRecords } from "@/lib/data/processes";
import { getChecklistItemType } from "@/lib/process/checklist";
import { processGuideToInsert } from "@/lib/process/db";
import { createServiceClient } from "@/lib/supabase/service";
import { createClient } from "@/lib/supabase/server";
import type { ChecklistItemType } from "@/types/database";

async function ensureUserProfile(user: { id: string }) {
  const supabase = await createClient();

  await supabase.from("user_settings").upsert(
    {
      user_id: user.id,
    },
    { onConflict: "user_id" },
  );
}

export async function saveGuideAction(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const user = await getCurrentUser();

  if (!user) {
    redirect(`/auth/sign-in?redirectTo=/process/${encodeURIComponent(slug)}`);
  }

  const seed = processSeedRecords.find((record) => record.slug === slug);

  if (!seed) {
    throw new Error("Process guide not found.");
  }

  await ensureUserProfile(user);

  const supabase = await createClient();
  let { data: guide, error: guideError } = await supabase
    .from("process_guides")
    .select("id")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if ((guideError || !guide) && seed) {
    const serviceClient = createServiceClient();

    if (serviceClient) {
      const result = await serviceClient
        .from("process_guides")
        .upsert(processGuideToInsert(seed), { onConflict: "slug" })
        .select("id")
        .single();

      guide = result.data;
      guideError = result.error;
    }
  }

  if (guideError || !guide) {
    throw new Error(
      "This guide has not been published in Supabase yet. Ask an admin to publish it first.",
    );
  }

  const { data: savedGuide, error: savedError } = await supabase
    .from("saved_guides")
    .upsert(
      {
        user_id: user.id,
        guide_id: guide.id,
        status: "In progress",
      },
      { onConflict: "user_id,guide_id" },
    )
    .select("id")
    .single();

  if (savedError) {
    throw new Error(savedError.message);
  }

  revalidatePath("/dashboard");
  revalidatePath(`/process/${slug}`);
  redirect(savedGuide ? `/dashboard/guides/${savedGuide.id}` : "/dashboard");
}

export async function removeSavedGuideAction(formData: FormData) {
  const savedGuideId = String(formData.get("savedGuideId") ?? "");
  const user = await requireUser();
  const supabase = await createClient();

  const { error } = await supabase
    .from("saved_guides")
    .delete()
    .eq("id", savedGuideId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function updateChecklistProgressAction(input: {
  savedGuideId: string;
  itemId: string;
  itemType?: ChecklistItemType;
  completed: boolean;
}) {
  const user = await requireUser();
  const supabase = await createClient();

  const itemType = input.itemType ?? getChecklistItemType(input.itemId);

  const { error } = await supabase.from("checklist_progress").upsert(
    {
      user_id: user.id,
      saved_guide_id: input.savedGuideId,
      item_id: input.itemId,
      item_type: itemType,
      completed: input.completed,
      completed_at: input.completed ? new Date().toISOString() : null,
    },
    { onConflict: "user_id,saved_guide_id,item_id" },
  );

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(`/dashboard/guides/${input.savedGuideId}`);
  revalidatePath("/dashboard");
}

export async function updateSavedGuideNotesAction(formData: FormData) {
  const savedGuideId = String(formData.get("savedGuideId") ?? "");
  const notes = String(formData.get("notes") ?? "").trim();
  const user = await requireUser();
  const supabase = await createClient();

  const { error } = await supabase
    .from("saved_guides")
    .update({ notes: notes.length ? notes : null })
    .eq("id", savedGuideId)
    .eq("user_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(`/dashboard/guides/${savedGuideId}`);
  revalidatePath("/dashboard");
}
