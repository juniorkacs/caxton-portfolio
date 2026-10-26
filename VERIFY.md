# Check these before publishing

The site uses only facts from the CV. A few CV lines need confirming or fixing first, because recruiters will ask about every one. Until they're resolved, the site leaves the uncertain details out.

## 1. Template wording left in the CV

These lines read like an unfinished template. Replace each "or" with what was actually used, or remove the line.

| Role | CV text | What the site does now |
|---|---|---|
| Department of Defense | "Cameo, MagicDraw, Rhapsody, **or** Enterprise Architect" | Doesn't name any modelling tool |
| Boeing | "radar **or** RF system deployment" | Leaves the field-testing bullet out |
| DoD / NSA | "8570/8140 cybersecurity workforce compliance **(if applicable)**" | Leaves it out |
| DoD / NSA | "DoD **or** government standards" | Leaves it out |
| Hood College | "C++, Java, Python, **or** embedded C" | Uses the separate, definite language list (Java, Python, PHP, JavaScript, SQL) |

## 2. Hood College bullets to confirm

"Interoperability across classified and unclassified networks" and "collaborated with ... intelligence analysts" are unusual for a college IT role. The site leaves both out. Add them back in `src/content/experience.ts` only if they're accurate.

## 3. Naming the NSA and DoD publicly

The site shows employer names and job titles only, with no program, mission or system details. Confirm that listing "DoD / National Security Agency" and "Department of Defense" publicly is allowed.

## 4. Education details

- **Doctor of Science, Information Technology (Towson University)** has no year or status. If it's in progress, change the degree to "Doctor of Science, Information Technology (in progress)".
- The **B.S.** lists "University of Maryland Baltimore County / Towson University". Confirm which institution awarded the degree.

Edit these in `src/content/experience.ts`.

## 5. Certifications

The CV lists none, so the site says so. Add verified certifications to `certifications` in `src/content/experience.ts` (for example, a DoD 8570-approved credential, if held).

## 6. Contact details and the downloadable CV

- The site shows **email and LinkedIn only**. The phone number is left off on purpose.
- `public/cv/Caxton-Ojiambo-CV.pdf` is the **current CV, unchanged**. It still contains the phone number and the wording above. Replace it with a corrected PDF before publishing.

## 7. Settings to fill in

In `src/content/site.ts`:

- `githubUser`: the GitHub username. While it's `null`, all GitHub links are hidden.
- `url`: the final site address, used for search metadata and the sitemap.

In `src/content/projects.ts`:

- `demoUrl` for each project, once it's deployed.
