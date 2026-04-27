import { formatFeeRange } from "@/lib/data/processes";
import type { ProcessGuide } from "@/types/process";

export function formatProcessLocation(process: ProcessGuide) {
  return [
    process.location.city,
    process.location.region,
    process.location.countryName,
  ]
    .filter(Boolean)
    .join(", ");
}

export function formatProcessFee(fee: ProcessGuide["fees"][number]) {
  if (fee.amount === null) {
    return "Varies";
  }

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: fee.currency,
    maximumFractionDigits: 0,
  }).format(fee.amount);
}

export function buildProcessChecklistText(process: ProcessGuide) {
  const lines = [
    process.title,
    process.summary,
    "",
    `Who this is for: ${process.audience}`,
    `Location: ${formatProcessLocation(process)}`,
    `Estimated timeline: ${process.estimatedProcessingTime.display}`,
    `Estimated fees: ${formatFeeRange(process.fees)}`,
    `Last reviewed: ${process.lastReviewedDate}`,
    "",
    "Required documents:",
    ...process.requiredDocuments.map(
      (document) =>
        `- [ ] ${document.name}${document.required ? " (required)" : " (if applicable)"}: ${document.description}`,
    ),
    "",
    "Steps:",
    ...process.instructions
      .sort((a, b) => a.order - b.order)
      .map((step) => `- [ ] ${step.order}. ${step.title}: ${step.description}`),
    "",
    "Fees:",
    ...process.fees.map(
      (fee) =>
        `- ${fee.label}: ${formatProcessFee(fee)}${fee.notes ? ` (${fee.notes})` : ""}`,
    ),
    "",
    "Common mistakes:",
    ...process.commonMistakes.map((mistake) => `- ${mistake}`),
    "",
    "Practical tips:",
    ...process.tips.map((tip) => `- ${tip}`),
    "",
    "FAQ:",
    ...process.faq.flatMap((item) => [
      `Q: ${item.question}`,
      `A: ${item.answer}`,
    ]),
    "",
    "Official sources:",
    ...process.officialSourceLinks.map(
      (source) => `- ${source.title} (${source.publisher}): ${source.url}`,
    ),
  ];

  return lines.join("\n");
}
