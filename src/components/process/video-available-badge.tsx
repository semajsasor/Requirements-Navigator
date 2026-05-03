import { PlayCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function VideoAvailableBadge({ className }: { className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 border-primary/20 bg-white text-primary shadow-sm shadow-primary/5",
        className,
      )}
    >
      <PlayCircle className="h-3.5 w-3.5" aria-hidden="true" />
      Video available
    </Badge>
  );
}
