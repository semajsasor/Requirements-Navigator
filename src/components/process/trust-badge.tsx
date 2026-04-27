import { AlertTriangle, CheckCircle2, FilePenLine } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { ContentReviewStatus, ProcessStatus } from "@/types/process";

type TrustBadgeProps = {
  reviewStatus: ContentReviewStatus;
  publicationStatus?: ProcessStatus;
};

const reviewStatusConfig = {
  reviewed: {
    label: "Reviewed",
    description: "This guide has a recorded review date.",
    icon: CheckCircle2,
    variant: "accent" as const,
  },
  draft: {
    label: "Draft",
    description: "This guide is still being prepared.",
    icon: FilePenLine,
    variant: "secondary" as const,
  },
  outdated: {
    label: "Outdated",
    description: "This guide may need a fresh review.",
    icon: AlertTriangle,
    variant: "outline" as const,
  },
};

export function TrustBadge({ reviewStatus, publicationStatus }: TrustBadgeProps) {
  const config = reviewStatusConfig[reviewStatus];
  const Icon = config.icon;

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <Badge variant={config.variant} title={config.description}>
        <Icon className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
        {config.label}
      </Badge>
      {publicationStatus ? (
        <Badge variant={publicationStatus === "published" ? "default" : "secondary"}>
          {publicationStatus}
        </Badge>
      ) : null}
    </span>
  );
}
