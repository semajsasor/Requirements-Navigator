import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProcessCard } from "@/components/process/process-card";
import { processGuides } from "@/lib/data/processes";

describe("ProcessCard", () => {
  it("renders guide summary, status, and navigation CTA", () => {
    render(<ProcessCard process={processGuides[0]!} />);

    expect(screen.getByRole("heading", { name: /state government id/i })).toBeInTheDocument();
    expect(screen.getByText(/prepare identity/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviewed/i)).toBeInTheDocument();
    expect(screen.getByText(/View checklist/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/process/government-id-us",
    );
  });

  it("shows a video badge only when a guide has usable video data", () => {
    const guideWithVideo = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Real tutorial",
          embedUrl: "https://www.youtube.com/embed/real-tutorial",
          captionsAvailable: true,
          type: "quick overview" as const,
        },
      ],
    };

    const { rerender } = render(<ProcessCard process={guideWithVideo} />);

    expect(screen.getByText("Video available")).toBeInTheDocument();

    rerender(<ProcessCard process={{ ...guideWithVideo, videoTutorials: undefined }} />);

    expect(screen.queryByText("Video available")).not.toBeInTheDocument();
  });

  it("does not show a video badge for seeded demo-only tutorial data", () => {
    const guideWithDemoVideo = processGuides.find((guide) => guide.videoTutorials?.length);

    expect(guideWithDemoVideo).toBeDefined();

    render(<ProcessCard process={guideWithDemoVideo!} />);

    expect(screen.queryByText("Video available")).not.toBeInTheDocument();
  });
});
