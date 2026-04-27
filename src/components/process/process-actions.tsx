"use client";

import { useState } from "react";
import { Check, Copy, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ProcessActions({ checklistText }: { checklistText: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  async function copyChecklist() {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API is unavailable.");
      }

      await navigator.clipboard.writeText(checklistText);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch {
      setCopyStatus("failed");
    }
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      <Button onClick={copyChecklist} variant="outline" className="bg-white">
        {copyStatus === "copied" ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copyStatus === "copied"
          ? "Copied"
          : copyStatus === "failed"
            ? "Copy failed"
            : "Copy checklist"}
      </Button>
      <Button onClick={() => window.print()}>
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print checklist
      </Button>
      {copyStatus === "failed" ? (
        <div
          className="rounded-md border bg-white p-3 text-sm text-muted-foreground sm:col-span-2 lg:col-span-1"
          role="status"
        >
          <p className="font-medium text-foreground">Copy was blocked.</p>
          <p className="mt-1">
            Select the checklist below and copy it manually.
          </p>
          <textarea
            readOnly
            value={checklistText}
            className="mt-3 h-32 w-full resize-y rounded-md border bg-background p-2 text-xs leading-5 text-foreground"
            onFocus={(event) => event.currentTarget.select()}
            aria-label="Checklist text for manual copy"
          />
        </div>
      ) : null}
    </div>
  );
}
