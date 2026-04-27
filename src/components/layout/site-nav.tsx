import Link from "next/link";
import { ClipboardCheck, Menu, Search, User as UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOutAction } from "@/lib/actions/auth";
import { getCurrentUser } from "@/lib/auth/session";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

export async function SiteNav() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 shadow-sm backdrop-blur no-print">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-90">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Requirements Navigator</span>
          <span className="sm:hidden text-primary font-bold">ReqNav</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Button asChild variant="ghost" size="sm" key={link.href} className="text-sm font-medium">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <Link href="/explore">
              <Search className="h-4 w-4" aria-hidden="true" />
              Find a process
            </Link>
          </Button>
          
          {user ? (
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
          ) : (
            <Button asChild size="sm" className="hidden sm:inline-flex font-medium">
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
          )}

          <details className="group relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="sr-only">Open navigation menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 mt-3 grid w-64 gap-1 rounded-lg border bg-white p-3 shadow-xl animate-in fade-in slide-in-from-top-2"
              aria-label="Mobile navigation"
            >
              <div className="mb-2 px-2 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigation</p>
              </div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="my-2 border-t" />
              
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
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
