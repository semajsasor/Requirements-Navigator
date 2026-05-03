import { CheckCircle2, CircleDot, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProcessInstruction } from "@/types/process";

export type ProcessStepStatus = "not-started" | "current" | "complete";

type ProcessStepTimelineProps = {
  steps: ProcessInstruction[];
  statuses?: Record<number, ProcessStepStatus>;
};

const statusConfig = {
  "not-started": {
    label: "Upcoming",
    icon: CircleDot,
    className: "border-muted bg-white text-muted-foreground",
  },
  current: {
    label: "Current",
    icon: Clock3,
    className: "border-primary/35 bg-accent text-accent-foreground",
  },
  complete: {
    label: "Complete",
    icon: CheckCircle2,
    className: "border-primary/35 bg-primary text-primary-foreground",
  },
} satisfies Record<
  ProcessStepStatus,
  {
    label: string;
    icon: typeof CircleDot;
    className: string;
  }
>;

export function ProcessStepTimeline({
  steps,
  statuses = {},
}: ProcessStepTimelineProps) {
  const sortedSteps = [...steps].sort((a, b) => a.order - b.order);

  if (sortedSteps.length === 0) {
    return null;
  }

  return (
    <section id="step-flow" className="scroll-mt-24" aria-labelledby="step-flow-heading">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Visual step flow</p>
          <h2 id="step-flow-heading" className="mt-2 text-xl font-semibold tracking-normal sm:text-2xl">
            Scan the process before you start
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Use this overview to understand the order, then track each item in
            the checklist below.
          </p>
        </div>
        <Badge variant="secondary" className="w-fit">
          {sortedSteps.length} step{sortedSteps.length === 1 ? "" : "s"}
        </Badge>
      </div>

      <ol className="mt-5 grid gap-3 lg:grid-cols-2" aria-label="Process step timeline">
        {sortedSteps.map((step, index) => {
          const status = statuses[step.order] ?? "not-started";
          const config = statusConfig[status];
          const StatusIcon = config.icon;
          const isLast = index === sortedSteps.length - 1;

          return (
            <li key={`${step.order}-${step.title}`} className="relative min-w-0">
              <Card className="h-full bg-white shadow-sm">
                <CardContent className="grid gap-3 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold sm:h-10 sm:w-10",
                        config.className,
                      )}
                      aria-hidden="true"
                    >
                      {step.order}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="min-w-0 text-base font-semibold leading-6 break-words">
                          {step.title}
                        </h3>
                        {status !== "not-started" ? (
                          <Badge variant={status === "complete" ? "default" : "accent"}>
                            <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            {config.label}
                          </Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                      {step.expectedOutcome ? (
                        <p className="mt-2 rounded-md border bg-[#fbfdfc] px-3 py-2 text-xs leading-5 text-muted-foreground">
                          Expected outcome: {step.expectedOutcome}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {!isLast ? (
                <span
                  className="pointer-events-none absolute left-[1.125rem] top-9 h-[calc(100%+0.75rem)] w-px bg-border sm:left-5 sm:top-10 lg:hidden"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
