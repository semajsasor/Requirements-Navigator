import { ShieldCheck } from "lucide-react";

import { LinkedSourceList } from "@/components/process/linked-source-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { OfficialSourceLink } from "@/types/process";

export function ProcessSourceLinks({
  sources,
}: {
  sources: OfficialSourceLink[];
}) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          Trusted official sources
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <p className="text-sm leading-6 text-muted-foreground">
          These links point to official publishers. Verify current requirements
          there before paying fees, booking appointments, or submitting documents.
        </p>
        <LinkedSourceList sources={sources} />
      </CardContent>
    </Card>
  );
}
