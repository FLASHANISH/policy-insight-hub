import { FileBarChart, Download, PieChart, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePolicyStore } from "@/stores/policyStore";
import { policies } from "@/data/policies";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  const { rules } = usePolicyStore();
  const analyzed = policies.filter((_, i) => usePolicyStore.getState().policies[i]?.analyzed).length;

  const categoryCounts = policies.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const ruleCategoryCounts = rules.reduce<Record<string, number>>((acc, r) => {
    acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});

  const newCount = rules.filter((r) => r.status === "new").length;
  const readCount = rules.filter((r) => r.status === "read").length;

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold font-heading">Reports</h1>
        <p className="text-muted-foreground mt-1">Policy analysis summary and insights</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Policies", value: policies.length, icon: FileBarChart },
          { label: "Analyzed", value: analyzed, icon: PieChart },
          { label: "Total Rules", value: rules.length, icon: BarChart3 },
          { label: "Unread Rules", value: newCount, icon: FileBarChart },
        ].map((item, i) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass-card p-4">
            <item.icon className="h-5 w-5 text-primary mb-2" />
            <p className="text-2xl font-bold font-heading">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Policy Distribution */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
        <h2 className="font-heading font-semibold mb-4">Policy Distribution by Category</h2>
        <div className="space-y-3">
          {Object.entries(categoryCounts).map(([cat, count]) => (
            <div key={cat} className="flex items-center gap-4">
              <span className="text-sm w-40 shrink-0">{cat}</span>
              <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(count / policies.length) * 100}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <span className="text-sm font-mono w-8 text-right">{count}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Rules by Category */}
      {rules.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
          <h2 className="font-heading font-semibold mb-4">Extracted Rules by Category</h2>
          <div className="space-y-3">
            {Object.entries(ruleCategoryCounts).map(([cat, count]) => (
              <div key={cat} className="flex items-center gap-4">
                <span className="text-sm w-40 shrink-0">{cat}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(count / rules.length) * 100}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-success rounded-full"
                  />
                </div>
                <span className="text-sm font-mono w-8 text-right">{count}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-xs">
            <Badge className="bg-primary/20 text-primary">NEW: {newCount}</Badge>
            <Badge variant="secondary">READ: {readCount}</Badge>
          </div>
        </motion.div>
      )}

      {rules.length === 0 && (
        <div className="glass-card p-12 text-center space-y-3">
          <FileBarChart className="h-10 w-10 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Analyze policies first to see detailed reports.</p>
        </div>
      )}
    </div>
  );
}
