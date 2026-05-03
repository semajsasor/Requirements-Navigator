import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  hasMistakePreventionContent,
  ProcessMistakePreventionSection,
} from "@/components/process/process-mistake-prevention-section";

const emptyProcess = {
  commonMistakes: [],
  officialSourceLinks: [],
};

describe("ProcessMistakePreventionSection", () => {
  it("does not render without mistake or preparation content", () => {
    const { container } = render(<ProcessMistakePreventionSection process={emptyProcess} />);

    expect(container).toBeEmptyDOMElement();
    expect(hasMistakePreventionContent(emptyProcess)).toBe(false);
  });

  it("renders before-you-go content with an official source reminder", () => {
    const process = {
      commonMistakes: [],
      prepareFirst: ["Printed appointment packet", "Valid ID"],
      officialSourceLinks: [
        {
          title: "Official source",
          publisher: "Agency",
          url: "https://example.com",
        },
      ],
    };

    render(<ProcessMistakePreventionSection process={process} />);

    expect(screen.getByRole("heading", { name: /before you go/i })).toBeInTheDocument();
    expect(screen.getByText("Printed appointment packet")).toBeInTheDocument();
    expect(screen.getByText(/verify final requirements/i)).toBeInTheDocument();
    expect(hasMistakePreventionContent(process)).toBe(true);
  });

  it("renders common mistakes as a warning card", () => {
    render(
      <ProcessMistakePreventionSection
        process={{
          commonMistakes: ["Missing the payment deadline."],
          officialSourceLinks: [],
        }}
      />,
    );

    expect(screen.getByRole("heading", { name: /common mistakes/i })).toBeInTheDocument();
    expect(screen.getByText("Missing the payment deadline.")).toBeInTheDocument();
    expect(screen.getByText("Check twice")).toBeInTheDocument();
  });
});
