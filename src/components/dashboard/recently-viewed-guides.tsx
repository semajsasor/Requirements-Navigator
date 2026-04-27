"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Clock3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RecentlyViewedGuide = {
  slug: string;
  title: string;
  category: string;
  viewedAt: string;
};

const emptyRecentGuides: RecentlyViewedGuide[] = [];
let cachedRecentGuidesRaw: string | null = null;
let cachedRecentGuides: RecentlyViewedGuide[] = emptyRecentGuides;

export function RecentlyViewedGuides() {
  const guides = useSyncExternalStore(
    subscribeToRecentGuides,
    getRecentGuidesSnapshot,
    () => emptyRecentGuides,
  );

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
          Recently viewed
        </CardTitle>
      </CardHeader>
      <CardContent>
        {guides.length > 0 ? (
          <div className="grid gap-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/process/${guide.slug}`}
                className="rounded-md border p-3 text-sm transition-colors hover:bg-accent"
              >
                <span className="font-medium">{guide.title}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {guide.category}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed p-4 text-sm leading-6 text-muted-foreground">
            Viewed guides will appear here as you explore.
          </div>
        )}
        <Button asChild variant="outline" className="mt-4 w-full bg-white">
          <Link href="/explore">Browse guides</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function subscribeToRecentGuides(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("requirements-navigator:recent-guides", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("requirements-navigator:recent-guides", onStoreChange);
  };
}

function getRecentGuidesSnapshot() {
  const raw = window.localStorage.getItem("requirements-navigator:recent-guides");

  if (!raw) {
    cachedRecentGuidesRaw = null;
    cachedRecentGuides = emptyRecentGuides;
    return emptyRecentGuides;
  }

  if (raw === cachedRecentGuidesRaw) {
    return cachedRecentGuides;
  }

  try {
    cachedRecentGuidesRaw = raw;
    cachedRecentGuides = (JSON.parse(raw) as RecentlyViewedGuide[]).slice(0, 4);
    return cachedRecentGuides;
  } catch {
    cachedRecentGuidesRaw = raw;
    cachedRecentGuides = emptyRecentGuides;
    return emptyRecentGuides;
  }
}
