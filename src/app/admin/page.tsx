import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { AdminGuideRow } from "@/components/admin/admin-guide-row";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAdminGuides } from "@/lib/admin/guides";

export const metadata: Metadata = {
  title: "Admin",
  description: "Manage Requirements Navigator process guides.",
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const guides = await getAdminGuides();
  const publishedCount = guides.filter((guide) => guide.status === "published").length;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Badge variant="accent">Admin CMS</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
            Process guide manager
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Create, edit, review, publish, and unpublish structured process guides
            without changing application code.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/guides/new">
            <Plus className="h-4 w-4" aria-hidden="true" />
            New guide
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Metric label="Total guides" value={String(guides.length)} />
        <Metric label="Published" value={String(publishedCount)} />
        <Metric label="Draft/review" value={String(guides.length - publishedCount)} />
      </div>

      <div className="mt-8 grid gap-4">
        {guides.length > 0 ? (
          guides.map((guide) => <AdminGuideRow key={guide.id} guide={guide} />)
        ) : (
          <Card className="border-dashed bg-white">
            <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-semibold">No guides in Supabase yet</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Create your first guide or import seed records into process_guides.
                </p>
              </div>
              <Button asChild>
                <Link href="/admin/guides/new">Create guide</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-2 text-3xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}
