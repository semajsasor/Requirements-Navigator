import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileCheck2,
  FileSearch,
  Landmark,
  Link2,
  MessageSquareQuote,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ProcessList } from "@/components/process/process-list";
import { CtaSection } from "@/components/sections/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { landingPage } from "@/lib/constants/landing";
import { processGuides } from "@/lib/data/processes";

const howItWorksIcons = [Search, FileSearch, ClipboardList];
const benefitIcons = [Clock3, FileCheck2, Sparkles];
const sourceIcons = [Landmark, Building2, ShieldCheck, FileCheck2, ClipboardList, Link2];

export default function Home() {
  const popularProcesses = landingPage.popularProcesses.slugs
    .map((slug) => processGuides.find((process) => process.slug === slug))
    .filter((process): process is (typeof processGuides)[number] => Boolean(process));

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8faf9]">
        <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,#def2eb_0%,#edf7f3_72%,rgba(248,250,249,0)_100%)] sm:h-72" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-7 px-4 py-7 sm:px-6 sm:py-9 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-18 lg:px-8 lg:py-24">
          <div>
            <Badge variant="accent" className="mb-4 shadow-sm sm:mb-5">
              {landingPage.hero.eyebrow}
            </Badge>
            <h1 className="max-w-4xl text-2xl font-semibold leading-[1.12] tracking-normal text-foreground min-[420px]:text-3xl sm:text-5xl lg:text-6xl">
              {landingPage.hero.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-7">
              {landingPage.hero.subheadline}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button asChild size="lg" className="h-10 shadow-lg shadow-primary/15 sm:h-11">
                <Link href="/explore">
                  {landingPage.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-10 bg-white/70 sm:h-11">
                <Link href="#how-it-works">{landingPage.hero.secondaryCta}</Link>
              </Button>
            </div>
            <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:mt-7">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p>{landingPage.hero.trustText}</p>
            </div>
          </div>

          <div className="hidden rounded-lg border bg-white/90 p-3 shadow-2xl shadow-[#0b3d2d]/10 backdrop-blur md:block">
            <div className="rounded-md bg-[#123c33] p-5 text-white shadow-inner shadow-white/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/70">{landingPage.hero.previewLabel}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-normal">
                    {landingPage.hero.previewTitle}
                  </h2>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/12">
                  <FileCheck2 className="h-6 w-6 text-[#bcebdc]" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                {landingPage.hero.previewStats.map((stat) => (
                  <div key={stat.label} className="rounded-md bg-white/10 p-3">
                    <p className="text-xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/68">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-2">
                {landingPage.hero.previewItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-md bg-white/10 p-3 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#bcebdc]" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-primary">{landingPage.howItWorks.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:mt-3 sm:text-4xl">
              {landingPage.howItWorks.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {landingPage.howItWorks.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
            {landingPage.howItWorks.steps.map((item, index) => {
              const Icon = howItWorksIcons[index];

              return (
                <Card
                  key={item.title}
                  className="border-[#dce8e2] bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#123c33]/10"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf9]">
        <div className="mx-auto w-full max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">
                {landingPage.popularProcesses.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:mt-3 sm:text-4xl">
                {landingPage.popularProcesses.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {landingPage.popularProcesses.description}
              </p>
            </div>
            <Button asChild variant="outline" className="bg-white">
              <Link href="/explore">{landingPage.popularProcesses.cta}</Link>
            </Button>
          </div>
          <ProcessList processes={popularProcesses} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-11 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8 lg:py-18">
          <div>
            <p className="text-sm font-medium text-primary">{landingPage.benefits.eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:mt-3 sm:text-4xl">
              {landingPage.benefits.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {landingPage.benefits.description}
            </p>
          </div>

          <div className="grid gap-4">
            {landingPage.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-lg border bg-[#fbfdfc] p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef7f3]">
        <div className="mx-auto w-full max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-medium text-primary">
                {landingPage.trustedSources.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:mt-3 sm:text-4xl">
                {landingPage.trustedSources.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {landingPage.trustedSources.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {landingPage.trustedSources.sources.map((source, index) => {
                const Icon = sourceIcons[index];

                return (
                  <div
                    key={source}
                    className="flex items-center gap-3 rounded-lg border bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-medium">{source}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-11 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-primary">
              {landingPage.testimonials.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal sm:mt-3 sm:text-4xl">
              {landingPage.testimonials.title}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {landingPage.testimonials.items.map((testimonial) => (
              <Card key={testimonial.name} className="shadow-lg shadow-[#123c33]/5">
                <CardContent className="p-6">
                  <MessageSquareQuote className="h-6 w-6 text-primary" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
