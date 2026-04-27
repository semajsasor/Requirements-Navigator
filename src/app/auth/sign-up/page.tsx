import type { Metadata } from "next";

import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account to save process guides and track progress.",
};

type SignUpPageProps = {
  searchParams: Promise<{
    error?: string;
    redirectTo?: string;
  }>;
};

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-xl text-center">
        <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
          Create your workspace
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Save guides, check off requirements, and pick up where you left off.
        </p>
      </div>
      <AuthForm
        mode="sign-up"
        error={params.error}
        redirectTo={params.redirectTo}
      />
    </section>
  );
}
