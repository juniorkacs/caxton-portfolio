/**
 * Professional experience, taken from the CV. Employer names, titles and dates
 * are copied exactly. Highlights are selected CV bullets, lightly shortened.
 *
 * Deliberately excluded until confirmed (see VERIFY.md):
 *  - bullets containing template wording ("or", "if applicable")
 *  - Hood College bullets about classified networks / intelligence analysts
 *  - any mission, program or operational detail
 */
export type Role = {
  title: string;
  employer: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Systems Engineer (MBSE)",
    employer: "Department of Defense",
    start: "June 2024",
    end: "Present",
    highlights: [
      "Translates complex system requirements into formal MBSE models with traceability and validation across the lifecycle.",
      "Creates SysML/UML activity, sequence, block definition and internal block diagrams.",
      "Leads system architecture definition, interface management and baseline control.",
      "Aligns work with DoDAF, RMF cybersecurity requirements and MIL-STDs.",
    ],
  },
  {
    title: "Senior System/Software Engineer",
    employer: "Boeing",
    start: "Aug 2022",
    end: "June 2024",
    highlights: [
      "Designed, developed and integrated mission-critical software for aerospace and defense systems.",
      "Built Python test frameworks and automation scripts for verification and data analysis.",
      "Led design reviews (SRR, PDR, CDR) and managed requirements traceability from system design to test.",
      "Drove adoption of Agile, DevSecOps and MBSE practices.",
    ],
  },
  {
    title: "System/Software Engineer",
    employer: "DoD / National Security Agency",
    start: "Apr 2021",
    end: "Aug 2022",
    highlights: [
      "Conducted vulnerability assessments and implemented security features in line with RMF and STIGs.",
      "Developed and executed automated test plans supporting verification and validation.",
      "Authored software design descriptions, interface control documents and test plans.",
    ],
  },
  {
    title: "Cyber / Systems Software Engineer",
    employer: "Northrop Grumman",
    start: "Apr 2020",
    end: "Apr 2021",
    highlights: [
      "Designed secure software architectures under DoD cybersecurity frameworks.",
      "Conducted threat modelling, vulnerability analysis and risk assessments.",
      "Integrated intrusion detection and anomaly monitoring within embedded systems.",
    ],
  },
  {
    title: "Cybersecurity Engineer / Analyst",
    employer: "AmTote International Inc.",
    start: "Mar 2018",
    end: "Apr 2020",
    highlights: [
      "Triaged, contained and remediated enterprise security incidents across IDS/IPS, EDR and DLP.",
      "Tuned SIEM and detection systems to reduce false positives.",
      "Monitored patch and vulnerability management using Nessus and Qualys.",
    ],
  },
  {
    title: "System/Software Application Developer",
    employer: "Hood College",
    start: "Apr 2017",
    end: "Mar 2018",
    highlights: [
      "Designed, developed and maintained systems supporting academic and administrative functions.",
      "Automated campus workflows using Java, Python, PHP, JavaScript and SQL.",
      "Customised SIS and LMS systems and built mobile-friendly web applications.",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Beyond Care",
    start: "Jun 2014",
    end: "Apr 2017",
    highlights: [
      "Developed secure healthcare and telemedicine applications, including EHRs and patient portals.",
      "Built APIs and backend integrations for healthcare databases.",
      "Supported HIPAA compliance with encryption, role-based access control and secure data handling.",
    ],
  },
];

export const education = [
  { degree: "Doctor of Science, Information Technology", school: "Towson University", year: null },
  { degree: "M.S. Computer Science (Data Science)", school: "Towson University", year: "2020" },
  {
    degree: "B.S. Computer Science",
    school: "University of Maryland Baltimore County / Towson University",
    year: "2017",
  },
] as const;

/** No certifications are listed on the CV. Add only verified credentials here. */
export const certifications: { name: string; issuer: string; year: string }[] = [];
