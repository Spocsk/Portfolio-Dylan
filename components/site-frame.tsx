import type { ReactNode } from "react";

import { Mark } from "./bento";
import SiteNav from "./site-nav";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="page">
      <header className="site-header">
        <Mark />
        <SiteNav />
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>© 2026 Dylan Couto de Oliveira</p>
      </footer>
    </div>
  );
}
