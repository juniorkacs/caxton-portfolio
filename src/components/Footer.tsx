import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { site, githubUrl } from "@/content/site";

export function Footer() {
  const github = githubUrl();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {site.name}. Projects use synthetic data only.
        </p>
        <ul className="flex items-center gap-2" aria-label="Elsewhere">
          <li>
            <a href={`mailto:${site.email}`} aria-label="Email" className="grid size-10 place-items-center hover:text-ink">
              <Mail size={18} aria-hidden />
            </a>
          </li>
          <li>
            <a href={site.linkedin} aria-label="LinkedIn" className="grid size-10 place-items-center hover:text-ink">
              <LinkedinIcon size={17} />
            </a>
          </li>
          {github ? (
            <li>
              <a href={github} aria-label="GitHub" className="grid size-10 place-items-center hover:text-ink">
                <GithubIcon size={18} />
              </a>
            </li>
          ) : null}
          <li>
            <a href="#top" className="ml-2 hover:text-ink">
              Back to top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
