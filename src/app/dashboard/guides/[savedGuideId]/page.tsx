import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, CircleCheckBig, FileText, Trash2 } from "lucide-react";

import { ProgressRing } from "@/components/dashboard/progress-ring";
import { SavedGuideNotes } from "@/components/dashboard/saved-guide-notes";
import { SavedGuideProgress } from "@/components/dashboard/saved-guide-progress";
import { ProcessActions } from "@/components/process/process-actions";
import { ProcessInfoCard } from "@/components/process/process-info-card";
import { ProcessSourceLinks } from "@/components/process/process-source-links";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { removeSavedGuideAction } from "@/lib/actions/saved-guides";
import { formatFeeRange } from "@/lib/data/processes";
import { getSavedGuideDetail } from "@/lib/dashboard/queries";
import {
  buildProcessChecklistText,
  formatProcessLocation,
} from "@/lib/process/format";

type SavedGuidePageProps = {
  params: Promise<{ savedGuideId: string }>;
};

export const metadata: Metadata = {
  title: "Saved guide",
  description: "Continue a saved Requirements Navigator checklist.",
};

export const dynamic = "force-dynamic";

export default async function SavedGuidePage({ params }: SavedGuidePageProps) {
  const { savedGuideId } = await params;
  const detail = await getSavedGuideDetail(savedGuideId);
  const { guide, savedGuide, progressRows, completedCount, totalCount } = detail;
  const percent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-3">
        <Link href="/dashboard">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to dashboard
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
        <article>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">{guide.category}</Badge>
            <Badge variant="secondary">{savedGuide.status}</Badge>
            <Badge variant="outline">{formatProcessLocation(guide)}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            {guide.summary}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <ProcessInfoCard
              icon={<CircleCheckBig className="h-5 w-5" aria-hidden="true" />}
              label="Progress"
              value={`${completedCount} of ${totalCount}`}
              detail={`${percent}% complete`}
            />
            <ProcessInfoCard
              icon={<CalendarCheck className="h-5 w-5" aria-hidden="true" />}
              label="Timeline"
              value={guide.estimatedProcessingTime.display}
            />
            <ProcessInfoCard
              icon={<FileText className="h-5 w-5" aria-hidden="true" />}
              label="Fees"
              value={formatFeeRange(guide.fees)}
            />
          </div>

          <div className="mt-10">
            <SavedGuideProgress
              savedGuideId={savedGuide.id}
              guide={guide}
              progressRows={progressRows}
            />
          </div>
        </article>

        <aside className="grid gap-4 lg:sticky lg:top-24">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Saved guide tools</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ProgressRing value={percent} label={`${percent}% complete`} />
              <ProcessActions checklistText={buildProcessChecklistText(guide)} />
              <form action={removeSavedGuideAction}>
                <input type="hidden" name="savedGuideId" value={savedGuide.id} />
                <Button type="submit" variant="outline" className="w-full">
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  Remove saved guide
                </Button>
              </form>
              <Separator />
              <p className="text-sm leading-6 text-muted-foreground">
                Progress is saved to your Supabase account and will be waiting when
                you return.
              </p>
            </CardContent>
          </Card>

          <SavedGuideNotes savedGuideId={savedGuide.id} notes={savedGuide.notes} />

          <ProcessSourceLinks sources={guide.officialSourceLinks} />
        </aside>
      </div>
    </div>
  );
}
