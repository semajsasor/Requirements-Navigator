import type { ProcessGuide } from "@/types/process";

export type GuideWizardGoal =
  | "identity"
  | "travel"
  | "school"
  | "job"
  | "business"
  | "money"
  | "healthcare"
  | "family"
  | "housing";

export type GuideWizardPurpose =
  | "myself"
  | "school"
  | "job"
  | "business"
  | "travel"
  | "government-id";

export type GuideWizardFirstTime = "yes" | "no" | "not-sure";

export type GuideWizardAnswers = {
  goal?: GuideWizardGoal;
  countryCode?: string;
  firstTime?: GuideWizardFirstTime;
  purpose?: GuideWizardPurpose;
};

export type GuideRecommendation = {
  guide: ProcessGuide;
  score: number;
  reasons: string[];
};

export type GuideWizardOption<TValue extends string> = {
  value: TValue;
  label: string;
  description: string;
  keywords: string[];
};

export const guideWizardGoals: GuideWizardOption<GuideWizardGoal>[] = [
  {
    value: "identity",
    label: "Get an ID or clearance",
    description: "Passports, IDs, clearances, and official identity documents.",
    keywords: ["identity", "id", "clearance", "passport", "license", "licence"],
  },
  {
    value: "travel",
    label: "Travel or visa",
    description: "Passports, visitor visas, travel authorizations, and border programs.",
    keywords: ["travel", "visa", "passport", "tourist", "traveler", "eta"],
  },
  {
    value: "school",
    label: "School or college",
    description: "Enrollment, scholarships, student records, and university steps.",
    keywords: ["school", "college", "education", "student", "university", "enrollment"],
  },
  {
    value: "job",
    label: "Job or career",
    description: "Career paperwork, job applications, resumes, and employment checks.",
    keywords: ["job", "career", "employment", "resume", "work"],
  },
  {
    value: "business",
    label: "Start or run a business",
    description: "Business registration, permits, taxes, and freelancer setup.",
    keywords: ["business", "permit", "registration", "tax", "freelance", "sole"],
  },
  {
    value: "money",
    label: "Banking or money",
    description: "Bank accounts, financial access, and money-related requirements.",
    keywords: ["bank", "banking", "money", "financial", "account"],
  },
  {
    value: "healthcare",
    label: "Healthcare",
    description: "Health coverage, public healthcare registration, and medical access.",
    keywords: ["health", "healthcare", "medical", "insurance", "philhealth", "nhs"],
  },
  {
    value: "family",
    label: "Family records",
    description: "Birth, marriage, child, and family document requests.",
    keywords: ["family", "birth", "marriage", "child", "vital records"],
  },
  {
    value: "housing",
    label: "Housing",
    description: "Rental, mortgage, and home-related paperwork.",
    keywords: ["housing", "rental", "tenant", "home", "mortgage"],
  },
];

export const guideWizardPurposes: GuideWizardOption<GuideWizardPurpose>[] = [
  {
    value: "myself",
    label: "For myself",
    description: "Personal documents or requirements you need directly.",
    keywords: ["personal", "individual", "myself"],
  },
  {
    value: "school",
    label: "For school",
    description: "Enrollment, student benefits, and education requirements.",
    keywords: ["school", "college", "education", "student", "university"],
  },
  {
    value: "job",
    label: "For a job",
    description: "Employment, applications, clearances, and work paperwork.",
    keywords: ["job", "career", "employment", "work", "clearance"],
  },
  {
    value: "business",
    label: "For a business",
    description: "Registration, permits, tax setup, and business compliance.",
    keywords: ["business", "permit", "registration", "tax", "freelance"],
  },
  {
    value: "travel",
    label: "For travel",
    description: "Passports, visas, and travel permission documents.",
    keywords: ["travel", "passport", "visa", "tourist", "eta"],
  },
  {
    value: "government-id",
    label: "For government ID",
    description: "Official IDs, licenses, clearances, and identity records.",
    keywords: ["government", "identity", "id", "license", "licence", "clearance"],
  },
];

export function getGuideWizardCompletion(answers: GuideWizardAnswers) {
  return [
    answers.goal,
    answers.countryCode,
    answers.firstTime,
    answers.purpose,
  ].filter(Boolean).length;
}

export function recommendGuides(
  guides: ProcessGuide[],
  answers: GuideWizardAnswers,
  limit = 6,
): GuideRecommendation[] {
  const goal = guideWizardGoals.find((option) => option.value === answers.goal);
  const purpose = guideWizardPurposes.find(
    (option) => option.value === answers.purpose,
  );

  return guides
    .map((guide) => {
      const reasons: string[] = [];
      let score = 0;

      if (answers.countryCode && guide.location.countryCode === answers.countryCode) {
        score += 8;
        reasons.push(`Matches ${guide.location.countryName}`);
      }

      if (goal) {
        const goalScore = scoreKeywords(guide, goal.keywords);

        if (goalScore > 0) {
          score += 7 + goalScore;
          reasons.push(goal.label);
        }
      }

      if (purpose) {
        const purposeScore = scoreKeywords(guide, purpose.keywords);

        if (purposeScore > 0) {
          score += 5 + purposeScore;
          reasons.push(purpose.label);
        }
      }

      if (answers.firstTime === "yes") {
        if (guide.difficulty !== "High") {
          score += 2;
          reasons.push("Beginner friendly");
        }
        if (!containsAny(guide, ["renew", "renewal"])) {
          score += 1;
        }
      }

      if (answers.firstTime === "no" && containsAny(guide, ["renew", "renewal"])) {
        score += 3;
        reasons.push("Useful for returning applicants");
      }

      return { guide, score, reasons: [...new Set(reasons)].slice(0, 3) };
    })
    .filter((recommendation) => recommendation.score > 0)
    .sort((a, b) => b.score - a.score || a.guide.title.localeCompare(b.guide.title))
    .slice(0, limit);
}

function scoreKeywords(guide: ProcessGuide, keywords: string[]) {
  return keywords.reduce((score, keyword) => {
    if (guide.title.toLowerCase().includes(keyword)) {
      return score + 4;
    }

    if (guide.tags.some((tag) => tag.toLowerCase().includes(keyword))) {
      return score + 3;
    }

    if (guide.category.toLowerCase().includes(keyword)) {
      return score + 2;
    }

    if (
      guide.summary.toLowerCase().includes(keyword) ||
      guide.audience.toLowerCase().includes(keyword)
    ) {
      return score + 1;
    }

    return score;
  }, 0);
}

function containsAny(guide: ProcessGuide, keywords: string[]) {
  return scoreKeywords(guide, keywords) > 0;
}
