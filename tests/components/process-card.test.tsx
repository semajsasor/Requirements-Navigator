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
});
