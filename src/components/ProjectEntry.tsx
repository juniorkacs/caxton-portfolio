import { Check, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import type { Project } from "@/content/projects";
import { githubUrl } from "@/content/site";
import { asset } from "@/lib/asset";

export function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const repoUrl = githubUrl(project.repo);
  return (
    <article id={project.id} aria-labelledby={`${project.id}-name`} className="scroll-mt-24">
      <div
        className={`grid gap-8 lg:gap-10 ${index % 2 === 1 ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" : "lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"}`}
      >
        <div className={`lg:sticky lg:top-24 lg:self-start ${index % 2 === 1 ? "lg:order-2" : ""}`}>
          <div className="border border-line bg-raised p-1.5">
            {project.screenshot ? (
              // Static export: plain img with explicit dimensions avoids layout shift.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(project.screenshot)}
                alt={project.screenshotAlt}
                width={1440}
                height={900}
                loading="lazy"
                className="block h-auto w-full"
              />
            ) : (
              <div className="grid aspect-[16/10] place-items-center text-sm text-muted">
                Screenshot pending: captured from the running application.
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 id={`${project.id}-name`} className="type-display text-2xl text-ink md:text-3xl">
            {project.name}
          </h3>
          <p className="type-condensed mt-1 text-accent">{project.tagline}</p>
          <p className="mt-4 text-muted">{project.purpose}</p>

          <h4 className="type-condensed mt-6 text-ink">What it does</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-muted">
            {project.capabilities.map((c) => (
              <li key={c} className="relative pl-4 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:bg-line-strong">
                {c}
              </li>
            ))}
          </ul>

          <h4 className="type-condensed mt-6 text-ink">Engineering challenge</h4>
          <p className="mt-2 text-sm text-muted">{project.challenge}</p>

          <h4 className="type-condensed mt-6 text-ink">Checked</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {project.evidence.map((e) => (
              <li key={e} className="flex gap-2">
                <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {e}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted">
            <span className="text-ink">Built with </span>
            {project.stack.join(", ")}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90"
              >
                <ExternalLink size={16} aria-hidden /> Open live demo
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                className="inline-flex items-center gap-2 border border-line-strong px-4 py-2 text-sm text-ink hover:border-accent"
              >
                <GithubIcon size={16} /> View source on GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
