import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Requirements Navigator organizes real-life process requirements.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Badge variant="accent">About</Badge>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
          Practical guidance for processes that usually feel scattered.
        </h1>
        <div className="mt-6 grid gap-5 text-base leading-7 text-muted-foreground">
          <p>
            Requirements Navigator helps people prepare for important real-life
            processes by organizing documents, steps, fees, deadlines, tips, mistakes,
            and official source links into one clear guide.
          </p>
          <p>
            The product is designed to support many jurisdictions and institutions.
            Content can start as curated editorial guides, then move into Supabase
            tables for review workflows, localization, and personalized dashboards.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
