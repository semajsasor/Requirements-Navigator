import { CalendarCheck, ShieldCheck } from "lucide-react";

import { LinkedSourceList } from "@/components/process/linked-source-list";
import { TrustBadge } from "@/components/process/trust-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProcessGuide } from "@/types/process";

export function SourceReviewSection({ process }: { process: ProcessGuide }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          Source and review
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-5">
        <div className="grid gap-3 rounded-md border bg-[#fbfdfc] p-4 text-sm leading-6 text-muted-foreground">
          <div className="flex flex-wrap items-center gap-3">
            <TrustBadge
              reviewStatus={process.reviewStatus}
              publicationStatus={process.status}
            />
            <span className="flex items-center gap-2 font-medium text-foreground">
              <CalendarCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              Last reviewed {process.lastReviewedDate}
            </span>
          </div>
          <p>
            Requirements, fees, forms, and timelines can change. Use this guide as
            preparation support, then verify final details with the official source
            before submitting anything.
          </p>
        </div>
        <LinkedSourceList sources={process.officialSourceLinks} />
      </CardContent>
    </Card>
  );
}
