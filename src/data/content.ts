export const navLinks = [
  { label: "Before / After", href: "#before-after" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#pipeline" },
  { label: "HRMS", href: "#hrms" },
  { label: "Field Tools", href: "#lifecycle" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const heroChips = [
  "Role-Based Access",
  "End-to-End Workflow",
  "Real-Time MIS",
  "Integrated HRMS",
];

export const trustLogos = [
  "Real Apple",
  "Madhukar Associate",
  "Bohra Associate",
];

export const problemCards = [
  {
    title: "Scattered Case Data",
    description:
      "Stop hunting through emails, excel and whatsApp. Centralize every property detail instantly and search in one click.",
  },
  {
    title: "Inconsistent Field Visits",
    description:
      "Standardize evidence collection. Real-time Geo Location Validation tracking ensures teams are genuinely visiting designated sites.",
  },
  {
    title: "No Real-Time Visibility",
    description:
      "Know exactly which cases are pending, drafting, or awaiting approval at a single glance with visual dashboards.",
  },
  {
    title: "Disconnected HR & Muster",
    description:
      "Attendance, payroll, and field travel expenses should talk to each other automatically. Ours finally do.",
  },
];

export type BeforeAfterMilestone = {
  time: string;
  label: string;
};

export type BeforeAfterTab = {
  id: string;
  role: string;
  sectionTag: string;
  headline: string;
  description: string;
  before: BeforeAfterMilestone[];
  after: BeforeAfterMilestone[];
  beforeStatus: string;
  afterStatus: string;
};

export const beforeAfterTabs: BeforeAfterTab[] = [
  {
    id: "overall",
    role: "Overall Operation",
    sectionTag: "SECTION 1 · OVERVIEW",
    headline: "One command center replaces a dozen disconnected habits.",
    description:
      "Moving from calls, spreadsheets, and scattered folders into a single operational ledger.",
    before: [
      { time: "09:00", label: "Morning call roll" },
      { time: "11:00", label: "Scattered receipts" },
      { time: "13:00", label: "Manual status tracing" },
      { time: "15:00", label: "Reactive callbacks" },
      { time: "Day 2+", label: "Excel report compilation" },
    ],
    after: [
      { time: "09:00", label: "Live dashboard roll-call" },
      { time: "10:00", label: "Digital case ledger" },
      { time: "11:30", label: "Automatic status sync" },
      { time: "14:00", label: "Proactive SLA alerts" },
      { time: "Day 1", label: "Instant MIS export" },
    ],
    beforeStatus: "SLA Delay",
    afterStatus: "SLA Perfected",
  },
  {
    id: "case-management",
    role: "Case Management",
    sectionTag: "SECTION 2 · WORKFLOWS",
    headline: "Case processing made structured, fast, and digitally organized.",
    description:
      "Moving from manual registers, verbal checking, and unlinked phone details into unified system routing.",
    before: [
      { time: "09:00", label: "Scattered receipt" },
      { time: "11:00", label: "Registry copy-paste" },
      { time: "12:30", label: "FE allocation logic" },
      { time: "14:30", label: "Missing parameters" },
      { time: "Day 5+", label: "Manual status tracing" },
    ],
    after: [
      { time: "09:00", label: "Digital case creation" },
      { time: "09:30", label: "System-based allocation" },
      { time: "10:00", label: "Auto-validated parameters" },
      { time: "11:00", label: "Real-time case tracking" },
      { time: "Day 1", label: "Structured case closure" },
    ],
    beforeStatus: "SLA Delay",
    afterStatus: "SLA Perfected",
  },
  {
    id: "field-executive",
    role: "Field Executive",
    sectionTag: "SECTION 3 · FIELD",
    headline: "Field visits become verifiable instead of self-reported.",
    description:
      "Moving from unverified photos on WhatsApp into geofenced, timestamped, tamper-proof evidence.",
    before: [
      { time: "10:00", label: "Manual site notes" },
      { time: "12:00", label: "WhatsApp photo upload" },
      { time: "13:30", label: "Unverifiable location" },
      { time: "15:00", label: "Lost or duplicate images" },
    ],
    after: [
      { time: "10:00", label: "Geofenced check-in" },
      { time: "10:15", label: "Watermarked site capture" },
      { time: "10:20", label: "Geo Location Validation compliance verified" },
      { time: "10:25", label: "Case advances automatically" },
    ],
    beforeStatus: "SLA Delay",
    afterStatus: "SLA Perfected",
  },
  {
    id: "draft-manager",
    role: "Draft Manager",
    sectionTag: "SECTION 4 · PERFORMANCE",
    headline:
      "Operational supervision shifts to proactive dashboard oversight.",
    description:
      "Moving from calling up multiple districts and teams to real-time, proactive SLA and workload management.",
    before: [
      { time: "09:00", label: "Morning call roll" },
      { time: "11:00", label: "District audit tracking" },
      { time: "13:00", label: "SLA delays hide out" },
      { time: "15:00", label: "Reactive callbacks" },
      { time: "Day 2+", label: "Excel report compilation" },
    ],
    after: [
      { time: "09:00", label: "Live regional dashboard" },
      { time: "09:30", label: "Automated SLA flags" },
      { time: "10:00", label: "Instant workload rebalance" },
      { time: "11:00", label: "Proactive escalation" },
      { time: "Day 1", label: "One-click regional MIS" },
    ],
    beforeStatus: "SLA Delay",
    afterStatus: "SLA Perfected",
  },
  {
    id: "report-coordinator",
    role: "Report Coordinator",
    sectionTag: "SECTION 5 · LIAISON",
    headline:
      "Centralized tracking builds trust and delivers rapid client updates.",
    description:
      "How client communications improve by replacing multi-party phone calls and scattered folders with unified case logs.",
    before: [
      { time: "09:00", label: "Incoming client fire" },
      { time: "10:30", label: "Diary checking loop" },
      { time: "12:00", label: "Search chat archives" },
      { time: "14:00", label: "Repeat call cycles" },
      { time: "Day 3", label: "Stale update reports" },
    ],
    after: [
      { time: "09:00", label: "Unified client view" },
      { time: "09:15", label: "One-click status export" },
      { time: "09:30", label: "Automated client update" },
      { time: "10:00", label: "Zero repeat calls" },
      { time: "Day 1", label: "Live status link" },
    ],
    beforeStatus: "30+ Call Detours",
    afterStatus: "Centralized Visibility",
  },
  {
    id: "lcto-desk",
    role: "LCTO Desk",
    sectionTag: "SECTION 6 · COMPLIANCE",
    headline:
      "Technical review becomes a structured, cryptographically-logged audit.",
    description:
      "Moving from manual document tracking into case-wise structured, tamper-evident compliance review.",
    before: [
      { time: "11:00", label: "Manual document tracking" },
      { time: "13:00", label: "Physical file cross-check" },
      { time: "15:00", label: "Verbal sign-off" },
    ],
    after: [
      { time: "11:00", label: "Digital compliance queue" },
      { time: "11:20", label: "Structured checklist audit" },
      { time: "11:40", label: "Cryptographic sign-off" },
    ],
    beforeStatus: "SLA Delay",
    afterStatus: "SLA Perfected",
  },
  {
    id: "hrms-accounting",
    role: "HRMS & Accounting",
    sectionTag: "SECTION 7-8 · FINANCE & HR",
    headline:
      "Connect on-field actions to automated payroll and instant billing.",
    description:
      "Managing geofenced check-ins, automated mileage logs, and case-wise client invoice creation.",
    before: [
      { time: "09:00", label: "Register attendance" },
      { time: "11:00", label: "WhatsApp leave claims" },
      { time: "13:00", label: "Manual billing check" },
      { time: "15:00", label: "Mismatched tracking" },
      { time: "Day 15", label: "Manual reconciliations" },
    ],
    after: [
      { time: "09:00", label: "Digital geolocated clock" },
      { time: "10:00", label: "Auto-synced leave ledger" },
      { time: "11:30", label: "Auto-invoicing" },
      { time: "14:00", label: "Geotagged mileage track" },
      { time: "Day 2", label: "Interactive MIS charts" },
    ],
    beforeStatus: "15 Days Reconciliation",
    afterStatus: "Real-Time Slips",
  },
];

export const comparisonRows = [
  {
    area: "Case Entry",
    tag: "operations",
    before: "Manual entry in Excel/register",
    after: "Digital case creation",
  },
  {
    area: "Case Assignment",
    tag: "operations",
    before: "WhatsApp/call based",
    after: "System-based assignment",
  },
  {
    area: "Case Status",
    tag: "operations",
    before: "Manual follow-up",
    after: "Real-time tracking",
  },
  {
    area: "FE Site Updates",
    tag: "field work",
    before: "Photos and messages on WhatsApp",
    after: "Case-wise upload and update",
  },
  {
    area: "DM Monitoring",
    tag: "management",
    before: "Calls and manual reports",
    after: "Dashboard and live tracking",
  },
  {
    area: "RC Coordination",
    tag: "liaison",
    before: "Scattered follow-ups",
    after: "Centralized case visibility",
  },
  {
    area: "LCTO Legal Work",
    tag: "compliance",
    before: "Manual document tracking",
    after: "Case-wise structured tracking",
  },
  {
    area: "HRMS & Roster",
    tag: "hr & team",
    before: "Register/Excel/WhatsApp",
    after: "Digital attendance, leave, employee data",
  },
  {
    area: "Payroll Support",
    tag: "hr & team",
    before: "Manual calculation",
    after: "HRMS data supported",
  },
  {
    area: "Client Reports",
    tag: "operations",
    before: "Manually prepared and typed",
    after: "Faster system-generated reporting",
  },
  {
    area: "Management Control",
    tag: "management",
    before: "Dependent on verbal team updates",
    after: "Live dashboard and analytics",
  },
  {
    area: "Transparency",
    tag: "quality",
    before: "Extremely low, parameters hidden",
    after: "Guaranteed high visibility",
  },
  {
    area: "Processing Speed",
    tag: "quality",
    before: "Slow turn-around times (14+ Days)",
    after: "Fast automated turnaround (4 Days)",
  },
  {
    area: "Error / SLA Risk",
    tag: "quality",
    before: "High margin of human error",
    after: "Minimised and controlled",
  },
];

export const sopStages = [
  {
    id: "01",
    role: "Admin / COO",
    title: "Email case creation",
    description:
      "Assesses bank PDFs, verifies files, and creates a formal systemic dossier.",
    quote: '"Case arrives, created"',
  },
  {
    id: "02",
    role: "Field Engineer",
    title: "Live physical survey",
    description:
      "Launches geofenced check-ins and watermarks site photos instantly.",
    quote: '"Vahan se field visit"',
  },
  {
    id: "03",
    role: "Draft Lead / SDM",
    title: "SLA distribution",
    description: "Senior Draft Maker checks field data and assigns to DM.",
    quote: '"SDM DM ko allot"',
  },
  {
    id: "04",
    role: "Draft Maker",
    title: "Draft & calculations",
    description: "Computes area dimensions, matches guideline land prices.",
    quote: '"DM draft create"',
  },
  {
    id: "05",
    role: "Report Checker / RC",
    title: "Report generation",
    description:
      "RC compiles report, validates compliance guidelines and runs QA.",
    quote: '"RC report banata"',
  },
  {
    id: "06",
    role: "Technical Officer / LCTO",
    title: "Compliance review",
    description:
      "LCTO verifies legal values and locks dossier cryptographically.",
    quote: '"LCTO verify karta"',
  },
  {
    id: "07",
    role: "Partner Bank",
    title: "Secured API handshake",
    description:
      "Pushes sealed dossier directly to bank portals for credit decisions.",
    quote: '"Submit to bank"',
  },
];

export const sopNarrative =
  "The process begins when the COO receives the case via email and creates it in the system. The case is then assigned to the Field Executive, who performs the site inspection. Once the inspection is completed, the SDM assigns the case to the Draft Maker, who prepares the draft report. The Report Checker then generates the final valuation report based on the collected site data and physical measurements. Next, the LCTO reviews and verifies the report for accuracy. After successful verification, the completed report is submitted to the bank.";
export type SystemRole = {
  id: string;
  name: string;
  description: string;
  scopeTag: string;
  isAdmin?: boolean;
};

export const systemRoles: SystemRole[] = [
  {
    id: "admin",
    name: "Admin",
    description:
      "System configuration, multi-tenant database isolation, security policies, and workspace control.",
    scopeTag: "SUPER ADMIN PORTAL",
    isAdmin: true,
  },
  {
    id: "coo",
    name: "COO",
    description:
      "Case ingestion, bank PDF OCR processing, regional assignment, and CRM dispatch routing.",
    scopeTag: "OPERATIONS CONTROL TOWER",
  },
  {
    id: "field-engineer",
    name: "Field Engineer",
    description:
      "On-site physical validation, geofenced Geo Location Validation, and photo captures.",
    scopeTag: "MOBILE ACTION MODULE",
  },
  {
    id: "draft-manager",
    name: "Draft Manager",
    description:
      "Computes guideline rate, building dimension calculations & layout drafting.",
    scopeTag: "DRAFTING CALCULATION SUITE",
  },
  {
    id: "report-checker",
    name: "Report Checker",
    description:
      "Double-blind math calculations QC, historical boundary checks & audits.",
    scopeTag: "QA VALIDATION DESK",
  },
  {
    id: "lcto",
    name: "LCTO",
    description:
      "Performs local technical checks, audits on-field Geo Location Validation metrics, and coordinates checking.",
    scopeTag: "LCTO AUDIT PANEL",
  },
  {
    id: "approval-authority",
    name: "Approval Authority",
    description:
      "Seals final appraisal dossier, affixes cryptographically secured signature.",
    scopeTag: "CRYPTOGRAPHIC HSM SIGN",
  },
  {
    id: "bank-partner",
    name: "Bank Partner",
    description:
      "Instant auto-submission API handshakes, bank portal syncing & loan indexing.",
    scopeTag: "SECURE SUBMISSIONS PORTAL",
  },
  {
    id: "hr-accountant",
    name: "HR & Accountant",
    description:
      "Staff attendance muster, Geo Location Validation petrol mileage logs, travel claims & payroll.",
    scopeTag: "HRMS OPERATIONS LEDGER",
  },
];

export type PipelineNode = {
  id: string;
  code: string;
  title: string;
  icon: string;
  status: "passed" | "active" | "queued";
};

export const pipelineNodes: PipelineNode[] = [
  {
    id: "admin-controls",
    code: "SYS",
    title: "Admin Controls",
    icon: "shield",
    status: "passed",
  },
  {
    id: "intake-ingestion",
    code: "01",
    title: "Intake Ingestion",
    icon: "inbox",
    status: "passed",
  },
  {
    id: "gps-survey",
    code: "02",
    title: "On-Field Geo Location Validation Survey",
    icon: "pin",
    status: "active",
  },
  {
    id: "calculations-draft",
    code: "03",
    title: "Calculations Draft",
    icon: "edit",
    status: "queued",
  },
  {
    id: "checker-qa-audit",
    code: "04",
    title: "Checker QA Audit",
    icon: "check",
    status: "queued",
  },
  {
    id: "lcto-verification",
    code: "05",
    title: "LCTO Verification",
    icon: "eye",
    status: "queued",
  },
  {
    id: "hsm-sign",
    code: "06",
    title: "HSM Cryptographic Sign",
    icon: "lock",
    status: "queued",
  },
  {
    id: "bank-submission",
    code: "07",
    title: "Bank Active Submission",
    icon: "send",
    status: "queued",
  },
  {
    id: "claims-muster",
    code: "POST",
    title: "Claims & Muster",
    icon: "users",
    status: "queued",
  },
];

export const lifecycleSteps = [
  {
    id: "01",
    title: "Open",
    summary: "Data entry and banker allocation.",
    detail:
      "Admin/COO ingests the bank file, verifies documentation, and creates a formal digital case dossier in seconds.",
    tags: [
      "Automatic SLA calculation",
      "Digital Cryptographic Audit Log",
      "Secured Bank API Gateway",
    ],
  },
  {
    id: "02",
    title: "Field Visit",
    summary: "Geo Location Validation-tracked site inspection.",
    detail:
      "Mobile app forces Geo Location Validation timestamp validation, compass verification, and watermark site photography. Works entirely offline.",
    tags: [
      "Automatic SLA calculation",
      "Digital Cryptographic Audit Log",
      "Secured Bank API Gateway Secure",
    ],
  },
  {
    id: "03",
    title: "Draft & Calc",
    summary: "Automated value computation.",
    detail:
      "Draft Manager applies guideline rate logic and building-dimension calculations against verified field data.",
    tags: [
      "Guideline rate engine",
      "Dimension auto-calculation",
      "Bank formula matching",
    ],
  },
  {
    id: "04",
    title: "Review",
    summary: "Multi-level QA checkpoints.",
    detail:
      "Double-blind technical calculation audits. Auto cross-checks for deviations and anomalies against typical market range markers. Real-time compliance logs.",
    tags: [
      "Automatic SLA calculation",
      "Digital Cryptographic Audit Log",
      "Secured Bank API Gateway Secure",
    ],
  },
  {
    id: "05",
    title: "LCTO",
    summary: "Local technical & compliance audit.",
    detail:
      "LCTO performs the final technical verification pass — legal value cross-checks, boundary and title record validation, and Geo Location Validation metrics audit — before sign-off.",
    tags: [
      "Legal value cross-check",
      "Cryptographic sign-off",
      "Immutable audit trail",
    ],
  },
  {
    id: "06",
    title: "Make Delivery",
    summary: "Final report sent to bankers.",
    detail:
      "LCTO-approved dossier is cryptographically sealed and pushed straight into the bank partner portal.",
    tags: ["HSM signature", "Secure submissions portal", "Loan indexing sync"],
  },
];

export const featureEcosystem = [
  {
    id: "mis-reports",
    title: "MIS Reports",
    description:
      "Granular analytics on TAT, case volume, and team performance metrics with filterable data grids.",
    icon: "chart",
  },
  {
    id: "gps-tracking",
    title: "Geo Location Validation Field Tracking",
    description:
      "Live movement tracking and location-validated, time-stamped site photography for field audits.",
    icon: "pin",
  },
  {
    id: "integrated-hrms",
    title: "Integrated HRMS",
    description:
      "Unified system for attendance, staff lists, custom leave requests, and field expense claims.",
    icon: "users",
  },
  {
    id: "bank-config",
    title: "Bank-Wise Configuration",
    description:
      "Switch report formatting and valuation calculation logic automatically based on individual bank formulas.",
    icon: "bank",
  },
  {
    id: "audit-trail",
    title: "Audit Trail & Compliance",
    description:
      "Pristine logs of every edit made by makers, checkers, and leaders on every single property case.",
    icon: "file",
  },
  {
    id: "property-intelligence",
    title: "Property Intelligence",
    description:
      "Historical comparable query engine pulls historical appraisals in matching geohashes or micro-markets.",
    icon: "building",
  },
];

export const hrmsCards = [
  {
    title: "Staff Management",
    description:
      "Assign surveyor teams to geographical wards based on real-time case density filters.",
    icon: "users",
  },
  {
    title: "Attendance System",
    description:
      "Dynamic Geo Location Validation coordinate and facial validation matches active surveyors' login times directly.",
    icon: "clock",
  },
  {
    title: "Leave Management",
    description:
      "Instant request nodes automatically warn coordinators of delayed TAT pipeline vulnerabilities before approval.",
    icon: "calendar",
  },
  {
    title: "Payroll & Muster",
    description:
      "Generate monthly legal compliance slips integrating automatically with Geo Location Validation travel mile ledger.",
    icon: "invoice",
  },
];

export const fieldToolFeatures = [
  {
    title: "Real-Time Geo Location Validation",
    description:
      "Geofenced check-ins ensure site visits are conducted exactly where requested.",
  },
  {
    title: "Smart Workforce Management",
    description:
      "Organize your workforce with built-in HRMS tools for employee records, attendance, leave, and operational efficiency.",
  },
  {
    title: "Instant Photo Uploads",
    description:
      "Optimized image compression for lightning-fast uploads directly to the case draft.",
  },
];

export const metrics = [
  {
    value: 40,
    suffix: "%",
    label: "Faster TAT",
    description:
      "Average reduction in case completion time across our network.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Field Quality",
    description:
      "Hardware-based Geo Location Validation and tamperproof photo logs.",
  },
  {
    value: 0,
    suffix: "",
    label: "Real-Time",
    description: "Instant pipeline status transparency for client banks.",
    display: "Real-Time",
  },
  {
    value: 0,
    suffix: "",
    label: "Data Silos",
    description:
      "Single secure ledger of record from HR to on-premise appraisals.",
    display: "Zero",
  },
];

export const testimonials = [
  {
    company: "Real Apple",
    quote:
      "ValuXpert has completely eliminated our TAT bottlenecks. The automated bank-specific templates are a game changer.",
    name: "Gaurav Aryan",
    title: "Director",
  },
  {
    company: "Madhukar Associate",
    quote:
      "The Geo Location Validation field tracking and integrated HRMS mean I finally have a real-time view of my entire field force across five cities.",
    name: "Anuj Mehta",
    title: "Director",
  },
  {
    company: "CORACH",
    quote:
      "Security and audit trails are critical for our bank audits. ValuXpert provides the enterprise-grade compliance we need to stay empanelled.",
    name: "Manish Kumar Patidar",
    title: "HR Head",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    tagline: "Perfect for boutique agencies",
    price: "Custom",
    features: [
      "Up to 50 Cases/mo",
      "5 Field User Accounts",
      "Standard MIS Reports",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Professional",
    tagline: "For growing valuation firms",
    price: "Quote",
    features: [
      "Unlimited Cases",
      "Full HRMS Integration",
      "Geo Location Validation Live Tracking",
      "Advanced Bank Formats",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Multi-city & multi-company",
    price: "Volume",
    features: [
      "Multi-City Setup",
      "Custom API Access",
      "Dedicated Success Manager",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const footerLinks = {
  solutions: [
    {
      label: "Valuation Workflow",
      href: "#pipeline",
    },
    {
      label: "Field Management",
      href: "#lifecycle",
    },
    {
      label: "Enterprise HRMS",
      href: "#hrms",
    },
    {
      label: "MIS Reporting & BI",
      href: "#features",
    },
  ],

  company: [
    {
      label: "About Us",
      modalContent:
        "ValuXpert is built on premium cloud infrastructure with enterprise-grade security standards, delivering a secure, scalable, and reliable valuation platform.",
    },
    {
      label: "Support Portal",
      modalContent:
        "For fast support, email us at info@valuxpert.in. Our support team will get back to you as soon as possible.",
    },
    {
      label: "Cookie Policy",
      modalContent:
        "ValuXpert uses secure cookies only to optimize application performance, improve user experience, and maintain essential functionality.",
    },
    {
      label: "Terms of Service",
      modalContent:
        "Our Service Level Agreement (SLA) is designed to deliver reliable performance with a 99.9% API uptime commitment.",
    },
  ],
};

export type DeskStep = {
  label: string;
  detail: string;
};

export type Desk = {
  id: string;
  role: string;
  steps: DeskStep[];
  note: {
    title: string;
    body: string;
  };
};

export const desks: Desk[] = [
  {
    id: "field-engineer",
    role: "Field Engineer",
    steps: [
      {
        label: "Locating via GNSS",
        detail: "Awaiting satellite lock…",
      },
      {
        label: "Geofence matched",
        detail: "Aim camera at property boundary.",
      },
      {
        label: "Watermarked site capture",
        detail: "Photo stamped with coordinates and timestamp.",
      },
      {
        label: "Geofence compliance check passed",
        detail: "Location variance within tolerance.",
      },
      {
        label: "Survey encrypted",
        detail: "Case routed to Draft Manager.",
      },
    ],
    note: {
      title: "Anti-Fraud Tamper Safeguard",
      body: "ValuXpert disables gallery uploads and captures photos directly inside the app with Geo Location Validation coordinates, timestamps and device verification.",
    },
  },

  {
    id: "draft-manager",
    role: "Draft Manager",
    steps: [
      {
        label: "Field packet received",
        detail: "Geo Location Validation survey and images synced.",
      },
      {
        label: "Guideline rate matched",
        detail: "District rates verified.",
      },
      {
        label: "Area calculations complete",
        detail: "Built-up area reconciled.",
      },
      {
        label: "Draft prepared",
        detail: "Forwarded to Report Checker.",
      },
    ],
    note: {
      title: "Bank Formula Engine",
      body: "Every valuation automatically follows the selected bank's calculation and report format.",
    },
  },

  {
    id: "report-checker",
    role: "Report Checker",
    steps: [
      {
        label: "Draft received",
        detail: "Checking calculations.",
      },
      {
        label: "QA verification",
        detail: "Formula validation completed.",
      },
      {
        label: "Compliance review",
        detail: "Quality checks passed.",
      },
      {
        label: "Report approved",
        detail: "Forwarded to LCTO.",
      },
    ],
    note: {
      title: "Quality Assurance",
      body: "Every valuation passes multiple validation checkpoints before reaching technical approval.",
    },
  },

  {
    id: "lcto",
    role: "LCTO",
    steps: [
      {
        label: "Compliance queue opened",
        detail: "Report received.",
      },
      {
        label: "Legal verification",
        detail: "Boundary and title verified.",
      },
      {
        label: "Geo Location Validation audit",
        detail: "Coordinates revalidated.",
      },
      {
        label: "Digital sign-off",
        detail: "Submitted to Bank.",
      },
    ],
    note: {
      title: "Immutable Audit Log",
      body: "Every LCTO approval is cryptographically recorded for complete compliance and traceability.",
    },
  },

  {
    id: "hr-accountant",
    role: "HR & Accountant",
    steps: [
      {
        label: "Attendance synced",
        detail: "Geo Location Validation attendance recorded.",
      },
      {
        label: "Mileage calculated",
        detail: "Travel claims processed.",
      },
      {
        label: "Payroll generated",
        detail: "Salary prepared.",
      },
      {
        label: "Invoices generated",
        detail: "Client billing completed.",
      },
    ],
    note: {
      title: "Integrated HRMS",
      body: "Attendance, payroll, expenses and invoicing are generated automatically from operational data.",
    },
  },
];
