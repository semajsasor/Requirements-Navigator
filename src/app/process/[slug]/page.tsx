import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProcessDetailView } from "@/components/process/process-detail-view";
import { getCurrentUser } from "@/lib/auth/session";
import { getProcessBySlug, processGuides } from "@/lib/data/processes";
import { getPublishedProcessGuideBySlug } from "@/lib/process/db";

type ProcessPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return processGuides.map((process) => ({ slug: process.slug }));
}

export async function generateMetadata({
  params,
}: ProcessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const process =
    (await getPublishedProcessGuideBySlug(slug)) ?? getProcessBySlug(slug);

  if (!process) {
    return { title: "Process not found" };
  }

  return {
    title: process.title,
    description: process.summary,
  };
}

export default async function ProcessPage({ params }: ProcessPageProps) {
  const { slug } = await params;
  const process =
    (await getPublishedProcessGuideBySlug(slug)) ?? getProcessBySlug(slug);

  if (!process) {
    notFound();
  }

  const user = await getCurrentUser();

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": process.title,
    "description": process.summary,
    "step": process.instructions.map((step) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description,
    })),
    "supply": process.requiredDocuments.map((doc) => ({
      "@type": "HowToSupply",
      "name": doc.name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProcessDetailView process={process} isSignedIn={Boolean(user)} />
    </>
  );
}
