import type { Database, ProcessGuideInsert, ProcessGuideRow } from "@/types/database";
import type { ProcessGuide, ProcessSeedRecord } from "@/types/process";
import { createClient } from "@/lib/supabase/server";

export type SavedGuideWithGuide =
  Database["public"]["Tables"]["saved_guides"]["Row"] & {
    process_guides: ProcessGuideRow | null;
  };

function optionalArray<T>(value: T[] | null | undefined) {
  return Array.isArray(value) && value.length ? value : undefined;
}

function requiredArray<T>(value: T[] | null | undefined) {
  return Array.isArray(value) ? value : [];
}

export function processGuideToInsert(
  seed: ProcessSeedRecord,
): ProcessGuideInsert {
  return {
    slug: seed.slug,
    title: seed.title,
    category: seed.category,
    country_code: seed.country_code,
    country_name: seed.country_name,
    region: seed.region,
    city: seed.city,
    summary: seed.summary,
    audience: seed.audience,
    eligibility: seed.eligibility,
    required_documents: seed.required_documents,
    instructions: seed.instructions,
    fees: seed.fees,
    estimated_processing_time: seed.estimated_processing_time,
    common_mistakes: seed.common_mistakes,
    tips: seed.tips,
    faq: seed.faq,
    official_source_links: seed.official_source_links,
    video_tutorials: seed.video_tutorials ?? [],
    document_examples: seed.document_examples ?? [],
    plain_english_summary: seed.plain_english_summary ?? null,
    prepare_first: seed.prepare_first ?? [],
    common_confusions: seed.common_confusions ?? [],
    last_reviewed_date: seed.last_reviewed_date,
    review_status: seed.review_status,
    difficulty: seed.difficulty,
    tags: seed.tags,
    status: seed.status,
  };
}

export function processGuideRowToGuide(row: ProcessGuideRow): ProcessGuide {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    location: {
      countryCode: row.country_code,
      countryName: row.country_name,
      region: row.region ?? undefined,
      city: row.city ?? undefined,
    },
    summary: row.summary,
    audience: row.audience,
    eligibility: requiredArray(row.eligibility),
    requiredDocuments: requiredArray(row.required_documents),
    instructions: requiredArray(row.instructions),
    fees: requiredArray(row.fees),
    estimatedProcessingTime: row.estimated_processing_time,
    commonMistakes: requiredArray(row.common_mistakes),
    tips: requiredArray(row.tips),
    faq: requiredArray(row.faq),
    officialSourceLinks: requiredArray(row.official_source_links),
    videoTutorials: optionalArray(row.video_tutorials),
    documentExamples: optionalArray(row.document_examples),
    plainEnglishSummary: row.plain_english_summary ?? undefined,
    prepareFirst: optionalArray(row.prepare_first),
    commonConfusions: optionalArray(row.common_confusions),
    lastReviewedDate: row.last_reviewed_date,
    reviewStatus: row.review_status,
    difficulty: row.difficulty,
    tags: requiredArray(row.tags),
    status: row.status,
  };
}

export async function getPublishedProcessGuideBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("process_guides")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error || !data) {
      return null;
    }

    return processGuideRowToGuide(data as ProcessGuideRow);
  } catch {
    return null;
  }
}
