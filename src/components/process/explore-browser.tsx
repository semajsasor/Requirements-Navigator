"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

import { ProcessEmptyState } from "@/components/process/process-empty-state";
import { ProcessFilters } from "@/components/process/process-filters";
import { ProcessList } from "@/components/process/process-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  emptyProcessFilters,
  filterProcesses,
  hasActiveProcessFilters,
  type ProcessFilterInput,
} from "@/lib/process/filter";
import type { ProcessGuide } from "@/types/process";

type ExploreBrowserProps = {
  processes: ProcessGuide[];
  popularProcesses: ProcessGuide[];
  categories: string[];
  countries: { code: string; name: string }[];
};

function subscribeHydration() {
  return () => {};
}

export function ExploreBrowser({
  processes,
  popularProcesses,
  categories,
  countries,
}: ExploreBrowserProps) {
  const [filters, setFilters] = useState<ProcessFilterInput>(emptyProcessFilters);
  const isHydrated = useSyncExternalStore(
    subscribeHydration,
    () => true,
    () => false,
  );

  const filteredProcesses = useMemo(
    () => filterProcesses(processes, filters),
    [filters, processes],
  );

  const activeFilters = hasActiveProcessFilters(filters);

  function resetFilters() {
    setFilters(emptyProcessFilters);
  }

  return (
    <div className="grid gap-8 sm:gap-10" data-hydrated={isHydrated}>
      <ProcessFilters
        filters={filters}
        categories={categories}
        countries={countries}
        totalCount={processes.length}
        resultCount={filteredProcesses.length}
        onChange={setFilters}
        onReset={resetFilters}
      />

      {!activeFilters ? (
        <section>
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="text-sm font-medium text-primary">Popular processes</p>
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                Start with a frequently used guide
              </h2>
            </div>
            <Button asChild variant="outline" className="hidden bg-white sm:inline-flex">
              <Link href="#all-guides">View all</Link>
            </Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {popularProcesses.map((process) => (
              <Card key={process.slug} className="bg-white shadow-sm">
                <CardContent className="p-5">
                  <Badge variant="accent">{process.category}</Badge>
                  <h3 className="mt-4 text-lg font-semibold leading-6">
                    {process.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {process.summary}
                  </p>
                  <Button asChild variant="link" className="mt-5">
                    <Link href={`/process/${process.slug}`}>
                      Open guide
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section id="all-guides">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              {activeFilters ? "Filtered results" : "All guides"}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal">
              {filteredProcesses.length} requirement guide
              {filteredProcesses.length === 1 ? "" : "s"}
            </h2>
          </div>
          {activeFilters ? (
            <Button variant="outline" onClick={resetFilters} className="bg-white">
              Show all guides
            </Button>
          ) : null}
        </div>

        {filteredProcesses.length > 0 ? (
          <ProcessList processes={filteredProcesses} />
        ) : (
          <ProcessEmptyState onReset={resetFilters} />
        )}
      </section>
    </div>
  );
}
