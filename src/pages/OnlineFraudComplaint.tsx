import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Phone, Shield, FileText, Users, Scale, Clock, CheckCircle, HelpCircle, Globe, CreditCard, Smartphone, Lock, Eye, AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const complaintCategories = [
    {
        title: "WOMEN/CHILDREN RELATED CRIME",
        image: "/women_children_crime.png",
        description: "Report crimes against women and children including cyber stalking, cyber bullying, child pornography, rape/gang rape content, and sexual exploitation.",
        buttons: [
            { label: "Report Anonymously", url: "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx", variant: "default" as const },
            { label: "Register & Track", url: "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx", variant: "outline" as const },
        ],
        helpline: "181 (Women Helpline)",
        examples: [
            "Cyber Stalking / Bullying",
            "Child Pornography / CSAM",
            "Sexually Explicit Content",
            "Morphed Images of Women",
            "Sextortion",
            "Revenge Pornography",
        ],
    },
    {
        title: "FINANCIAL FRAUD",
        image: "/financial_fraud.png",
        description: "Report online financial frauds including UPI fraud, debit/credit card fraud, internet banking fraud, investment scams, job fraud, and e-commerce fraud.",
        buttons: [
            { label: "Register a Complaint", url: "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx", variant: "default" as const },
        ],
        helpline: "1930 (Financial Fraud)",
        examples: [
            "UPI / Mobile Banking Fraud",
            "Debit / Credit Card Fraud",
            "Internet Banking Fraud",
            "SIM Swap / Aadhaar Fraud",
            "Online Investment Scam",
            "E-commerce / Job Fraud",
            "Loan App Harassment",
            "Cryptocurrency Fraud",
        ],
    },
    {
        title: "OTHER CYBER CRIME",
        image: "/other_cyber_crime.png",
        description: "Report other cyber crimes including hacking, data theft, ransomware, identity theft, email phishing, social media hacking, and online defamation.",
        buttons: [
            { label: "Register a Complaint", url: "https://cybercrime.gov.in/Webform/Crime_AuthoLogin.aspx", variant: "default" as const },
        ],
        helpline: "1930 (Cyber Crime)",
        examples: [
            "Hacking / Unauthorized Access",
            "Ransomware / Malware Attack",
            "Identity Theft",
            "Email Phishing / Spoofing",
            "Social Media Account Hacking",
            "Online Defamation",
            "Data Theft / Breach",
            "Fake News / Misinformation",
        ],
    },
];

const howToFileSteps = [
    {
        step: 1,
        title: "Visit the Cybercrime Portal",
        description: "Go to cybercrime.gov.in and click on 'File a Complaint'. You can also call 1930 for immediate assistance.",
        icon: Globe,
    },
    {
        step: 2,
        title: "Register / Login",
        description: "Create an account using your mobile number. You'll receive an OTP for verification. Login with your credentials.",
        icon: Lock,
    },
    {
        step: 3,
        title: "Select Category",
        description: "Choose the appropriate crime category: Women/Children Related, Financial Fraud, or Other Cyber Crime.",
        icon: FileText,
    },
    {
        step: 4,
        title: "Fill Complaint Details",
        description: "Provide incident details including date, time, description, suspect information, and upload evidence (screenshots, documents).",
        icon: Eye,
    },
    {
        step: 5,
        title: "Submit & Get Acknowledgment",
        description: "Review and submit the complaint. You'll receive an acknowledgment number to track your complaint status.",
        icon: CheckCircle,
    },
    {
        step: 6,
        title: "Track Your Complaint",
        description: "Use your acknowledgment number to track the status of your complaint. You can also check via the 1930 helpline.",
        icon: Clock,
    },
];

const importantTips = [
    "File complaint within 24–48 hours of the incident for best results",
    "Preserve all evidence — screenshots, transaction IDs, chat logs, emails",
    "Do not delete any communication with the fraudster",
    "Note down the time, date, and platform of the incident",
    "Keep your bank informed if financial fraud is involved",
    "Do not share OTP, PIN, or passwords with anyone",
    "Report financial fraud to your bank AND cybercrime portal",
    "Never click on suspicious links or attachments",
];

export default function OnlineFraudComplaint() {
    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Online Fraud Complaint</h1>
                    <p className="text-muted-foreground mt-1">National Cyber Crime Reporting Portal — Report cyber crimes online</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" asChild>
                        <a href="https://cybercrime.gov.in/Webform/Index.aspx" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" /> Cybercrime Portal
                        </a>
                    </Button>
                </div>
            </div>

            {/* Emergency Banner */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 border-l-4 border-l-destructive">
                <div className="flex items-center gap-3 mb-3">
                    <AlertOctagon className="h-6 w-6 text-destructive animate-pulse" />
                    <h2 className="text-lg font-bold font-heading text-destructive">Emergency? Call 1930 Now!</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                    If you are a victim of cyber crime or online fraud, immediately call the <strong>National Cyber Crime Helpline: 1930</strong>.
                    For financial fraud, report within the <strong>golden hour</strong> (first few hours) to maximize chances of fund recovery.
                </p>
            </motion.div>

            {/* Three Main Categories — Card Style Like cybercrime.gov.in */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {complaintCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.12 }}
                        className="group rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-b from-blue-950/80 to-blue-900/60 backdrop-blur-xl shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-5 -mt-6 relative z-10">
                            <h3 className="text-center font-heading font-bold text-white text-sm tracking-wide mb-4">
                                {cat.title}
                            </h3>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {cat.buttons.map((btn, j) => (
                                    <Button
                                        key={j}
                                        size="sm"
                                        variant={btn.variant}
                                        className={btn.variant === "default"
                                            ? "bg-cyan-500 hover:bg-cyan-400 text-white border-0 text-xs font-semibold"
                                            : "border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold"
                                        }
                                        asChild
                                    >
                                        <a href={btn.url} target="_blank" rel="noopener noreferrer">{btn.label}</a>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Category Details */}
            <div className="space-y-4">
                {complaintCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="glass-card p-5"
                    >
                        <div className="flex items-start gap-4">
                            <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                {i === 0 ? <Users className="h-5 w-5 text-blue-500" /> : i === 1 ? <CreditCard className="h-5 w-5 text-blue-500" /> : <Smartphone className="h-5 w-5 text-blue-500" />}
                            </div>
                            <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="font-heading font-semibold text-sm">{cat.title}</h3>
                                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-500 text-[10px]">{cat.helpline}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{cat.description}</p>
                                <div className="bg-muted/30 rounded-lg p-3">
                                    <p className="text-xs font-semibold text-muted-foreground mb-2">TYPES OF CRIMES COVERED:</p>
                                    <div className="grid grid-cols-2 gap-1">
                                        {cat.examples.map((ex, j) => (
                                            <p key={j} className="text-xs text-muted-foreground flex items-center gap-1.5">
                                                <span className="text-blue-500">•</span> {ex}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* How to File a Complaint */}
            <div>
                <h2 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" /> How to File a Complaint
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {howToFileSteps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                                className="glass-card p-5"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold font-heading text-sm">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-sm">{step.title}</h4>
                                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Important Tips */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold">Important Tips for Filing Complaints</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {importantTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground p-2">
                            <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                            <span>{tip}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Helplines */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Emergency Helplines</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <p className="text-3xl font-bold font-heading text-primary">1930</p>
                        <p className="text-xs text-muted-foreground mt-1">National Cyber Crime Helpline</p>
                        <p className="text-[10px] text-muted-foreground">(Available 24/7)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <p className="text-3xl font-bold font-heading text-primary">181</p>
                        <p className="text-xs text-muted-foreground mt-1">Women Helpline</p>
                        <p className="text-[10px] text-muted-foreground">(For women/children crimes)</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <p className="text-3xl font-bold font-heading text-primary">112</p>
                        <p className="text-xs text-muted-foreground mt-1">Police Emergency</p>
                        <p className="text-[10px] text-muted-foreground">(All emergencies)</p>
                    </div>
                </div>
            </motion.div>

            {/* Official Links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Official Resources</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    The National Cyber Crime Reporting Portal is an initiative of the Government of India under the Ministry of Home Affairs.
                    All complaints are handled by law enforcement agencies.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://cybercrime.gov.in/Webform/Index.aspx" target="_blank" rel="noopener noreferrer">
                            Cybercrime Portal <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.cert-in.org.in/" target="_blank" rel="noopener noreferrer">
                            CERT-In <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                        <a href="https://www.mha.gov.in/" target="_blank" rel="noopener noreferrer">
                            Ministry of Home Affairs <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
