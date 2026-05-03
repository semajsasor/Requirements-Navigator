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

describe("process page video fallback", () => {
  it("fills missing optional video support from seeded guide data", async () => {
    const { getProcessBySlug } = await import("@/lib/data/processes");
    const { applySeedSupportContent } = await import("@/app/process/[slug]/page");

    const seedGuide = getProcessBySlug("apply-philippine-passport");
    expect(seedGuide?.videoTutorials?.length).toBeGreaterThan(0);

    const mergedGuide = applySeedSupportContent(
      {
        ...seedGuide,
        videoTutorials: undefined,
      } as ProcessGuide,
      seedGuide,
    );

    expect(mergedGuide.videoTutorials).toEqual(seedGuide?.videoTutorials);
  });
});
