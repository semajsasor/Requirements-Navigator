import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GuideFreshnessPanel } from "@/components/process/guide-freshness-panel";
import { processGuides } from "@/lib/data/processes";

describe("GuideFreshnessPanel", () => {
  it("shows review date, status, and official-source reminder", () => {
    render(<GuideFreshnessPanel process={processGuides[0]!} />);

    expect(screen.getByText(/Review and freshness/i)).toBeInTheDocument();
    expect(screen.getByText(/Last reviewed 2026-04-27/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Recently updated/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/verify final requirements/i)).toBeInTheDocument();
  });
});
