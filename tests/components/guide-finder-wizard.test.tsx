import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { GuideFinderWizard } from "@/components/process/guide-finder-wizard";
import { processCountries, processGuides } from "@/lib/data/processes";

describe("GuideFinderWizard", () => {
  it("recommends guides from practical answers", async () => {
    const user = userEvent.setup();

    render(
      <GuideFinderWizard
        processes={processGuides}
        countries={processCountries}
      />,
    );

    expect(screen.getByText(/0 of 4 answered/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /Start or run a business/i }),
    );
    await user.selectOptions(screen.getByLabelText(/country/i), "PH");
    await user.click(screen.getByRole("button", { name: /Yes, first time/i }));
    await user.click(screen.getByRole("button", { name: /For a business/i }));

    expect(screen.getByText(/4 of 4 answered/i)).toBeInTheDocument();
    expect(
      screen.getAllByText(/Register a Sole Proprietorship Business/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(/Matches Philippines/i).length).toBeGreaterThan(0);
  });
});
