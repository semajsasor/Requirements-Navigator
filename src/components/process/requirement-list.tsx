import { CheckCircle2 } from "lucide-react";

import type { ProcessDocument } from "@/types/process";

type RequirementListProps = {
  items: ProcessDocument[];
};

export function RequirementList({ items }: RequirementListProps) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item.name} className="flex gap-3 rounded-md border bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
            {item.notes ? (
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.notes}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
