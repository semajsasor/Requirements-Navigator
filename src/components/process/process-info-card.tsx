import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProcessInfoCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  detail?: string;
  className?: string;
};

export function ProcessInfoCard({
  icon,
  label,
  value,
  detail,
  className,
}: ProcessInfoCardProps) {
  return (
    <Card className={cn("bg-white shadow-sm", className)}>
      <CardContent className="flex gap-3 p-3.5 sm:p-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground sm:h-10 sm:w-10">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-sm font-semibold leading-6 sm:text-base">{value}</p>
          {detail ? (
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
