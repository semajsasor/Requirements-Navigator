"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User as UserIcon } from "lucide-react";
import type { User } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface NavAuthProps {
  initialUser: User | null;
}

export function NavAuth({ initialUser }: NavAuthProps) {
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

  if (user) {
    return (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="hidden sm:inline-flex border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 font-medium"
      >
        <Link href="/dashboard">
          <UserIcon className="h-4 w-4" aria-hidden="true" />
          Account
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild size="sm" className="hidden sm:inline-flex font-medium">
      <Link href="/auth/sign-in">Sign in</Link>
    </Button>
  );
}
