import { describe, expect, it } from "vitest";

import {
  getDaysSinceReview,
  getReviewStatusDescription,
  getReviewStatusLabel,
  isRecentlyReviewed,
} from "@/lib/process/freshness";

describe("guide freshness helpers", () => {
  const referenceDate = new Date("2026-05-03T12:00:00Z");

  it("treats reviews within 30 days as recent", () => {
    expect(isRecentlyReviewed("2026-04-27", referenceDate)).toBe(true);
    expect(getDaysSinceReview("2026-04-27", referenceDate)).toBe(6);
  });

  it("does not mark older or invalid dates as recently reviewed", () => {
    expect(isRecentlyReviewed("2026-03-01", referenceDate)).toBe(false);
    expect(isRecentlyReviewed("not-a-date", referenceDate)).toBe(false);
  });

  it("uses calm user-facing status language", () => {
    expect(getReviewStatusLabel("draft")).toBe("Needs review");
    expect(getReviewStatusLabel("outdated")).toBe("Outdated");
    expect(getReviewStatusDescription("reviewed")).toMatch(/recorded editorial/i);
  });
});
