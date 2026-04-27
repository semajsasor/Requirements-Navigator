"use client";

import { PageErrorState } from "@/components/ui/page-state";

export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <PageErrorState
      title="Dashboard could not load"
      description="Your saved guides are still safe. Refresh the dashboard or try again."
      onRetry={reset}
    />
  );
}
