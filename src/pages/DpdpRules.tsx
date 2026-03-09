import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, FileText, Download, Eye, Lock, Scale, Users, Clock, Building2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DpdpDocument {
    title: string;
    file: string;
    category: string;
    description: string;
    icon: any;
    highlights: string[];
}

const dpdpDocuments: DpdpDocument[] = [
    {
        title: "Digital Personal Data Protection Rules, 2025",
        file: "Digital_Personal_Data_Protection_Rules_2025.pdf",
        category: "Core Rules",
        description: "The primary rulebook under the DPDP Act, 2023. Defines consent mechanisms, data processing standards, rights of data principals, obligations of data fiduciaries, and penalties for non-compliance.",
        icon: BookOpen,
        highlights: [
            "Verifiable consent requirements for data processing",
            "Rights of data principals — access, correction, erasure",
            "Data fiduciary obligations and accountability standards",
            "Cross-border data transfer regulations",
            "Penalties up to ₹250 crore for significant data breaches",
        ],
    },
    {
        title: "Corrigendum to DPDP Rules, 2025",
        file: "Corrigendum_to_Digital_Personal_Data_Protection_Rules_2025.pdf",
        category: "Amendment",
        description: "Official corrections and amendments to the DPDP Rules 2025. Addresses clarifications to data fiduciary obligations, consent management, and compliance timelines.",
        icon: FileText,
        highlights: [
            "Corrections to data fiduciary obligation clauses",
            "Clarification on consent manager registration",
            "Updated definitions and terminology",
            "Additional 6 months for amended provision compliance",
        ],
    },
    {
        title: "Enforcement Timeline for the DPDP Act",
        file: "Enforcement_Timeline_for_the_DPDP_Act.pdf",
        category: "Timeline",
        description: "Official phase-wise enforcement schedule of the DPDP Act provisions. Defines when each section becomes enforceable and milestones for compliance.",
        icon: Clock,
        highlights: [
            "Phase 1: Core provisions and Board establishment",
            "Phase 2: Penalty framework activation",
            "Phase 3: Full enforcement with all provisions",
            "18-month total rollout period",
            "Compliance deadlines for data fiduciaries",
        ],
    },
    {
        title: "Establishment of the Data Protection Board of India",
        file: "Establishment_of_the_Data_Protection_Board_of_India.pdf",
        category: "Governance",
        description: "Framework for setting up India's Data Protection Board — the apex body for adjudicating data protection complaints, conducting inquiries, and imposing penalties under the DPDP Act.",
        icon: Building2,
        highlights: [
            "Board structure and composition",
            "Digital-first complaint adjudication process",
            "Powers of inquiry and investigation",
            "Penalty imposition authority",
            "Appeal mechanisms and procedures",
        ],
    },
    {
        title: "Decision Regarding Number of Members in the Data Protection Board",
        file: "Decision_Regarding_Number_of_Members_in_the_Data_Protection_Board_of_India.pdf",
        category: "Governance",
        description: "Government decision on the composition of the Data Protection Board, specifying minimum and maximum members, qualifications, tenure, and appointment process.",
        icon: Users,
        highlights: [
            "Minimum 3 and maximum 7 members including Chairperson",
            "Members must have expertise in law, data governance, or technology",
            "Fixed tenure and reappointment provisions",
            "Qualification and eligibility criteria",
        ],
    },
];

const categoryColor: Record<string, string> = {
    "Core Rules": "bg-blue-500/20 text-blue-500",
    Amendment: "bg-yellow-500/20 text-yellow-500",
    Timeline: "bg-purple-500/20 text-purple-500",
    Governance: "bg-emerald-500/20 text-emerald-500",
};

const keyProvisions = [
    {
        title: "Consent Framework",
        description: "Every data fiduciary must obtain free, specific, informed, unconditional, and unambiguous consent before processing personal data.",
        icon: ShieldCheck,
    },
    {
        title: "Right to Erasure",
        description: "Data principals can request complete deletion of their personal data. Data fiduciaries must comply within a reasonable timeframe.",
        icon: Lock,
    },
    {
        title: "Breach Notification",
        description: "Mandatory notification to the Data Protection Board and affected individuals within 72 hours of discovering a personal data breach.",
        icon: AlertTriangle,
    },
    {
        title: "Penalties",
        description: "Fines up to ₹250 crore for significant data breaches and non-compliance. Graduated penalty structure based on severity.",
        icon: Scale,
    },
];

export default function DpdpRules() {
    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Digital Personal Data Protection Rules, 2025</h1>
                    <p className="text-muted-foreground mt-1">India's comprehensive data protection framework under the DPDP Act, 2023</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> MeitY Portal
                        </a>
                    </Button>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 text-center">
                    <FileText className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                    <p className="text-2xl font-bold font-heading">{dpdpDocuments.length}</p>
                    <p className="text-xs text-muted-foreground">Official Documents</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5 text-center">
                    <Clock className="h-6 w-6 mx-auto text-purple-500 mb-2" />
                    <p className="text-2xl font-bold font-heading">2025</p>
                    <p className="text-xs text-muted-foreground">Rules Effective Year</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-5 text-center">
                    <Scale className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                    <p className="text-2xl font-bold font-heading">₹250Cr</p>
                    <p className="text-xs text-muted-foreground">Max Penalty</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-5 text-center">
                    <Building2 className="h-6 w-6 mx-auto text-emerald-500 mb-2" />
                    <p className="text-2xl font-bold font-heading">3-7</p>
                    <p className="text-xs text-muted-foreground">Board Members</p>
                </motion.div>
            </div>

            {/* Key Provisions */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold font-heading">Key Provisions</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {keyProvisions.map((provision, i) => {
                        const Icon = provision.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/30 transition-colors"
                            >
                                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-sm">{provision.title}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{provision.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Documents List */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold font-heading flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> Official Documents
                </h2>
                {dpdpDocuments.map((doc, i) => {
                    const Icon = doc.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                            className="glass-card p-5 hover:glow-primary transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0 space-y-3">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge variant="secondary" className={`text-[10px] ${categoryColor[doc.category] || ""}`}>
                                            {doc.category}
                                        </Badge>
                                        <h3 className="font-heading font-semibold">{doc.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{doc.description}</p>

                                    {/* Highlights */}
                                    <div className="bg-muted/30 rounded-lg p-3">
                                        <p className="text-xs font-semibold text-muted-foreground mb-2">KEY HIGHLIGHTS:</p>
                                        <ul className="text-xs text-muted-foreground space-y-1">
                                            {doc.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span className="text-primary mt-0.5">•</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 pt-1">
                                        <Button size="sm" variant="outline" className="h-8 text-xs" asChild>
                                            <a href={`/policies/${doc.file}`} target="_blank" rel="noopener noreferrer">
                                                <Eye className="h-3.5 w-3.5 mr-1" /> View PDF
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="outline" className="h-8 text-xs" asChild>
                                            <a href={`/policies/${doc.file}`} download>
                                                <Download className="h-3.5 w-3.5 mr-1" /> Download
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Source Reference */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Official Sources</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    These documents are sourced from the Ministry of Electronics and Information Technology (MeitY) and the official Gazette of India.
                    The DPDP Act, 2023 was enacted by the Parliament of India and the rules were notified in January 2025.
                    For the latest updates and amendments, refer to the official sources.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.meity.gov.in/data-protection-framework" target="_blank" rel="noopener noreferrer">
                            MeitY Data Protection <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://egazette.gov.in" target="_blank" rel="noopener noreferrer">
                            Gazette of India <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer">
                            India Code <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
