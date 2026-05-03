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

  it("uses a link placeholder when only a video URL is available", () => {
    render(
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

    expect(screen.getByText(/video opens in a new tab/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open tutorial/i })).toHaveAttribute(
      "href",
      "https://example.com/tutorial",
    );
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

  it("shows a visible placeholder for demo embed URLs", () => {
    render(
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

    expect(screen.getByText(/demo video placeholder/i)).toBeInTheDocument();
    expect(screen.queryByTitle("Demo tutorial")).not.toBeInTheDocument();
  });
});
