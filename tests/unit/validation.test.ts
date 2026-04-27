import { describe, expect, it } from "vitest";

import { processGuides } from "@/lib/data/processes";
import { processGuideSchema } from "@/lib/validations/process";

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

  it("requires a valid review status", () => {
    const guide = {
      ...processGuides[0]!,
      reviewStatus: "verified",
    };

    expect(processGuideSchema.safeParse(guide).success).toBe(false);
  });
});
