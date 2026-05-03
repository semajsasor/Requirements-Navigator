"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, RotateCcw } from "lucide-react";

import { ProcessCard } from "@/components/process/process-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getGuideWizardCompletion,
  guideWizardGoals,
  guideWizardPurposes,
  recommendGuides,
  type GuideWizardAnswers,
  type GuideWizardFirstTime,
} from "@/lib/process/guide-wizard";
import type { ProcessGuide } from "@/types/process";

type GuideFinderWizardProps = {
  processes: ProcessGuide[];
  countries: { code: string; name: string }[];
};

const firstTimeOptions: {
  value: GuideWizardFirstTime;
  label: string;
  description: string;
}[] = [
  {
    value: "yes",
    label: "Yes, first time",
    description: "Show guides that are easier to start from scratch.",
  },
  {
    value: "no",
    label: "No, I have done this before",
    description: "Include renewals and returning-applicant paths.",
  },
  {
    value: "not-sure",
    label: "Not sure",
    description: "Keep recommendations broad.",
  },
];

export function GuideFinderWizard({
  processes,
  countries,
}: GuideFinderWizardProps) {
  const [answers, setAnswers] = useState<GuideWizardAnswers>({});
  const completion = getGuideWizardCompletion(answers);

  const recommendations = useMemo(
    () => recommendGuides(processes, answers),
    [answers, processes],
  );

  const fallbackRecommendations = recommendations.length
    ? recommendations
    : recommendGuides(processes, { countryCode: answers.countryCode }, 3);

  function updateAnswers(nextAnswers: Partial<GuideWizardAnswers>) {
    setAnswers((current) => ({ ...current, ...nextAnswers }));
  }

  function resetWizard() {
    setAnswers({});
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <Card className="bg-white">
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Badge variant="accent">Guide finder</Badge>
            <span className="text-sm font-medium text-muted-foreground">
              {completion} of 4 answered
            </span>
          </div>
          <CardTitle className="text-2xl leading-tight">
            Answer a few quick questions
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-7">
          <WizardStep
            number="1"
            title="What are you trying to do?"
            description="Choose the closest match. You can still browse all guides later."
          >
            <OptionGrid>
              {guideWizardGoals.map((option) => (
                <OptionButton
                  key={option.value}
                  selected={answers.goal === option.value}
                  title={option.label}
                  description={option.description}
                  onClick={() => updateAnswers({ goal: option.value })}
                />
              ))}
            </OptionGrid>
          </WizardStep>

          <WizardStep
            number="2"
            title="What country are you in?"
            description="This helps prioritize local processes and official sources."
          >
            <label className="grid gap-2 text-sm font-medium">
              Country
              <select
                value={answers.countryCode ?? ""}
                onChange={(event) =>
                  updateAnswers({
                    countryCode: event.target.value || undefined,
                  })
                }
                className="min-h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Any country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </label>
          </WizardStep>

          <WizardStep
            number="3"
            title="Is this your first time?"
            description="First-time users usually need more basic application paths."
          >
            <OptionGrid>
              {firstTimeOptions.map((option) => (
                <OptionButton
                  key={option.value}
                  selected={answers.firstTime === option.value}
                  title={option.label}
                  description={option.description}
                  onClick={() => updateAnswers({ firstTime: option.value })}
                />
              ))}
            </OptionGrid>
          </WizardStep>

          <WizardStep
            number="4"
            title="Who or what is this for?"
            description="This narrows the result by the practical reason you need the guide."
          >
            <OptionGrid>
              {guideWizardPurposes.map((option) => (
                <OptionButton
                  key={option.value}
                  selected={answers.purpose === option.value}
                  title={option.label}
                  description={option.description}
                  onClick={() => updateAnswers({ purpose: option.value })}
                />
              ))}
            </OptionGrid>
          </WizardStep>

          <div className="flex flex-col gap-3 rounded-md border bg-[#fbfdfc] p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-muted-foreground">
              Search and filters are still available if these suggestions are not
              quite right.
            </p>
            <Button
              type="button"
              variant="outline"
              className="bg-white"
              onClick={resetWizard}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset answers
            </Button>
          </div>
        </CardContent>
      </Card>

      <aside className="grid gap-4 lg:sticky lg:top-24">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Compass className="h-5 w-5 text-primary" aria-hidden="true" />
              Recommended guides
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {fallbackRecommendations.length ? (
              fallbackRecommendations.slice(0, 4).map((recommendation) => (
                <div
                  key={recommendation.guide.slug}
                  className="rounded-md border bg-[#fbfdfc] p-4"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      {recommendation.guide.location.countryCode}
                    </Badge>
                    <Badge variant="outline">{recommendation.guide.category}</Badge>
                  </div>
                  <h3 className="mt-3 font-semibold leading-6">
                    {recommendation.guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {recommendation.guide.summary}
                  </p>
                  {recommendation.reasons.length ? (
                    <ul className="mt-3 grid gap-1 text-xs font-medium text-primary">
                      {recommendation.reasons.map((reason) => (
                        <li key={reason} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Button asChild variant="link" className="mt-3 px-0 font-semibold">
                    <Link href={`/process/${recommendation.guide.slug}`}>
                      Open guide
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-sm leading-6 text-muted-foreground">
                Pick at least one answer to see suggestions.
              </p>
            )}
          </CardContent>
        </Card>
      </aside>

      {recommendations.length ? (
        <section className="lg:col-span-2">
          <div className="mb-5">
            <p className="text-sm font-medium text-primary">Best matches</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal">
              Guides that fit your answers
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {recommendations.map((recommendation) => (
              <ProcessCard
                key={recommendation.guide.slug}
                process={recommendation.guide}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function WizardStep({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3">
      <div className="flex gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
          {number}
        </span>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2 sm:grid-cols-2">{children}</div>;
}

function OptionButton({
  selected,
  title,
  description,
  onClick,
}: {
  selected: boolean;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className="min-h-28 rounded-md border bg-white p-4 text-left transition-colors hover:border-primary/40 hover:bg-[#fbfdfc] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 aria-pressed:border-primary aria-pressed:bg-primary/5"
    >
      <span className="block font-semibold">{title}</span>
      <span className="mt-1 block text-sm leading-6 text-muted-foreground">
        {description}
      </span>
    </button>
  );
}
