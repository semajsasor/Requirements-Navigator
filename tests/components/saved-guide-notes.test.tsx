import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SavedGuideNotes } from "@/components/dashboard/saved-guide-notes";

vi.mock("@/lib/actions/saved-guides", () => ({
  updateSavedGuideNotesAction: vi.fn(),
}));

describe("SavedGuideNotes", () => {
  it("renders notes and preselects saved reminders", () => {
    render(
      <SavedGuideNotes
        savedGuideId="saved-guide-1"
        notes="Bring printed appointment confirmation."
        reminders={["bring_photocopies", "verify_payment_method"]}
      />,
    );

    expect(screen.getByLabelText(/notes for this guide/i)).toHaveValue(
      "Bring printed appointment confirmation.",
    );
    expect(
      screen.getByRole("checkbox", { name: /bring photocopies/i }),
    ).toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /verify payment method/i }),
    ).toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /bring extra valid id/i }),
    ).not.toBeChecked();
    expect(screen.getByDisplayValue("saved-guide-1")).toHaveAttribute(
      "name",
      "savedGuideId",
    );
  });
});
