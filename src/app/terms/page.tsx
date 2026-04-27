import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for Requirements Navigator.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">Terms of Use</h1>
      <div className="mt-6 grid gap-5 text-base leading-7 text-muted-foreground">
        <p>
          Requirements Navigator provides organization and planning support, not legal,
          financial, immigration, medical, or government advice.
        </p>
        <p>
          Users are responsible for confirming final requirements, deadlines, fees, and
          eligibility with the official agency, employer, school, bank, or institution.
        </p>
        <p>
          Replace this placeholder with reviewed terms before launching publicly.
        </p>
      </div>
    </section>
  );
}
