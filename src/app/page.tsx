import { Download, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Frame } from "@/components/Frame";
import { HeroDiagram } from "@/components/HeroDiagram";
import { ProjectEntry } from "@/components/ProjectEntry";
import { VModel } from "@/components/VModel";
import { Footer } from "@/components/Footer";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { site, githubUrl } from "@/content/site";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { experience, education, certifications } from "@/content/experience";
import { asset } from "@/lib/asset";

export default function Home() {
  const github = githubUrl();
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="type-condensed text-lg text-muted">
                {site.name}, {site.title}
              </p>
              <h1 id="hero-title" className="type-display mt-4 text-4xl text-ink sm:text-5xl lg:text-[3.6rem]">
                Complex systems, built to be traced, tested and trusted.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted">
                I translate mission requirements into system models, secure software architectures and verification
                plans. I&apos;ve built and secured software for aerospace, defense and healthcare since 2014.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:opacity-90"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="border border-line-strong px-5 py-3 text-sm text-ink hover:border-accent"
                >
                  Get in touch
                </a>
                <a
                  href={asset(site.cvPath)}
                  download
                  className="inline-flex items-center gap-2 px-3 py-3 text-sm text-muted hover:text-ink"
                >
                  <Download size={16} aria-hidden /> Download CV (PDF)
                </a>
              </div>
            </div>
            <HeroDiagram />
          </div>
        </section>

        {/* About */}
        <Frame id="about" kind="pkg" element="Package" label="About" title="An engineer who works across the whole lifecycle">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="max-w-2xl space-y-4 text-muted">
              <p>
                I&apos;m a senior systems engineer specialising in model-based systems engineering, software
                architecture and cybersecurity integration for mission-critical aerospace and defense systems.
              </p>
              <p>
                My work starts with requirements: decomposing them into subsystems and interfaces, modelling them in
                SysML and UML, and keeping every requirement traceable to the design that satisfies it and the test that
                proves it. I&apos;ve led design reviews from SRR through CDR, built Python test frameworks for
                verification, and assessed systems against RMF, STIG and NIST SP 800-53.
              </p>
              <p>
                Before systems engineering I worked in security operations and in software development, including
                incident response, vulnerability management and HIPAA-aligned healthcare applications. That mix shapes
                how I design: security is a requirement to trace and verify like any other, not a review at the end.
              </p>
            </div>
            <aside aria-label="About these projects" className="self-start border-l-2 border-signal bg-raised px-5 py-4">
              <h3 className="type-condensed text-ink">Professional work vs. demonstrations</h3>
              <p className="mt-2 text-sm text-muted">
                The experience on this page is professional. The four projects are independent demonstrations I built
                on my own time with synthetic, non-sensitive data. They show methods, not any employer&apos;s systems,
                and none of them contains proprietary or classified information.
              </p>
            </aside>
          </div>
        </Frame>

        {/* Expertise */}
        <Frame
          id="expertise"
          kind="pkg"
          element="Package"
          label="Capabilities"
          title="What I work with"
          intro="Grouped by discipline. Everything listed here comes from professional work."
        >
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.name} className="bg-bg p-5">
                <h3 className="type-condensed text-ink">{g.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li key={s} className="border border-line px-2 py-0.5 text-sm text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Frame>

        {/* Projects */}
        <Frame
          id="projects"
          kind="ibd"
          element="Block"
          label="Demonstration projects"
          title="Four working projects, one engineering story"
          intro="Each project is a working application with tests, a CI pipeline and documentation. Together they follow a system from its requirements to its security posture, its delivery pipeline and its operation."
        >
          <div className="space-y-20">
            {projects.map((p, i) => (
              <ProjectEntry key={p.id} project={p} index={i} />
            ))}
          </div>
        </Frame>

        {/* Method */}
        <Frame
          id="method"
          kind="act"
          element="Activity"
          label="Engineering lifecycle"
          title="How I take a system from need to proof"
          intro="I work to the systems engineering V: every decision made on the way down is matched by a check on the way up."
        >
          <VModel />
        </Frame>

        {/* Experience */}
        <Frame id="experience" kind="pkg" element="Package" label="Experience" title="Where I've done this work">
          <ol className="relative border-l border-line-strong">
            {experience.map((r) => (
              <li key={`${r.employer}-${r.start}`} className="relative pb-10 pl-6 last:pb-0 md:pl-8">
                <span aria-hidden className="absolute top-2 -left-[5px] size-2.5 border border-accent bg-bg" />
                <div className="grid gap-1 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
                  <p className="text-sm text-muted tabular-nums">
                    {r.start} to {r.end}
                  </p>
                  <div>
                    <h3 className="type-condensed text-lg text-ink">{r.title}</h3>
                    <p className="text-accent">{r.employer}</p>
                    <ul className="mt-3 max-w-2xl space-y-1.5 text-sm text-muted">
                      {r.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Frame>

        {/* Education */}
        <Frame id="education" kind="pkg" element="Package" label="Education" title="Education and certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <h3 className="type-condensed text-lg text-ink">{e.degree}</h3>
                  <p className="text-muted">
                    {e.school}
                    {e.year ? `, ${e.year}` : ""}
                  </p>
                </li>
              ))}
            </ul>
            <div>
              <h3 className="type-condensed text-lg text-ink">Certifications</h3>
              {certifications.length ? (
                <ul className="mt-2 space-y-2 text-muted">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      {c.name}, {c.issuer}, {c.year}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-muted">No certifications are listed here yet.</p>
              )}
            </div>
          </div>
        </Frame>

        {/* Contact */}
        <Frame
          id="contact"
          kind="uc"
          element="Use case"
          label="Contact"
          title="Let's talk about your system"
          intro="I'm open to systems engineering, MBSE and secure architecture roles. Email is the quickest way to reach me."
        >
          <ul className="flex flex-wrap gap-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:opacity-90"
              >
                <Mail size={16} aria-hidden /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm text-ink hover:border-accent"
              >
                <LinkedinIcon size={16} /> LinkedIn profile
              </a>
            </li>
            {github ? (
              <li>
                <a
                  href={github}
                  className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm text-ink hover:border-accent"
                >
                  <GithubIcon size={16} /> GitHub profile
                </a>
              </li>
            ) : null}
          </ul>
          <p className="mt-6 text-sm text-muted">Based in {site.location}.</p>
        </Frame>
      </main>
      <Footer />
    </>
  );
}
