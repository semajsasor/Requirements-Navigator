"use client";

import { useState } from "react";
import { Check, Copy, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ProcessActions({ checklistText }: { checklistText: string }) {
  const [copied, setCopied] = useState(false);

  async function copyChecklist() {
    await navigator.clipboard.writeText(checklistText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      <Button onClick={copyChecklist} variant="outline" className="bg-white">
        {copied ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy checklist"}
      </Button>
      <Button onClick={() => window.print()}>
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print checklist
      </Button>
    </div>
  );
}
