import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[80vh] max-w-3xl place-items-center px-4">
      <div className="w-full border border-line">
        <div
          aria-hidden="true"
          className="type-condensed inline-block border-r border-b border-line bg-raised py-1.5 pr-6 pl-3 text-sm text-muted"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 62%, calc(100% - 12px) 100%, 0 100%)" }}
        >
          <span className="text-signal">req</span> [Requirement] Unsatisfied
        </div>
        <div className="p-8">
          <h1 className="type-display text-3xl text-ink">This page isn&apos;t traced to anything.</h1>
          <p className="mt-4 text-muted">
            The address you followed doesn&apos;t match a page on this site. It may have moved, or the link may have a
            typo.
          </p>
          <Link href="/" className="mt-6 inline-block bg-accent px-5 py-3 text-sm font-semibold text-accent-ink">
            Go to the home page
          </Link>
        </div>
      </div>
    </main>
  );
}
