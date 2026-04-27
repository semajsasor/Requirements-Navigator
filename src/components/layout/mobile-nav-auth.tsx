"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User as UserIcon } from "lucide-react";
import type { User } from "@supabase/supabase-js";

import { signOutAction } from "@/lib/actions/auth";
import { createClient } from "@/lib/supabase/client";

interface MobileNavAuthProps {
  initialUser: User | null;
}

export function MobileNavAuth({ initialUser }: MobileNavAuthProps) {
  const [user, setUser] = useState<User | null>(initialUser);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        setUser(session?.user ?? null);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <>
      <div className="px-2 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Account</p>
      </div>
      {user ? (
        <>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-primary hover:bg-accent"
          >
            <UserIcon className="h-4 w-4" />
            My Dashboard
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="flex w-full items-center rounded-md px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors"
            >
              Sign out
            </button>
          </form>
        </>
      ) : (
        <Link
          href="/auth/sign-in"
          className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
        >
          Sign in
        </Link>
      )}
    </>
  );
}
