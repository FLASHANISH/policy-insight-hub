import { motion } from "framer-motion";
import { ExternalLink, AlertTriangle, ShieldCheck, ArrowRight, Users, BookOpen, FileText, Award, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const aicteRules = [
  {
    title: "AICTE Approval Process 2026-27",
    description: "Mandatory approval process for all technical institutions. Includes institutional eligibility, infrastructure requirements, faculty qualifications, and compliance with AICTE norms for academic year 2026-27.",
    category: "Approval",
    icon: FileText,
  },
  {
    title: "AICTE Productization Fellowship (APF)",
    description: "New initiative to support innovative ideas driving economic growth. Contributes to ATMANIRBHAR BHARAT and VIKSIT BHARAT@2047 vision. Provides funding for product development and commercialization.",
    category: "Fellowship",
    icon: Award,
  },
  {
    title: "AICTE-Research Promotion Scheme (RPS)",
    description: "Promotes research in identified thrust areas of technical education. Creates research ambience in institutes with funding limit of Rs 25 Lakh for 3-year projects. Aims to generate Masters and Doctoral candidates.",
    category: "Research",
    icon: BookOpen,
  },
  {
    title: "AICTE-IDEA Lab",
    description: "Establishes IDEA (Idea Development, Evaluation & Application) Labs in approved institutions. Encourages STEM fundamentals application, hands-on experience, learning by doing, and product visualization.",
    category: "Innovation",
    icon: Lightbulb,
  },
  {
    title: "PGDM Courses Categorization",
    description: "Public notice for categorization of institutions offering PGDM courses for graded autonomy. Defines eligibility criteria and approval process for Post Graduate Diploma in Management programs.",
    category: "Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Institutional Infrastructure Norms",
    description: "Minimum infrastructure requirements including classrooms, laboratories, library, computing facilities, and student amenities. Must comply with AICTE standards for approval and renewal.",
    category: "Standards",
    icon: GraduationCap,
  },
  {
    title: "Faculty Qualification Requirements",
    description: "Minimum qualifications for teaching staff including Ph.D., M.Tech., and industry experience requirements. Defines faculty-student ratio and recruitment norms for technical institutions.",
    category: "Academic",
    icon: Users,
  },
  {
    title: "Anti-Ragging Regulations",
    description: "Strict implementation of anti-ragging measures as per UGC/AICTE guidelines. Mandatory formation of anti-ragging committee, helpline, and awareness programs for student safety.",
    category: "Safety",
    icon: ShieldCheck,
  },
];

const categoryColor: Record<string, string> = {
  Approval: "bg-blue-500/20 text-blue-600",
  Fellowship: "bg-purple-500/20 text-purple-600",
  Research: "bg-green-500/20 text-green-600",
  Innovation: "bg-yellow-500/20 text-yellow-600",
  Compliance: "bg-red-500/20 text-red-600",
  Standards: "bg-indigo-500/20 text-indigo-600",
  Academic: "bg-orange-500/20 text-orange-600",
  Safety: "bg-pink-500/20 text-pink-600",
};

export default function AicteRules() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">AICTE Rules & Regulations</h1>
          <p className="text-muted-foreground mt-1">All India Council for Technical Education guidelines and policies</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="https://www.aicte.gov.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Visit AICTE
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.aicte.gov.in/initiatives/overview" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Initiatives
            </a>
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Approval", "Fellowship", "Research", "Innovation", "Compliance", "Standards", "Academic", "Safety"].map((cat, i) => {
          const count = aicteRules.filter((r) => r.category === cat).length;
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
        {aicteRules.map((rule, i) => {
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
          AICTE rules and regulations sourced from the official All India Council for Technical Education portal. These govern technical education institutions across India.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href="https://www.aicte.gov.in" target="_blank" rel="noopener noreferrer">
              Visit AICTE Portal <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href="https://www.aicte.gov.in/downloads/aph/Revised%20Public%20Notice%20(04.02.2026).pdf" target="_blank" rel="noopener noreferrer">
              Approval Process 2026-27 <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
