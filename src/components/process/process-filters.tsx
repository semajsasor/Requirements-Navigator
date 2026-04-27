"use client";

import type { ReactNode } from "react";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ProcessDifficulty } from "@/types/process";
import type { ProcessFilterInput } from "@/lib/process/filter";

type ProcessFiltersProps = {
  filters: ProcessFilterInput;
  categories: string[];
  countries: { code: string; name: string }[];
  totalCount: number;
  resultCount: number;
  onChange: (filters: ProcessFilterInput) => void;
  onReset: () => void;
};

const difficulties: Array<ProcessDifficulty | "All"> = [
  "All",
  "Low",
  "Medium",
  "High",
];

export function ProcessFilters({
  filters,
  categories,
  countries,
  totalCount,
  resultCount,
  onChange,
  onReset,
}: ProcessFiltersProps) {
  function updateFilter<Key extends keyof ProcessFilterInput>(
    key: Key,
    value: ProcessFilterInput[Key],
  ) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <Card className="shadow-lg shadow-[#123c33]/5">
      <CardContent className="grid gap-5 p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search requirement guides</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={filters.query}
              onChange={(event) => updateFilter("query", event.target.value)}
              placeholder="Search guides"
              className="h-11 bg-white pl-9"
            />
          </label>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>
              {resultCount} of {totalCount} guides
            </span>
          </div>
        </div>

        <details className="group md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md border bg-white px-3 py-2 text-sm font-medium">
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-primary" aria-hidden="true" />
              Filters
            </span>
            <span className="text-xs text-muted-foreground group-open:hidden">
              Show
            </span>
            <span className="hidden text-xs text-muted-foreground group-open:inline">
              Hide
            </span>
          </summary>
          <FilterControls
            filters={filters}
            categories={categories}
            countries={countries}
            updateFilter={updateFilter}
            onReset={onReset}
            className="mt-4"
          />
        </details>

        <FilterControls
          filters={filters}
          categories={categories}
          countries={countries}
          updateFilter={updateFilter}
          onReset={onReset}
          className="hidden md:grid"
        />
      </CardContent>
    </Card>
  );
}

function FilterControls({
  filters,
  categories,
  countries,
  updateFilter,
  onReset,
  className,
}: {
  filters: ProcessFilterInput;
  categories: string[];
  countries: { code: string; name: string }[];
  updateFilter: <Key extends keyof ProcessFilterInput>(
    key: Key,
    value: ProcessFilterInput[Key],
  ) => void;
  onReset: () => void;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4", className)}>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <FilterGroup label="Category">
          {["All", ...categories].map((category) => (
            <FilterButton
              key={category}
              active={filters.category === category}
              onClick={() => updateFilter("category", category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterGroup>

        <FilterGroup label="Country">
          {[{ code: "All", name: "All countries" }, ...countries].map((country) => (
            <FilterButton
              key={country.code}
              active={filters.countryCode === country.code}
              onClick={() => updateFilter("countryCode", country.code)}
            >
              {country.name}
            </FilterButton>
          ))}
        </FilterGroup>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <div>
          <label className="text-sm font-medium text-foreground">
            Region or city
            <Input
              value={filters.region}
              onChange={(event) => updateFilter("region", event.target.value)}
              placeholder="State, province, city, or district"
              className="mt-2 h-10 bg-white"
            />
          </label>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Use a place name when requirements vary by location.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Difficulty</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <FilterButton
                key={difficulty}
                active={filters.difficulty === difficulty}
                onClick={() => updateFilter("difficulty", difficulty)}
              >
                {difficulty}
              </FilterButton>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          onClick={onReset}
          className="w-full bg-white md:w-auto"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Reset
        </Button>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-md border bg-white px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
        active && "border-primary bg-accent text-accent-foreground",
        className,
      )}
      {...props}
    />
  );
}
