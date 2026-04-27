import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy placeholder for Requirements Navigator.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">Privacy Policy</h1>
      <div className="mt-6 grid gap-5 text-base leading-7 text-muted-foreground">
        <p>
          This placeholder explains the intended privacy posture for Requirements
          Navigator. Replace it with a reviewed policy before collecting production data.
        </p>
        <p>
          The app is structured to use Supabase authentication and row-level security
          so saved processes belong to the signed-in user. Avoid storing unnecessary
          sensitive document numbers or images unless the product explicitly needs them.
        </p>
        <p>
          Users should be told what data is collected, why it is collected, how long it
          is retained, and how they can request deletion or export.
        </p>
      </div>
    </section>
  );
}
