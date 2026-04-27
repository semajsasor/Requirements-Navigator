import { FileSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProcessEmptyState({ onReset }: { onReset: () => void }) {
  return (
    <Card className="border-dashed bg-white">
      <CardContent className="flex flex-col items-center px-6 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
          <FileSearch className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-xl font-semibold tracking-normal">
          No matching guides found
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          Try a broader search term, remove a filter, or browse all available
          requirement guides.
        </p>
        <Button onClick={onReset} className="mt-5">
          Clear filters
        </Button>
      </CardContent>
    </Card>
  );
}
