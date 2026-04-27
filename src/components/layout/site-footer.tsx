import Link from "next/link";

const footerLinks = [
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Requirements Navigator</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            A practical guide layer for documents, deadlines, fees, and source links.
            Always confirm final requirements with the official agency or institution.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
