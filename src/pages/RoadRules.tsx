import { motion } from "framer-motion";
import { ExternalLink, Car, AlertTriangle, ShieldCheck, ArrowRight, Users, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roadRules = [
  {
    title: "Speed Limits",
    description: "Maximum speed limit on national highways is 100 km/h for cars, 80 km/h for two-wheelers, and 60 km/h for heavy vehicles. Within city limits, speed is restricted to 50 km/h unless otherwise posted.",
    category: "Speed",
    icon: Gauge,
  },
  {
    title: "Seat Belt & Helmet Mandatory",
    description: "Driver and all passengers must wear seat belts. Two-wheeler riders and pillion must wear ISI-marked helmets. Non-compliance attracts penalty of ₹1,000.",
    category: "Safety",
    icon: ShieldCheck,
  },
  {
    title: "Drink & Drive Prohibition",
    description: "Blood alcohol level must not exceed 30mg per 100ml. First offence: ₹10,000 fine and/or 6 months imprisonment. Repeat offence: ₹15,000 fine and/or 2 years imprisonment.",
    category: "Offence",
    icon: AlertTriangle,
  },
  {
    title: "Lane Discipline",
    description: "Vehicles must keep to the left side of the road. Overtaking only from the right side. Use of indicators mandatory before turning or changing lanes.",
    category: "Driving",
    icon: Car,
  },
  {
    title: "Pedestrian Right of Way",
    description: "Pedestrians have the right of way at zebra crossings. Vehicles must stop when pedestrians are crossing at marked crosswalks. Penalty for violation: ₹500.",
    category: "Safety",
    icon: Users,
  },
  {
    title: "Document Requirements",
    description: "Drivers must carry: Valid driving license, vehicle registration certificate (RC), valid insurance, PUC certificate. Digital copies on DigiLocker/mParivahan are accepted.",
    category: "Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Traffic Signal Compliance",
    description: "Running a red light attracts penalty of ₹1,000 for first offence. Repeated violations may lead to license suspension. Yellow light means prepare to stop, not accelerate.",
    category: "Offence",
    icon: AlertTriangle,
  },
  {
    title: "No Use of Mobile Phone While Driving",
    description: "Using mobile phones while driving is prohibited. Hands-free devices are allowed. Penalty: ₹5,000 for first offence, license suspension for repeat offenders.",
    category: "Safety",
    icon: ShieldCheck,
  },
];

const categoryColor: Record<string, string> = {
  Speed: "bg-primary/20 text-primary",
  Safety: "bg-success/20 text-success",
  Offence: "bg-destructive/20 text-destructive",
  Driving: "bg-warning/20 text-warning",
  Compliance: "bg-muted text-muted-foreground",
};

export default function RoadRules() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Road Rules</h1>
          <p className="text-muted-foreground mt-1">Indian road safety rules and traffic regulations</p>
        </div>
        <Button variant="outline" asChild>
          <a href="https://www.htp.gov.in/road_rules.html" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" /> View Source (HTP)
          </a>
        </Button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {["Safety", "Offence", "Driving", "Compliance"].map((cat, i) => {
          const count = roadRules.filter((r) => r.category === cat).length;
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
        {roadRules.map((rule, i) => {
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
          <h3 className="font-heading font-semibold">Source Reference</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Road rules sourced from Haryana Transport Portal (HTP). For complete and updated rules, refer to the official source.
        </p>
        <Button size="sm" variant="outline" asChild>
          <a href="https://www.htp.gov.in/road_rules.html" target="_blank" rel="noopener noreferrer">
            Visit HTP <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
