import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProcessDetailView } from "@/components/process/process-detail-view";
import { processGuides } from "@/lib/data/processes";

vi.mock("@/lib/actions/saved-guides", () => ({
  saveGuideAction: vi.fn(),
}));

describe("ProcessDetailView guide-support rendering", () => {
  it("shows video support sections when a guide has video data", () => {
    const guideWithVideo = processGuides.find(
      (guide) => guide.videoTutorials?.length,
    );

    expect(guideWithVideo).toBeDefined();

    render(<ProcessDetailView process={guideWithVideo!} />);

    expect(
      screen.getByRole("heading", { name: /watch quick tutorial/i }),
    ).toBeInTheDocument();
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
    expect(
      screen.queryByRole("heading", { name: /plain english summary/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /document examples/i }),
    ).not.toBeInTheDocument();
    expect(container.querySelector("#tips")).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /required documents checklist/i }),
    ).toBeInTheDocument();
  });
});
