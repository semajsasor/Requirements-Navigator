import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { ProgressRing } from "@/components/dashboard/progress-ring";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { removeSavedGuideAction } from "@/lib/actions/saved-guides";
import { formatFeeRange } from "@/lib/data/processes";
import type { SavedGuideDashboardItem } from "@/lib/dashboard/queries";

export function SavedGuideCard({ item }: { item: SavedGuideDashboardItem }) {
  const percent =
    item.totalCount === 0
      ? 0
      : Math.round((item.completedCount / item.totalCount) * 100);

  return (
    <Card className="bg-white">
      <CardContent className="grid gap-5 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">{item.guide.category}</Badge>
            <Badge variant="secondary">{item.savedGuide.status}</Badge>
          </div>
          <h2 className="mt-3 text-xl font-semibold tracking-normal">
            {item.guide.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            {item.guide.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              {item.completedCount} of {item.totalCount} complete
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {item.guide.estimatedProcessingTime.display}
            </span>
            <span>{formatFeeRange(item.guide.fees)}</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[auto_1fr] lg:w-52 lg:grid-cols-1">
          <ProgressRing value={percent} label={`${percent}% complete`} />
          <Button asChild>
            <Link href={`/dashboard/guides/${item.savedGuide.id}`}>
              Continue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <form action={removeSavedGuideAction}>
            <input type="hidden" name="savedGuideId" value={item.savedGuide.id} />
            <Button type="submit" variant="outline" className="w-full">
              Remove
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
