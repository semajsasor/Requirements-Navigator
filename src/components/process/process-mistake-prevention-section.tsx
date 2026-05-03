import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProcessGuide } from "@/types/process";

type ProcessMistakePreventionSectionProps = {
  process: Pick<ProcessGuide, "commonMistakes" | "prepareFirst" | "officialSourceLinks">;
};

export function hasMistakePreventionContent({
  commonMistakes,
  prepareFirst,
}: ProcessMistakePreventionSectionProps["process"]) {
  return Boolean(
    commonMistakes.some((item) => item.trim()) ||
      prepareFirst?.some((item) => item.trim()),
  );
}

export function ProcessMistakePreventionSection({
  process,
}: ProcessMistakePreventionSectionProps) {
  const mistakes = process.commonMistakes.filter((item) => item.trim());
  const prepareItems = process.prepareFirst?.filter((item) => item.trim()) ?? [];

  if (!mistakes.length && !prepareItems.length) {
    return null;
  }

  return (
    <section
      id="tips"
      className="mt-8 grid gap-4 scroll-mt-24 sm:mt-10"
      aria-labelledby="mistake-prevention-heading"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary">Before submitting</p>
        <h2
          id="mistake-prevention-heading"
          className="mt-2 text-xl font-semibold leading-7 tracking-normal sm:text-2xl"
        >
          Avoid rejected applications and wasted trips
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Check these practical points before you pay fees, attend appointments,
          or hand over original documents.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {prepareItems.length > 0 ? (
          <Card className="border-primary/20 bg-[#fbfdfc] shadow-sm">
            <CardHeader className="p-4 pb-3 sm:p-5 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                Before you go
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 p-4 pt-0 sm:p-5 sm:pt-0">
              <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
                {prepareItems.map((item) => (
                  <li key={item} className="flex gap-2 rounded-md border bg-white px-3 py-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {process.officialSourceLinks.length > 0 ? (
                <p className="flex gap-2 rounded-md border border-primary/15 bg-white px-3 py-2 text-xs leading-5 text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Verify final requirements with the official source before you travel or submit.
                </p>
              ) : null}
            </CardContent>
          </Card>
        ) : null}

        {mistakes.length > 0 ? (
          <Card className="border-[#f2c98d] bg-[#fffaf2] shadow-sm">
            <CardHeader className="p-4 pb-3 sm:p-5 sm:pb-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-[#b45309]" aria-hidden="true" />
                  Common mistakes
                </CardTitle>
                <Badge variant="outline" className="border-[#f2c98d] bg-white text-[#92400e]">
                  Check twice
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 sm:p-5 sm:pt-0">
              <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
                {mistakes.map((mistake) => (
                  <li key={mistake} className="rounded-md border border-[#f4d7a8] bg-white px-3 py-2">
                    {mistake}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </section>
  );
}
