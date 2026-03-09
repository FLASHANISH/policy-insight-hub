import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Users, BookOpen, FileText, Award, Lightbulb, GraduationCap, Lock, Eye, Shield, UserCheck, Globe, Smartphone, CreditCard, MessageSquare, Camera, Database, Cloud, Server, Cpu, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const cyberCrimeSections = [
  {
    title: "Understanding Cyber Crime",
    description: "Cyber crime encompasses any illegal activity involving computers, networks, or digital devices. Governed primarily by Information Technology Act, 2000 and relevant IPC sections.",
    category: "Overview",
    icon: Globe,
  },
  {
    title: "Hacking and Unauthorized Access",
    description: "Section 66 of IT Act: Unauthorized access to computer systems with intent to cause damage, steal information, or disrupt services. Penalties: Up to 3 years imprisonment and/or ₹5 lakh fine.",
    category: "Crimes",
    icon: Lock,
  },
  {
    title: "Identity Theft and Impersonation",
    description: "Sections 66C & 66D: Digital identity theft and cheating by impersonation. Includes fake social media profiles, email spoofing, and fraudulent credit card use.",
    category: "Crimes",
    icon: UserCheck,
  },
  {
    title: "Online Financial Fraud",
    description: "IT Act Sections 66C, 66D with IPC Section 420. Covers phishing, UPI fraud, investment scams, and e-commerce fraud with AI-powered deepfake threats.",
    category: "Crimes",
    icon: CreditCard,
  },
  {
    title: "Cyberbullying and Online Harassment",
    description: "Prosecuted under IPC Sections 499/500, 509, and IT Act Section 67. Covers persistent harassment, revenge porn, trolling, and doxxing.",
    category: "Protection",
    icon: MessageSquare,
  },
  {
    title: "Child Protection Online",
    description: "IT Act Section 67B and POCSO Act. Protects against child exploitation, grooming, and abuse material with enhanced penalties up to life imprisonment.",
    category: "Protection",
    icon: Shield,
  },
  {
    title: "Data Protection and Privacy",
    description: "Digital Personal Data Protection Act 2023 ensures right to access, correct, and delete personal data. Corporate breach notification within 72 hours mandatory.",
    category: "Rights",
    icon: Eye,
  },
  {
    title: "Investigation and Legal Procedures",
    description: "Specialized cyber crime units, digital evidence standards, and court procedures. Online reporting through cybercrime.gov.in and state helplines available.",
    category: "Process",
    icon: FileText,
  },
  {
    title: "Prevention Strategies",
    description: "Digital hygiene best practices, 2FA authentication, regular updates, and careful sharing. Financial security and business protection frameworks essential.",
    category: "Prevention",
    icon: ShieldCheck,
  },
];

const categoryColor: Record<string, string> = {
  Overview: "bg-blue-500/20 text-blue-600",
  Crimes: "bg-red-500/20 text-red-600",
  Protection: "bg-green-500/20 text-green-600",
  Rights: "bg-purple-500/20 text-purple-600",
  Process: "bg-orange-500/20 text-orange-600",
  Prevention: "bg-indigo-500/20 text-indigo-600",
};

export default function CyberCrime() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Cyber Crime Laws in India 2025</h1>
          <p className="text-muted-foreground mt-1">What Every Internet User Must Know</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Report Cyber Crime
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> CERT-In
            </a>
          </Button>
        </div>
      </div>

      {/* Introduction */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-warning" />
          <h2 className="text-xl font-bold font-heading">Understanding Digital Threats</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          In our hyperconnected digital age, cybercrime has evolved from a niche concern to a mainstream threat affecting millions of Indians daily. 
          Recent statistics from the National Crime Records Bureau reveal a staggering 50% increase in cyber crimes reported across India in the past year, 
          with over 65,000 cases registered nationwide. More concerning is that only 1 in 4 cyber crimes are actually reported, 
          suggesting the real numbers are far higher.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Whether you're a business owner, student, or casual internet user, knowing your digital rights and legal protections could save you from becoming another statistic.
        </p>
      </motion.div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {["Overview", "Crimes", "Protection", "Rights", "Process", "Prevention"].map((cat, i) => {
          const count = cyberCrimeSections.filter((r) => r.category === cat).length;
          return (
            <motion.div key={cat} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-4 text-center">
              <p className="text-2xl font-bold font-heading">{count}</p>
              <Badge variant="secondary" className={`mt-1 text-xs ${categoryColor[cat] || ""}`}>{cat}</Badge>
            </motion.div>
          );
        })}
      </div>

      {/* Key Sections */}
      <div className="grid gap-4 md:grid-cols-2">
        {cyberCrimeSections.map((section, i) => {
          const Icon = section.icon;
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
                    <Badge variant="secondary" className={categoryColor[section.category] || ""}>
                      {section.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-sm">{section.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Emergency Helplines */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="h-5 w-5 text-warning" />
          <h3 className="font-heading font-semibold">Emergency Helplines</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">National Emergency Contacts</h4>
            <div className="space-y-1 text-sm">
              <p><strong>Cyber Crime Helpline:</strong> 1930</p>
              <p><strong>Reporting Portal:</strong> cybercrime.gov.in</p>
              <p><strong>Women Cyber Crime:</strong> 181</p>
              <p><strong>Child Helpline:</strong> 1098</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Legal Support</h4>
            <div className="space-y-1 text-sm">
              <p><strong>Legal Services Authority:</strong> 15100</p>
              <p><strong>State Legal Aid:</strong> District clinics available</p>
              <p><strong>Bar Association:</strong> Pro bono services</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Prevention Tips */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="h-5 w-5 text-success" />
          <h3 className="font-heading font-semibold">Essential Protection Measures</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Individual Protection</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use strong, unique passwords</li>
              <li>• Enable two-factor authentication</li>
              <li>• Regular software updates</li>
              <li>• Careful information sharing</li>
              <li>• Verify website authenticity</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Financial Security</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use secure payment gateways</li>
              <li>• Monitor bank statements</li>
              <li>• Never share OTPs or passwords</li>
              <li>• Use virtual credit cards</li>
              <li>• Set transaction limits</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Source */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-3">
          <FileText className="h-5 w-5 text-warning" />
          <h3 className="font-heading font-semibold">Legal Framework</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Cyber crimes in India are governed by Information Technology Act, 2000 (as amended), Indian Penal Code, 1860, 
          and Digital Personal Data Protection Act, 2023. Multiple regulatory bodies ensure enforcement and protection.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
              Report Incident <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer">
              Security Guidelines <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
