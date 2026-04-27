import type { Metadata } from "next";

import { ExploreBrowser } from "@/components/process/explore-browser";
import { Badge } from "@/components/ui/badge";
import {
  processCategories,
  processCountries,
  processGuides,
} from "@/lib/data/processes";

export const metadata: Metadata = {
  title: "Explore",
  description: "Browse process checklists by category, difficulty, documents, and fees.",
};

export default function ExplorePage() {
  const popularProcesses = [
    "government-id-us",
    "passport-renewal-us",
    "small-business-permit-us",
  ]
    .map((slug) => processGuides.find((process) => process.slug === slug))
    .filter((process): process is (typeof processGuides)[number] => Boolean(process));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="max-w-3xl">
        <Badge variant="accent">Explore</Badge>
        <h1 className="mt-3 text-2xl font-semibold tracking-normal sm:mt-4 sm:text-4xl">
          Browse requirement guides
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
          Search by process, document, fee, country, or agency. Use filters to
          narrow the guide list, then open the checklist that matches what you
          need to complete.
        </p>
      </div>

      <div className="mt-6 sm:mt-8">
        <ExploreBrowser
          processes={processGuides}
          popularProcesses={popularProcesses}
          categories={processCategories}
          countries={processCountries}
        />
      </div>
    </div>
  );
}
