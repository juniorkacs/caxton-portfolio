/** Competency groups. Every item appears in the CV's competencies or experience. */
export const skillGroups = [
  {
    name: "Systems engineering",
    items: [
      "Model-Based Systems Engineering",
      "SysML / UML",
      "DoDAF",
      "Requirements analysis",
      "Traceability",
      "Verification & validation",
      "Interface management",
      "Trade studies",
    ],
  },
  {
    name: "Software architecture",
    items: [
      "Systems architecture",
      "Systems integration",
      "Real-time and embedded software",
      "API and backend integration",
      "Design documentation (SRS, SDD, ICD)",
    ],
  },
  {
    name: "Cybersecurity",
    items: [
      "RMF",
      "STIG",
      "NIST SP 800-53",
      "Threat modelling",
      "Vulnerability assessment",
      "Incident triage",
      "SIEM tuning",
      "Nessus / Qualys",
    ],
  },
  {
    name: "DevSecOps & cloud",
    items: ["CI/CD", "Agile", "Docker", "Kubernetes", "Cloud-native systems", "Linux (Ubuntu, RedHat, Yocto)"],
  },
  {
    name: "Data & AI",
    items: ["Python automation", "Data analysis & visualisation", "AI/ML integration", "Anomaly monitoring"],
  },
  {
    name: "Languages",
    items: ["Python", "C++", "C#", "Java", "Ada", "JavaScript", "PHP", "SQL"],
  },
] as const;
