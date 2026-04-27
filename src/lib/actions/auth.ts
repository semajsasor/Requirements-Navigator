"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getRedirectTo(formData: FormData) {
  const redirectTo = getString(formData, "redirectTo");
  return redirectTo.startsWith("/") ? redirectTo : "/dashboard";
}

export async function signInAction(formData: FormData) {
  const email = getString(formData, "email");
  const password = getString(formData, "password");
  const redirectTo = getRedirectTo(formData);

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/auth/sign-in?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect(redirectTo);
}

export async function signUpAction(formData: FormData) {
  const email = getString(formData, "email");
  const password = getString(formData, "password");
  const fullName = getString(formData, "fullName");
  const redirectTo = getRedirectTo(formData);

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    redirect(`/auth/sign-up?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect(
    `/auth/sign-in?message=${encodeURIComponent(
      "Account created. Check your email if confirmation is enabled, then sign in.",
    )}&redirectTo=${encodeURIComponent(redirectTo)}`,
  );
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/auth/sign-in");
}
