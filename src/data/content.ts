// Centralized content for the ValuXpert experience.
// Keeping copy here (rather than scattered through components) is what lets
// the content/product team update the site without touching component code.

export const navLinks = [
  { label: 'Before / After', href: '#before-after' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#pipeline' },
  { label: 'HRMS', href: '#hrms' },
  { label: 'Field Tools', href: '#lifecycle' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const heroChips = [
  'Role-Based Access',
  'End-to-End Workflow',
  'Real-Time MIS',
  'Integrated HRMS',
];

export const trustLogos = [
  'Apex Valuations',
  'Precision Appraisals',
  'Urban Realty Experts',
  'Northbridge Capital',
  'Meridian Advisory',
  'Anchorline Bank',
];

export const problemCards = [
  {
    title: 'Scattered Case Data',
    description:
      'Stop hunting through emails and spreadsheets. Centralize every property detail instantly and search in one click.',
  },
  {
    title: 'Inconsistent Field Visits',
    description:
      'Standardize evidence collection. Real-time GPS tracking ensures teams are genuinely visiting designated sites.',
  },
  {
    title: 'No Real-Time Visibility',
    description:
      'Know exactly which cases are pending, drafting, or awaiting approval at a single glance with visual dashboards.',
  },
  {
    title: 'Disconnected HR & Muster',
    description:
      'Attendance, payroll, and field travel expenses should talk to each other automatically. Ours finally do.',
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
    id: 'overall',
    role: 'Overall Operation',
    sectionTag: 'SECTION 1 · OVERVIEW',
    headline: 'One command center replaces a dozen disconnected habits.',
    description: 'Moving from calls, spreadsheets, and scattered folders into a single operational ledger.',
    before: [
      { time: '09:00', label: 'Morning call roll' },
      { time: '11:00', label: 'Scattered receipts' },
      { time: '13:00', label: 'Manual status tracing' },
      { time: '15:00', label: 'Reactive callbacks' },
      { time: 'Day 2+', label: 'Excel report compilation' },
    ],
    after: [
      { time: '09:00', label: 'Live dashboard roll-call' },
      { time: '10:00', label: 'Digital case ledger' },
      { time: '11:30', label: 'Automatic status sync' },
      { time: '14:00', label: 'Proactive SLA alerts' },
      { time: 'Day 1', label: 'Instant MIS export' },
    ],
    beforeStatus: 'SLA Delay',
    afterStatus: 'SLA Perfected',
  },
  {
    id: 'case-management',
    role: 'Case Management',
    sectionTag: 'SECTION 2 · WORKFLOWS',
    headline: 'Case processing made structured, fast, and digitally organized.',
    description: 'Moving from manual registers, verbal checking, and unlinked phone details into unified system routing.',
    before: [
      { time: '09:00', label: 'Scattered receipt' },
      { time: '11:00', label: 'Registry copy-paste' },
      { time: '12:30', label: 'FE allocation logic' },
      { time: '14:30', label: 'Missing parameters' },
      { time: 'Day 5+', label: 'Manual status tracing' },
    ],
    after: [
      { time: '09:00', label: 'Digital case creation' },
      { time: '09:30', label: 'System-based allocation' },
      { time: '10:00', label: 'Auto-validated parameters' },
      { time: '11:00', label: 'Real-time case tracking' },
      { time: 'Day 1', label: 'Structured case closure' },
    ],
    beforeStatus: 'SLA Delay',
    afterStatus: 'SLA Perfected',
  },
  {
    id: 'field-executive',
    role: 'Field Executive',
    sectionTag: 'SECTION 3 · FIELD',
    headline: 'Field visits become verifiable instead of self-reported.',
    description: 'Moving from unverified photos on WhatsApp into geofenced, timestamped, tamper-proof evidence.',
    before: [
      { time: '10:00', label: 'Manual site notes' },
      { time: '12:00', label: 'WhatsApp photo upload' },
      { time: '13:30', label: 'Unverifiable location' },
      { time: '15:00', label: 'Lost or duplicate images' },
    ],
    after: [
      { time: '10:00', label: 'Geofenced check-in' },
      { time: '10:15', label: 'Watermarked site capture' },
      { time: '10:20', label: 'GPS compliance verified' },
      { time: '10:25', label: 'Case advances automatically' },
    ],
    beforeStatus: 'SLA Delay',
    afterStatus: 'SLA Perfected',
  },
  {
    id: 'district-manager',
    role: 'District Manager',
    sectionTag: 'SECTION 4 · PERFORMANCE',
    headline: 'Operational supervision shifts to proactive dashboard oversight.',
    description: 'Moving from calling up multiple districts and teams to real-time, proactive SLA and workload management.',
    before: [
      { time: '09:00', label: 'Morning call roll' },
      { time: '11:00', label: 'District audit tracking' },
      { time: '13:00', label: 'SLA delays hide out' },
      { time: '15:00', label: 'Reactive callbacks' },
      { time: 'Day 2+', label: 'Excel report compilation' },
    ],
    after: [
      { time: '09:00', label: 'Live regional dashboard' },
      { time: '09:30', label: 'Automated SLA flags' },
      { time: '10:00', label: 'Instant workload rebalance' },
      { time: '11:00', label: 'Proactive escalation' },
      { time: 'Day 1', label: 'One-click regional MIS' },
    ],
    beforeStatus: 'SLA Delay',
    afterStatus: 'SLA Perfected',
  },
  {
    id: 'relationship-coordinator',
    role: 'Relationship Coordinator',
    sectionTag: 'SECTION 5 · LIAISON',
    headline: 'Centralized tracking builds trust and delivers rapid client updates.',
    description: 'How client communications improve by replacing multi-party phone calls and scattered folders with unified case logs.',
    before: [
      { time: '09:00', label: 'Incoming client fire' },
      { time: '10:30', label: 'Diary checking loop' },
      { time: '12:00', label: 'Search chat archives' },
      { time: '14:00', label: 'Repeat call cycles' },
      { time: 'Day 3', label: 'Stale update reports' },
    ],
    after: [
      { time: '09:00', label: 'Unified client view' },
      { time: '09:15', label: 'One-click status export' },
      { time: '09:30', label: 'Automated client update' },
      { time: '10:00', label: 'Zero repeat calls' },
      { time: 'Day 1', label: 'Live status link' },
    ],
    beforeStatus: '30+ Call Detours',
    afterStatus: 'Centralized Visibility',
  },
  {
    id: 'lcto-desk',
    role: 'LCTO Desk',
    sectionTag: 'SECTION 6 · COMPLIANCE',
    headline: 'Technical review becomes a structured, cryptographically-logged audit.',
    description: 'Moving from manual document tracking into case-wise structured, tamper-evident compliance review.',
    before: [
      { time: '11:00', label: 'Manual document tracking' },
      { time: '13:00', label: 'Physical file cross-check' },
      { time: '15:00', label: 'Verbal sign-off' },
    ],
    after: [
      { time: '11:00', label: 'Digital compliance queue' },
      { time: '11:20', label: 'Structured checklist audit' },
      { time: '11:40', label: 'Cryptographic sign-off' },
    ],
    beforeStatus: 'SLA Delay',
    afterStatus: 'SLA Perfected',
  },
  {
    id: 'hrms-accounting',
    role: 'HRMS & Accounting',
    sectionTag: 'SECTION 7-8 · FINANCE & HR',
    headline: 'Connect on-field actions to automated payroll and instant billing.',
    description: 'Managing geofenced check-ins, automated mileage logs, and case-wise client invoice creation.',
    before: [
      { time: '09:00', label: 'Register attendance' },
      { time: '11:00', label: 'WhatsApp leave claims' },
      { time: '13:00', label: 'Manual billing check' },
      { time: '15:00', label: 'Mismatched tracking' },
      { time: 'Day 15', label: 'Manual reconciliations' },
    ],
    after: [
      { time: '09:00', label: 'Digital geolocated clock' },
      { time: '10:00', label: 'Auto-synced leave ledger' },
      { time: '11:30', label: 'Auto-invoicing' },
      { time: '14:00', label: 'Geotagged mileage track' },
      { time: 'Day 2', label: 'Interactive MIS charts' },
    ],
    beforeStatus: '15 Days Reconciliation',
    afterStatus: 'Real-Time Slips',
  },
];

export const comparisonRows = [
  { area: 'Case Entry', tag: 'operations', before: 'Manual entry in Excel/register', after: 'Digital case creation' },
  { area: 'Case Assignment', tag: 'operations', before: 'WhatsApp/call based', after: 'System-based assignment' },
  { area: 'Case Status', tag: 'operations', before: 'Manual follow-up', after: 'Real-time tracking' },
  { area: 'FE Site Updates', tag: 'field work', before: 'Photos and messages on WhatsApp', after: 'Case-wise upload and update' },
  { area: 'DM Monitoring', tag: 'management', before: 'Calls and manual reports', after: 'Dashboard and live tracking' },
  { area: 'RC Coordination', tag: 'liaison', before: 'Scattered follow-ups', after: 'Centralized case visibility' },
  { area: 'LCTO Legal Work', tag: 'compliance', before: 'Manual document tracking', after: 'Case-wise structured tracking' },
  { area: 'HRMS & Roster', tag: 'hr & team', before: 'Register/Excel/WhatsApp', after: 'Digital attendance, leave, employee data' },
  { area: 'Payroll Support', tag: 'hr & team', before: 'Manual calculation', after: 'HRMS data supported' },
  { area: 'Client Reports', tag: 'operations', before: 'Manually prepared and typed', after: 'Faster system-generated reporting' },
  { area: 'Management Control', tag: 'management', before: 'Dependent on verbal team updates', after: 'Live dashboard and analytics' },
  { area: 'Transparency', tag: 'quality', before: 'Extremely low, parameters hidden', after: 'Guaranteed high visibility' },
  { area: 'Processing Speed', tag: 'quality', before: 'Slow turn-around times (14+ Days)', after: 'Fast automated turnaround (4 Days)' },
  { area: 'Error / SLA Risk', tag: 'quality', before: 'High margin of human error', after: 'Minimised and controlled' },
];

export const sopStages = [
  {
    id: '01',
    role: 'Admin / COO',
    title: 'Email case creation',
    description: 'Assesses bank PDFs, verifies files, and creates a formal systemic dossier.',
    quote: '"Case arrives, created"',
  },
  {
    id: '02',
    role: 'Field Engineer',
    title: 'Live physical survey',
    description: 'Launches geofenced check-ins and watermarks site photos instantly.',
    quote: '"Vahan se field visit"',
  },
  {
    id: '03',
    role: 'Draft Lead / SDM',
    title: 'SLA distribution',
    description: 'Senior Draft Maker checks field data and assigns to DM.',
    quote: '"SDM DM ko allot"',
  },
  {
    id: '04',
    role: 'Draft Maker',
    title: 'Draft & calculations',
    description: 'Computes area dimensions, matches guideline land prices.',
    quote: '"DM draft create"',
  },
  {
    id: '05',
    role: 'Report Checker / RC',
    title: 'Report generation',
    description: 'RC compiles report, validates compliance guidelines and runs QA.',
    quote: '"RC report banata"',
  },
  {
    id: '06',
    role: 'Technical Officer / LCTO',
    title: 'Compliance review',
    description: 'LCTO verifies legal values and locks dossier cryptographically.',
    quote: '"LCTO verify karta"',
  },
  {
    id: '07',
    role: 'Partner Bank',
    title: 'Secured API handshake',
    description: 'Pushes sealed dossier directly to bank portals for credit decisions.',
    quote: '"Submit to bank"',
  },
];

export const sopNarrative =
  '"Pehele case email through COO ke pass jata hai, COO case create krti hai. Then FE ke pass jata hai vahan se site visit hoti hai. Then SDM DM ko case allot karta hai. Phir DM draft create karta hai, RC physical metrics se report banata hai, then LCTO verification verify check karta hai, and final submission bank ko ho jati hai."';

export type SystemRole = {
  id: string;
  name: string;
  description: string;
  scopeTag: string;
  isAdmin?: boolean;
};

export const systemRoles: SystemRole[] = [
  {
    id: 'admin',
    name: 'Admin',
    description: 'System configuration, multi-tenant database isolation, security policies, and workspace control.',
    scopeTag: 'SUPER ADMIN PORTAL',
    isAdmin: true,
  },
  {
    id: 'coo',
    name: 'COO',
    description: 'Case ingestion, bank PDF OCR processing, regional assignment, and CRM dispatch routing.',
    scopeTag: 'OPERATIONS CONTROL TOWER',
  },
  {
    id: 'field-engineer',
    name: 'Field Engineer',
    description: 'On-site physical validation, geofenced GPS validation, and photo captures.',
    scopeTag: 'MOBILE ACTION MODULE',
  },
  {
    id: 'draft-manager',
    name: 'Draft Manager',
    description: 'Computes guideline rate, building dimension calculations & layout drafting.',
    scopeTag: 'DRAFTING CALCULATION SUITE',
  },
  {
    id: 'report-checker',
    name: 'Report Checker',
    description: 'Double-blind math calculations QC, historical boundary checks & audits.',
    scopeTag: 'QA VALIDATION DESK',
  },
  {
    id: 'lcto',
    name: 'LCTO',
    description: 'Performs local technical checks, audits on-field GPS metrics, and coordinates checking.',
    scopeTag: 'LCTO AUDIT PANEL',
  },
  {
    id: 'approval-authority',
    name: 'Approval Authority',
    description: 'Seals final appraisal dossier, affixes cryptographically secured signature.',
    scopeTag: 'CRYPTOGRAPHIC HSM SIGN',
  },
  {
    id: 'bank-partner',
    name: 'Bank Partner',
    description: 'Instant auto-submission API handshakes, bank portal syncing & loan indexing.',
    scopeTag: 'SECURE SUBMISSIONS PORTAL',
  },
  {
    id: 'hr-accountant',
    name: 'HR & Accountant',
    description: 'Staff attendance muster, GPS petrol mileage logs, travel claims & payroll.',
    scopeTag: 'HRMS OPERATIONS LEDGER',
  },
];

export type PipelineNode = {
  id: string;
  code: string;
  title: string;
  icon: string;
  status: 'passed' | 'active' | 'queued';
};

export const pipelineNodes: PipelineNode[] = [
  { id: 'admin-controls', code: 'SYS', title: 'Admin Controls', icon: 'shield', status: 'passed' },
  { id: 'intake-ingestion', code: '01', title: 'Intake Ingestion', icon: 'inbox', status: 'passed' },
  { id: 'gps-survey', code: '02', title: 'On-Field GPS Survey', icon: 'pin', status: 'active' },
  { id: 'calculations-draft', code: '03', title: 'Calculations Draft', icon: 'edit', status: 'queued' },
  { id: 'checker-qa-audit', code: '04', title: 'Checker QA Audit', icon: 'check', status: 'queued' },
  { id: 'lcto-verification', code: '05', title: 'LCTO Verification', icon: 'eye', status: 'queued' },
  { id: 'hsm-sign', code: '06', title: 'HSM Cryptographic Sign', icon: 'lock', status: 'queued' },
  { id: 'bank-submission', code: '07', title: 'Bank Active Submission', icon: 'send', status: 'queued' },
  { id: 'claims-muster', code: 'POST', title: 'Claims & Muster', icon: 'users', status: 'queued' },
];

export const lifecycleSteps = [
  {
    id: '01',
    title: 'Case Creation',
    summary: 'Data entry and banker allocation.',
    detail:
      'Admin/COO ingests the bank file, verifies documentation, and creates a formal digital case dossier in seconds.',
    tags: ['Automatic SLA calculation', 'Digital Cryptographic Audit Log', 'Secured Bank API Gateway'],
  },
  {
    id: '02',
    title: 'Field Visit',
    summary: 'GPS-tracked site inspection.',
    detail: 'Mobile app forces GPS timestamp validation, compass verification, and watermark site photography. Works entirely offline.',
    tags: ['Automatic SLA calculation', 'Digital Cryptographic Audit Log', 'Secured Bank API Gateway Secure'],
  },
  {
    id: '03',
    title: 'Draft & Calc',
    summary: 'Automated value computation.',
    detail: 'Draft Manager applies guideline rate logic and building-dimension calculations against verified field data.',
    tags: ['Guideline rate engine', 'Dimension auto-calculation', 'Bank formula matching'],
  },
  {
    id: '04',
    title: 'Review',
    summary: 'Multi-level QA checkpoints.',
    detail: 'Double-blind technical calculation audits. Auto cross-checks for deviations and anomalies against typical market range markers. Real-time compliance logs.',
    tags: ['Automatic SLA calculation', 'Digital Cryptographic Audit Log', 'Secured Bank API Gateway Secure'],
  },
  {
    id: '05',
    title: 'Delivery',
    summary: 'Final report sent to bankers.',
    detail: 'LCTO-approved dossier is cryptographically sealed and pushed straight into the bank partner portal.',
    tags: ['HSM signature', 'Secure submissions portal', 'Loan indexing sync'],
  },
];

export const featureEcosystem = [
  {
    id: 'mis-reports',
    title: 'MIS Reports',
    description: 'Granular analytics on TAT, case volume, and team performance metrics with filterable data grids.',
    icon: 'chart',
  },
  {
    id: 'gps-tracking',
    title: 'GPS Field Tracking',
    description: 'Live movement tracking and location-validated, time-stamped site photography for field audits.',
    icon: 'pin',
  },
  {
    id: 'integrated-hrms',
    title: 'Integrated HRMS',
    description: 'Unified system for attendance, staff lists, custom leave requests, and field expense claims.',
    icon: 'users',
  },
  {
    id: 'bank-config',
    title: 'Bank-Wise Configuration',
    description: 'Switch report formatting and valuation calculation logic automatically based on individual bank formulas.',
    icon: 'bank',
  },
  {
    id: 'audit-trail',
    title: 'Audit Trail & Compliance',
    description: 'Pristine logs of every edit made by makers, checkers, and leaders on every single property case.',
    icon: 'file',
  },
  {
    id: 'property-intelligence',
    title: 'Property Intelligence',
    description: 'Historical comparable query engine pulls historical appraisals in matching geohashes or micro-markets.',
    icon: 'building',
  },
];

export const hrmsCards = [
  {
    title: 'Staff Management',
    description: 'Assign surveyor teams to geographical wards based on real-time case density filters.',
    icon: 'users',
  },
  {
    title: 'Attendance System',
    description: "Dynamic GPS coordinate and facial validation matches active surveyors' login times directly.",
    icon: 'clock',
  },
  {
    title: 'Leave Management',
    description: 'Instant request nodes automatically warn coordinators of delayed TAT pipeline vulnerabilities before approval.',
    icon: 'calendar',
  },
  {
    title: 'Payroll & Muster',
    description: 'Generate monthly legal compliance slips integrating automatically with GPS travel mile ledger.',
    icon: 'invoice',
  },
];

export const fieldToolFeatures = [
  {
    title: 'Real-Time GPS Validation',
    description: 'Geofenced check-ins ensure site visits are conducted exactly where requested.',
  },
  {
    title: 'Offline First Mode',
    description: 'Capture data and photos in basements or remote areas. Auto-sync when back in range.',
  },
  {
    title: 'Instant Photo Uploads',
    description: 'Optimized image compression for lightning-fast uploads directly to the case draft.',
  },
];

export const metrics = [
  { value: 40, suffix: '%', label: 'Faster TAT', description: 'Average reduction in case completion time across our network.' },
  { value: 100, suffix: '%', label: 'Field Quality', description: 'Hardware GPS-validated location and tamperproof photo logs.' },
  { value: 0, suffix: '', label: 'Real-Time', description: 'Instant pipeline status transparency for client banks.', display: 'Real-Time' },
  { value: 0, suffix: '', label: 'Data Silos', description: 'Single secure ledger of record from HR to on-premise appraisals.', display: 'Zero' },
];

export const testimonials = [
  {
    company: 'Apex Valuations',
    quote:
      'ValuXpert has completely eliminated our TAT bottlenecks. The automated bank-specific templates are a game changer.',
    name: 'Amit S.',
    title: 'Director (Empanelled with HDFC Bank)',
  },
  {
    company: 'Precision Appraisals',
    quote:
      'The GPS field tracking and integrated HRMS mean I finally have a real-time view of my entire field force across five cities.',
    name: 'Rajesh K.',
    title: 'Operations Head',
  },
  {
    company: 'Urban Realty Experts',
    quote:
      'Security and audit trails are critical for our bank audits. ValuXpert provides the enterprise-grade compliance we need to stay empanelled.',
    name: 'Sneha M.',
    title: 'Technical Head',
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    tagline: 'Perfect for boutique agencies',
    price: 'Custom',
    features: ['Up to 50 Cases/mo', '5 Field User Accounts', 'Standard MIS Reports'],
    cta: 'Choose Starter',
    featured: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing valuation firms',
    price: 'Quote',
    features: ['Unlimited Cases', 'Full HRMS Integration', 'GPS Live Tracking', 'Advanced Bank Formats'],
    cta: 'Choose Professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Multi-city & multi-company',
    price: 'Volume',
    features: ['Multi-City Setup', 'Custom API Access', 'Dedicated Success Manager'],
    cta: 'Contact Sales',
    featured: false,
  },
];

export const footerLinks = {
  solutions: ['Valuation Workflow', 'Field Management', 'Enterprise HRMS', 'MIS Reporting & BI'],
  company: ['About Us', 'Support Portal', 'Cookie Policy', 'Terms of Service'],
};
