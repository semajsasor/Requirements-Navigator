import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signInAction, signUpAction } from "@/lib/actions/auth";

type AuthFormProps = {
  mode: "sign-in" | "sign-up";
  error?: string;
  message?: string;
  redirectTo?: string;
};

export function AuthForm({ mode, error, message, redirectTo }: AuthFormProps) {
  const isSignUp = mode === "sign-up";
  const action = isSignUp ? signUpAction : signInAction;

  return (
    <Card className="mx-auto w-full max-w-md bg-white shadow-lg shadow-[#123c33]/5">
      <CardHeader>
        <CardTitle>{isSignUp ? "Create your account" : "Sign in"}</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="mb-4 rounded-md border border-destructive/30 bg-[#fff7f6] p-3 text-sm text-destructive">
            {error}
          </div>
        ) : null}
        {message ? (
          <div className="mb-4 rounded-md border bg-accent p-3 text-sm text-accent-foreground">
            {message}
          </div>
        ) : null}
        <form action={action} className="grid gap-4">
          <input type="hidden" name="redirectTo" value={redirectTo ?? "/dashboard"} />
          {isSignUp ? (
            <label className="grid gap-2 text-sm font-medium">
              Full name
              <Input
                name="fullName"
                autoComplete="name"
                placeholder="Taylor Lee"
              />
            </label>
          ) : null}
          <label className="grid gap-2 text-sm font-medium">
            Email
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Password
            <Input
              name="password"
              type="password"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              minLength={6}
              required
            />
          </label>
          <Button type="submit" className="mt-2">
            {isSignUp ? "Sign up" : "Sign in"}
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          {isSignUp ? "Already have an account?" : "New to Requirements Navigator?"}{" "}
          <Link
            href={
              isSignUp
                ? `/auth/sign-in?redirectTo=${encodeURIComponent(redirectTo ?? "/dashboard")}`
                : `/auth/sign-up?redirectTo=${encodeURIComponent(redirectTo ?? "/dashboard")}`
            }
            className="font-medium text-primary hover:underline"
          >
            {isSignUp ? "Sign in" : "Create an account"}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
