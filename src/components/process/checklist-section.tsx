"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type ChecklistItem = {
  id: string;
  title: string;
  description: string;
  meta?: string;
  badge?: string;
};

type ChecklistSectionProps = {
  title: string;
  description?: string;
  items: ChecklistItem[];
  ordered?: boolean;
  initialCheckedIds?: string[];
  onItemToggle?: (item: ChecklistItem, completed: boolean) => Promise<void> | void;
  checkedIds?: Set<string>;
  onToggle?: (id: string) => void;
};

export function ChecklistSection({
  title,
  description,
  items,
  ordered = false,
  initialCheckedIds = [],
  onItemToggle,
  checkedIds: propsCheckedIds,
  onToggle,
}: ChecklistSectionProps) {
  const [internalCheckedIds, setInternalCheckedIds] = useState<Set<string>>(
    () => new Set(initialCheckedIds),
  );

  const checkedIds = propsCheckedIds ?? internalCheckedIds;
  const completedCount = checkedIds.size;
  const progressPercent = items.length > 0 ? (completedCount / items.length) * 100 : 0;

  const progressLabel = useMemo(
    () => (progressPercent === 100 ? "Section Complete!" : `${completedCount} of ${items.length} complete`),
    [completedCount, items.length, progressPercent],
  );

  function toggleItem(item: ChecklistItem) {
    const isChecked = checkedIds.has(item.id);
    const nextCompleted = !isChecked;

    if (onToggle) {
      onToggle(item.id);
    } else {
      setInternalCheckedIds((current) => {
        const next = new Set(current);
        if (next.has(item.id)) {
          next.delete(item.id);
        } else {
          next.add(item.id);
        }
        return next;
      });
    }

    void onItemToggle?.(item, nextCompleted);
  }

  return (
    <section className="scroll-mt-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-normal">{title}</h2>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant={progressPercent === 100 ? "default" : "secondary"} className="w-fit transition-colors">
            {progressLabel}
          </Badge>
        </div>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full transition-all duration-500 ease-in-out",
            progressPercent === 100 ? "bg-[#16a34a]" : "bg-primary"
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mt-4 grid gap-3">
        {items.map((item, index) => {
          const checked = checkedIds.has(item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item)}
              className={cn(
                "group w-full rounded-lg border bg-white p-4 text-left shadow-sm transition-colors hover:border-primary/40 hover:bg-[#fbfdfc]",
                checked && "border-primary/40 bg-accent/40",
              )}
            >
              <div className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-primary">
                  {checked ? (
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Circle className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {ordered ? (
                      <span className="rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                    ) : null}
                    <h3
                      className={cn(
                        "font-semibold leading-6",
                        checked && "text-muted-foreground line-through",
                      )}
                    >
                      {item.title}
                    </h3>
                    {item.badge ? <Badge variant="outline">{item.badge}</Badge> : null}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  {item.meta ? (
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {item.meta}
                    </p>
                  ) : null}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
