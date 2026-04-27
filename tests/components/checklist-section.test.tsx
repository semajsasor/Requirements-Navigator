import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ChecklistSection } from "@/components/process/checklist-section";

describe("ChecklistSection", () => {
  const items = [
    {
      id: "document-id",
      title: "Proof of identity",
      description: "Bring an accepted ID.",
    },
    {
      id: "document-address",
      title: "Proof of address",
      description: "Bring address evidence.",
    },
  ];

  it("updates progress and calls persistence callback when toggled", async () => {
    const user = userEvent.setup();
    const onItemToggle = vi.fn();

    render(
      <ChecklistSection
        title="Documents"
        items={items}
        onItemToggle={onItemToggle}
      />,
    );

    expect(screen.getByText("0 of 2 complete")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /proof of identity/i }));

    expect(screen.getByText("1 of 2 complete")).toBeInTheDocument();
    expect(onItemToggle).toHaveBeenCalledWith(items[0], true);
  });
});
