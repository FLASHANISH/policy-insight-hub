export interface Policy {
  id: string;
  name: string;
  file: string;
  category: string;
  analyzed: boolean;
}

export interface Rule {
  id: string;
  policyId: string;
  title: string;
  description: string;
  category: string;
  stakeholders: string[];
  status: "new" | "read";
}

export interface StakeholderImpact {
  name: string;
  score: number;
  type: "benefit" | "cost" | "neutral";
}

export interface GraphNode {
  id: string;
  label: string;
  type: "government" | "citizen" | "corporate" | "msme" | "student";
}

export interface GraphEdge {
  from: string;
  to: string;
  label: string;
}

function categorize(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.includes("ev")) return "Electric Vehicle";
  if (lower.includes("data") || lower.includes("dpdp")) return "Data Protection";
  if (lower.includes("education") || lower.includes("exam")) return "Education";
  if (lower.includes("startup")) return "Startup Policy";
  return "General Policy";
}

function humanName(filename: string): string {
  return filename
    .replace(/\.(pdf|docx?)$/i, "")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/^\d+\s+[A-Z]\s+/, "")
    .replace(/^\d+\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

const policyFiles = [
  "1_A_UP_EV_Policy_2022_English_Version.pdf",
  "1_UP_EV_Policy_2022_Hindi_Version.pdf",
  "Corrigendum_to_Digital_Personal_Data_Protection_Rules_2025.pdf",
  "Digital_Personal_Data_Protection_Rules_2025.pdf",
  "Education_Exam_Reform_Policy.pdf",
  "Enforcement_Timeline_for_the_DPDP_Act.pdf",
  "Establishment_of_the_Data_Protection_Board_of_India.pdf",
  "EV_Non_Individual_Guidline.pdf",
  "India_Startup_Law_Policy_Guidebook.pdf",
  "pure_ev_5_nov_2025.pdf",
  "GO-14-July-2023.pdf",
  "Decision_Regarding_Number_of_Members_in_the_Data_Protection_Board_of_India.pdf",
  "affidevit_format.docx",
];

export const policies: Policy[] = policyFiles.map((file, i) => ({
  id: `policy-${i}`,
  name: humanName(file),
  file,
  category: categorize(file),
  analyzed: false,
}));

// Mock rules for every policy
export const mockRulesForPolicy: Record<string, Rule[]> = {
  "policy-0": [
    { id: "r1", policyId: "policy-0", title: "EV Buyer Subsidy", description: "Citizens purchasing EV vehicles receive subsidy up to ₹1,50,000.", category: "Electric Vehicle", stakeholders: ["Citizens", "Government"], status: "new" },
    { id: "r2", policyId: "policy-0", title: "EV Manufacturer Incentive", description: "Manufacturers setting up plants in UP get 15% capital subsidy.", category: "Electric Vehicle", stakeholders: ["Corporates", "Government"], status: "new" },
    { id: "r3", policyId: "policy-0", title: "Road Tax Exemption", description: "All EVs registered in UP exempt from road tax for 5 years.", category: "Electric Vehicle", stakeholders: ["Citizens", "Government"], status: "new" },
  ],
  "policy-1": [
    { id: "r1h", policyId: "policy-1", title: "ईवी क्रेता सब्सिडी", description: "ईवी वाहन खरीदने वाले नागरिकों को ₹1,50,000 तक की सब्सिडी।", category: "Electric Vehicle", stakeholders: ["Citizens", "Government"], status: "new" },
    { id: "r2h", policyId: "policy-1", title: "चार्जिंग इंफ्रास्ट्रक्चर", description: "राज्य सरकार प्रमुख शहरों में चार्जिंग स्टेशन स्थापित करेगी।", category: "Electric Vehicle", stakeholders: ["Citizens", "Government", "Corporates"], status: "new" },
  ],
  "policy-2": [
    { id: "r10", policyId: "policy-2", title: "Corrigendum Amendment", description: "Corrections to DPDP Rules 2025 regarding data fiduciary obligations.", category: "Data Protection", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },
    { id: "r11", policyId: "policy-2", title: "Extended Compliance Timeline", description: "Data fiduciaries get additional 6 months to comply with amended provisions.", category: "Data Protection", stakeholders: ["Corporates", "Government"], status: "new" },
  ],
  "policy-3": [
    { id: "r4", policyId: "policy-3", title: "Data Consent Requirement", description: "Every data fiduciary must obtain verifiable consent before processing personal data.", category: "Data Protection", stakeholders: ["Citizens", "Corporates"], status: "new" },
    { id: "r5", policyId: "policy-3", title: "Right to Erasure", description: "Data principals can request complete erasure of their personal data.", category: "Data Protection", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },
    { id: "r5b", policyId: "policy-3", title: "Data Breach Notification", description: "Data fiduciaries must notify the Board and affected individuals within 72 hours of a breach.", category: "Data Protection", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },
  ],
  "policy-4": [
    { id: "r6", policyId: "policy-4", title: "Semester System Mandate", description: "All higher education institutions must adopt semester-based examination.", category: "Education", stakeholders: ["Students", "Government"], status: "new" },
    { id: "r7", policyId: "policy-4", title: "Digital Examination Platform", description: "Government to establish centralized digital exam platform by 2026.", category: "Education", stakeholders: ["Students", "Government", "Corporates"], status: "new" },
    { id: "r7b", policyId: "policy-4", title: "Open Book Examination", description: "Certain courses may adopt open book examination to test analytical skills.", category: "Education", stakeholders: ["Students", "Government"], status: "new" },
  ],
  "policy-5": [
    { id: "r12", policyId: "policy-5", title: "Phase-wise Enforcement", description: "DPDP Act provisions enforced in 3 phases over 18 months.", category: "Data Protection", stakeholders: ["Corporates", "Government"], status: "new" },
    { id: "r13", policyId: "policy-5", title: "Penalty Framework Timeline", description: "Monetary penalties applicable from Phase 2 onwards for non-compliance.", category: "Data Protection", stakeholders: ["Corporates", "Government"], status: "new" },
  ],
  "policy-6": [
    { id: "r14", policyId: "policy-6", title: "Board Composition", description: "Data Protection Board to consist of a Chairperson and up to 6 members.", category: "Data Protection", stakeholders: ["Government"], status: "new" },
    { id: "r15", policyId: "policy-6", title: "Digital-First Adjudication", description: "All complaints and hearings to be conducted through digital-first processes.", category: "Data Protection", stakeholders: ["Citizens", "Government"], status: "new" },
  ],
  "policy-7": [
    { id: "r16", policyId: "policy-7", title: "Fleet EV Conversion", description: "Non-individual entities must convert 20% of fleet to EV by 2027.", category: "Electric Vehicle", stakeholders: ["Corporates", "Government"], status: "new" },
    { id: "r17", policyId: "policy-7", title: "Corporate EV Incentive", description: "Corporates receive 10% subsidy on bulk EV purchases exceeding 50 units.", category: "Electric Vehicle", stakeholders: ["Corporates", "Government"], status: "new" },
  ],
  "policy-8": [
    { id: "r8", policyId: "policy-8", title: "Startup Tax Holiday", description: "Eligible startups get 3-year income tax exemption from incorporation.", category: "Startup Policy", stakeholders: ["MSMEs", "Government"], status: "new" },
    { id: "r9", policyId: "policy-8", title: "Self-Certification Compliance", description: "Startups can self-certify compliance for labour and environment laws.", category: "Startup Policy", stakeholders: ["MSMEs", "Government"], status: "new" },
    { id: "r9b", policyId: "policy-8", title: "Fund of Funds", description: "Government commits ₹10,000 crore Fund of Funds for startup equity funding.", category: "Startup Policy", stakeholders: ["MSMEs", "Government", "Corporates"], status: "new" },
  ],
  "policy-9": [
    { id: "r18", policyId: "policy-9", title: "Pure EV Registration", description: "Streamlined registration process for pure electric vehicles effective Nov 2025.", category: "Electric Vehicle", stakeholders: ["Citizens", "Government"], status: "new" },
    { id: "r19", policyId: "policy-9", title: "Battery Warranty Standards", description: "Minimum 5-year / 1,00,000 km warranty mandatory for EV batteries.", category: "Electric Vehicle", stakeholders: ["Citizens", "Corporates"], status: "new" },
  ],
  "policy-10": [
    { id: "r20", policyId: "policy-10", title: "Government Order Provisions", description: "Administrative directives issued under GO dated 14 July 2023.", category: "General Policy", stakeholders: ["Government", "Citizens"], status: "new" },
    { id: "r21", policyId: "policy-10", title: "Implementation Guidelines", description: "State departments to comply with revised operational guidelines within 90 days.", category: "General Policy", stakeholders: ["Government"], status: "new" },
  ],
  "policy-11": [
    { id: "r22", policyId: "policy-11", title: "Board Member Count", description: "Data Protection Board shall have minimum 3 and maximum 7 members including Chairperson.", category: "Data Protection", stakeholders: ["Government"], status: "new" },
    { id: "r23", policyId: "policy-11", title: "Member Qualification", description: "Members must have expertise in law, data governance, or technology.", category: "Data Protection", stakeholders: ["Government"], status: "new" },
  ],
  "policy-12": [
    { id: "r24", policyId: "policy-12", title: "Affidavit Format Standard", description: "Prescribed format for affidavits in policy-related submissions.", category: "General Policy", stakeholders: ["Citizens", "Government"], status: "new" },
    { id: "r25", policyId: "policy-12", title: "Notarization Requirement", description: "All affidavits must be notarized by a registered notary public.", category: "General Policy", stakeholders: ["Citizens"], status: "new" },
  ],
};

export const stakeholderImpacts: Record<string, StakeholderImpact[]> = {
  "Electric Vehicle": [
    { name: "Citizens", score: 0.72, type: "benefit" },
    { name: "MSME Growth", score: 0.61, type: "benefit" },
    { name: "Corporate Compliance Cost", score: 0.38, type: "cost" },
    { name: "Government Fiscal Pressure", score: 0.45, type: "cost" },
  ],
  "Data Protection": [
    { name: "Citizens Privacy", score: 0.85, type: "benefit" },
    { name: "Corporate Compliance Cost", score: 0.67, type: "cost" },
    { name: "Government Oversight", score: 0.55, type: "neutral" },
    { name: "Startup Burden", score: 0.42, type: "cost" },
  ],
  Education: [
    { name: "Student Access", score: 0.78, type: "benefit" },
    { name: "Institutional Reform Cost", score: 0.51, type: "cost" },
    { name: "Government Investment", score: 0.63, type: "cost" },
    { name: "Employment Readiness", score: 0.69, type: "benefit" },
  ],
  "Startup Policy": [
    { name: "MSME Growth", score: 0.81, type: "benefit" },
    { name: "Employment Generation", score: 0.74, type: "benefit" },
    { name: "Government Revenue Loss", score: 0.35, type: "cost" },
    { name: "Innovation Index", score: 0.88, type: "benefit" },
  ],
  "General Policy": [
    { name: "Administrative Efficiency", score: 0.65, type: "benefit" },
    { name: "Compliance Burden", score: 0.40, type: "cost" },
    { name: "Citizen Awareness", score: 0.58, type: "benefit" },
    { name: "Implementation Cost", score: 0.47, type: "cost" },
  ],
};

export const stakeholderGraph: { nodes: GraphNode[]; edges: GraphEdge[] } = {
  nodes: [
    { id: "gov", label: "Government", type: "government" },
    { id: "cit", label: "Citizens", type: "citizen" },
    { id: "corp", label: "Corporates", type: "corporate" },
    { id: "msme", label: "MSMEs", type: "msme" },
    { id: "stu", label: "Students", type: "student" },
  ],
  edges: [
    { from: "gov", to: "cit", label: "Subsidy" },
    { from: "gov", to: "msme", label: "Tax Holiday" },
    { from: "cit", to: "msme", label: "Market Demand" },
    { from: "gov", to: "corp", label: "Regulation" },
    { from: "corp", to: "msme", label: "Supply Chain" },
    { from: "gov", to: "stu", label: "Education Reform" },
    { from: "stu", to: "corp", label: "Talent Pipeline" },
  ],
};

// Pre-loaded rules from all website sections (visible immediately in Rules & Updates pages)
export const preloadedRules: Rule[] = [
  // Tax Policy Rules
  { id: "tax-1", policyId: "section-tax", title: "New Tax Regime Default", description: "New tax regime becomes default from FY 2025-26. Taxpayers must explicitly opt for old regime.", category: "Tax Policy", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "tax-2", policyId: "section-tax", title: "Standard Deduction ₹75,000", description: "Standard deduction increased to ₹75,000 for salaried individuals under new tax regime.", category: "Tax Policy", stakeholders: ["Citizens"], status: "new" },
  { id: "tax-3", policyId: "section-tax", title: "Capital Gains Tax Revision", description: "LTCG on listed equity at 12.5% beyond ₹1.25 lakh exemption. STCG at 20%.", category: "Tax Policy", stakeholders: ["Citizens", "Corporates"], status: "new" },

  // Road Rules
  { id: "road-1", policyId: "section-road", title: "Speed Limit Enforcement", description: "National highways 100 km/h (cars), 80 km/h (two-wheelers), 60 km/h (heavy vehicles). City: 50 km/h.", category: "Road Rules", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "road-2", policyId: "section-road", title: "Drink & Drive Penalty", description: "Blood alcohol max 30mg/100ml. First offence: ₹10,000 fine and/or 6 months imprisonment.", category: "Road Rules", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "road-3", policyId: "section-road", title: "No Mobile While Driving", description: "Using mobile phones prohibited while driving. Penalty: ₹5,000 first offence, license suspension for repeat.", category: "Road Rules", stakeholders: ["Citizens"], status: "new" },

  // IPS Rules
  { id: "ips-1", policyId: "section-ips", title: "IPS Conduct Rules 1968", description: "Code of conduct including integrity, devotion to duty, and political neutrality for IPS officers.", category: "IPS Rules", stakeholders: ["Government"], status: "new" },
  { id: "ips-2", policyId: "section-ips", title: "IPS Discipline & Appeal", description: "Disciplinary procedures and appeal mechanisms for IPS officers covering inquiry and penalties.", category: "IPS Rules", stakeholders: ["Government"], status: "new" },

  // AICTE Rules
  { id: "aicte-1", policyId: "section-aicte", title: "AICTE Approval Process 2026-27", description: "Mandatory approval for all technical institutions with infrastructure and faculty requirements.", category: "AICTE Rules", stakeholders: ["Students", "Government"], status: "new" },
  { id: "aicte-2", policyId: "section-aicte", title: "Anti-Ragging Regulations", description: "Strict UGC/AICTE guidelines with mandatory anti-ragging committee, helpline, and programs.", category: "AICTE Rules", stakeholders: ["Students", "Government"], status: "new" },

  // Cyber Crime
  { id: "cyber-1", policyId: "section-cyber", title: "Hacking Penalty - Section 66 IT Act", description: "Unauthorized access to computer systems: penalties up to 3 years imprisonment and/or ₹5 lakh fine.", category: "Cyber Crime", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },
  { id: "cyber-2", policyId: "section-cyber", title: "Online Financial Fraud Laws", description: "Phishing, UPI fraud, investment scams covered under IT Act 66C, 66D and IPC 420.", category: "Cyber Crime", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "cyber-3", policyId: "section-cyber", title: "Child Protection Online", description: "Enhanced penalties up to life imprisonment for child exploitation under IT Act 67B and POCSO Act.", category: "Cyber Crime", stakeholders: ["Citizens", "Government"], status: "new" },

  // AI Governance
  { id: "ai-1", policyId: "section-ai", title: "IndiaAI Mission ₹10,372 Crore", description: "Government allocates ₹10,372 crore for AI compute infrastructure, foundational models, and datasets.", category: "AI Governance", stakeholders: ["Corporates", "Government", "MSMEs"], status: "new" },
  { id: "ai-2", policyId: "section-ai", title: "Seven Sutras of Responsible AI", description: "Mandatory principles: Safety, Inclusive Innovation, Transparency, Privacy, Accountability, Digital Governance, Positive Purpose.", category: "AI Governance", stakeholders: ["Corporates", "Government", "Citizens"], status: "new" },
  { id: "ai-3", policyId: "section-ai", title: "AI Transparency Mandate", description: "AI-driven decisions affecting citizens must be explainable. Algorithmic impact assessments mandatory for government AI.", category: "AI Governance", stakeholders: ["Citizens", "Government"], status: "new" },

  // DPDP Rules
  { id: "dpdp-1", policyId: "section-dpdp", title: "Verifiable Consent Required", description: "Every data fiduciary must obtain verifiable consent before processing personal data under DPDP Rules 2025.", category: "DPDP Rules", stakeholders: ["Citizens", "Corporates"], status: "new" },
  { id: "dpdp-2", policyId: "section-dpdp", title: "Penalties Up to ₹250 Crore", description: "Non-compliance with DPDP Act can attract penalties up to ₹250 crore per instance.", category: "DPDP Rules", stakeholders: ["Corporates", "Government"], status: "new" },
  { id: "dpdp-3", policyId: "section-dpdp", title: "72-Hour Breach Notification", description: "Data fiduciaries must notify the Data Protection Board and affected individuals within 72 hours of a breach.", category: "DPDP Rules", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },

  // Insurance Policy
  { id: "ins-1", policyId: "section-insurance", title: "Arogya Sanjeevani Standard Product", description: "IRDAI-mandated standard health insurance product available across all insurers with uniform terms.", category: "Insurance Policy", stakeholders: ["Citizens"], status: "new" },
  { id: "ins-2", policyId: "section-insurance", title: "Super Senior Health Insurance", description: "Dedicated health insurance for age 70+ with higher sum insured and specialized coverage.", category: "Insurance Policy", stakeholders: ["Citizens"], status: "new" },

  // AML Policy
  { id: "aml-1", policyId: "section-aml", title: "KYC Verification Mandatory", description: "All intermediaries must conduct Know Your Customer verification before accepting clients under PMLA.", category: "AML Policy", stakeholders: ["Corporates", "Citizens", "Government"], status: "new" },
  { id: "aml-2", policyId: "section-aml", title: "Suspicious Transaction Reporting", description: "STRs must be filed with FIU-IND within 7 working days. CTRs due by 15th of succeeding month.", category: "AML Policy", stakeholders: ["Corporates", "Government"], status: "new" },
  { id: "aml-3", policyId: "section-aml", title: "Cash Transaction ₹10 Lakh Limit", description: "All cash transactions above ₹10 lakh or equivalent in foreign currency must be recorded and reported.", category: "AML Policy", stakeholders: ["Corporates", "Citizens", "Government"], status: "new" },
  { id: "aml-4", policyId: "section-aml", title: "PEP Enhanced Due Diligence", description: "Politically Exposed Persons require enhanced client due diligence and approval from Whole-time Director.", category: "AML Policy", stakeholders: ["Corporates", "Government"], status: "new" },

  // Whistle Blower
  { id: "wb-1", policyId: "section-whistle", title: "Whistle Blower Protection", description: "Whistle blowers protected against retaliation, discrimination, or victimization under Companies Act 2013.", category: "Whistle Blower", stakeholders: ["Citizens", "Corporates"], status: "new" },
  { id: "wb-2", policyId: "section-whistle", title: "Confidential Reporting Channel", description: "Organizations must establish confidential reporting mechanism through Vigilance Officer or Audit Committee.", category: "Whistle Blower", stakeholders: ["Corporates", "Government"], status: "new" },

  // Social Media Blackmail
  { id: "smb-1", policyId: "section-blackmail", title: "Sextortion is a Cybercrime", description: "Social media blackmail using private images/videos is punishable under cyber and criminal laws with imprisonment.", category: "Social Media Blackmail", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "smb-2", policyId: "section-blackmail", title: "Evidence Preservation Required", description: "Victims must preserve all evidence (chats, screenshots, call logs) and file complaint at cybercrime.gov.in.", category: "Social Media Blackmail", stakeholders: ["Citizens", "Government"], status: "new" },

  // Online Fraud
  { id: "fraud-1", policyId: "section-fraud", title: "Report Within Golden Hour", description: "Financial fraud should be reported within the first few hours (golden hour) to maximize chances of fund recovery.", category: "Online Fraud", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "fraud-2", policyId: "section-fraud", title: "National Helpline 1930", description: "Call 1930 (available 24/7) to report cyber crimes and online fraud. Portal: cybercrime.gov.in.", category: "Online Fraud", stakeholders: ["Citizens", "Government"], status: "new" },
  { id: "fraud-3", policyId: "section-fraud", title: "Financial Fraud Categories", description: "UPI fraud, card fraud, internet banking fraud, SIM swap, loan app harassment, cryptocurrency fraud covered.", category: "Online Fraud", stakeholders: ["Citizens", "Corporates", "Government"], status: "new" },
];

