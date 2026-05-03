import { describe, expect, it } from "vitest";

import { hasVideoTutorial } from "@/lib/process/video";
import { processGuides } from "@/lib/data/processes";

describe("process video availability", () => {
  it("detects guides with usable video tutorial data", () => {
    expect(
      hasVideoTutorial({
        ...processGuides[0]!,
        videoTutorials: [
          {
            title: "Real tutorial",
            embedUrl: "https://www.youtube.com/embed/real-tutorial",
            captionsAvailable: true,
            type: "quick overview",
          },
        ],
      }),
    ).toBe(true);
  });

  it("ignores empty, demo, or non-http video placeholders", () => {
    const guide = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Broken video",
          embedUrl: "javascript:alert(1)",
          captionsAvailable: false,
          type: "quick overview" as const,
        },
        {
          title: "Demo video",
          embedUrl: "https://www.youtube-nocookie.com/embed/sample-demo",
          captionsAvailable: false,
          type: "quick overview" as const,
        },
      ],
    };

    expect(hasVideoTutorial(guide)).toBe(false);
  });
});
