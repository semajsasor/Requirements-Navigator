import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProcessDetailView } from "@/components/process/process-detail-view";
import { getCurrentUser } from "@/lib/auth/session";
import { getProcessBySlug, processGuides } from "@/lib/data/processes";
import { getPublishedProcessGuideBySlug } from "@/lib/process/db";
import type { ProcessGuide } from "@/types/process";

type ProcessPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return processGuides.map((process) => ({ slug: process.slug }));
}

export function applySeedSupportContent(
  process: ProcessGuide,
  seedProcess?: ProcessGuide,
): ProcessGuide {
  if (!seedProcess) {
    return process;
  }

  return {
    ...process,
    videoTutorials: process.videoTutorials ?? seedProcess.videoTutorials,
    documentExamples: process.documentExamples ?? seedProcess.documentExamples,
    plainEnglishSummary:
      process.plainEnglishSummary ?? seedProcess.plainEnglishSummary,
    prepareFirst: process.prepareFirst ?? seedProcess.prepareFirst,
    commonConfusions: process.commonConfusions ?? seedProcess.commonConfusions,
  };
}

export async function generateMetadata({
  params,
}: ProcessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seedProcess = getProcessBySlug(slug);
  const publishedProcess = await getPublishedProcessGuideBySlug(slug);
  const process = publishedProcess
    ? applySeedSupportContent(publishedProcess, seedProcess)
    : seedProcess;

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
  const seedProcess = getProcessBySlug(slug);
  const publishedProcess = await getPublishedProcessGuideBySlug(slug);
  const process = publishedProcess
    ? applySeedSupportContent(publishedProcess, seedProcess)
    : seedProcess;

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
