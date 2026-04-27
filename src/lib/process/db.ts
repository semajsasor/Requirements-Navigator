import type { Database, ProcessGuideInsert, ProcessGuideRow } from "@/types/database";
import type { ProcessGuide, ProcessSeedRecord } from "@/types/process";
import { createClient } from "@/lib/supabase/server";

export type SavedGuideWithGuide =
  Database["public"]["Tables"]["saved_guides"]["Row"] & {
    process_guides: ProcessGuideRow | null;
  };

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
    eligibility: row.eligibility,
    requiredDocuments: row.required_documents,
    instructions: row.instructions,
    fees: row.fees,
    estimatedProcessingTime: row.estimated_processing_time,
    commonMistakes: row.common_mistakes,
    tips: row.tips,
    faq: row.faq,
    officialSourceLinks: row.official_source_links,
    lastReviewedDate: row.last_reviewed_date,
    reviewStatus: row.review_status,
    difficulty: row.difficulty,
    tags: row.tags,
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
