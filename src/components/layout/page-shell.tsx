import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
