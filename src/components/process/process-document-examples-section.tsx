import { ExternalLink, FileCheck2, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProcessGuide } from "@/types/process";

type ProcessDocumentExamplesSectionProps = {
  examples?: ProcessGuide["documentExamples"];
};

function hasHttpPreviewUrl(value?: string) {
  if (!value?.trim()) {
    return false;
  }

  try {
    const url = new URL(value);

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function hasDocumentExamples(examples?: ProcessGuide["documentExamples"]) {
  return Boolean(
    examples?.some(
      (example) => example.label.trim() && hasHttpPreviewUrl(example.previewImageUrl),
    ),
  );
}

export function ProcessDocumentExamplesSection({
  examples,
}: ProcessDocumentExamplesSectionProps) {
  const visibleExamples =
    examples?.filter(
      (example) => example.label.trim() && hasHttpPreviewUrl(example.previewImageUrl),
    ) ?? [];

  if (visibleExamples.length === 0) {
    return null;
  }

  return (
    <section
      id="document-examples"
      className="mt-8 scroll-mt-24 sm:mt-10"
      aria-labelledby="document-examples-heading"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-primary">Document examples</p>
        <h2
          id="document-examples-heading"
          className="mt-2 text-xl font-semibold leading-7 tracking-normal sm:text-2xl"
        >
          Accepted document types, in plain terms
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          These examples are educational starting points, not an official
          acceptance list. Always verify the current document rules with the
          issuing agency or institution.
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {visibleExamples.map((example) => (
          <Card key={example.label} className="bg-white shadow-sm">
            <CardHeader className="p-4 pb-3 sm:p-5 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileCheck2 className="h-5 w-5 text-primary" aria-hidden="true" />
                {example.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-4 pt-0 sm:p-5 sm:pt-0">
              <div className="rounded-lg border bg-[#fbfdfc] p-3">
                <p className="text-sm font-medium">Preview asset attached</p>
                {example.previewImageAlt ? (
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {example.previewImageAlt}
                  </p>
                ) : null}
                <a
                  href={example.previewImageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Open preview
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              {example.acceptedTypes.length > 0 ? (
                <div>
                  <p className="text-xs font-medium uppercase tracking-normal text-muted-foreground">
                    Accepted example types
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {example.acceptedTypes.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}

              {example.notes ? (
                <p className="rounded-md border bg-[#fbfdfc] px-3 py-2 text-sm leading-6 text-muted-foreground">
                  {example.notes}
                </p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-4 flex gap-2 rounded-md border bg-white px-3 py-2 text-xs leading-5 text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        Final acceptance depends on the official source, appointment office,
        institution, or reviewer handling your application.
      </p>
    </section>
  );
}
