"use client";

import { useId, useState } from "react";
import { Captions, ChevronDown, FileText, PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  isDirectVideoFileUrl,
  isRealEmbeddableVideoUrl,
  isUsableVideoTutorial,
} from "@/lib/process/video";
import { cn } from "@/lib/utils";
import type { ProcessVideoTutorial } from "@/types/process";

type ProcessVideoTutorialSectionProps = {
  tutorial: ProcessVideoTutorial;
};

function getSafeVideoUrl(value?: string, options?: { stripAutoplay?: boolean }) {
  if (!value) {
    return undefined;
  }

  try {
    const url = new URL(value);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return undefined;
    }

    if (options?.stripAutoplay) {
      url.searchParams.delete("autoplay");
    }

    return url.toString();
  } catch {
    return undefined;
  }
}

function formatTutorialType(type: ProcessVideoTutorial["type"]) {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ProcessVideoTutorialSection({
  tutorial,
}: ProcessVideoTutorialSectionProps) {
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);
  const transcriptId = useId();
  const hasTranscript = Boolean(tutorial.transcript?.trim());
  const safeEmbedUrl = getSafeVideoUrl(tutorial.embedUrl, { stripAutoplay: true });
  const safeVideoUrl = getSafeVideoUrl(tutorial.url);
  const canRenderEmbed = isRealEmbeddableVideoUrl(safeEmbedUrl);

  if (!isUsableVideoTutorial(tutorial)) {
    return null;
  }

  return (
    <section
      id="tutorial"
      className="mt-5 scroll-mt-24 sm:mt-7"
      aria-labelledby="tutorial-heading"
    >
      <Card className="overflow-hidden bg-white shadow-sm">
        <CardHeader className="p-4 pb-3 sm:p-5 sm:pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">{formatTutorialType(tutorial.type)}</Badge>
            {tutorial.duration ? (
              <Badge variant="secondary">{tutorial.duration}</Badge>
            ) : null}
            {tutorial.captionsAvailable ? (
              <Badge variant="outline">
                <Captions className="h-3.5 w-3.5" aria-hidden="true" />
                Captions
              </Badge>
            ) : null}
          </div>
          <CardTitle
            id="tutorial-heading"
            className="mt-3 flex items-start gap-2 text-lg leading-7 sm:text-xl"
          >
            <PlayCircle className="h-5 w-5 text-primary" aria-hidden="true" />
            Watch quick tutorial
          </CardTitle>
          <div className="grid gap-1.5">
            <p className="text-base font-medium leading-6">{tutorial.title}</p>
            {tutorial.description ? (
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                {tutorial.description}
              </p>
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="grid gap-3 p-4 pt-0 sm:gap-4 sm:p-5 sm:pt-0">
          {canRenderEmbed ? (
            <div className="aspect-video max-h-[420px] overflow-hidden rounded-md border bg-muted">
              <iframe
                title={tutorial.title}
                src={safeEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : safeVideoUrl && isDirectVideoFileUrl(safeVideoUrl) ? (
            <video
              controls
              preload="metadata"
              className="aspect-video max-h-[420px] w-full rounded-md border bg-muted"
            >
              <source src={safeVideoUrl} />
            </video>
          ) : null}

          {hasTranscript ? (
            <div className="rounded-md border bg-[#fbfdfc]">
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-between gap-3 p-3 text-left text-sm font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 sm:p-4"
                aria-expanded={isTranscriptOpen}
                aria-controls={transcriptId}
                onClick={() => setIsTranscriptOpen((current) => !current)}
              >
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
                  Transcript
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    isTranscriptOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {isTranscriptOpen ? (
                <div
                  id={transcriptId}
                  className="max-h-72 overflow-auto whitespace-pre-wrap border-t p-3 text-sm leading-6 text-muted-foreground sm:p-4"
                >
                  {tutorial.transcript}
                </div>
              ) : null}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </section>
  );
}
