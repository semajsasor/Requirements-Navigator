import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ProcessVideoTutorialSection } from "@/components/process/process-video-tutorial-section";

describe("ProcessVideoTutorialSection", () => {
  it("renders an embedded tutorial and transcript toggle", async () => {
    const user = userEvent.setup();

    render(
      <ProcessVideoTutorialSection
        tutorial={{
          title: "Before you go",
          description: "Watch the key preparation steps before your appointment.",
          embedUrl: "https://www.youtube.com/embed/example",
          duration: "4 minutes",
          transcript: "Bring originals and one backup proof of address.",
          captionsAvailable: true,
          type: "before-you-go",
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: /watch quick tutorial/i }),
    ).toBeInTheDocument();
    expect(screen.getByTitle("Before you go")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/example",
    );
    expect(screen.getByText("4 minutes")).toBeInTheDocument();
    expect(screen.getByText("Captions")).toBeInTheDocument();

    const transcriptButton = screen.getByRole("button", { name: /transcript/i });
    expect(transcriptButton).toHaveAttribute("aria-expanded", "false");

    await user.click(transcriptButton);

    expect(transcriptButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/bring originals/i)).toBeInTheDocument();
  });

  it("does not render a placeholder when only a non-media video URL is available", () => {
    const { container } = render(
      <ProcessVideoTutorialSection
        tutorial={{
          title: "Quick overview",
          url: "https://example.com/tutorial",
          duration: "2 minutes",
          captionsAvailable: false,
          type: "quick overview",
        }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders a native player for direct video files", () => {
    const { container } = render(
      <ProcessVideoTutorialSection
        tutorial={{
          title: "Direct tutorial",
          url: "https://example.com/tutorial.mp4",
          duration: "2 minutes",
          captionsAvailable: false,
          type: "quick overview",
        }}
      />,
    );

    expect(container.querySelector("video")).toBeInTheDocument();
  });

  it("strips autoplay from embedded tutorial URLs", () => {
    render(
      <ProcessVideoTutorialSection
        tutorial={{
          title: "No autoplay embed",
          embedUrl: "https://www.youtube.com/embed/example?autoplay=1&rel=0",
          captionsAvailable: false,
          type: "quick overview",
        }}
      />,
    );

    expect(screen.getByTitle("No autoplay embed")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/example?rel=0",
    );
  });

  it("does not render demo embed placeholders", () => {
    const { container } = render(
      <ProcessVideoTutorialSection
        tutorial={{
          title: "Demo tutorial",
          embedUrl: "https://www.youtube-nocookie.com/embed/demo-video-demo",
          duration: "3 minutes",
          transcript: "This is a demo transcript.",
          captionsAvailable: true,
          type: "quick overview",
        }}
      />,
    );

    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByTitle("Demo tutorial")).not.toBeInTheDocument();
  });
});
