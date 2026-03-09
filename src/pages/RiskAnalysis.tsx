import { motion } from "framer-motion";
import { policies } from "@/data/policies";
import { ShieldAlert, ShieldCheck, Shield } from "lucide-react";

const riskScores: Record<string, number> = {
  "Electric Vehicle": 0.35,
  "Data Protection": 0.72,
  Education: 0.28,
  "Startup Policy": 0.45,
  "General Policy": 0.5,
};

function getRiskLevel(score: number) {
  if (score >= 0.6) return { label: "High", icon: ShieldAlert, color: "text-destructive" };
  if (score >= 0.4) return { label: "Medium", icon: Shield, color: "text-warning" };
  return { label: "Low", icon: ShieldCheck, color: "text-success" };
}

export default function RiskAnalysis() {
  const categories = [...new Set(policies.map((p) => p.category))];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold font-heading">Risk Analysis</h1>
        <p className="text-muted-foreground mt-1">Policy compliance and implementation risk assessment</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat, i) => {
          const score = riskScores[cat] || 0.5;
          const risk = getRiskLevel(score);
          const Icon = risk.icon;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`h-5 w-5 ${risk.color}`} />
                <h3 className="font-heading font-semibold">{cat}</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score * 100}%` }}
                    transition={{ duration: 0.8 }}
                    className={`h-full rounded-full ${score >= 0.6 ? "bg-destructive" : score >= 0.4 ? "bg-warning" : "bg-success"}`}
                  />
                </div>
                <span className={`text-sm font-mono ${risk.color}`}>{risk.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
