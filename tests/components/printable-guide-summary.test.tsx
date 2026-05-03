import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PrintableGuideSummary } from "@/components/process/printable-guide-summary";
import { processGuides } from "@/lib/data/processes";

describe("PrintableGuideSummary", () => {
  it("renders the checklist content needed for a readable print layout", () => {
    const guide = processGuides[0]!;

    render(<PrintableGuideSummary process={guide} />);

    expect(
      screen.getByRole("region", { name: /printable checklist summary/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: guide.title })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /required documents/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /main steps/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /estimated fees/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /common mistakes/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /source links/i })).toBeInTheDocument();
    expect(screen.getByText(/verify final requirements/i)).toBeInTheDocument();
  });
});
