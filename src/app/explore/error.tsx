"use client";

import { PageErrorState } from "@/components/ui/page-state";

export default function ExploreError({ reset }: { reset: () => void }) {
  return (
    <PageErrorState
      title="Explore could not load"
      description="Guide browsing is temporarily unavailable."
      onRetry={reset}
    />
  );
}
