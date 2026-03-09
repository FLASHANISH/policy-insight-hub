import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Users, BookOpen, FileText, Brain, Eye, Scale, Globe, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const aiGovernanceRules = [
  {
    title: "IndiaAI Mission",
    description: "Government's flagship program with ₹10,372 crore budget to build AI compute infrastructure, develop foundational models, and create datasets for India-specific AI applications. Aims to democratize AI access across sectors.",
    category: "Mission",
    icon: Brain,
  },
  {
    title: "Seven Sutras of Responsible AI",
    description: "India's AI governance framework based on seven principles: Safety & Reliability, Inclusive Innovation, Transparency, Privacy & Security, Accountability, Digital Governance, and Positive Purpose for social good.",
    category: "Principles",
    icon: Scale,
  },
  {
    title: "AI Safety & Reliability",
    description: "AI systems must undergo rigorous testing before deployment. Mandatory risk assessment for high-impact AI applications in healthcare, finance, and public services. Regular audits and monitoring required.",
    category: "Safety",
    icon: ShieldCheck,
  },
  {
    title: "AI Transparency & Explainability",
    description: "AI-driven decisions affecting citizens must be explainable. Organizations must disclose when AI is used in decision-making. Algorithmic impact assessments mandatory for government AI deployments.",
    category: "Transparency",
    icon: Eye,
  },
  {
    title: "Data Governance for AI",
    description: "AI training data must comply with Digital Personal Data Protection Act 2023. India Data Management Office (IDMO) to oversee data quality standards. Open data initiatives for AI research.",
    category: "Data",
    icon: Globe,
  },
  {
    title: "AI in Government Services",
    description: "Digital India initiative integrating AI across e-governance. AI-powered citizen services, document verification, and grievance redressal. Aadhaar-linked AI services for targeted delivery.",
    category: "Governance",
    icon: FileText,
  },
  {
    title: "AI Skill Development",
    description: "National AI education programs through AICTE and UGC. AI Centers of Excellence in premier institutions. FutureSkills Prime platform for AI workforce training targeting 1 million professionals.",
    category: "Education",
    icon: BookOpen,
  },
  {
    title: "AI Ethics & Accountability",
    description: "Framework for ethical AI deployment ensuring non-discrimination, fairness, and human oversight. Mandatory human-in-the-loop for critical AI decisions. Grievance mechanism for AI-related complaints.",
    category: "Ethics",
    icon: Users,
  },
  {
    title: "AI Compute Infrastructure",
    description: "10,000+ GPU compute capacity being established under IndiaAI Mission. Public-private partnership model for AI cloud infrastructure. Subsidized AI compute access for startups and researchers.",
    category: "Infrastructure",
    icon: Cpu,
  },
];

const categoryColor: Record<string, string> = {
  Mission: "bg-blue-500/20 text-blue-600",
  Principles: "bg-purple-500/20 text-purple-600",
  Safety: "bg-red-500/20 text-red-600",
  Transparency: "bg-green-500/20 text-green-600",
  Data: "bg-yellow-500/20 text-yellow-600",
  Governance: "bg-indigo-500/20 text-indigo-600",
  Education: "bg-orange-500/20 text-orange-600",
  Ethics: "bg-pink-500/20 text-pink-600",
  Infrastructure: "bg-cyan-500/20 text-cyan-600",
};

export default function AiGovernance() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">AI Governance in India</h1>
          <p className="text-muted-foreground mt-1">India's approach to responsible AI development and regulation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="https://indiaai.gov.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> IndiaAI Portal
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.meity.gov.in/artificial-intelligence" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> MeitY AI
            </a>
          </Button>
        </div>
      </div>

      {/* Introduction */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold font-heading">India's AI Strategy</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          India has adopted a principles-based approach to AI governance, balancing innovation with responsibility.
          Rather than heavy-handed regulation, India's strategy focuses on the "Seven Sutras" framework —
          guiding principles that ensure AI development serves the nation's diverse population while fostering
          a thriving AI ecosystem. The IndiaAI Mission, with a budget of ₹10,372 crore, aims to position
          India as a global leader in responsible AI development.
        </p>
      </motion.div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {["Mission", "Principles", "Safety", "Transparency", "Data", "Governance", "Education", "Ethics", "Infrastructure"].map((cat, i) => {
          const count = aiGovernanceRules.filter((r) => r.category === cat).length;
          return (
            <motion.div key={cat} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-4 text-center">
              <p className="text-2xl font-bold font-heading">{count}</p>
              <Badge variant="secondary" className={`mt-1 text-xs ${categoryColor[cat] || ""}`}>{cat}</Badge>
            </motion.div>
          );
        })}
      </div>

      {/* Rules List */}
      <div className="grid gap-4 md:grid-cols-2">
        {aiGovernanceRules.map((rule, i) => {
          const Icon = rule.icon;
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
                    <Badge variant="secondary" className={categoryColor[rule.category] || ""}>
                      {rule.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-sm">{rule.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Initiatives */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-heading font-semibold">Key AI Initiatives</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Government Programs</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• IndiaAI Mission (₹10,372 Cr)</li>
              <li>• AI Centers of Excellence</li>
              <li>• National AI Portal (indiaai.gov.in)</li>
              <li>• AIRAWAT Cloud Platform</li>
              <li>• FutureSkills Prime</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Regulatory Framework</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Seven Sutras of Responsible AI</li>
              <li>• DPDP Act 2023 (Data Protection)</li>
              <li>• IT Act 2000 (Cyber Governance)</li>
              <li>• MeitY AI Advisory (March 2024)</li>
              <li>• NITI Aayog AI Strategy</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Source */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="font-heading font-semibold">Official Sources</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          AI governance information sourced from IndiaAI Portal, MeitY, and NITI Aayog. India's AI governance framework
          is evolving rapidly with new guidelines and initiatives being announced regularly.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href="https://indiaai.gov.in" target="_blank" rel="noopener noreferrer">
              IndiaAI Portal <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="https://www.niti.gov.in/sites/default/files/2023-03/National-Strategy-for-Artificial-Intelligence.pdf" target="_blank" rel="noopener noreferrer">
              NITI Aayog Strategy <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
