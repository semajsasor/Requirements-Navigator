import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  Clock,
  DollarSign,
  Lightbulb,
  ListChecks,
  MapPin,
  UserRoundCheck,
} from "lucide-react";

import { ChecklistSection, type ChecklistItem } from "@/components/process/checklist-section";
import { ProcessActions } from "@/components/process/process-actions";
import { ProcessFaq } from "@/components/process/process-faq";
import { ProcessInfoCard } from "@/components/process/process-info-card";
import { RecentGuideTracker } from "@/components/process/recent-guide-tracker";
import { SourceReviewSection } from "@/components/process/source-review-section";
import { TrustBadge } from "@/components/process/trust-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { saveGuideAction } from "@/lib/actions/saved-guides";
import { formatFeeRange } from "@/lib/data/processes";
import {
  getDocumentChecklistItemId,
  getStepChecklistItemId,
} from "@/lib/process/checklist";
import {
  buildProcessChecklistText,
  formatProcessFee,
  formatProcessLocation,
} from "@/lib/process/format";
import type { ProcessGuide } from "@/types/process";

const sectionLinks = [
  { href: "#documents", label: "Documents" },
  { href: "#steps", label: "Steps" },
  { href: "#fees", label: "Fees" },
  { href: "#tips", label: "Tips" },
  { href: "#faq", label: "FAQ" },
  { href: "#sources", label: "Sources" },
];

type ProcessDetailViewProps = {
  process: ProcessGuide;
  isSignedIn?: boolean;
};

export function ProcessDetailView({
  process,
  isSignedIn = false,
}: ProcessDetailViewProps) {
  const documentItems: ChecklistItem[] = process.requiredDocuments.map((document) => ({
    id: getDocumentChecklistItemId(document.name),
    title: document.name,
    description: document.description,
    badge: document.required ? "Required" : "If applicable",
    meta: [
      document.acceptedFormats?.length
        ? `Accepted formats: ${document.acceptedFormats.join(", ")}`
        : "",
      document.notes ?? "",
    ]
      .filter(Boolean)
      .join(" "),
  }));

  const stepItems: ChecklistItem[] = [...process.instructions]
    .sort((a, b) => a.order - b.order)
    .map((step) => ({
      id: getStepChecklistItemId(step.order, step.title),
      title: step.title,
      description: step.description,
      meta: step.expectedOutcome ? `Expected outcome: ${step.expectedOutcome}` : undefined,
    }));

  const checklistText = buildProcessChecklistText(process);
  const location = formatProcessLocation(process);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <RecentGuideTracker
        slug={process.slug}
        title={process.title}
        category={process.category}
      />
      <div className="no-print">
        <Button asChild variant="ghost" className="mb-6 -ml-3">
          <Link href="/explore">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to explore
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <article className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">{process.category}</Badge>
            <Badge variant="outline">{process.difficulty}</Badge>
            <Badge variant="secondary">{location}</Badge>
            <TrustBadge reviewStatus={process.reviewStatus} />
          </div>

          <h1 className="mt-4 max-w-4xl text-2xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {process.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-7">
            {process.summary}
          </p>
          <p className="mt-4 max-w-3xl rounded-md border bg-white p-4 text-sm leading-6 text-muted-foreground">
            This guide is for planning and preparation. Details may change, so
            verify current requirements with the official sources before applying,
            paying fees, or submitting documents.
          </p>

          <div className="no-print sticky top-16 z-30 -mx-4 mt-7 overflow-x-auto border-y bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
            <nav className="flex gap-2" aria-label="Process sections">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="shrink-0 rounded-md border bg-white px-3 py-2 text-sm font-medium text-muted-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ProcessInfoCard
              icon={<Clock className="h-5 w-5" aria-hidden="true" />}
              label="Estimated timeline"
              value={process.estimatedProcessingTime.display}
            />
            <ProcessInfoCard
              icon={<DollarSign className="h-5 w-5" aria-hidden="true" />}
              label="Estimated fees"
              value={formatFeeRange(process.fees)}
            />
            <ProcessInfoCard
              icon={<UserRoundCheck className="h-5 w-5" aria-hidden="true" />}
              label="Who this is for"
              value={process.audience}
            />
            <ProcessInfoCard
              icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
              label="Location"
              value={location}
            />
          </div>

          <section className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-normal">Eligibility</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {process.eligibility.map((item) => (
                <Card key={item.label} className="bg-white">
                  <CardContent className="p-5">
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div id="documents" className="mt-10">
            <ChecklistSection
              title="Required documents checklist"
              description="Tap each item as you gather it. This progress stays in your browser for the current page session."
              items={documentItems}
            />
          </div>

          <div id="steps" className="mt-10">
            <ChecklistSection
              title="Step-by-step instructions"
              description="Use this as a working checklist from preparation through submission."
              items={stepItems}
              ordered
            />
          </div>

          <section id="fees" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold tracking-normal">Estimated fees</h2>
            <div className="mt-4 grid gap-3">
              {process.fees.map((fee) => (
                <Card key={fee.label} className="bg-white">
                  <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{fee.label}</h3>
                      {fee.notes ? (
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {fee.notes}
                        </p>
                      ) : null}
                    </div>
                    <Badge variant={fee.required ? "default" : "secondary"}>
                      {formatProcessFee(fee)}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="tips" className="mt-10 grid gap-4 scroll-mt-24 md:grid-cols-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
                  Common mistakes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm leading-6 text-muted-foreground">
                  {process.commonMistakes.map((mistake) => (
                    <li key={mistake} className="rounded-md border bg-[#fffdfb] p-3">
                      {mistake}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                  Practical tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm leading-6 text-muted-foreground">
                  {process.tips.map((tip) => (
                    <li key={tip} className="rounded-md border bg-[#fbfdfc] p-3">
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <div className="mt-10">
            <ProcessFaq items={process.faq} />
          </div>

          <section id="sources" className="mt-10 scroll-mt-24 lg:hidden">
            <SourceReviewSection process={process} />
          </section>
        </article>

        <aside className="no-print grid gap-4 lg:sticky lg:top-24">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" aria-hidden="true" />
                Checklist tools
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <ProcessActions checklistText={checklistText} />
              <form action={saveGuideAction}>
                <input type="hidden" name="slug" value={process.slug} />
                <Button type="submit" variant="secondary" className="mt-2 w-full">
                  {isSignedIn ? "Save to dashboard" : "Sign in to save"}
                </Button>
              </form>
              <Separator />
              <div>
                <p className="text-muted-foreground">Best for</p>
                <p className="mt-1 font-medium">{process.audience}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last reviewed</p>
                <p className="mt-1 font-medium">{process.lastReviewedDate}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Jump to section</CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid gap-2" aria-label="Process sections">
                {sectionLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>

          <SourceReviewSection process={process} />
        </aside>
      </div>
    </div>
  );
}
