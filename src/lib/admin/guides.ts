import { notFound } from "next/navigation";

import { requireAdmin } from "@/lib/auth/session";
import { createClient } from "@/lib/supabase/server";
import type { ProcessGuideRow } from "@/types/database";

export async function getAdminGuides() {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("process_guides")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as ProcessGuideRow[];
}

export async function getAdminGuide(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("process_guides")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  return data as ProcessGuideRow;
}
