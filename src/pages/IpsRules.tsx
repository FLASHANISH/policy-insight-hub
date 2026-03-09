import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Users, BookOpen, FileText, Gavel, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ipsRules = [
  {
    title: "All India Services Act, 1951",
    description: "Governs the recruitment, conditions of service, and discipline of IPS officers. Provides framework for appointment, promotion, and deputation of IPS officers across states and central services.",
    category: "Act",
    icon: BookOpen,
  },
  {
    title: "IPS (Conduct) Rules, 1968",
    description: "Defines code of conduct for IPS officers including integrity, devotion to duty, and political neutrality. Covers restrictions on private employment, property dealings, and public statements.",
    category: "Conduct",
    icon: ShieldCheck,
  },
  {
    title: "IPS (Discipline and Appeal) Rules, 1969",
    description: "Outlines disciplinary procedures and appeal mechanisms for IPS officers. Covers inquiry processes, penalties, and redressal mechanisms for misconduct allegations.",
    category: "Discipline",
    icon: Gavel,
  },
  {
    title: "IPS (Leave) Rules, 1955",
    description: "Regulates leave entitlements including earned leave, half-pay leave, commuted leave, and extraordinary leave. Specifies conditions and procedures for leave approval.",
    category: "Service",
    icon: FileText,
  },
  {
    title: "IPS (Provident Fund) Rules, 1955",
    description: "Manages compulsory contribution to General Provident Fund. Covers subscription rates, withdrawals, advances, and final settlement procedures for retiring officers.",
    category: "Benefits",
    icon: Award,
  },
  {
    title: "IPS (Study Leave) Regulations, 1960",
    description: "Provides framework for sponsored study abroad or in India. Covers eligibility, duration, stipend, and service bond requirements after completion of studies.",
    category: "Training",
    icon: BookOpen,
  },
  {
    title: "IPS (Medical Attendance) Rules, 1954",
    description: "Defines medical facilities and reimbursement for IPS officers and their families. Covers treatment in government/private hospitals and claim procedures.",
    category: "Benefits",
    icon: ShieldCheck,
  },
  {
    title: "IPS (Joint Cadre) Rules, 1972",
    description: "Regulates sharing of IPS officers between center and states. Defines cadre strength, deputation procedures, and repatriation norms for inter-cadre transfers.",
    category: "Administration",
    icon: Users,
  },
];

const categoryColor: Record<string, string> = {
  Act: "bg-blue-500/20 text-blue-600",
  Conduct: "bg-purple-500/20 text-purple-600",
  Discipline: "bg-red-500/20 text-red-600",
  Service: "bg-green-500/20 text-green-600",
  Benefits: "bg-yellow-500/20 text-yellow-600",
  Training: "bg-indigo-500/20 text-indigo-600",
  Administration: "bg-orange-500/20 text-orange-600",
};

export default function IpsRules() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">IPS Rules & Regulations</h1>
          <p className="text-muted-foreground mt-1">Indian Police Service (IPS) official rules and guidelines</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="https://ips.gov.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Visit IPS Portal
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://ips.gov.in/ips_act_rules.aspx" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Acts & Rules
            </a>
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Act", "Conduct", "Discipline", "Service", "Benefits", "Training", "Administration"].map((cat, i) => {
          const count = ipsRules.filter((r) => r.category === cat).length;
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
        {ipsRules.map((rule, i) => {
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

      {/* Source */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="font-heading font-semibold">Official Source</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          IPS rules and regulations sourced from the official Indian Police Service portal. These are the governing rules for all IPS officers across India.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href="https://ips.gov.in" target="_blank" rel="noopener noreferrer">
              Visit IPS Portal <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="https://ips.gov.in/ips_act_rules.aspx" target="_blank" rel="noopener noreferrer">
              View All Rules <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
