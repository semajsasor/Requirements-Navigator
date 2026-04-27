import { describe, expect, it } from "vitest";

import { processGuides } from "@/lib/data/processes";
import {
  emptyProcessFilters,
  filterProcesses,
  hasActiveProcessFilters,
} from "@/lib/process/filter";

describe("filterProcesses", () => {
  it("returns all guides with empty filters", () => {
    expect(filterProcesses(processGuides, emptyProcessFilters)).toHaveLength(
      processGuides.length,
    );
  });

  it("matches query text across title, documents, and source metadata", () => {
    const results = filterProcesses(processGuides, {
      ...emptyProcessFilters,
      query: "biometrics",
    });

    expect(results.map((guide) => guide.slug)).toContain("canada-study-permit");
  });

  it("filters by category and country", () => {
    const results = filterProcesses(processGuides, {
      ...emptyProcessFilters,
      category: "Government services",
      countryCode: "GB",
    });

    expect(results).toHaveLength(1);
    expect(results[0]?.slug).toBe("uk-provisional-driving-licence");
  });

  it("filters by region placeholder text", () => {
    const results = filterProcesses(processGuides, {
      ...emptyProcessFilters,
      region: "California",
    });

    expect(results.map((guide) => guide.slug)).toEqual([
      "drivers-license-renewal-ca",
    ]);
  });

  it("detects active filters", () => {
    expect(hasActiveProcessFilters(emptyProcessFilters)).toBe(false);
    expect(
      hasActiveProcessFilters({ ...emptyProcessFilters, query: "passport" }),
    ).toBe(true);
  });
});
