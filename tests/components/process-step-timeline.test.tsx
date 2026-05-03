import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProcessStepTimeline } from "@/components/process/process-step-timeline";
import type { ProcessInstruction } from "@/types/process";

const steps: ProcessInstruction[] = [
  {
    order: 2,
    title: "Pay the fee",
    description: "Use the reference number before the deadline.",
  },
  {
    order: 1,
    title: "Book an appointment",
    description: "Choose an available office and date.",
    expectedOutcome: "Confirmed appointment packet.",
  },
];

describe("ProcessStepTimeline", () => {
  it("renders sorted steps as a visual flow", () => {
    render(<ProcessStepTimeline steps={steps} />);

    expect(
      screen.getByRole("heading", { name: /scan the process before you start/i }),
    ).toBeInTheDocument();

    const items = screen.getAllByRole("listitem");
    expect(within(items[0]!).getByText("Book an appointment")).toBeInTheDocument();
    expect(within(items[1]!).getByText("Pay the fee")).toBeInTheDocument();
    expect(screen.getByText(/confirmed appointment packet/i)).toBeInTheDocument();
  });

  it("supports optional step statuses", () => {
    render(<ProcessStepTimeline steps={steps} statuses={{ 1: "complete", 2: "current" }} />);

    expect(screen.getByText("Complete")).toBeInTheDocument();
    expect(screen.getByText("Current")).toBeInTheDocument();
  });

  it("does not render for empty steps", () => {
    const { container } = render(<ProcessStepTimeline steps={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
