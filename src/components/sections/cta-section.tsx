import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { landingPage } from "@/lib/constants/landing";

export function CtaSection() {
  const { finalCta } = landingPage;

  return (
    <section className="bg-[#123c33] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr] md:items-center lg:px-8 lg:py-16">
        <div>
          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-white/12">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="mb-3 text-sm font-medium text-[#bcebdc]">{finalCta.eyebrow}</p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-normal sm:text-3xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">
            {finalCta.description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button asChild size="lg" className="bg-white text-[#123c33] hover:bg-[#edf4f1]">
            <Link href="/explore">
              {finalCta.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/dashboard">{finalCta.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
