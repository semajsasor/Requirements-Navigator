import type { ProcessDifficulty, ProcessGuide } from "@/types/process";

export type ProcessFilterInput = {
  query: string;
  category: string;
  countryCode: string;
  region: string;
  difficulty: ProcessDifficulty | "All";
};

export const emptyProcessFilters: ProcessFilterInput = {
  query: "",
  category: "All",
  countryCode: "All",
  region: "",
  difficulty: "All",
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function getProcessSearchText(process: ProcessGuide) {
  return [
    process.title,
    process.slug,
    process.category,
    process.summary,
    process.audience,
    process.location.countryCode,
    process.location.countryName,
    process.location.region,
    process.location.city,
    process.difficulty,
    ...process.tags,
    ...process.requiredDocuments.flatMap((document) => [
      document.name,
      document.description,
      document.notes,
      ...(document.acceptedFormats ?? []),
    ]),
    ...process.instructions.flatMap((step) => [step.title, step.description]),
    ...process.eligibility.flatMap((item) => [item.label, item.description]),
    ...process.officialSourceLinks.flatMap((source) => [
      source.title,
      source.publisher,
      source.description,
    ]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function filterProcesses(
  processes: ProcessGuide[],
  filters: ProcessFilterInput,
) {
  const query = normalize(filters.query);
  const region = normalize(filters.region);

  return processes.filter((process) => {
    const matchesQuery = query
      ? getProcessSearchText(process).includes(query)
      : true;

    const matchesCategory =
      filters.category === "All" || process.category === filters.category;

    const matchesCountry =
      filters.countryCode === "All" ||
      process.location.countryCode === filters.countryCode;

    const matchesRegion = region
      ? normalize(
          [
            process.location.region ?? "",
            process.location.city ?? "",
            process.location.countryName,
          ].join(" "),
        ).includes(region)
      : true;

    const matchesDifficulty =
      filters.difficulty === "All" || process.difficulty === filters.difficulty;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesCountry &&
      matchesRegion &&
      matchesDifficulty
    );
  });
}

export function hasActiveProcessFilters(filters: ProcessFilterInput) {
  return (
    filters.query.trim().length > 0 ||
    filters.category !== "All" ||
    filters.countryCode !== "All" ||
    filters.region.trim().length > 0 ||
    filters.difficulty !== "All"
  );
}
