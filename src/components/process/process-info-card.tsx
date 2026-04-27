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
      <CardContent className="flex gap-3 p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 font-semibold">{value}</p>
          {detail ? (
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
