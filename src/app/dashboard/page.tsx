import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ClipboardCheck, Plus, Settings } from "lucide-react";

import { RecentlyViewedGuides } from "@/components/dashboard/recently-viewed-guides";
import { SavedGuideCard } from "@/components/dashboard/saved-guide-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signOutAction } from "@/lib/actions/auth";
import { requireUser } from "@/lib/auth/session";
import { getSavedGuidesForCurrentUser } from "@/lib/dashboard/queries";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track saved process checklists, documents, statuses, and reminders.",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const user = await requireUser();
  const savedGuides = await getSavedGuidesForCurrentUser();
  const completedGuides = savedGuides.filter(
    (item) => item.totalCount > 0 && item.completedCount === item.totalCount,
  ).length;
  const totalRemaining = savedGuides.reduce(
    (sum, item) => sum + Math.max(item.totalCount - item.completedCount, 0),
    0,
  );
  const continueGuide = savedGuides.find(
    (item) => item.completedCount > 0 && item.completedCount < item.totalCount,
  ) ?? savedGuides[0];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <section>
          <Badge variant="accent">Dashboard</Badge>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Your saved requirements workspace
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                Continue saved guides, check off documents and steps, and remove guides
                when you no longer need them.
              </p>
            </div>
            <Button asChild>
              <Link href="/explore">
                <Plus className="h-4 w-4" aria-hidden="true" />
                Add guide
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <MetricCard
              title="Saved guides"
              value={String(savedGuides.length)}
              description="Processes in your workspace."
              icon={<ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />}
            />
            <MetricCard
              title="Completed guides"
              value={String(completedGuides)}
              description="Guides with every checklist item done."
              icon={<CalendarCheck className="h-5 w-5 text-primary" aria-hidden="true" />}
            />
            <MetricCard
              title="Remaining items"
              value={String(totalRemaining)}
              description="Documents and steps left to finish."
              icon={<Settings className="h-5 w-5 text-primary" aria-hidden="true" />}
            />
          </div>

          {continueGuide ? (
            <section className="mt-8">
              <div className="mb-4">
                <p className="text-sm font-medium text-primary">
                  Continue where you left off
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                  Pick up your most recent checklist
                </h2>
              </div>
              <SavedGuideCard item={continueGuide} />
            </section>
          ) : null}

          <div className="mt-8 grid gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Saved guides</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                Your checklist library
              </h2>
            </div>
            {savedGuides.length > 0 ? (
              savedGuides.map((item) => (
                <SavedGuideCard key={item.savedGuide.id} item={item} />
              ))
            ) : (
              <Card className="border-dashed bg-white">
                <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-semibold">No saved guides yet</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Browse process guides and save the ones you want to complete.
                    </p>
                  </div>
                  <Button asChild>
                    <Link href="/explore">
                      <Plus className="h-4 w-4" aria-hidden="true" />
                      Add process
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <aside className="grid gap-4 self-start lg:sticky lg:top-24">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Helpful reminders</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm leading-6 text-muted-foreground">
              <p className="rounded-md border bg-[#fbfdfc] p-3">
                Verify official sources before paying fees or submitting forms.
              </p>
              <p className="rounded-md border bg-[#fbfdfc] p-3">
                Keep confirmation numbers and appointment details in your guide notes.
              </p>
            </CardContent>
          </Card>
          <RecentlyViewedGuides />
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Account</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Signed in as</p>
                <p className="mt-1 font-medium">{user.email}</p>
              </div>
              <form action={signOutAction}>
                <Button type="submit" variant="outline" className="w-full">
                  Sign out
                </Button>
              </form>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="text-base">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
