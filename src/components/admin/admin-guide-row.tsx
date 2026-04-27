import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { updateGuideStatusAction } from "@/lib/actions/admin-guides";
import type { ProcessGuideRow } from "@/types/database";

export function AdminGuideRow({ guide }: { guide: ProcessGuideRow }) {
  const isPublished = guide.status === "published";

  return (
    <Card className="bg-white">
      <CardContent className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={isPublished ? "default" : "secondary"}>{guide.status}</Badge>
            <Badge variant={guide.review_status === "reviewed" ? "accent" : "outline"}>
              {guide.review_status}
            </Badge>
            <Badge variant="outline">{guide.category}</Badge>
            <Badge variant="accent">{guide.country_code}</Badge>
          </div>
          <h2 className="mt-3 text-xl font-semibold">{guide.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            {guide.summary}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Last reviewed {guide.last_reviewed_date}
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:w-80">
          <Button asChild variant="outline">
            <Link href={`/admin/guides/${guide.id}/edit`}>Edit</Link>
          </Button>
          <form action={updateGuideStatusAction}>
            <input type="hidden" name="guideId" value={guide.id} />
            <input
              type="hidden"
              name="status"
              value={isPublished ? "draft" : "published"}
            />
            <Button type="submit" variant="outline" className="w-full">
              {isPublished ? "Unpublish" : "Publish"}
            </Button>
          </form>
          <Button asChild>
            <Link href={`/process/${guide.slug}`}>View</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
