/**
 * Prefix a /public path with the deployment base path. Needed for GitHub Pages
 * project sites, which are served from /<repo>/ rather than the domain root.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${base}${path}`;
}
