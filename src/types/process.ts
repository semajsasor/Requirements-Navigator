export type ProcessDifficulty = "Low" | "Medium" | "High";

export type ProcessStatus = "draft" | "review" | "published" | "archived";
export type ContentReviewStatus = "draft" | "reviewed" | "outdated";
export type ProcessVideoTutorialType =
  | "quick overview"
  | "full walkthrough"
  | "before-you-go"
  | "common mistakes";

export type ProcessingTimeUnit = "minutes" | "hours" | "days" | "weeks" | "months";

export type ProcessLocation = {
  countryCode: string;
  countryName: string;
  region?: string;
  city?: string;
};

export type EligibilityRequirement = {
  label: string;
  description: string;
};

export type ProcessDocument = {
  name: string;
  description: string;
  required: boolean;
  acceptedFormats?: string[];
  notes?: string;
};

export type ProcessDocumentExample = {
  label: string;
  acceptedTypes: string[];
  notes?: string;
  previewImageUrl?: string;
  previewImageAlt?: string;
};

export type ProcessInstruction = {
  title: string;
  description: string;
  order: number;
  expectedOutcome?: string;
};

export type ProcessFee = {
  label: string;
  amount: number | null;
  currency: string;
  required: boolean;
  notes?: string;
};

export type EstimatedProcessingTime = {
  min: number;
  max: number;
  unit: ProcessingTimeUnit;
  display: string;
};

export type ProcessFaq = {
  question: string;
  answer: string;
};

export type OfficialSourceLink = {
  title: string;
  url: string;
  publisher: string;
  description?: string;
};

export type ProcessVideoTutorial = {
  title: string;
  description?: string;
  url?: string;
  embedUrl?: string;
  duration?: string;
  transcript?: string;
  captionsAvailable: boolean;
  type: ProcessVideoTutorialType;
};

export type ProcessGuide = {
  title: string;
  slug: string;
  category: string;
  location: ProcessLocation;
  summary: string;
  audience: string;
  eligibility: EligibilityRequirement[];
  requiredDocuments: ProcessDocument[];
  instructions: ProcessInstruction[];
  fees: ProcessFee[];
  estimatedProcessingTime: EstimatedProcessingTime;
  commonMistakes: string[];
  tips: string[];
  faq: ProcessFaq[];
  officialSourceLinks: OfficialSourceLink[];
  videoTutorials?: ProcessVideoTutorial[];
  documentExamples?: ProcessDocumentExample[];
  plainEnglishSummary?: string;
  prepareFirst?: string[];
  commonConfusions?: string[];
  lastReviewedDate: string;
  reviewStatus: ContentReviewStatus;
  difficulty: ProcessDifficulty;
  tags: string[];
  status: ProcessStatus;
};

export type ProcessSeedRecord = {
  slug: string;
  title: string;
  category: string;
  country_code: string;
  country_name: string;
  region: string | null;
  city: string | null;
  summary: string;
  audience: string;
  eligibility: EligibilityRequirement[];
  required_documents: ProcessDocument[];
  instructions: ProcessInstruction[];
  fees: ProcessFee[];
  estimated_processing_time: EstimatedProcessingTime;
  common_mistakes: string[];
  tips: string[];
  faq: ProcessFaq[];
  official_source_links: OfficialSourceLink[];
  video_tutorials?: ProcessVideoTutorial[];
  document_examples?: ProcessDocumentExample[];
  plain_english_summary?: string | null;
  prepare_first?: string[];
  common_confusions?: string[];
  last_reviewed_date: string;
  review_status: ContentReviewStatus;
  difficulty: ProcessDifficulty;
  tags: string[];
  status: ProcessStatus;
  published: boolean;
};
