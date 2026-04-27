import { z } from "zod";

export const processDifficultySchema = z.enum(["Low", "Medium", "High"]);
export const processStatusSchema = z.enum(["draft", "review", "published", "archived"]);
export const contentReviewStatusSchema = z.enum(["draft", "reviewed", "outdated"]);

export const processLocationSchema = z.object({
  countryCode: z.string().trim().length(2),
  countryName: z.string().trim().min(2).max(80),
  region: z.string().trim().max(120).optional(),
  city: z.string().trim().max(120).optional(),
});

export const eligibilityRequirementSchema = z.object({
  label: z.string().trim().min(1).max(120),
  description: z.string().trim().min(1).max(600),
});

export const processDocumentSchema = z.object({
  name: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(800),
  required: z.boolean(),
  acceptedFormats: z.array(z.string().trim().min(1).max(80)).optional(),
  notes: z.string().trim().max(600).optional(),
});

export const processInstructionSchema = z.object({
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().min(1).max(900),
  order: z.number().int().positive(),
  expectedOutcome: z.string().trim().max(400).optional(),
});

export const processFeeSchema = z.object({
  label: z.string().trim().min(1).max(160),
  amount: z.number().nonnegative().nullable(),
  currency: z.string().trim().length(3),
  required: z.boolean(),
  notes: z.string().trim().max(500).optional(),
});

export const estimatedProcessingTimeSchema = z.object({
  min: z.number().int().nonnegative(),
  max: z.number().int().positive(),
  unit: z.enum(["minutes", "hours", "days", "weeks", "months"]),
  display: z.string().trim().min(1).max(120),
});

export const processFaqSchema = z.object({
  question: z.string().trim().min(1).max(240),
  answer: z.string().trim().min(1).max(1200),
});

export const officialSourceLinkSchema = z.object({
  title: z.string().trim().min(1).max(180),
  url: z.string().trim().url(),
  publisher: z.string().trim().min(1).max(160),
  description: z.string().trim().max(500).optional(),
});

export const processGuideSchema = z.object({
  title: z.string().trim().min(1).max(180),
  slug: z.string().trim().min(1).max(180),
  category: z.string().trim().min(1).max(100),
  location: processLocationSchema,
  summary: z.string().trim().min(1).max(1000),
  audience: z.string().trim().min(1).max(500),
  eligibility: z.array(eligibilityRequirementSchema),
  requiredDocuments: z.array(processDocumentSchema),
  instructions: z.array(processInstructionSchema),
  fees: z.array(processFeeSchema),
  estimatedProcessingTime: estimatedProcessingTimeSchema,
  commonMistakes: z.array(z.string().trim().min(1).max(500)),
  tips: z.array(z.string().trim().min(1).max(500)),
  faq: z.array(processFaqSchema),
  officialSourceLinks: z.array(officialSourceLinkSchema),
  lastReviewedDate: z.string().date(),
  reviewStatus: contentReviewStatusSchema,
  difficulty: processDifficultySchema,
  tags: z.array(z.string().trim().min(1).max(60)),
  status: processStatusSchema,
});

export const processSearchSchema = z.object({
  query: z.string().trim().max(120).optional(),
  category: z.string().trim().max(80).optional(),
  countryCode: z.string().trim().length(2).optional(),
  region: z.string().trim().max(120).optional(),
  city: z.string().trim().max(120).optional(),
  difficulty: processDifficultySchema.optional(),
});

export const savedProcessSchema = z.object({
  processId: z.string().uuid(),
  status: z.enum(["Not started", "In progress", "Completed"]),
  notes: z.string().trim().max(1000).optional(),
});

export type ProcessGuideInput = z.infer<typeof processGuideSchema>;
export type ProcessSearchInput = z.infer<typeof processSearchSchema>;
export type SavedProcessInput = z.infer<typeof savedProcessSchema>;
