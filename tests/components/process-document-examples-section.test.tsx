import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  hasDocumentExamples,
  ProcessDocumentExamplesSection,
} from "@/components/process/process-document-examples-section";

describe("ProcessDocumentExamplesSection", () => {
  it("does not render without document examples", () => {
    const { container } = render(<ProcessDocumentExamplesSection examples={[]} />);

    expect(container).toBeEmptyDOMElement();
    expect(hasDocumentExamples([])).toBe(false);
  });

  it("does not render examples without real preview media", () => {
    const examples = [
      {
        label: "Proof of identity",
        acceptedTypes: ["Passport", "PhilSys ID"],
        notes: "Bring the original and a clear photocopy.",
      },
    ];

    const { container } = render(<ProcessDocumentExamplesSection examples={examples} />);

    expect(container).toBeEmptyDOMElement();
    expect(hasDocumentExamples(examples)).toBe(false);
  });

  it("renders labels, accepted types, notes, image previews, and the verification disclaimer", () => {
    const examples = [
      {
        label: "Proof of identity",
        acceptedTypes: ["Passport", "PhilSys ID"],
        notes: "Bring the original and a clear photocopy.",
        previewImageUrl: "https://example.com/proof-of-identity.png",
        previewImageAlt: "Sample proof of identity document",
      },
    ];

    render(<ProcessDocumentExamplesSection examples={examples} />);

    expect(
      screen.getByRole("heading", { name: /accepted document types/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Proof of identity")).toBeInTheDocument();
    expect(screen.getByText("Passport")).toBeInTheDocument();
    expect(screen.getByText("PhilSys ID")).toBeInTheDocument();
    expect(screen.getByText(/bring the original/i)).toBeInTheDocument();
    expect(screen.getByText("Preview asset attached")).toBeInTheDocument();
    expect(screen.getByText("Sample proof of identity document")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open preview/i })).toHaveAttribute(
      "href",
      "https://example.com/proof-of-identity.png",
    );
    expect(screen.getByText(/final acceptance depends/i)).toBeInTheDocument();
    expect(hasDocumentExamples(examples)).toBe(true);
  });
});
