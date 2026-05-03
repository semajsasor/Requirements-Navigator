import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ProcessActions } from "@/components/process/process-actions";

describe("ProcessActions", () => {
  it("opens the browser print dialog from the print checklist action", async () => {
    const user = userEvent.setup();
    const print = vi.fn();

    Object.defineProperty(window, "print", {
      configurable: true,
      value: print,
    });

    render(<ProcessActions checklistText="Checklist item one" />);

    await user.click(screen.getByRole("button", { name: /print checklist/i }));

    expect(print).toHaveBeenCalledOnce();
  });

  it("downloads the checklist text as a lightweight summary file", async () => {
    const user = userEvent.setup();
    const createObjectURL = vi.fn(() => "blob:requirements-summary");
    const revokeObjectURL = vi.fn();
    const linkClick = vi.fn();
    const originalCreateElement = document.createElement.bind(document);
    let downloadLink: HTMLAnchorElement | undefined;

    Object.defineProperty(window.URL, "createObjectURL", {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(window.URL, "revokeObjectURL", {
      configurable: true,
      value: revokeObjectURL,
    });

    const createElementSpy = vi
      .spyOn(document, "createElement")
      .mockImplementation((tagName, options) => {
        const element = originalCreateElement(tagName, options);

        if (tagName === "a") {
          downloadLink = element as HTMLAnchorElement;
          Object.defineProperty(element, "click", {
            configurable: true,
            value: linkClick,
          });
        }

        return element;
      });

    render(
      <ProcessActions
        checklistText="Checklist item one"
        downloadFilename="passport-summary.txt"
      />,
    );

    await user.click(screen.getByRole("button", { name: /download summary/i }));

    expect(createObjectURL).toHaveBeenCalledWith(expect.any(Blob));
    expect(downloadLink?.download).toBe("passport-summary.txt");
    expect(linkClick).toHaveBeenCalled();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:requirements-summary");

    createElementSpy.mockRestore();
  });

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
