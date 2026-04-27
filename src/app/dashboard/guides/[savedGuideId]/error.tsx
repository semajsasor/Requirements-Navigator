"use client";

import { PageErrorState } from "@/components/ui/page-state";

export default function SavedGuideError({ reset }: { reset: () => void }) {
  return (
    <PageErrorState
      title="Saved guide could not load"
      description="The checklist could not be opened. Your saved progress should still be available."
      onRetry={reset}
    />
  );
}
