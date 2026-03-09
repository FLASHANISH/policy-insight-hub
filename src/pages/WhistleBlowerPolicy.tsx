import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Eye, Download, Megaphone, FileText, Users, Scale, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WhistleBlowerPolicy() {
    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Whistle Blower Policy</h1>
                    <p className="text-muted-foreground mt-1">Mechanism for reporting unethical behavior, fraud, and violations</p>
                </div>
            </div>

            {/* Overview */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Megaphone className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold font-heading">What is a Whistle Blower Policy?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    A Whistle Blower Policy establishes a formal mechanism for employees, directors, and stakeholders to report concerns about
                    unethical behavior, actual or suspected fraud, or violations of the company's code of conduct or ethics policy.
                    It provides a secure and confidential channel for raising concerns without fear of retaliation.
                </p>
            </motion.div>

            {/* Key Features */}
            <div className="grid gap-4 md:grid-cols-2">
                {[
                    {
                        title: "Confidentiality Protection",
                        description: "The identity of the whistle blower is kept confidential. All reports are handled with strict privacy measures to protect the complainant.",
                        icon: Lock,
                        category: "Protection",
                    },
                    {
                        title: "Protection Against Retaliation",
                        description: "Whistle blowers are protected against any form of retaliation, discrimination, or victimization. Any retaliatory action is treated as a serious violation.",
                        icon: Shield,
                        category: "Protection",
                    },
                    {
                        title: "Reporting Mechanism",
                        description: "Concerns can be reported to the designated Vigilance Officer, Audit Committee, or through the established reporting channel in writing.",
                        icon: FileText,
                        category: "Process",
                    },
                    {
                        title: "Investigation Process",
                        description: "All complaints are investigated promptly, fairly, and thoroughly. The Audit Committee oversees the investigation and ensures appropriate action.",
                        icon: Scale,
                        category: "Process",
                    },
                    {
                        title: "Scope of Reporting",
                        description: "Covers financial irregularities, fraud, corruption, abuse of authority, non-compliance with regulations, and any violation of company policies.",
                        icon: AlertTriangle,
                        category: "Scope",
                    },
                    {
                        title: "Stakeholder Coverage",
                        description: "Applies to all directors, employees, stakeholders, and any person who has a legitimate concern about company operations.",
                        icon: Users,
                        category: "Scope",
                    },
                ].map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.06 }}
                            className="glass-card p-5"
                        >
                            <div className="flex items-start gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className={feature.category === "Protection" ? "bg-emerald-500/20 text-emerald-500 text-[10px]" : feature.category === "Process" ? "bg-blue-500/20 text-blue-500 text-[10px]" : "bg-purple-500/20 text-purple-500 text-[10px]"}>
                                            {feature.category}
                                        </Badge>
                                        <h3 className="font-heading font-semibold text-sm">{feature.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* PDF Document */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold font-heading">Official Policy Document</h2>
                </div>
                <div className="p-4 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                            <FileText className="h-6 w-6 text-red-500" />
                        </div>
                        <div>
                            <h3 className="font-heading font-semibold text-sm">whistle-blower-policy-19.pdf</h3>
                            <p className="text-xs text-muted-foreground">Complete Whistle Blower Policy Document</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                            <a href="/Whistle Blower Policy/whistle-blower-policy-19.pdf" target="_blank" rel="noopener noreferrer">
                                <Eye className="h-3.5 w-3.5 mr-1" /> View
                            </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                            <a href="/Whistle Blower Policy/whistle-blower-policy-19.pdf" download>
                                <Download className="h-3.5 w-3.5 mr-1" /> Download
                            </a>
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* PDF Viewer */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card overflow-hidden" style={{ height: "70vh" }}>
                <iframe
                    src="/Whistle Blower Policy/whistle-blower-policy-19.pdf"
                    className="w-full h-full border-0"
                    title="Whistle Blower Policy PDF"
                />
            </motion.div>

            {/* Source */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold">Important Note</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    This Whistle Blower Policy is established in compliance with Section 177(9) of the Companies Act, 2013 and
                    SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015. All reports are treated with utmost
                    confidentiality and investigated thoroughly by the designated authority.
                </p>
            </motion.div>
        </div>
    );
}
