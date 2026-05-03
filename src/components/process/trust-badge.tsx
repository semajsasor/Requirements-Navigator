import { AlertTriangle, CheckCircle2, FilePenLine } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  getReviewStatusDescription,
  getReviewStatusLabel,
  isRecentlyReviewed,
} from "@/lib/process/freshness";
import type { ContentReviewStatus, ProcessStatus } from "@/types/process";

type TrustBadgeProps = {
  reviewStatus: ContentReviewStatus;
  lastReviewedDate?: string;
  publicationStatus?: ProcessStatus;
};

const reviewStatusConfig = {
  reviewed: {
    icon: CheckCircle2,
    variant: "accent" as const,
  },
  draft: {
    icon: FilePenLine,
    variant: "secondary" as const,
  },
  outdated: {
    icon: AlertTriangle,
    variant: "outline" as const,
  },
};

export function TrustBadge({
  reviewStatus,
  lastReviewedDate,
  publicationStatus,
}: TrustBadgeProps) {
  const config = reviewStatusConfig[reviewStatus];
  const Icon = config.icon;
  const isRecent =
    reviewStatus === "reviewed" &&
    lastReviewedDate &&
    isRecentlyReviewed(lastReviewedDate);

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <Badge
        variant={config.variant}
        title={getReviewStatusDescription(reviewStatus)}
      >
        <Icon className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
        {getReviewStatusLabel(reviewStatus)}
      </Badge>
      {isRecent ? <Badge variant="accent">Recently updated</Badge> : null}
      {publicationStatus ? (
        <Badge variant={publicationStatus === "published" ? "default" : "secondary"}>
          {publicationStatus}
        </Badge>
      ) : null}
    </span>
  );
}
