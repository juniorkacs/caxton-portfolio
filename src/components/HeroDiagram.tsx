import { projects } from "@/content/projects";

/**
 * The hero illustration: a SysML block definition diagram in which the
 * engineer is the system block, composed of four capability blocks. Each
 * capability block links to the project that demonstrates it.
 */
const capabilities = [
  { name: "Requirements & MBSE", parts: ["SysML / UML", "Traceability", "V&V planning"], project: "systemtrace" },
  { name: "Security & compliance", parts: ["RMF", "NIST SP 800-53", "Threat modelling"], project: "securescope" },
  { name: "DevSecOps delivery", parts: ["CI/CD", "Docker", "Supply-chain checks"], project: "secureship" },
  { name: "Data & machine learning", parts: ["Python", "Anomaly detection", "Evaluation"], project: "sentinelai" },
];

export function HeroDiagram() {
  return (
    <figure aria-label="Block definition diagram of capabilities, each linked to a project" className="relative">
      <div className="grid gap-y-6 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:items-center md:gap-x-12 md:gap-y-0">
        {/* System block */}
        <div
          className="bdd-block bdd-system relative border border-accent bg-raised"
          style={{ animationDelay: "0ms" }}
        >
          <div className="border-b border-line px-4 py-3 text-center">
            <div className="text-xs text-muted">«system»</div>
            <div className="type-condensed text-lg text-ink">Systems engineer</div>
          </div>
          <dl className="px-4 py-3 text-sm">
            <dt className="text-xs text-muted">values</dt>
            <dd className="text-ink">experience: 2014 to now</dd>
            <dd className="text-ink">focus: secure, traceable systems</dd>
          </dl>
        </div>

        {/* Part blocks */}
        <ul className="bdd-parts relative">
          {capabilities.map((c, i) => {
            const p = projects.find((x) => x.id === c.project)!;
            return (
              <li key={c.name} className="bdd-block bdd-part" style={{ animationDelay: `${450 + i * 110}ms` }}>
                <a
                  href={`#${p.id}`}
                  className="group block border border-line bg-raised transition-colors hover:border-accent"
                >
                  <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-2">
                    <span className="type-condensed text-ink">
                      <span className="mr-1.5 text-xs font-normal text-muted">«block»</span>
                      {c.name}
                    </span>
                    <span className="text-xs text-accent group-hover:underline">{p.name}</span>
                  </div>
                  <p className="px-4 py-2 text-sm text-muted">{c.parts.join(", ")}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <figcaption className="mt-3 text-xs text-muted">
        Block definition diagram. Each capability links to the project that demonstrates it.
      </figcaption>
    </figure>
  );
}
