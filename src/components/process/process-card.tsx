import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrustBadge } from "@/components/process/trust-badge";
import { formatFeeRange } from "@/lib/data/processes";
import type { ProcessGuide } from "@/types/process";

export function ProcessCard({ process }: { process: ProcessGuide }) {
  return (
    <Link href={`/process/${process.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col transition-colors hover:border-primary/40 hover:bg-[#fbfdfc]">
        <CardHeader>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{process.category}</Badge>
            <Badge variant="outline">{process.difficulty}</Badge>
            <Badge variant="secondary">{process.location.countryCode}</Badge>
            <TrustBadge reviewStatus={process.reviewStatus} />
          </div>
          <CardTitle className="leading-6">{process.title}</CardTitle>
          <CardDescription>{process.summary}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="grid gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              {process.estimatedProcessingTime.display}
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" aria-hidden="true" />
              {formatFeeRange(process.fees)}
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
            View checklist
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
