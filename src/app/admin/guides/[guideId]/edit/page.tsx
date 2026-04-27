import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AdminGuideForm } from "@/components/admin/admin-guide-form";
import { Button } from "@/components/ui/button";
import { getAdminGuide } from "@/lib/admin/guides";

export const metadata: Metadata = {
  title: "Edit guide",
  description: "Edit a Requirements Navigator process guide.",
};

export const dynamic = "force-dynamic";

type EditGuidePageProps = {
  params: Promise<{ guideId: string }>;
  searchParams: Promise<{ error?: string; message?: string }>;
};

export default async function EditGuidePage({
  params,
  searchParams,
}: EditGuidePageProps) {
  const { guideId } = await params;
  const query = await searchParams;
  const guide = await getAdminGuide(guideId);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" className="mb-6 -ml-3">
        <Link href="/admin">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to admin
        </Link>
      </Button>
      <h1 className="text-3xl font-semibold tracking-normal">Edit guide</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Update the same structured fields used by public process pages.
      </p>
      {query.error ? (
        <div className="mt-5 rounded-md border border-destructive/30 bg-[#fff7f6] p-3 text-sm text-destructive">
          {query.error}
        </div>
      ) : null}
      {query.message ? (
        <div className="mt-5 rounded-md border bg-accent p-3 text-sm text-accent-foreground">
          {query.message}
        </div>
      ) : null}
      <div className="mt-8">
        <AdminGuideForm guide={guide} />
      </div>
    </div>
  );
}
