"use client";

import { useTransition } from "react";

import { ChecklistSection, type ChecklistItem } from "@/components/process/checklist-section";
import { updateChecklistProgressAction } from "@/lib/actions/saved-guides";
import {
  getDocumentChecklistItemId,
  getStepChecklistItemId,
} from "@/lib/process/checklist";
import type { ChecklistProgressRow } from "@/lib/dashboard/queries";
import type { ProcessGuide } from "@/types/process";

type SavedGuideProgressProps = {
  savedGuideId: string;
  guide: ProcessGuide;
  progressRows: ChecklistProgressRow[];
};

export function SavedGuideProgress({
  savedGuideId,
  guide,
  progressRows,
}: SavedGuideProgressProps) {
  const [, startTransition] = useTransition();
  const initialCheckedIds = progressRows
    .filter((row) => row.completed)
    .map((row) => row.item_id);

  const documentItems: ChecklistItem[] = guide.requiredDocuments.map((document) => ({
    id: getDocumentChecklistItemId(document.name),
    title: document.name,
    description: document.description,
    badge: document.required ? "Required" : "If applicable",
    meta: [
      document.acceptedFormats?.length
        ? `Accepted formats: ${document.acceptedFormats.join(", ")}`
        : "",
      document.notes ?? "",
    ]
      .filter(Boolean)
      .join(" "),
  }));

  const stepItems: ChecklistItem[] = [...guide.instructions]
    .sort((a, b) => a.order - b.order)
    .map((step) => ({
      id: getStepChecklistItemId(step.order, step.title),
      title: step.title,
      description: step.description,
      meta: step.expectedOutcome ? `Expected outcome: ${step.expectedOutcome}` : undefined,
    }));

  function persistToggle(item: ChecklistItem, completed: boolean) {
    startTransition(() => {
      void updateChecklistProgressAction({
        savedGuideId,
        itemId: item.id,
        completed,
      });
    });
  }

  return (
    <div className="grid gap-10">
      <ChecklistSection
        title="Required documents checklist"
        description="Your progress is saved to your account."
        items={documentItems}
        initialCheckedIds={initialCheckedIds}
        onItemToggle={persistToggle}
      />
      <ChecklistSection
        title="Step-by-step instructions"
        description="Mark each step complete as you move through the process."
        items={stepItems}
        ordered
        initialCheckedIds={initialCheckedIds}
        onItemToggle={persistToggle}
      />
    </div>
  );
}
