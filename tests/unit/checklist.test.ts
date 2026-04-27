import { describe, expect, it } from "vitest";

import { processGuides } from "@/lib/data/processes";
import {
  getChecklistItemIds,
  getChecklistItemType,
  getDocumentChecklistItemId,
  getStepChecklistItemId,
} from "@/lib/process/checklist";

describe("checklist helpers", () => {
  const guide = processGuides[0]!;

  it("creates stable item IDs for documents and steps", () => {
    expect(getDocumentChecklistItemId("Proof of identity")).toBe(
      "document-Proof of identity",
    );
    expect(getStepChecklistItemId(1, "Confirm state requirements")).toBe(
      "step-1-Confirm state requirements",
    );
  });

  it("combines all checklist IDs for a guide", () => {
    const ids = getChecklistItemIds(guide);

    expect(ids).toHaveLength(
      guide.requiredDocuments.length + guide.instructions.length,
    );
    expect(ids[0]).toMatch(/^document-/);
    expect(ids.at(-1)).toMatch(/^step-/);
  });

  it("infers checklist item type from ID", () => {
    expect(getChecklistItemType("document-Passport")).toBe("document");
    expect(getChecklistItemType("step-1-Apply")).toBe("step");
  });
});
