import { usePolicyStore } from "@/stores/policyStore";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Bell } from "lucide-react";

export default function Updates() {
  const { rules, markRuleRead } = usePolicyStore();
  const newRules = rules.filter((r) => r.status === "new");

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold font-heading">New Updates</h1>
        <p className="text-muted-foreground mt-1">{newRules.length} unread rules</p>
      </div>

      {newRules.length === 0 ? (
        <div className="glass-card p-12 text-center space-y-2">
          <Bell className="h-8 w-8 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">All caught up! No new updates.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {newRules.map((rule, i) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 border-l-4 border-l-primary animate-pulse-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary">NEW</Badge>
                    <h3 className="font-heading font-semibold">{rule.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => markRuleRead(rule.id)}>
                  <CheckCircle className="h-3.5 w-3.5 mr-1" /> Mark as Read
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
