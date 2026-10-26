"use client";

import { useState } from "react";

type Stage = {
  id: string;
  name: string;
  side: "left" | "right" | "bottom";
  level: number; // 1 = top of the V, 5 = bottom
  what: string;
  artifacts: string;
  pairedWith?: string;
  seeIn?: { project: string; label: string };
};

const stages: Stage[] = [
  {
    id: "needs",
    name: "Stakeholder needs",
    side: "left",
    level: 1,
    what: "Find out who the system is for, what they need it to do, and the constraints it must live within.",
    artifacts: "Concept of operations, stakeholder needs, use cases",
    pairedWith: "validation",
  },
  {
    id: "requirements",
    name: "System requirements",
    side: "left",
    level: 2,
    what: "Turn needs into requirements that are specific, testable and uniquely identified, with a planned verification method for each.",
    artifacts: "Requirements specification, verification plan",
    pairedWith: "verification",
    seeIn: { project: "systemtrace", label: "SystemTrace manages requirements and their verification links" },
  },
  {
    id: "architecture",
    name: "Architecture",
    side: "left",
    level: 3,
    what: "Decompose the system into subsystems and interfaces, trade alternatives, and model the threats each interface introduces.",
    artifacts: "Block diagrams, interface control documents, threat model",
    pairedWith: "integration",
    seeIn: { project: "securescope", label: "SecureScope includes a written threat model and design review" },
  },
  {
    id: "design",
    name: "Detailed design",
    side: "left",
    level: 4,
    what: "Specify each component precisely enough that it can be built and unit-tested on its own.",
    artifacts: "Software design descriptions, data models, API contracts",
    pairedWith: "unit",
  },
  {
    id: "build",
    name: "Implementation",
    side: "bottom",
    level: 5,
    what: "Write the code, with linting, type checking and security analysis running on every commit.",
    artifacts: "Source code, pipeline results",
    seeIn: { project: "secureship", label: "SecureShip runs these gates in GitHub Actions" },
  },
  {
    id: "unit",
    name: "Unit test",
    side: "right",
    level: 4,
    what: "Check each component against its detailed design in isolation.",
    artifacts: "Automated unit tests, coverage reports",
    pairedWith: "design",
  },
  {
    id: "integration",
    name: "Integration test",
    side: "right",
    level: 3,
    what: "Join components together and confirm the interfaces behave as the architecture says they should.",
    artifacts: "Integration test results, interface verification",
    pairedWith: "architecture",
  },
  {
    id: "verification",
    name: "System verification",
    side: "right",
    level: 2,
    what: "Prove each requirement is met using its planned method: test, analysis, inspection or demonstration.",
    artifacts: "Verification results, traceability matrix",
    pairedWith: "requirements",
    seeIn: { project: "sentinelai", label: "SentinelAI measures its detector against a labelled test set" },
  },
  {
    id: "validation",
    name: "Validation",
    side: "right",
    level: 1,
    what: "Confirm with stakeholders that the system solves the problem it was built for in its real environment.",
    artifacts: "Validation report, acceptance",
    pairedWith: "needs",
  },
];

/** Grid column for each stage on desktop, forming the V shape across 9 columns. */
function column(s: Stage): number {
  if (s.side === "left") return s.level;
  if (s.side === "right") return 10 - s.level;
  return 5;
}

/** Dashed "verifies" lines between paired stages on the same row (desktop only). */
const pairLines = [1, 2, 3].map((level) => ({ level, from: level + 2, to: 10 - level }));

export function VModel() {
  const [selected, setSelected] = useState<string>("requirements");
  const current = stages.find((s) => s.id === selected)!;
  const pair = stages.find((s) => s.id === current.pairedWith);

  return (
    <div className="grid gap-6">
      <div>
        <p id="vmodel-help" className="mb-4 text-sm text-muted">
          Select a stage to see what happens there. Each stage on the left is checked by the stage opposite it on the
          right.
        </p>
        <ol
          aria-describedby="vmodel-help"
          className="grid gap-2 md:grid-cols-10 md:grid-rows-5 md:gap-x-0 md:gap-y-3"
        >
          {pairLines.map((l) => (
            <li
              key={`pair-${l.level}`}
              aria-hidden="true"
              style={{ ["--col" as string]: `${l.from} / ${l.to}`, ["--row" as string]: String(l.level) }}
              className="hidden items-center px-3 md:flex md:[grid-column:var(--col)] md:[grid-row:var(--row)]"
            >
              <span className="w-full border-t border-dashed border-line-strong" />
            </li>
          ))}
          {stages.map((s, i) => {
            const isSel = s.id === selected;
            const isPair = s.id === current.pairedWith;
            return (
              <li
                key={s.id}
                style={{ ["--col" as string]: `${column(s)} / span 2`, ["--row" as string]: String(s.level) }}
                className="md:min-w-0 md:[grid-column:var(--col)] md:[grid-row:var(--row)]"
              >
                <button
                  type="button"
                  aria-pressed={isSel}
                  onClick={() => setSelected(s.id)}
                  className={[
                    "flex w-full items-start gap-2 border px-3 py-2 text-left text-sm transition-colors md:block md:h-full md:px-3 md:text-center",
                    isSel
                      ? "border-accent bg-accent text-accent-ink"
                      : isPair
                        ? "border-accent bg-raised text-ink"
                        : "border-line bg-raised text-muted hover:border-line-strong hover:text-ink",
                  ].join(" ")}
                >
                  <span className="tabular-nums opacity-70 md:block md:text-xs">{i + 1}</span>
                  <span className="type-condensed md:block md:leading-tight">{s.name}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <div className="border border-dashed border-line-strong px-3 py-2 text-sm text-muted">
            <span className="type-condensed text-ink">Threat modelling</span> runs alongside architecture and design,
            and is revisited when interfaces change.
          </div>
          <div className="border border-dashed border-line-strong px-3 py-2 text-sm text-muted">
            <span className="type-condensed text-ink">Continuous integration</span> repeats the right-hand checks on
            every change, so verification is never a one-off event.
          </div>
        </div>
      </div>

      <div aria-live="polite" className="grid gap-x-10 gap-y-4 border border-line bg-raised p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:p-6">
        <div>
        <h3 className="type-condensed text-xl text-ink">{current.name}</h3>
        <p className="mt-3 text-muted">{current.what}</p>
        </div>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-muted">Typical outputs</dt>
            <dd className="text-ink">{current.artifacts}</dd>
          </div>
          {pair ? (
            <div>
              <dt className="text-muted">{current.side === "left" ? "Checked by" : "Checks"}</dt>
              <dd className="text-ink">{pair.name}</dd>
            </div>
          ) : null}
          {current.seeIn ? (
            <div>
              <dt className="text-muted">See it in practice</dt>
              <dd>
                <a href={`#${current.seeIn.project}`} className="text-accent underline-offset-4 hover:underline">
                  {current.seeIn.label}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </div>
  );
}
