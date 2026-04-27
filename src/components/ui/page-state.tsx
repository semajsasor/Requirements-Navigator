import Link from "next/link";
import { AlertTriangle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function PageLoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="flex flex-col items-center p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
          <p className="mt-4 font-medium">{label}</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Getting your workspace ready.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function PageErrorState({
  title = "Something went wrong",
  description = "The page could not load. Try again or return to a safer place.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-7xl items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md bg-white">
        <CardContent className="flex flex-col items-center p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#fff7f6] text-destructive">
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="mt-5 text-xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            {onRetry ? <Button onClick={onRetry}>Try again</Button> : null}
            <Button asChild variant="outline">
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
