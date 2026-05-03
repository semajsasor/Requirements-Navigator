import type { ReactNode } from "react";

import { formatFeeRange } from "@/lib/data/processes";
import {
  formatProcessFee,
  formatProcessLocation,
} from "@/lib/process/format";
import type { ProcessGuide } from "@/types/process";

type PrintableGuideSummaryProps = {
  process: ProcessGuide;
};

export function PrintableGuideSummary({ process }: PrintableGuideSummaryProps) {
  const sortedSteps = [...process.instructions].sort((a, b) => a.order - b.order);

  return (
    <section className="print-only" aria-label="Printable checklist summary">
      <div className="print-header">
        <p>Requirements Navigator checklist</p>
        <h1>{process.title}</h1>
        <div className="print-meta">
          <span>{formatProcessLocation(process)}</span>
          <span>Timeline: {process.estimatedProcessingTime.display}</span>
          <span>Fees: {formatFeeRange(process.fees)}</span>
          <span>Last reviewed: {process.lastReviewedDate}</span>
        </div>
      </div>

      <PrintSection title="Required documents">
        <ul className="print-checklist">
          {process.requiredDocuments.map((document) => (
            <li key={document.name}>
              <span className="print-checkbox" aria-hidden="true" />
              <div>
                <strong>{document.name}</strong>
                <p>{document.description}</p>
                <small>{document.required ? "Required" : "If applicable"}</small>
              </div>
            </li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection title="Main steps">
        <ol className="print-numbered-list">
          {sortedSteps.map((step) => (
            <li key={`${step.order}-${step.title}`}>
              <strong>{step.order}. {step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </PrintSection>

      <PrintSection title="Estimated fees">
        <ul className="print-plain-list">
          {process.fees.map((fee) => (
            <li key={fee.label}>
              <strong>{fee.label}:</strong> {formatProcessFee(fee)}
              {fee.notes ? <span> - {fee.notes}</span> : null}
            </li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection title="Common mistakes">
        <ul className="print-plain-list">
          {process.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection title="Source links">
        <ul className="print-source-list">
          {process.officialSourceLinks.map((source) => (
            <li key={source.url}>
              <strong>{source.title}</strong> ({source.publisher})
              <br />
              <span>{source.url}</span>
            </li>
          ))}
        </ul>
      </PrintSection>

      <p className="print-disclaimer">
        Use this checklist for planning only. Verify final requirements, fees,
        forms, and appointment rules with the official sources before submitting
        documents or making payments.
      </p>
    </section>
  );
}

function PrintSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="print-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
