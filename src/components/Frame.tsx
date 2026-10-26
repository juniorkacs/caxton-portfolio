import type { ReactNode } from "react";

type FrameProps = {
  id: string;
  /** SysML diagram kind, e.g. "bdd", "req", "act". */
  kind: string;
  /** Model element type shown in brackets, e.g. "Package". */
  element: string;
  /** Model element name shown in the frame tab. */
  label: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

/**
 * A section drawn as a SysML diagram frame: a bordered region with a
 * pentagon-shaped name tab in the top-left corner ("kind [element] name").
 * The tab is decorative for assistive tech; the h2 carries the meaning.
 */
export function Frame({ id, kind, element, label, title, intro, children }: FrameProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
      <div className="relative border border-line bg-bg/70 backdrop-blur-[1px]">
        <div
          aria-hidden="true"
          className="type-condensed inline-block border-r border-b border-line bg-raised py-1.5 pr-6 pl-3 text-sm text-muted"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 62%, calc(100% - 12px) 100%, 0 100%)" }}
        >
          <span className="text-accent">{kind}</span> [{element}] {label}
        </div>
        <div className="px-5 pt-6 pb-8 sm:px-8 md:px-10 md:pb-12">
          <h2 id={`${id}-title`} className="type-display max-w-3xl text-2xl text-ink sm:text-3xl md:text-4xl">
            {title}
          </h2>
          {intro ? <div className="mt-4 max-w-2xl text-lg text-muted">{intro}</div> : null}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
