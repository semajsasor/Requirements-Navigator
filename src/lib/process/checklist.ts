import type { ProcessGuide } from "@/types/process";

export function getDocumentChecklistItemId(name: string) {
  return `document-${name}`;
}

export function getStepChecklistItemId(order: number, title: string) {
  return `step-${order}-${title}`;
}

export function getChecklistItemIds(process: ProcessGuide) {
  return [
    ...process.requiredDocuments.map((document) =>
      getDocumentChecklistItemId(document.name),
    ),
    ...process.instructions.map((step) =>
      getStepChecklistItemId(step.order, step.title),
    ),
  ];
}

export function getChecklistItemType(itemId: string) {
  return itemId.startsWith("document-") ? "document" : "step";
}
