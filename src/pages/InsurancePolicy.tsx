import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, FileText, Download, Heart, Plane, Ship, Fish, Briefcase, Car, DollarSign, Shield, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface InsuranceDoc {
    title: string;
    file: string;
    category: string;
    description: string;
}

const insurancePolicies: InsuranceDoc[] = [
    // Health Insurance
    {
        title: "Family Mediclaim Policy (FMP)",
        file: "CIS - FMP.pdf",
        category: "Health",
        description: "Comprehensive family health insurance covering hospitalization, pre & post hospitalization expenses for the entire family under a single sum insured.",
    },
    {
        title: "Family Mediclaim Policy (FMP) - Updated",
        file: "CIS - FMP_0.pdf",
        category: "Health",
        description: "Updated version of the Family Mediclaim Policy with revised terms, conditions and coverage benefits.",
    },
    {
        title: "Family Mediclaim Policy (Oct 2024)",
        file: "20241001 - CIS - FMP_0_0.pdf",
        category: "Health",
        description: "Latest Family Mediclaim Policy effective from October 2024 with enhanced coverage and updated premium structure.",
    },
    {
        title: "Young Health India Policy (YHIP)",
        file: "CIS - YHIP.pdf",
        category: "Health",
        description: "Health insurance designed for young individuals covering hospitalization, daycare procedures, and preventive health check-ups.",
    },
    {
        title: "Young Health India Policy (Oct 2024)",
        file: "20241001 - CIS - YHIP.pdf",
        category: "Health",
        description: "Updated Young Health India Policy effective October 2024 with improved benefits for young policyholders.",
    },
    {
        title: "Individual Health Policy (IHP)",
        file: "20250708 - CIS- IHP.pdf",
        category: "Health",
        description: "Individual Health Insurance Policy effective July 2025 providing comprehensive health coverage for individuals.",
    },
    {
        title: "Senior Health Insurance Policy (SHIP)",
        file: "CIS - SHIP.pdf",
        category: "Health",
        description: "Specialized health insurance for senior citizens covering age-related ailments, hospitalization, and critical illness.",
    },
    {
        title: "Super Senior Health Insurance Policy (SSHIP)",
        file: "CIS - SSHIP.pdf",
        category: "Health",
        description: "Enhanced health coverage for super senior citizens (above 70 years) with higher sum insured and comprehensive benefits.",
    },
    {
        title: "Super Top-up Medicare Policy",
        file: "Super Top-up Medicare Policy (UIN UIIHLIP22187V032122) w.e.f 01.10.2024.pdf",
        category: "Health",
        description: "Top-up health insurance providing additional coverage over and above the base health policy with deductible-based pricing.",
    },
    {
        title: "Samaveshi Suraksha Health Insurance",
        file: "Samaveshi Suraksha Health Insurance Policy ( UIN UIIHLIP23214V012223) w.e.f 01.10.2024.pdf",
        category: "Health",
        description: "Inclusive health insurance policy providing affordable coverage with standardized benefits for wider population access.",
    },
    {
        title: "Arogya Sanjeevani Policy (ASP)",
        file: "CIS - ASP.pdf",
        category: "Health",
        description: "Standard health insurance product mandated by IRDAI offering uniform coverage across all insurers with fixed benefits.",
    },
    {
        title: "Arogya Sanjeevani Policy (Nov 2024)",
        file: "20241122 - CIS - ASP.pdf",
        category: "Health",
        description: "Updated Arogya Sanjeevani Policy effective November 2024 with revised IRDAI-mandated standard coverage.",
    },
    {
        title: "Star Top-Up Medicare Policy (STUMP)",
        file: "CIS - STUMP.pdf",
        category: "Health",
        description: "Top-up health plan providing additional coverage beyond the basic health policy deductible limit.",
    },
    {
        title: "Grisha Suraksha Policy",
        file: "CIS Grisha Suraksha Final.docx",
        category: "Health",
        description: "Household insurance providing protection for the home and family members against various health and property risks.",
    },

    // Travel / Overseas Mediclaim
    {
        title: "Overseas Mediclaim (Business & Holiday)",
        file: "Overseas Mediclaim Policy (Business & Holiday).pdf",
        category: "Travel",
        description: "International travel health insurance for business and holiday travelers covering medical emergencies, hospitalization, and evacuation abroad.",
    },
    {
        title: "Overseas Mediclaim - Plan A2",
        file: "Overseas Mediclaim Policy (Business & Holiday) A2.pdf",
        category: "Travel",
        description: "Plan A2 variant with specific coverage limits and benefits for short-duration international trips.",
    },
    {
        title: "Overseas Mediclaim - Plan A3",
        file: "Overseas Mediclaim Policy (Business & Holiday) A3.pdf",
        category: "Travel",
        description: "Plan A3 variant with enhanced coverage for frequent international travelers on business and holiday.",
    },
    {
        title: "Overseas Mediclaim - Plan B1",
        file: "Overseas Mediclaim Policy (Business & Holiday) B1.pdf",
        category: "Travel",
        description: "Plan B1 providing mid-range coverage for international medical emergencies and travel inconveniences.",
    },
    {
        title: "Overseas Mediclaim - Plan B2",
        file: "Overseas Mediclaim Policy (Business & Holiday) b2.pdf",
        category: "Travel",
        description: "Plan B2 variant with balanced coverage for both medical emergencies and baggage/trip-related risks.",
    },
    {
        title: "Overseas Mediclaim - Plan B3",
        file: "Overseas Mediclaim Policy (Business & Holiday) b3.pdf",
        category: "Travel",
        description: "Plan B3 offering comprehensive coverage for extended international trips and medical hospitalizations.",
    },
    {
        title: "Overseas Mediclaim - Plan B4",
        file: "Overseas Mediclaim Policy (Business & Holiday) b4.pdf",
        category: "Travel",
        description: "Plan B4 with premium-tier coverage for high-value international travel and medical emergencies.",
    },
    {
        title: "Overseas Mediclaim - Plan LA1",
        file: "Overseas Mediclaim Policy (Business & Holiday) la1.pdf",
        category: "Travel",
        description: "Long-term Plan LA1 for extended overseas stays covering comprehensive medical and personal liability.",
    },
    {
        title: "Overseas Mediclaim - Plan LA2",
        file: "Overseas Mediclaim Policy (Business & Holiday) la2.pdf",
        category: "Travel",
        description: "Long-term Plan LA2 with extended duration coverage for business professionals stationed abroad.",
    },
    {
        title: "Overseas Mediclaim - Plan LA3",
        file: "Overseas Mediclaim Policy (Business & Holiday) la3.pdf",
        category: "Travel",
        description: "Long-term Plan LA3 providing maximum-term overseas health coverage with additional benefits.",
    },
    {
        title: "Overseas Mediclaim - Plan LB1",
        file: "Overseas Mediclaim Policy (Business & Holiday) lb1_0.pdf",
        category: "Travel",
        description: "Long-term Plan LB1 designed for extended overseas assignments with comprehensive medical coverage.",
    },
    {
        title: "Overseas Mediclaim - Plan LB2",
        file: "Overseas Mediclaim Policy (Business & Holiday) lb2.pdf",
        category: "Travel",
        description: "Long-term Plan LB2 for overseas travelers requiring extended-duration health and accident coverage.",
    },
    {
        title: "Overseas Mediclaim - Plan LB3",
        file: "Overseas Mediclaim Policy (Business & Holiday) lb3.pdf",
        category: "Travel",
        description: "Long-term Plan LB3 with premium coverage for long-duration global travel and health emergencies.",
    },
    {
        title: "Overseas Mediclaim (E&S) Plan C",
        file: "Overseas Mediclaim Policy (E&S) plan C.pdf",
        category: "Travel",
        description: "Employment & Studies Plan C for international students and workers with comprehensive medical coverage.",
    },
    {
        title: "Overseas Mediclaim (E&S) Plan C1",
        file: "Overseas Mediclaim Policy (E&S) plan C1 (1).pdf",
        category: "Travel",
        description: "Employment & Studies Plan C1 variant with enhanced benefits for students studying abroad.",
    },
    {
        title: "Overseas Mediclaim (E&S) Plan D",
        file: "Overseas Mediclaim Policy (E&S) Plan D (1).pdf",
        category: "Travel",
        description: "Employment & Studies Plan D for overseas workers and students with premium medical coverage.",
    },
    {
        title: "Overseas Mediclaim (E&S) Plan D1",
        file: "Overseas Mediclaim Policy (E&S) Plan D1.pdf",
        category: "Travel",
        description: "Employment & Studies Plan D1 offering maximum coverage for international employment and academic pursuits.",
    },

    // Personal Accident & Life
    {
        title: "Personal Accident Policy (Individual & Group)",
        file: "Personal Accident Policy(Individual and Group).pdf",
        category: "Accident",
        description: "Provides compensation for death, disability, or injury due to accidents. Available for individuals and groups with customizable coverage.",
    },
    {
        title: "Loss of License Policy (Individual & Group)",
        file: "Loss of License Policy(Individual and Group).pdf",
        category: "Accident",
        description: "Covers professionals against financial loss due to suspension or cancellation of professional license (pilots, doctors, etc.).",
    },

    // Marine Insurance
    {
        title: "Marine - Annual Policy",
        file: "CIS_format Annual Policy.pdf",
        category: "Marine",
        description: "Annual marine insurance covering goods in transit by sea for the entire year with blanket coverage.",
    },
    {
        title: "Marine - Duty Insurance",
        file: "CIS_format Duty Insurance.pdf",
        category: "Marine",
        description: "Marine duty insurance covering customs duty payable on imported goods damaged or lost during transit.",
    },
    {
        title: "Marine - Increased Value Insurance",
        file: "CIS_format Increased Value Insurance.pdf",
        category: "Marine",
        description: "Covers the additional value of goods beyond the invoice value, protecting against total loss during marine transit.",
    },
    {
        title: "Marine - Open Cover",
        file: "CIS_format Open Cover.pdf",
        category: "Marine",
        description: "Automatic marine insurance for regular shippers, covering all declared shipments over a specified period.",
    },
    {
        title: "Marine - Open Policy",
        file: "CIS_format Open Policy.pdf",
        category: "Marine",
        description: "Marine insurance with pre-agreed terms covering multiple shipments declared during the policy period.",
    },
    {
        title: "Marine - Specific Voyage Policy",
        file: "CIS_format Specific Voyage Policy.pdf",
        category: "Marine",
        description: "Single voyage marine insurance covering goods for a specific shipment from origin to destination port.",
    },

    // Commercial / Property
    {
        title: "Carriers Legal Liability Policy",
        file: "CIS- Carriers Legal Liability Policy.pdf",
        category: "Commercial",
        description: "Covers the legal liability of carriers and transporters for loss or damage to goods while in transit.",
    },
    {
        title: "Baggage Insurance Policy",
        file: "CIS_Baggage Insurance Policy_0.pdf",
        category: "Commercial",
        description: "Protects against loss, theft, or damage of personal baggage during domestic and international travel.",
    },
    {
        title: "Burglary Standard Insurance",
        file: "CIS_Burglary Standard Insurance.pdf",
        category: "Commercial",
        description: "Covers loss or damage to property, stock, and valuables caused by burglary, housebreaking, or theft.",
    },
    {
        title: "Professional Indemnity - Doctors",
        file: "CIS_IRDA_Professional Indemnity_Doctors.pdf",
        category: "Commercial",
        description: "Professional liability insurance for medical practitioners covering malpractice claims, legal defense costs, and compensation.",
    },
    {
        title: "Money Insurance Policy",
        file: "CIS_Money Insurance Policy.pdf",
        category: "Commercial",
        description: "Covers loss of money in transit, in safe, or on business premises due to theft, robbery, or other insured perils.",
    },
    {
        title: "Plate Glass Insurance",
        file: "CIS_Plate Glass Insurance.pdf",
        category: "Commercial",
        description: "Covers accidental breakage of glass panels, showcases, counters, and mirrors in commercial establishments.",
    },

    // Rural & Social
    {
        title: "Brackishwater Shrimp Insurance",
        file: "Rural and Social - Brackishwater Shrimp Insurance.pdf",
        category: "Rural",
        description: "Insurance for brackishwater shrimp farmers against crop loss due to natural calamities, disease outbreaks, and environmental hazards.",
    },
    {
        title: "Freshwater Fish Insurance",
        file: "Rural and Social - Freshwater Fish Insurance.pdf",
        category: "Rural",
        description: "Insurance for freshwater fish farmers protecting against stock loss due to flood, drought, disease, and other natural perils.",
    },

    // Miscellaneous
    {
        title: "Universal Coverage Concept (UCC)",
        file: "ucc-cis 1.pdf",
        category: "Miscellaneous",
        description: "Universal coverage concept document outlining comprehensive insurance framework for broader population coverage.",
    },
];

const categoryColor: Record<string, string> = {
    Health: "bg-emerald-500/20 text-emerald-500",
    Travel: "bg-blue-500/20 text-blue-500",
    Accident: "bg-red-500/20 text-red-500",
    Marine: "bg-cyan-500/20 text-cyan-500",
    Commercial: "bg-purple-500/20 text-purple-500",
    Rural: "bg-yellow-500/20 text-yellow-500",
    Miscellaneous: "bg-gray-500/20 text-gray-400",
};

const categoryIcon: Record<string, any> = {
    Health: Heart,
    Travel: Plane,
    Accident: ShieldCheck,
    Marine: Ship,
    Commercial: Briefcase,
    Rural: Fish,
    Miscellaneous: FileText,
};

const categories = ["Health", "Travel", "Accident", "Marine", "Commercial", "Rural", "Miscellaneous"];

export default function InsurancePolicy() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = activeCategory
        ? insurancePolicies.filter((p) => p.category === activeCategory)
        : insurancePolicies;

    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Insurance Policies</h1>
                    <p className="text-muted-foreground mt-1">
                        {insurancePolicies.length} insurance policy documents across {categories.length} categories
                    </p>
                </div>
                <Button variant="outline" asChild>
                    <a href="https://uiic.co.in" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> UIIC Portal
                    </a>
                </Button>
            </div>

            {/* Category Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {categories.map((cat, i) => {
                    const count = insurancePolicies.filter((p) => p.category === cat).length;
                    const isActive = activeCategory === cat;
                    const CatIcon = categoryIcon[cat];
                    return (
                        <motion.button
                            key={cat}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            onClick={() => setActiveCategory(isActive ? null : cat)}
                            className={`glass-card p-4 text-center cursor-pointer transition-all duration-200 hover:scale-[1.03] ${isActive ? "ring-2 ring-primary glow-primary" : ""}`}
                        >
                            <CatIcon className={`h-5 w-5 mx-auto mb-2 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                            <p className="text-2xl font-bold font-heading">{count}</p>
                            <Badge variant="secondary" className={`mt-1 text-[10px] ${categoryColor[cat] || ""}`}>
                                {cat}
                            </Badge>
                        </motion.button>
                    );
                })}
            </div>

            {activeCategory && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                    <Badge className={categoryColor[activeCategory]}>{activeCategory}</Badge>
                    <span className="text-sm text-muted-foreground">
                        Showing {filtered.length} policies
                    </span>
                    <button
                        onClick={() => setActiveCategory(null)}
                        className="text-xs text-primary hover:underline ml-auto"
                    >
                        Show All
                    </button>
                </motion.div>
            )}

            {/* Policies Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {filtered.map((policy, i) => {
                    const CatIcon = categoryIcon[policy.category] || FileText;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 + i * 0.03 }}
                            className="glass-card p-5 group hover:glow-primary transition-all duration-300"
                        >
                            <div className="flex items-start gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <CatIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-2 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Badge variant="secondary" className={`text-[10px] ${categoryColor[policy.category] || ""}`}>
                                            {policy.category}
                                        </Badge>
                                        <h3 className="font-heading font-semibold text-sm truncate">{policy.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{policy.description}</p>
                                    <div className="flex items-center gap-2 pt-1">
                                        <Button size="sm" variant="ghost" className="h-7 text-xs" asChild>
                                            <a href={`/insurance policy/${encodeURIComponent(policy.file)}`} target="_blank" rel="noopener noreferrer">
                                                <Eye className="h-3 w-3 mr-1" /> View
                                            </a>
                                        </Button>
                                        <Button size="sm" variant="ghost" className="h-7 text-xs" asChild>
                                            <a href={`/insurance policy/${encodeURIComponent(policy.file)}`} download>
                                                <Download className="h-3 w-3 mr-1" /> Download
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Category Info Panel */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Insurance Categories Overview</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                            <Heart className="h-4 w-4 text-emerald-500" /> Health Insurance
                        </h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Family Mediclaim (FMP)</li>
                            <li>• Senior Health (SHIP/SSHIP)</li>
                            <li>• Arogya Sanjeevani (ASP)</li>
                            <li>• Top-up Medicare Plans</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                            <Plane className="h-4 w-4 text-blue-500" /> Travel Insurance
                        </h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Business & Holiday Plans</li>
                            <li>• Employment & Studies Plans</li>
                            <li>• Short & Long-term Coverage</li>
                            <li>• Multiple plan variants (A-D)</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm flex items-center gap-2">
                            <Ship className="h-4 w-4 text-cyan-500" /> Marine Insurance
                        </h4>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                            <li>• Annual & Voyage Policies</li>
                            <li>• Open Cover & Open Policy</li>
                            <li>• Duty & Increased Value</li>
                            <li>• Transit cargo protection</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Source */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Source Reference</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    Insurance policy documents sourced from United India Insurance Company (UIIC). For the latest terms,
                    conditions, and premium rates, please refer to the official insurer website.
                </p>
                <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://uiic.co.in" target="_blank" rel="noopener noreferrer">
                            UIIC Portal <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer">
                            IRDAI Portal <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
