import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in search params, use it as the redirection URL
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const redirectUrl = new URL(next, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  // return the user to an error page with instructions
  const errorUrl = new URL("/auth/sign-in", request.url);
  errorUrl.searchParams.set("error", "Could not verify email. Please try signing in again or contact support.");
  return NextResponse.redirect(errorUrl);
}
