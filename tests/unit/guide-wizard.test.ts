import { describe, expect, it } from "vitest";

import { processGuides } from "@/lib/data/processes";
import {
  getGuideWizardCompletion,
  recommendGuides,
} from "@/lib/process/guide-wizard";

describe("guide wizard recommendations", () => {
  it("counts answered wizard questions", () => {
    expect(
      getGuideWizardCompletion({
        goal: "travel",
        countryCode: "PH",
        firstTime: "yes",
      }),
    ).toBe(3);
  });

  it("prioritizes guides matching country and purpose", () => {
    const recommendations = recommendGuides(processGuides, {
      goal: "business",
      countryCode: "PH",
      firstTime: "yes",
      purpose: "business",
    });

    expect(recommendations[0]?.guide.location.countryCode).toBe("PH");
    expect(recommendations[0]?.guide.category).toBe("Business");
    expect(recommendations[0]?.reasons).toContain("Matches Philippines");
  });

  it("can recommend school guides for education answers", () => {
    const recommendations = recommendGuides(processGuides, {
      goal: "school",
      purpose: "school",
      firstTime: "not-sure",
    });

    expect(
      recommendations.some((recommendation) =>
        recommendation.guide.tags.includes("education"),
      ),
    ).toBe(true);
  });
});
