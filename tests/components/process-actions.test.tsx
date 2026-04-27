import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ProcessActions } from "@/components/process/process-actions";

describe("ProcessActions", () => {
  it("shows a manual copy fallback when clipboard access is blocked", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockRejectedValue(new Error("permission denied"));

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<ProcessActions checklistText="Checklist item one" />);

    await user.click(screen.getByRole("button", { name: /copy checklist/i }));

    expect(
      await screen.findByRole("button", { name: /copy failed/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/copy was blocked/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/checklist text for manual copy/i)).toHaveValue(
      "Checklist item one",
    );
  });
});
