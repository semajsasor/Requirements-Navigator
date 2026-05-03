import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  hasProcessGuideHelp,
  ProcessGuideHelpSection,
} from "@/components/process/process-guide-help-section";

describe("ProcessGuideHelpSection", () => {
  it("does not render when no help content exists", () => {
    const { container } = render(<ProcessGuideHelpSection process={{}} />);

    expect(container).toBeEmptyDOMElement();
    expect(hasProcessGuideHelp({})).toBe(false);
  });

  it("renders plain summary, preparation, and confusion boxes", () => {
    const process = {
      plainEnglishSummary: "Start online, then finish the appointment in person.",
      prepareFirst: ["Appointment reference", "Valid IDs"],
      commonConfusions: ["Payment is required before the appointment."],
    };

    render(<ProcessGuideHelpSection process={process} />);

    expect(screen.getByText("Plain English summary")).toBeInTheDocument();
    expect(screen.getByText(/start online/i)).toBeInTheDocument();
    expect(screen.getByText("What you need to prepare first")).toBeInTheDocument();
    expect(screen.getByText("Appointment reference")).toBeInTheDocument();
    expect(screen.getByText("What usually confuses people")).toBeInTheDocument();
    expect(screen.getByText(/payment is required/i)).toBeInTheDocument();
    expect(hasProcessGuideHelp(process)).toBe(true);
  });
});
