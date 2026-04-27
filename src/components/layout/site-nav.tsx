import Link from "next/link";
import { ClipboardCheck, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>Requirements Navigator</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Button asChild variant="ghost" size="sm" key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/explore">
              <Search className="h-4 w-4" aria-hidden="true" />
              Find a process
            </Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
          <details className="group relative md:hidden">
            <summary className="inline-flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <span className="sr-only">Open navigation menu</span>
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 mt-3 grid w-56 gap-1 rounded-lg border bg-white p-2 shadow-lg"
              aria-label="Mobile navigation"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/auth/sign-in"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
              >
                Sign in
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
