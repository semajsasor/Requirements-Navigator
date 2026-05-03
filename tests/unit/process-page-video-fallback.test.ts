import { describe, expect, it, vi } from "vitest";

import type { ProcessGuide } from "@/types/process";

vi.mock("@/components/process/process-detail-view", () => ({
  ProcessDetailView: () => null,
}));

vi.mock("@/lib/auth/session", () => ({
  getCurrentUser: vi.fn(),
}));

vi.mock("@/lib/process/db", () => ({
  getPublishedProcessGuideBySlug: vi.fn(),
}));

describe("process page support fallback", () => {
  it("keeps seeded media placeholders out of published guide rows", async () => {
    const { getProcessBySlug } = await import("@/lib/data/processes");
    const { applySeedSupportContent } = await import("@/app/process/[slug]/page");

    const seedGuide = getProcessBySlug("apply-philippine-passport");
    expect(seedGuide?.videoTutorials?.length).toBeGreaterThan(0);
    expect(seedGuide?.documentExamples?.length).toBeGreaterThan(0);

    const mergedGuide = applySeedSupportContent(
      {
        ...seedGuide,
        videoTutorials: undefined,
        documentExamples: undefined,
        plainEnglishSummary: undefined,
        prepareFirst: undefined,
        commonConfusions: undefined,
      } as ProcessGuide,
      seedGuide,
    );

    expect(mergedGuide.videoTutorials).toBeUndefined();
    expect(mergedGuide.documentExamples).toBeUndefined();
    expect(mergedGuide.plainEnglishSummary).toBe(seedGuide?.plainEnglishSummary);
    expect(mergedGuide.prepareFirst).toEqual(seedGuide?.prepareFirst);
    expect(mergedGuide.commonConfusions).toEqual(seedGuide?.commonConfusions);
  });
});
