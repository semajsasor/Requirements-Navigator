import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { OfficialSourceLink } from "@/types/process";

export function LinkedSourceList({ sources }: { sources: OfficialSourceLink[] }) {
  return (
    <div className="grid gap-3">
      {sources.map((source) => (
        <a
          key={source.url}
          href={source.url}
          target="_blank"
          rel="noreferrer"
          className="grid gap-3 rounded-md border bg-white p-3 text-sm transition-colors hover:border-primary/30 hover:bg-[#fbfdfc] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <span className="min-w-0">
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-foreground">{source.title}</span>
              <Badge variant="secondary">{source.publisher}</Badge>
            </span>
            {source.description ? (
              <span className="mt-1 block leading-6 text-muted-foreground">
                {source.description}
              </span>
            ) : null}
            <span className="mt-1 block break-words text-xs text-muted-foreground">
              {source.url}
            </span>
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-primary">
            Official source
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  );
}
