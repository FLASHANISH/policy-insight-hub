import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePolicyStore } from "@/stores/policyStore";
import { useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Rules() {
  const { rules, markRuleRead } = usePolicyStore();
  const [searchParams] = useSearchParams();
  const policyFilter = searchParams.get("policy");

  const displayed = policyFilter ? rules.filter((r) => r.policyId === policyFilter) : rules;

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold font-heading">Extracted Rules</h1>
        <p className="text-muted-foreground mt-1">{displayed.length} rules found</p>
      </div>

      {displayed.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <p className="text-muted-foreground">No rules extracted yet. Analyze a policy first.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {displayed.map((rule, i) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`glass-card p-5 transition-all ${rule.status === "new" ? "border-l-4 border-l-primary" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Badge variant={rule.status === "new" ? "default" : "secondary"} className={rule.status === "new" ? "bg-primary/20 text-primary" : ""}>
                      {rule.status.toUpperCase()}
                    </Badge>
                    <h3 className="font-heading font-semibold">{rule.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Category: {rule.category}</span>
                    <span>Stakeholders: {rule.stakeholders.join(", ")}</span>
                  </div>
                </div>
                {rule.status === "new" && (
                  <Button size="sm" variant="outline" onClick={() => markRuleRead(rule.id)}>
                    <CheckCircle className="h-3.5 w-3.5 mr-1" /> Mark as Read
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
