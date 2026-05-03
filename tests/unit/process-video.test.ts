import { describe, expect, it } from "vitest";

import { hasVideoTutorial } from "@/lib/process/video";
import { processGuides } from "@/lib/data/processes";

describe("process video availability", () => {
  it("detects guides with usable video tutorial data", () => {
    const guideWithVideo = processGuides.find((guide) => guide.videoTutorials?.length);

    expect(guideWithVideo).toBeDefined();
    expect(hasVideoTutorial(guideWithVideo!)).toBe(true);
  });

  it("ignores empty or non-http video placeholders", () => {
    const guide = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Broken video",
          embedUrl: "javascript:alert(1)",
          captionsAvailable: false,
          type: "quick overview" as const,
        },
      ],
    };

    expect(hasVideoTutorial(guide)).toBe(false);
  });
});
