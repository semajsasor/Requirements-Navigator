import { CheckCircle2 } from "lucide-react";

type ProgressRingProps = {
  value: number;
  label: string;
};

export function ProgressRing({ value, label }: ProgressRingProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className="flex items-center gap-3"
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className="grid h-14 w-14 place-items-center rounded-full"
        style={{
          background: `conic-gradient(var(--primary) ${safeValue}%, var(--muted) 0)`,
        }}
      >
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-semibold">
          {safeValue}%
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
        {label}
      </div>
    </div>
  );
}
