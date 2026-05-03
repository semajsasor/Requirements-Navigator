import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { ExploreBrowser } from "@/components/process/explore-browser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <Badge variant="accent">Explore</Badge>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:mt-4 sm:text-4xl">
            Browse requirement guides
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Search by process, document, fee, country, or agency. Use filters to
            narrow the guide list, then open the checklist that matches what you
            need to complete.
          </p>
        </div>
        <Button asChild variant="outline" className="bg-white sm:mt-8">
          <Link href="/guide-finder">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Help me choose
          </Link>
        </Button>
      </div>

      <div className="mt-6 sm:mt-9">
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
