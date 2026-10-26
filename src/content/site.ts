/**
 * Single source of truth for personal details shown on the site.
 * Every value here comes from the CV. Anything that is still unknown is `null`
 * and the UI hides it rather than inventing a value.
 */
export const site = {
  name: "Caxton Ojiambo",
  title: "Senior Systems Engineer (MBSE)",
  location: "Mississauga, ON, Canada",
  email: "juniorkacs@gmail.com",
  linkedin: "https://www.linkedin.com/in/caxton-ojiambo-457873a7",
  /** Set to the confirmed GitHub username. While null, GitHub links are hidden. */
  githubUser: null as string | null,
  /** Path (inside /public) of the downloadable CV. */
  cvPath: "/cv/Caxton-Ojiambo-CV.pdf",
  /** Public URL of the deployed site, used for metadata. Update after deploy. */
  url: "https://example.com",
} as const;

export function githubUrl(repo?: string): string | null {
  if (!site.githubUser) return null;
  return repo
    ? `https://github.com/${site.githubUser}/${repo}`
    : `https://github.com/${site.githubUser}`;
}
