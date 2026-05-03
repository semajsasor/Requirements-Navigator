import { describe, expect, it } from "vitest";

import { processGuideRowToGuide } from "@/lib/process/db";
import type { ProcessGuideRow } from "@/types/database";

const baseRow: ProcessGuideRow = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  slug: "legacy-guide",
  title: "Legacy guide",
  category: "Identity",
  country_code: "PH",
  country_name: "Philippines",
  region: null,
  city: null,
  summary: "A guide from an older row shape.",
  audience: "Applicants",
  eligibility: [],
  required_documents: [],
  instructions: [],
  fees: [],
  estimated_processing_time: {
    min: 1,
    max: 1,
    unit: "days",
    display: "1 day",
  },
  common_mistakes: [],
  tips: [],
  faq: [],
  official_source_links: [],
  last_reviewed_date: "2026-01-01",
  review_status: "reviewed",
  difficulty: "Low",
  tags: [],
  status: "published",
  published: true,
  created_at: "2026-01-01T00:00:00.000Z",
  updated_at: "2026-01-01T00:00:00.000Z",
};

describe("process guide row mapping", () => {
  it("normalizes missing optional guide support arrays from legacy rows", () => {
    const guide = processGuideRowToGuide({
      ...baseRow,
      video_tutorials: null,
      document_examples: null,
      prepare_first: null,
      common_confusions: null,
    } as unknown as ProcessGuideRow);

    expect(guide.videoTutorials).toBeUndefined();
    expect(guide.documentExamples).toBeUndefined();
    expect(guide.prepareFirst).toBeUndefined();
    expect(guide.commonConfusions).toBeUndefined();
  });

  it("falls back to empty required arrays when older rows have null JSON", () => {
    const guide = processGuideRowToGuide({
      ...baseRow,
      common_mistakes: null,
      tips: null,
      faq: null,
      official_source_links: null,
      tags: null,
    } as unknown as ProcessGuideRow);

    expect(guide.commonMistakes).toEqual([]);
    expect(guide.tips).toEqual([]);
    expect(guide.faq).toEqual([]);
    expect(guide.officialSourceLinks).toEqual([]);
    expect(guide.tags).toEqual([]);
  });
});
