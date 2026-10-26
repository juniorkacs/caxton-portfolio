import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { site } from "@/content/site";

const description =
  "Senior systems engineer specialising in model-based systems engineering, secure software architecture and DevSecOps. Portfolio and demonstration projects.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, ${site.title}`, template: `%s | ${site.name}` },
  description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name}, ${site.title}`,
    description,
    siteName: site.name,
  },
  twitter: { card: "summary", title: site.name, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
    { media: "(prefers-color-scheme: light)", color: "#f2f6fa" },
  ],
};

/** Applies the saved theme before first paint to avoid a flash of the wrong theme. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
