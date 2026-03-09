import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, FileText, Users, BookOpen, Scale, Eye, Building2, CreditCard, UserCheck, Search, Flag, Ban, Clock, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sections = [
    {
        title: "Introduction & Legal Framework",
        category: "Overview",
        icon: BookOpen,
        description: "The Prevention of Money Laundering Act, 2002 (PMLA) forms the core of India's legal framework to combat money laundering. PMLA and Rules came into force on July 1, 2005. Section 12 requires all intermediaries registered under SEBI Act, 1992 to maintain records of all transactions.",
        keyPoints: [
            "PMLA 2002 is the primary legislation",
            "Effective from July 1, 2005",
            "Applies to all SEBI-registered intermediaries",
            "Covers both money laundering and terrorist financing",
            "SEBI issues guidelines and circulars for implementation",
        ],
    },
    {
        title: "Objectives of AML Policy",
        category: "Objectives",
        icon: Flag,
        description: "The AML Policy aims to prevent misuse of company services by money launderers or those involved in criminal activities including terrorism financing, while protecting the company's reputation.",
        keyPoints: [
            "Prevent use of services by money launderers",
            "Protect company reputation",
            "Shield employees from unfounded allegations",
            "Prevent criminal, civil, and regulatory actions",
            "Combat financing of terrorism",
        ],
    },
    {
        title: "Client Due Diligence (CDD)",
        category: "Compliance",
        icon: UserCheck,
        description: "Comprehensive customer due diligence measures applied to all clients (new and existing) including Client Identification Policy (CIP), Client Acceptance Policy, Risk Profiling, and Continuous Monitoring.",
        keyPoints: [
            "KYC information collection and verification",
            "Beneficial owner identification required",
            "Client acceptance screening procedures",
            "Risk-based categorization: Low, Medium, High",
            "Enhanced due diligence for high-risk clients",
            "Continuous transaction monitoring",
        ],
    },
    {
        title: "Client Risk Profiling",
        category: "Risk",
        icon: ShieldCheck,
        description: "Risk profiling based on client identity, social/financial status, nature of business, and location. Clients grouped into Low, Medium, and High risk categories.",
        keyPoints: [
            "Low Risk: Corporates with respectable standing, salaried employees",
            "Medium Risk: Intraday/speculative clients, suspicious patterns",
            "High Risk: Defaulters, suspicious background, HNW (above ₹2500 Cr), PEP",
            "Enhanced CDD for high-risk clients",
            "Simplified CDD for low-risk clients",
        ],
    },
    {
        title: "Clients of Special Category (CSC)",
        category: "Risk",
        icon: AlertTriangle,
        description: "Special category clients that pose particular risk and require enhanced due diligence, including PEPs, non-resident clients, trusts, NGOs, and clients from high-risk countries.",
        keyPoints: [
            "Politically Exposed Persons (PEP)",
            "Non-Resident Clients",
            "High Net-Worth Clients",
            "Trusts, Charities, NGOs",
            "Companies with foreign exchange offerings",
            "Clients from high-risk countries (FATF non-compliant)",
            "Non face-to-face clients",
        ],
    },
    {
        title: "Suspicious Transaction Monitoring",
        category: "Monitoring",
        icon: Search,
        description: "Transactions that give rise to reasonable grounds of suspicion involving proceeds of crime, unusual complexity, no economic rationale, or terrorist financing must be identified and reported.",
        keyPoints: [
            "False identification documents",
            "Unusual activity compared to past transactions",
            "Circular trading patterns",
            "Transactions just below reporting threshold",
            "Large overseas transfers",
            "Inconsistency with financial standing",
            "Activity in dormant accounts",
        ],
    },
    {
        title: "Record Keeping Requirements",
        category: "Compliance",
        icon: FileText,
        description: "Adequate records must be maintained for all transactions to permit reconstruction, including amounts, currency types, fund origins, and beneficiaries.",
        keyPoints: [
            "Cash transactions above ₹10 lakh",
            "Series of connected transactions exceeding ₹10 lakh",
            "Non-profit receipts above ₹10 lakh",
            "Cross-border wire transfers above ₹5 lakh",
            "Immovable property transactions ≥ ₹50 lakh",
            "Records preserved for 5-8 years",
            "All suspicious transactions regardless of amount",
        ],
    },
    {
        title: "Reporting to FIU-India",
        category: "Reporting",
        icon: Landmark,
        description: "Principal Officer must submit Cash Transaction Reports (CTRs) and Suspicious Transaction Reports (STRs) to Director, FIU-IND. CTRs due by 15th of succeeding month; STRs within 7 working days.",
        keyPoints: [
            "CTRs submitted monthly by 15th of next month",
            "STRs within 7 working days of suspicion",
            "Electronic format submission required",
            "Utmost confidentiality maintained",
            "No tipping-off to customers",
            "No nil reporting required",
        ],
    },
    {
        title: "Freezing & Unfreezing Procedures",
        category: "Enforcement",
        icon: Ban,
        description: "Under Section 51A of UAPA, Central Government can freeze, seize, or attach funds of designated individuals/entities. Company must inform authorities within 24 hours of identifying a match.",
        keyPoints: [
            "24-hour notification requirement",
            "Report to CTCR Division, Ministry of Home Affairs",
            "No prior notice to designated individuals",
            "5 working days for verification",
            "15 working days for unfreezing orders",
            "Application process for inadvertent freezing",
        ],
    },
    {
        title: "Training & Employee Screening",
        category: "Internal",
        icon: Users,
        description: "Ongoing employee training on AML/CFT procedures. Background checks for new hires. Special emphasis on frontline, compliance, and risk management staff.",
        keyPoints: [
            "Ongoing AML/CFT training programs",
            "Employee background verification",
            "Participation in regulatory seminars",
            "Training on identifying red flags",
            "Disciplinary consequences for non-compliance",
            "Investor education on PMLA requirements",
        ],
    },
];

const categoryColor: Record<string, string> = {
    Overview: "bg-blue-500/20 text-blue-500",
    Objectives: "bg-emerald-500/20 text-emerald-500",
    Compliance: "bg-purple-500/20 text-purple-500",
    Risk: "bg-red-500/20 text-red-500",
    Monitoring: "bg-yellow-500/20 text-yellow-500",
    Reporting: "bg-cyan-500/20 text-cyan-500",
    Enforcement: "bg-orange-500/20 text-orange-500",
    Internal: "bg-indigo-500/20 text-indigo-500",
};

const uniqueCategories = [...new Set(sections.map(s => s.category))];

export default function AmlPolicy() {
    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Anti-Money Laundering (AML) Policy</h1>
                    <p className="text-muted-foreground mt-1">Four Dimensions Securities (India) Limited — AML Policy & Procedures</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <a href="https://fiuindia.gov.in" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> FIU-IND
                        </a>
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> SEBI
                        </a>
                    </Button>
                </div>
            </div>

            {/* Policy Metadata */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground text-xs">Company</p>
                        <p className="font-semibold">Four Dimensions Securities (India) Ltd</p>
                    </div>
                    <div>
                        <p className="text-muted-foreground text-xs">Last Reviewed</p>
                        <p className="font-semibold">13-02-2024</p>
                    </div>
                    <div>
                        <p className="text-muted-foreground text-xs">Review Periodicity</p>
                        <p className="font-semibold">Yearly / On Changes</p>
                    </div>
                    <div>
                        <p className="text-muted-foreground text-xs">Responsible Office</p>
                        <p className="font-semibold">Compliance Officer</p>
                    </div>
                </div>
            </motion.div>

            {/* Key Officers */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h2 className="font-heading font-semibold">Designated Officers</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                        <Badge className="bg-blue-500/20 text-blue-500 text-xs mb-2">Principal Officer</Badge>
                        <p className="font-semibold">Mr. Chirag Doshi</p>
                        <p className="text-xs text-muted-foreground mt-1">Ensures PMLA compliance, identifies suspicious transactions, furnishes information to Director FIU-IND</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/30">
                        <Badge className="bg-emerald-500/20 text-emerald-500 text-xs mb-2">Designated Director</Badge>
                        <p className="font-semibold">Mr. Sandeep Kejariwal</p>
                        <p className="text-xs text-muted-foreground mt-1">Ensures overall compliance with PMLA obligations and company AML policy</p>
                    </div>
                </div>
            </motion.div>

            {/* Category Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {uniqueCategories.map((cat, i) => {
                    const count = sections.filter(s => s.category === cat).length;
                    return (
                        <motion.div key={cat} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="glass-card p-4 text-center">
                            <p className="text-2xl font-bold font-heading">{count}</p>
                            <Badge variant="secondary" className={`mt-1 text-[10px] ${categoryColor[cat]}`}>{cat}</Badge>
                        </motion.div>
                    );
                })}
            </div>

            {/* Sections */}
            <div className="space-y-4">
                {sections.map((section, i) => {
                    const Icon = section.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + i * 0.04 }}
                            className="glass-card p-5"
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge variant="secondary" className={`text-[10px] ${categoryColor[section.category]}`}>
                                            {section.category}
                                        </Badge>
                                        <h3 className="font-heading font-semibold text-sm">{section.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{section.description}</p>
                                    <div className="bg-muted/30 rounded-lg p-3">
                                        <p className="text-xs font-semibold text-muted-foreground mb-2">KEY POINTS:</p>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                            {section.keyPoints.map((point, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span className="text-primary mt-0.5">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* KYC Documents */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Customer Identification Documents (KYC)</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Individual Accounts — Identity Proof</h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Passport</li>
                            <li>• PAN Card</li>
                            <li>• Voter's Identity Card</li>
                            <li>• Driving License</li>
                            <li>• Aadhaar Card</li>
                        </ul>
                        <h4 className="font-semibold text-sm mt-3">Residence Proof</h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Utility Bill (Telephone/Electricity)</li>
                            <li>• Property/Municipal Tax Receipt</li>
                            <li>• Bank/Post Office Statement</li>
                            <li>• Passport / Driving License / Aadhaar</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Non-Individual Accounts</h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Income Tax PAN Card</li>
                            <li>• Incorporation Certificate & MOA/AOA</li>
                            <li>• GST/CST/VAT Registration</li>
                            <li>• List of Directors/Partners with OVDs</li>
                            <li>• Shareholding pattern (25%+ holders)</li>
                            <li>• Utility Bill</li>
                            <li>• Registration Certificate & Deed (Partnership/Trust)</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Source */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Regulatory References</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    This AML Policy is based on the Prevention of Money Laundering Act (PMLA), 2002, SEBI Guidelines on Anti Money Laundering Standards,
                    and various SEBI circulars. The policy is approved by the Board of Directors and reviewed yearly.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://fiuindia.gov.in" target="_blank" rel="noopener noreferrer">
                            FIU-IND <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer">
                            SEBI Portal <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://legislative.gov.in/sites/default/files/A2003-15.pdf" target="_blank" rel="noopener noreferrer">
                            PMLA Act Text <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
