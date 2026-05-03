import type { ReactNode } from "react";
import { HelpCircle, ListChecks, MessageSquareText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { ProcessGuide } from "@/types/process";

type ProcessGuideHelpSectionProps = {
  process: Pick<
    ProcessGuide,
    "plainEnglishSummary" | "prepareFirst" | "commonConfusions"
  >;
};

type HelpBoxProps = {
  title: string;
  description?: string;
  items?: string[];
  icon: ReactNode;
};

export function hasProcessGuideHelp(process: ProcessGuideHelpSectionProps["process"]) {
  return Boolean(
    process.plainEnglishSummary?.trim() ||
      process.prepareFirst?.some((item) => item.trim()) ||
      process.commonConfusions?.some((item) => item.trim()),
  );
}

export function ProcessGuideHelpSection({ process }: ProcessGuideHelpSectionProps) {
  if (!hasProcessGuideHelp(process)) {
    return null;
  }

  const prepareFirst = process.prepareFirst?.filter((item) => item.trim()) ?? [];
  const commonConfusions = process.commonConfusions?.filter((item) => item.trim()) ?? [];

  return (
    <section
      id="guide-help"
      className="mt-5 grid gap-3 scroll-mt-24 sm:mt-7 lg:grid-cols-2"
      aria-label="Guide help"
    >
      {process.plainEnglishSummary ? (
        <HelpBox
          title="Plain English summary"
          description={process.plainEnglishSummary}
          icon={<MessageSquareText className="h-5 w-5" aria-hidden="true" />}
        />
      ) : null}

      {prepareFirst.length > 0 ? (
        <HelpBox
          title="What you need to prepare first"
          items={prepareFirst}
          icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
        />
      ) : null}

      {commonConfusions.length > 0 ? (
        <HelpBox
          title="What usually confuses people"
          items={commonConfusions}
          icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
        />
      ) : null}
    </section>
  );
}

function HelpBox({ title, description, items, icon }: HelpBoxProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="grid gap-3 p-4 sm:p-5">
        <div className="flex items-start gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
            {icon}
          </span>
          <h2 className="min-w-0 text-base font-semibold leading-6 tracking-normal break-words">
            {title}
          </h2>
        </div>
        {description ? (
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        ) : null}
        {items?.length ? (
          <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
            {items.map((item) => (
              <li key={item} className="rounded-md border bg-[#fbfdfc] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}
