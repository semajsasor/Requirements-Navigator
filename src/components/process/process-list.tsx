import { ProcessCard } from "@/components/process/process-card";
import type { ProcessGuide } from "@/types/process";

export function ProcessList({ processes }: { processes: ProcessGuide[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {processes.map((process) => (
        <ProcessCard key={process.slug} process={process} />
      ))}
    </div>
  );
}
