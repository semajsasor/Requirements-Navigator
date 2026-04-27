import { z } from "zod";

import {
  eligibilityRequirementSchema,
  estimatedProcessingTimeSchema,
  officialSourceLinkSchema,
  processDifficultySchema,
  processDocumentSchema,
  processFaqSchema,
  processFeeSchema,
  processInstructionSchema,
  processStatusSchema,
  contentReviewStatusSchema,
} from "@/lib/validations/process";

function parseJsonField<T>(value: FormDataEntryValue | null, schema: z.ZodType<T>) {
  const raw = typeof value === "string" && value.trim() ? value : "[]";
  return schema.parse(JSON.parse(raw));
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getOptionalString(formData: FormData, key: string) {
  const value = getString(formData, key);
  return value.length ? value : null;
}

function getTags(formData: FormData, key: string) {
  return getString(formData, key)
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export const adminGuideFormSchema = z.object({
  title: z.string().trim().min(1).max(180),
  slug: z.string().trim().min(1).max(180),
  category: z.string().trim().min(1).max(100),
  country_code: z.string().trim().length(2).transform((value) => value.toUpperCase()),
  country_name: z.string().trim().min(2).max(80),
  region: z.string().trim().max(120).nullable(),
  city: z.string().trim().max(120).nullable(),
  summary: z.string().trim().min(1).max(1000),
  audience: z.string().trim().min(1).max(500),
  eligibility: z.array(eligibilityRequirementSchema),
  required_documents: z.array(processDocumentSchema),
  instructions: z.array(processInstructionSchema),
  fees: z.array(processFeeSchema),
  estimated_processing_time: estimatedProcessingTimeSchema,
  common_mistakes: z.array(z.string().trim().min(1).max(500)),
  tips: z.array(z.string().trim().min(1).max(500)),
  faq: z.array(processFaqSchema),
  official_source_links: z.array(officialSourceLinkSchema),
  last_reviewed_date: z.string().date(),
  review_status: contentReviewStatusSchema,
  difficulty: processDifficultySchema,
  tags: z.array(z.string().trim().min(1).max(60)),
  status: processStatusSchema,
});

export function parseAdminGuideForm(formData: FormData) {
  const intent = getString(formData, "intent");
  const status =
    intent === "publish"
      ? "published"
      : intent === "draft"
        ? "draft"
        : getString(formData, "status") || "draft";

  return adminGuideFormSchema.parse({
    title: getString(formData, "title"),
    slug: getString(formData, "slug"),
    category: getString(formData, "category"),
    country_code: getString(formData, "country_code"),
    country_name: getString(formData, "country_name"),
    region: getOptionalString(formData, "region"),
    city: getOptionalString(formData, "city"),
    summary: getString(formData, "summary"),
    audience: getString(formData, "audience"),
    eligibility: parseJsonField(formData.get("eligibility"), z.array(eligibilityRequirementSchema)),
    required_documents: parseJsonField(formData.get("required_documents"), z.array(processDocumentSchema)),
    instructions: parseJsonField(formData.get("instructions"), z.array(processInstructionSchema)),
    fees: parseJsonField(formData.get("fees"), z.array(processFeeSchema)),
    estimated_processing_time: estimatedProcessingTimeSchema.parse(
      JSON.parse(getString(formData, "estimated_processing_time")),
    ),
    common_mistakes: parseJsonField(formData.get("common_mistakes"), z.array(z.string().trim().min(1).max(500))),
    tips: parseJsonField(formData.get("tips"), z.array(z.string().trim().min(1).max(500))),
    faq: parseJsonField(formData.get("faq"), z.array(processFaqSchema)),
    official_source_links: parseJsonField(formData.get("official_source_links"), z.array(officialSourceLinkSchema)),
    last_reviewed_date: getString(formData, "last_reviewed_date"),
    review_status: getString(formData, "review_status") || "draft",
    difficulty: getString(formData, "difficulty"),
    tags: getTags(formData, "tags"),
    status,
  });
}
