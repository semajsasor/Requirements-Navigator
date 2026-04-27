import { HelpCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { ProcessFaq as ProcessFaqItem } from "@/types/process";

export function ProcessFaq({ items }: { items: ProcessFaqItem[] }) {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-normal">FAQ</h2>
      </div>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <Card key={item.question} className="bg-white">
            <CardContent className="p-5">
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
