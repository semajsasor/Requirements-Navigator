import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProcessDetailView } from "@/components/process/process-detail-view";
import { processGuides } from "@/lib/data/processes";

vi.mock("@/lib/actions/saved-guides", () => ({
  saveGuideAction: vi.fn(),
}));

describe("ProcessDetailView guide-support rendering", () => {
  it("shows video support sections when a guide has video data", () => {
    const guideWithVideo = {
      ...processGuides[0]!,
      videoTutorials: [
        {
          title: "Real tutorial",
          description: "A real embedded tutorial.",
          embedUrl: "https://www.youtube.com/embed/real-tutorial",
          duration: "3 minutes",
          transcript: "Prepare your documents before you go.",
          captionsAvailable: true,
          type: "quick overview" as const,
        },
      ],
    };

    render(<ProcessDetailView process={guideWithVideo} />);

    expect(
      screen.getByRole("heading", { name: /watch quick tutorial/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Video available")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /transcript/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByText(/review and freshness/i)).toBeInTheDocument();
  });

  it("keeps existing guides stable when optional support fields are absent", () => {
    const guideWithoutSupport = {
      ...processGuides[0]!,
      videoTutorials: undefined,
      documentExamples: undefined,
      plainEnglishSummary: undefined,
      prepareFirst: undefined,
      commonConfusions: undefined,
      commonMistakes: [],
    };

    const { container } = render(<ProcessDetailView process={guideWithoutSupport} />);

    expect(
      screen.queryByRole("heading", { name: /watch quick tutorial/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Video available")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /plain english summary/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /document examples/i }),
    ).not.toBeInTheDocument();
    expect(container.querySelector("#tips")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /avoid mistakes/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /required documents checklist/i }),
    ).toBeInTheDocument();
  });

  it("hides seeded demo-only media sections cleanly", () => {
    const guideWithDemoMedia = processGuides.find((guide) => guide.videoTutorials?.length);

    expect(guideWithDemoMedia).toBeDefined();

    const { container } = render(<ProcessDetailView process={guideWithDemoMedia!} />);

    expect(
      screen.queryByRole("heading", { name: /watch quick tutorial/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Video available")).not.toBeInTheDocument();
    expect(container.querySelector("#tutorial")).not.toBeInTheDocument();
    expect(container.querySelector("#document-examples")).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /video/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /examples/i })).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /required documents checklist/i }),
    ).toBeInTheDocument();
  });
});
