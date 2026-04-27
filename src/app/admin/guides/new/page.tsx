import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AdminGuideForm } from "@/components/admin/admin-guide-form";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "New guide",
  description: "Create a new Requirements Navigator process guide.",
};

export const dynamic = "force-dynamic";

type NewGuidePageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NewGuidePage({ searchParams }: NewGuidePageProps) {
  await requireAdmin();
  const params = await searchParams;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-3">
        <Link href="/admin">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to admin
        </Link>
      </Button>
      <h1 className="text-3xl font-semibold tracking-normal">Create guide</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Save as draft while editing, then publish when the guide is reviewed.
      </p>
      {params.error ? (
        <div className="mt-5 rounded-md border border-destructive/30 bg-[#fff7f6] p-3 text-sm text-destructive">
          {params.error}
        </div>
      ) : null}
      <div className="mt-8">
        <AdminGuideForm />
      </div>
    </div>
  );
}
