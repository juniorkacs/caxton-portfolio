"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#method", label: "Method" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];


export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="type-condensed text-lg text-ink">
          {site.name}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid size-10 place-items-center text-muted hover:text-ink"
            aria-label="Switch between light and dark theme"
          >
            {/* Icon follows the theme attribute via CSS, so no state is needed. */}
            <Sun size={18} aria-hidden className="[[data-theme=light]_&]:hidden" />
            <Moon size={18} aria-hidden className="hidden [[data-theme=light]_&]:block" />
          </button>
          <button
            type="button"
            className="grid size-10 place-items-center text-muted hover:text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>
      {open ? (
        <ul id="mobile-nav" className="border-t border-line bg-bg px-4 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
