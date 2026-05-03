import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";

import { GuideFinderWizard } from "@/components/process/guide-finder-wizard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { processCountries, processGuides } from "@/lib/data/processes";

export const metadata: Metadata = {
  title: "Help me choose a guide",
  description:
    "Answer a few simple questions and get recommended Requirements Navigator guides.",
};

export default function GuideFinderPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-3xl">
          <Badge variant="accent">Help me choose</Badge>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:mt-4 sm:text-4xl">
            Find the right requirement guide faster
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground sm:mt-4">
            Answer a few practical questions and Requirements Navigator will suggest
            guides that match your country, goal, and reason for applying. This is
            only a helper; search and filters are still available anytime.
          </p>
        </div>
        <Button asChild variant="outline" className="bg-white sm:mt-8">
          <Link href="/explore">
            <Search className="h-4 w-4" aria-hidden="true" />
            Use search instead
          </Link>
        </Button>
      </div>

      <div className="mt-7 sm:mt-10">
        <GuideFinderWizard processes={processGuides} countries={processCountries} />
      </div>
    </div>
  );
}
