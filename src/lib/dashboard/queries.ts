import { notFound } from "next/navigation";

import { requireUser } from "@/lib/auth/session";
import { getChecklistItemIds } from "@/lib/process/checklist";
import {
  processGuideRowToGuide,
  type SavedGuideWithGuide,
} from "@/lib/process/db";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

export type ChecklistProgressRow =
  Database["public"]["Tables"]["checklist_progress"]["Row"];

export type SavedGuideDashboardItem = {
  savedGuide: SavedGuideWithGuide;
  guide: ReturnType<typeof processGuideRowToGuide>;
  completedCount: number;
  totalCount: number;
};

export type SavedGuideDetail = SavedGuideDashboardItem & {
  progressRows: ChecklistProgressRow[];
};

export async function getSavedGuidesForCurrentUser() {
  const user = await requireUser();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("saved_guides")
    .select("*, process_guides(*)")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const savedGuides = (data ?? []) as SavedGuideWithGuide[];
  const savedGuideIds = savedGuides.map((item) => item.id);

  const { data: progressData, error: progressError } = savedGuideIds.length
    ? await supabase
        .from("checklist_progress")
        .select("*")
        .eq("user_id", user.id)
        .in("saved_guide_id", savedGuideIds)
    : { data: [], error: null };

  if (progressError) {
    throw new Error(progressError.message);
  }

  const progressRows = (progressData ?? []) as ChecklistProgressRow[];

  return savedGuides
    .filter((item) => item.process_guides)
    .map((item) => {
      const guide = processGuideRowToGuide(item.process_guides!);
      const itemIds = getChecklistItemIds(guide);
      const completedCount = progressRows.filter(
        (progress) =>
          progress.saved_guide_id === item.id &&
          progress.completed &&
          itemIds.includes(progress.item_id),
      ).length;

      return {
        savedGuide: item,
        guide,
        completedCount,
        totalCount: itemIds.length,
      };
    });
}

export async function getSavedGuideDetail(savedGuideId: string) {
  const user = await requireUser();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("saved_guides")
    .select("*, process_guides(*)")
    .eq("id", savedGuideId)
    .eq("user_id", user.id)
    .single();

  if (error || !data) {
    notFound();
  }

  const savedGuide = data as SavedGuideWithGuide;

  if (!savedGuide.process_guides) {
    notFound();
  }

  const guide = processGuideRowToGuide(savedGuide.process_guides);
  const itemIds = getChecklistItemIds(guide);

  const { data: progressData, error: progressError } = await supabase
    .from("checklist_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("saved_guide_id", savedGuideId);

  if (progressError) {
    throw new Error(progressError.message);
  }

  const progressRows = (progressData ?? []) as ChecklistProgressRow[];
  const completedCount = progressRows.filter(
    (progress) => progress.completed && itemIds.includes(progress.item_id),
  ).length;

  return {
    savedGuide,
    guide,
    progressRows,
    completedCount,
    totalCount: itemIds.length,
  };
}
