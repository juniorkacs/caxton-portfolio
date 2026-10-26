/**
 * Independently built demonstration projects. These are NOT professional
 * deliverables and use only synthetic, non-sensitive data.
 */
export type Project = {
  id: string;
  name: string;
  repo: string;
  tagline: string;
  purpose: string;
  capabilities: string[];
  challenge: string;
  stack: string[];
  /** Screenshot inside /public, captured from the running application. */
  screenshot: string | null;
  screenshotAlt: string;
  /** Public demo URL once deployed; null hides the button. */
  demoUrl: string | null;
  /** Verified facts from running the project (tests, measured results). */
  evidence: string[];
};

export const projects: Project[] = [
  {
    id: "systemtrace",
    name: "SystemTrace",
    repo: "systemtrace",
    tagline: "Requirements traceability for model-based systems engineering",
    purpose:
      "Links every system requirement to the components that satisfy it and the tests that verify it, so reviewers can see coverage gaps and the impact of a change before a design review.",
    capabilities: [
      "Requirement register with IDs, priority, status and parent/child decomposition",
      "Traceability matrix and graph across requirements, components and tests",
      "Orphan and verification-gap detection with live coverage metrics",
      "Impact analysis: everything affected when one requirement changes",
      "CSV and JSON import/export, plus an audit history of every change",
    ],
    challenge:
      "Keeping the coverage numbers honest. Metrics are computed from the trace graph on every request, never stored, and the rules for what counts as verified are unit-tested.",
    stack: ["TypeScript", "React", "Express", "SQLite", "Zod", "Vitest"],
    screenshot: "/projects/systemtrace.webp",
    screenshotAlt: "SystemTrace dashboard showing requirement coverage and a traceability matrix",
    demoUrl: null,
    evidence: [
      "52 automated tests: traceability rules, API, CSV import/export",
      "Coverage figures computed from live links on every request",
      "Synthetic model of a fictional civilian crop-survey drone",
    ],
  },
  {
    id: "securescope",
    name: "SecureScope",
    repo: "securescope",
    tagline: "Security posture and NIST SP 800-53 control assessment",
    purpose:
      "Gives a fictional organisation one place to see its assets, vulnerabilities, risk and control assessments, and turns that data into an executive report.",
    capabilities: [
      "Asset inventory with configurable criticality",
      "Vulnerability register with transparent, documented risk scoring",
      "Control register mapped to selected NIST SP 800-53 controls and STIG concepts",
      "Remediation tracking with owners, status and due dates",
      "Role-based login and CSV/PDF executive reports built from live data",
    ],
    challenge:
      "Separating what is implemented, what has been assessed and what is unverified, so the dashboard never implies compliance it cannot prove.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "HTMX", "Jinja2", "pytest"],
    screenshot: "/projects/securescope.webp",
    screenshotAlt: "SecureScope security dashboard with prioritised findings",
    demoUrl: null,
    evidence: [
      "59 tests, about 95% line coverage",
      "Strict type checks, Bandit and pip-audit pass with no findings",
      "Threat model (STRIDE) and security design review included",
    ],
  },
  {
    id: "secureship",
    name: "SecureShip",
    repo: "secureship",
    tagline: "A DevSecOps delivery pipeline you can run",
    purpose:
      "Ships a small CVSS v3.1 scoring API through a GitHub Actions pipeline in which every security and quality gate actually runs on every commit.",
    capabilities: [
      "Linting, type checking and unit tests as blocking gates",
      "Dependency audit, Semgrep and CodeQL static analysis, gitleaks secret scanning",
      "Hardened multi-stage container image scanned with Trivy",
      "Software bill of materials and build provenance attestation",
      "Documented limits of each control",
    ],
    challenge:
      "Making the gates strict enough to matter without pretending a green pipeline means the software is secure.",
    stack: ["TypeScript", "Fastify", "Docker", "GitHub Actions", "Trivy", "Semgrep", "CodeQL", "Syft"],
    screenshot: "/projects/secureship.webp",
    screenshotAlt: "SecureShip pipeline run with each security gate passing",
    demoUrl: null,
    evidence: [
      "57 tests, including CVSS v3.1 reference vectors",
      "Code-level gates run and pass locally; container gates run in GitHub Actions",
      "14 gates, each documented with what it cannot detect",
    ],
  },
  {
    id: "sentinelai",
    name: "SentinelAI",
    repo: "sentinelai",
    tagline: "Explainable anomaly detection for system telemetry",
    purpose:
      "Flags unusual behaviour in synthetic server telemetry and shows which signals made each event look unusual, so an analyst can decide whether it matters.",
    capabilities: [
      "Reproducible synthetic telemetry with labelled injected anomalies",
      "Robust statistical baseline compared with Isolation Forest",
      "Feature-level explanation for every flagged event",
      "REST API for scoring new data and a monitoring dashboard",
      "Evaluation metrics computed from a held-out test set",
    ],
    challenge:
      "Honest evaluation. Thresholds come from training data only, hyperparameters from a separate validation set, and the result is reported as it came out: the simple baseline beat Isolation Forest on this data.",
    stack: ["Python", "scikit-learn", "pandas", "FastAPI", "Chart.js", "pytest"],
    screenshot: "/projects/sentinelai.webp",
    screenshotAlt: "SentinelAI dashboard with an anomaly explanation panel",
    demoUrl: null,
    evidence: [
      "Baseline: F1 0.95, 13 of 13 episodes, 2 false alerts a day",
      "Isolation Forest: F1 0.80, 17.6 false alerts a day on the same data",
      "CI re-runs the evaluation and fails if results drift",
    ],
  },
];
