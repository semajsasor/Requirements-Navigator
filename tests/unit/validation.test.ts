import { describe, expect, it } from "vitest";

import { processGuides } from "@/lib/data/processes";
import { processGuideSchema, savedProcessSchema } from "@/lib/validations/process";

describe("process guide validation", () => {
  it("accepts seeded process guides", () => {
    for (const guide of processGuides) {
      expect(() => processGuideSchema.parse(guide)).not.toThrow();
    }
  });

  it("rejects invalid official source URLs", () => {
    const guide = structuredClone(processGuides[0]!);
    guide.officialSourceLinks[0]!.url = "not-a-url";

    const result = processGuideSchema.safeParse(guide);

    expect(result.success).toBe(false);
  });

  it("accepts optional video tutorials", () => {
    const guide = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Before you go",
          description: "A short preparation walkthrough.",
          embedUrl: "https://www.youtube.com/embed/example",
          duration: "4 minutes",
          transcript: "Bring originals and one backup proof of address.",
          captionsAvailable: true,
          type: "before-you-go",
        },
      ],
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(true);
  });

  it("rejects video tutorials without a URL or embed URL", () => {
    const guide = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Quick overview",
          captionsAvailable: false,
          type: "quick overview",
        },
      ],
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(false);
  });

  it("rejects non-http video tutorial URLs", () => {
    const guide = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Unsafe tutorial",
          embedUrl: "javascript:alert(1)",
          captionsAvailable: false,
          type: "quick overview",
        },
      ],
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(false);
  });

  it("accepts optional document examples", () => {
    const guide = {
      ...processGuides[0]!,
      documentExamples: [
        {
          label: "Proof of identity",
          acceptedTypes: ["Passport", "Driver's License"],
          notes: "Bring the original and a clear copy.",
          previewImageUrl: "https://example.com/preview.png",
          previewImageAlt: "Generic identity document preview",
        },
      ],
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(true);
  });

  it("requires a valid review status", () => {
    const guide = {
      ...processGuides[0]!,
      reviewStatus: "verified",
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(false);
  });

  it("rejects processing time ranges where max is less than min", () => {
    const guide = structuredClone(processGuides[0]!);
    guide.estimatedProcessingTime = {
      min: 2,
      max: 1,
      unit: "days",
      display: "1 to 2 days",
    };

    const result = processGuideSchema.safeParse(guide);

    expect(result.success).toBe(false);
  });
});

describe("saved process validation", () => {
  it("accepts saved guide reminders", () => {
    const result = savedProcessSchema.safeParse({
      processId: "550e8400-e29b-41d4-a716-446655440000",
      status: "In progress",
      notes: "Bring a photocopy set and confirm the payment method.",
      reminders: ["bring_photocopies", "verify_payment_method"],
    });

    expect(result.success).toBe(true);
  });

  it("rejects unsupported saved guide reminders", () => {
    const result = savedProcessSchema.safeParse({
      processId: "550e8400-e29b-41d4-a716-446655440000",
      status: "In progress",
      reminders: ["custom-reminder"],
    });

    expect(result.success).toBe(false);
  });
});
