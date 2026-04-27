import { ExternalLink } from "lucide-react";

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
          className="flex items-center justify-between gap-3 rounded-md border bg-white p-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          <span>
            {source.title}
            <span className="mt-1 block text-xs font-normal text-muted-foreground">
              {source.publisher}
              {source.description ? ` - ${source.description}` : ""}
            </span>
          </span>
          <ExternalLink className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
