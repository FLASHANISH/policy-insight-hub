import { motion } from "framer-motion";
import { ExternalLink, IndianRupee, ArrowRight, Calendar, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const taxChanges = [
  {
    title: "New Tax Regime as Default",
    description: "The new tax regime becomes the default regime from FY 2025-26. Taxpayers opting for the old regime must explicitly select it.",
    impact: "high",
    stakeholders: ["Citizens", "Salaried Employees"],
    effective: "April 2026",
  },
  {
    title: "Revised Income Tax Slabs",
    description: "Income up to ₹4,00,000 — Nil; ₹4,00,001–₹8,00,000 — 5%; ₹8,00,001–₹12,00,000 — 10%; ₹12,00,001–₹16,00,000 — 15%; ₹16,00,001–₹20,00,000 — 20%; ₹20,00,001–₹24,00,000 — 25%; Above ₹24,00,000 — 30%.",
    impact: "high",
    stakeholders: ["Citizens", "Government"],
    effective: "April 2026",
  },
  {
    title: "Standard Deduction Increase",
    description: "Standard deduction for salaried individuals increased to ₹75,000 under the new tax regime.",
    impact: "medium",
    stakeholders: ["Salaried Employees"],
    effective: "April 2026",
  },
  {
    title: "TDS Threshold Changes",
    description: "Revised TDS thresholds on interest income from banks (₹50,000 for senior citizens) and other categories to reduce compliance burden.",
    impact: "medium",
    stakeholders: ["Citizens", "Banks", "Corporates"],
    effective: "April 2026",
  },
  {
    title: "Capital Gains Tax Rationalization",
    description: "Long-term capital gains on listed equity taxed at 12.5% beyond ₹1.25 lakh exemption. Short-term capital gains at 20%.",
    impact: "high",
    stakeholders: ["Investors", "Corporates"],
    effective: "April 2026",
  },
  {
    title: "Updated Return Filing Window",
    description: "Taxpayers can now file updated returns within 4 years (previously 2 years) from end of assessment year with additional tax payment.",
    impact: "low",
    stakeholders: ["Citizens", "Tax Professionals"],
    effective: "April 2026",
  },
];

const impactColor: Record<string, string> = {
  high: "bg-destructive/20 text-destructive",
  medium: "bg-warning/20 text-warning",
  low: "bg-success/20 text-success",
};

export default function TaxPolicy() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Tax Policy Updates</h1>
          <p className="text-muted-foreground mt-1">Income tax changes effective from April 2026</p>
        </div>
        <Button variant="outline" asChild>
          <a href="https://cleartax.in/s/income-tax-changes-from-april-2026" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" /> View Source (ClearTax)
          </a>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 text-center">
          <IndianRupee className="h-6 w-6 mx-auto text-primary mb-2" />
          <p className="text-2xl font-bold font-heading">{taxChanges.length}</p>
          <p className="text-xs text-muted-foreground">Key Changes</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5 text-center">
          <Calendar className="h-6 w-6 mx-auto text-warning mb-2" />
          <p className="text-2xl font-bold font-heading">April 2026</p>
          <p className="text-xs text-muted-foreground">Effective Date</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-5 text-center">
          <TrendingUp className="h-6 w-6 mx-auto text-success mb-2" />
          <p className="text-2xl font-bold font-heading">₹12L+</p>
          <p className="text-xs text-muted-foreground">Tax-Free Income (New Regime)</p>
        </motion.div>
      </div>

      {/* Tax Changes List */}
      <div className="space-y-4">
        {taxChanges.map((change, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="glass-card p-5 border-l-4 border-l-primary"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={impactColor[change.impact]}>
                    {change.impact.toUpperCase()} IMPACT
                  </Badge>
                  <h3 className="font-heading font-semibold">{change.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{change.description}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>Effective: {change.effective}</span>
                  <span>Stakeholders: {change.stakeholders.join(", ")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* External Reference */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="glass-card p-6">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="h-5 w-5 text-warning" />
          <h3 className="font-heading font-semibold">Source Reference</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          This data is sourced from ClearTax. For the latest and most accurate information, please refer to the official source.
        </p>
        <Button size="sm" variant="outline" asChild>
          <a href="https://cleartax.in/s/income-tax-changes-from-april-2026" target="_blank" rel="noopener noreferrer">
            Visit ClearTax <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
