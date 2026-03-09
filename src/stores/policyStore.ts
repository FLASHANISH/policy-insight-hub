import { create } from "zustand";
import { Policy, Rule, mockRulesForPolicy, policies as initialPolicies, preloadedRules } from "@/data/policies";

interface PolicyStore {
  policies: Policy[];
  rules: Rule[];
  analyzePolicy: (policyId: string) => void;
  markRuleRead: (ruleId: string) => void;
}

export const usePolicyStore = create<PolicyStore>((set, get) => ({
  policies: initialPolicies,
  rules: [...preloadedRules],
  analyzePolicy: (policyId: string) => {
    const { policies, rules } = get();
    const newRules = mockRulesForPolicy[policyId] || [];
    const existingIds = new Set(rules.map((r) => r.id));
    const toAdd = newRules.filter((r) => !existingIds.has(r.id));
    set({
      policies: policies.map((p) => (p.id === policyId ? { ...p, analyzed: true } : p)),
      rules: [...rules, ...toAdd],
    });
  },
  markRuleRead: (ruleId: string) => {
    set({
      rules: get().rules.map((r) => (r.id === ruleId ? { ...r, status: "read" as const } : r)),
    });
  },
}));

