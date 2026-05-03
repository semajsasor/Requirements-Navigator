import { CalendarCheck, ShieldCheck } from "lucide-react";

import { TrustBadge } from "@/components/process/trust-badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getReviewStatusDescription,
  getReviewStatusLabel,
  isRecentlyReviewed,
} from "@/lib/process/freshness";
import type { ProcessGuide } from "@/types/process";

export function GuideFreshnessPanel({ process }: { process: ProcessGuide }) {
  const recentlyReviewed = isRecentlyReviewed(process.lastReviewedDate);

  return (
    <Card className="mt-5 border-primary/15 bg-white shadow-sm shadow-slate-900/5 sm:mt-7">
      <CardContent className="grid gap-4 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Review and freshness
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {getReviewStatusDescription(process.reviewStatus)} Always verify
              final requirements, fees, forms, and appointment rules with official
              sources before applying.
            </p>
          </div>
          <TrustBadge
            reviewStatus={process.reviewStatus}
            lastReviewedDate={process.lastReviewedDate}
          />
        </div>

        <div className="grid gap-3 rounded-md border bg-[#fbfdfc] p-3 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
          <span className="flex items-center gap-2 font-medium">
            <CalendarCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Last reviewed {process.lastReviewedDate}
          </span>
          <span className="text-muted-foreground">
            Status: {getReviewStatusLabel(process.reviewStatus)}
            {recentlyReviewed ? " - reviewed within the last 30 days" : ""}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
