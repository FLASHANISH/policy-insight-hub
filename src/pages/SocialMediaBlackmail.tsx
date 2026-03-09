import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Shield, Phone, Eye, Ban, MessageSquare, Camera, FileText, Scale, HelpCircle, Lock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const immediateSteps = [
    {
        step: "1",
        title: "Do Not Panic and Do Not Pay",
        description: "Paying money or complying with demands does not guarantee safety and often leads to repeated extortion. Stay calm and act wisely.",
        icon: Ban,
    },
    {
        step: "2",
        title: "Preserve All Evidence",
        description: "Save chats, messages, call logs, usernames, profile links, screenshots of threats, and transaction details. Do not delete anything.",
        icon: Camera,
    },
    {
        step: "3",
        title: "Stop Direct Communication",
        description: "Avoid engaging further with the blackmailer. Continued communication may escalate threats and give them more leverage.",
        icon: MessageSquare,
    },
    {
        step: "4",
        title: "Report on the Platform",
        description: "Use the platform's reporting tools for harassment, blackmail, and non-consensual intimate content. This helps with content removal and account blocking.",
        icon: FileText,
    },
    {
        step: "5",
        title: "File a Cybercrime Complaint",
        description: "Report the incident through the official cybercrime reporting mechanism (cybercrime.gov.in / Helpline 1930). Early reporting improves investigation chances.",
        icon: Shield,
    },
    {
        step: "6",
        title: "Consult a Cyber Crime Lawyer",
        description: "A lawyer can guide you on legal rights, draft complaints, assist with takedown requests, coordinate with authorities, and protect you from wrongful pressure.",
        icon: Scale,
    },
];

const faqs = [
    {
        question: "Is online blackmail using nude images a crime?",
        answer: "Yes. It is a serious cybercrime and punishable by law under the IT Act and IPC.",
    },
    {
        question: "Should I pay the blackmailer to stop them?",
        answer: "No. Payment usually leads to repeated blackmail. Never comply with demands.",
    },
    {
        question: "Can chats and screenshots be used as evidence?",
        answer: "Yes. Digital chats, screenshots, call logs, and transaction records are valid evidence in court.",
    },
    {
        question: "Can private images be removed from the internet?",
        answer: "Yes, in many cases, through platform reporting, legal intervention, and takedown requests.",
    },
    {
        question: "Can a cyber crime lawyer help without going to court?",
        answer: "Yes. Many cases are handled through complaints, takedown requests, and coordination with authorities.",
    },
];

const safetyTips = [
    "Do not share private content with unknown persons",
    "Avoid video calls with strangers",
    "Use privacy settings strictly on all platforms",
    "Be cautious on dating apps",
    "Never trust threats promising secrecy",
    "Enable two-factor authentication on all accounts",
    "Regularly review your online privacy settings",
];

export default function SocialMediaBlackmail() {
    return (
        <div className="space-y-6 max-w-5xl">
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Social Media Blackmail</h1>
                    <p className="text-muted-foreground mt-1">Using Private Images, Videos, or Chats — What to Do Immediately</p>
                </div>
                <Button variant="outline" asChild>
                    <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                        <Shield className="h-4 w-4 mr-2" /> Report Cyber Crime
                    </a>
                </Button>
            </div>

            {/* Alert Banner */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 border-l-4 border-l-destructive">
                <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    <h2 className="text-xl font-bold font-heading text-destructive">This Is a Serious Cybercrime</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Social media blackmail involving private images, nude photos, intimate videos, or personal chats is a serious cybercrime.
                    Victims are often threatened with public exposure, financial extortion, emotional abuse, or reputational harm.
                    This crime affects people of all ages and backgrounds and can happen on platforms like WhatsApp, Instagram, Facebook,
                    Telegram, Snapchat, and dating apps.
                </p>
            </motion.div>

            {/* What Is Social Media Blackmail */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-bold font-heading">What Is Social Media Blackmail?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Social media blackmail occurs when someone threatens to publish, share, or misuse your private photos, videos,
                    or chats unless you comply with their demands, such as:
                </p>
                <div className="grid grid-cols-2 gap-3">
                    {["Sending money", "Sharing more images or videos", "Continuing communication", "Performing illegal or unwanted acts"].map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm">
                            <span className="text-destructive font-semibold">•</span> {item}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Common Forms */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
                <h3 className="font-heading font-semibold mb-3">Common Forms of Online Blackmail</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                        "Threats to leak nude or intimate images",
                        "Recording video calls without consent",
                        "Editing or morphing images",
                        "Using fake profiles for extortion",
                        "Impersonation using private content",
                        "Sextortion through dating apps or social media",
                    ].map((form, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-2 rounded-lg hover:bg-accent/30 transition-colors">
                            <AlertTriangle className="h-3.5 w-3.5 text-warning shrink-0" />
                            <span>{form}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Why Take It Seriously */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
                <h3 className="font-heading font-semibold mb-3">Why You Should Take It Seriously</h3>
                <p className="text-sm text-muted-foreground mb-3">
                    Ignoring or complying with blackmail demands often makes the situation worse. Blackmailers rarely stop after receiving money. Early legal action can help:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Stop further harassment", "Preserve digital evidence", "Prevent image circulation", "Initiate takedown requests", "Protect your legal rights"].map((item, i) => (
                        <Badge key={i} variant="secondary" className="bg-success/20 text-success justify-center py-2">{item}</Badge>
                    ))}
                </div>
            </motion.div>

            {/* Immediate Steps */}
            <div>
                <h2 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" /> What to Do Immediately
                </h2>
                <div className="space-y-4">
                    {immediateSteps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                                className="glass-card p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-bold font-heading">
                                        {step.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-heading font-semibold">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Legal Consequences */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Scale className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Legal Consequences for Online Blackmailers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Social media blackmail is punishable under cyber and criminal laws. Offenders may face:</p>
                <div className="grid grid-cols-2 gap-2">
                    {["Criminal prosecution", "Arrest and investigation", "Penalties and imprisonment", "Permanent criminal records"].map((item, i) => (
                        <Badge key={i} variant="secondary" className="bg-destructive/20 text-destructive justify-center py-2">{item}</Badge>
                    ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3 italic">Even threatening to share private content is an offense.</p>
            </motion.div>

            {/* If Already Shared */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="glass-card p-6 border-l-4 border-l-warning">
                <h3 className="font-heading font-semibold mb-3">If Images or Videos Are Already Shared</h3>
                <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" /> <strong>Do not blame yourself</strong> — this is a crime, not your fault</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" /> <strong>Act quickly</strong> to preserve proof of the crime</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" /> <strong>File an immediate complaint</strong> with cybercrime authorities</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" /> <strong>Seek legal assistance</strong> for content takedown</li>
                    <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-success shrink-0 mt-0.5" /> <strong>Report URLs and profiles</strong> repeatedly on platforms</li>
                </ul>
            </motion.div>

            {/* FAQs */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">Frequently Asked Questions</h3>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="p-4 rounded-lg bg-muted/30 border border-border/30">
                            <p className="font-semibold text-sm">{faq.question}</p>
                            <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Safety Tips */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold">Important Safety Tips to Prevent Social Media Blackmail</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {safetyTips.map((tip, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground p-2">
                            <ShieldCheck className="h-4 w-4 text-success shrink-0" />
                            <span>{tip}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* You Are Not Alone */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="glass-card p-6 border-l-4 border-l-primary">
                <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold">You Are Not Alone</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                    Victims of online blackmail often feel fear, shame, or isolation. Remember:
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>This is a crime, not your fault</strong></li>
                    <li>• <strong>Help is available</strong> — reach out to authorities or legal experts</li>
                    <li>• <strong>Legal systems exist to protect victims</strong></li>
                    <li>• <strong>Early reporting and legal guidance can stop the abuse</strong></li>
                </ul>
            </motion.div>

            {/* Emergency Helplines */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-warning" />
                    <h3 className="font-heading font-semibold">Emergency Helplines</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <p><strong>Cyber Crime Helpline:</strong> <span className="text-primary font-mono">1930</span></p>
                        <p><strong>Reporting Portal:</strong> <a href="https://cybercrime.gov.in" className="text-primary hover:underline">cybercrime.gov.in</a></p>
                        <p><strong>Women Cyber Crime:</strong> <span className="text-primary font-mono">181</span></p>
                    </div>
                    <div className="space-y-2">
                        <p><strong>Child Helpline:</strong> <span className="text-primary font-mono">1098</span></p>
                        <p><strong>Legal Services:</strong> <span className="text-primary font-mono">15100</span></p>
                        <p><strong>Police Emergency:</strong> <span className="text-primary font-mono">112</span></p>
                    </div>
                </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-heading font-semibold text-muted-foreground">Disclaimer</h3>
                </div>
                <p className="text-xs text-muted-foreground">
                    This content is purely for educational and informational purposes. It is not a promotion, advertisement, or solicitation.
                    The information is for public awareness only. If you are a victim of cybercrime, report the matter immediately to the
                    official cybercrime reporting mechanism or helpline.
                </p>
            </motion.div>
        </div>
    );
}
