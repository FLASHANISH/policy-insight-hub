import { motion } from "framer-motion";
import { Eye, Search as SearchIcon, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePolicyStore } from "@/stores/policyStore";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export default function PolicyLibrary() {
  const { policies, analyzePolicy } = usePolicyStore();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  // whenever search state changes update URL
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    if (search) p.set("search", search);
    else p.delete("search");
    const newSearch = p.toString();
    if (newSearch !== location.search.replace(/^\?/, "")) {
      navigate({ pathname: location.pathname, search: newSearch }, { replace: true });
    }
  }, [search]);

  const filtered = policies.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAnalyze = (id: string, name: string) => {
    analyzePolicy(id);
    toast.success(`Rules extracted from "${name}"`);
  };

  const categoryColor: Record<string, string> = {
    "Electric Vehicle": "bg-success/20 text-success",
    "Data Protection": "bg-primary/20 text-primary",
    Education: "bg-warning/20 text-warning",
    "Startup Policy": "bg-destructive/20 text-destructive",
    "General Policy": "bg-muted text-muted-foreground",
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading">Policy Library</h1>
          <p className="text-muted-foreground mt-1">{policies.length} policies loaded</p>
        </div>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search policies..."
            className="pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
          />
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 text-muted-foreground font-medium">Policy Name</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Category</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
              <th className="text-right p-4 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((policy, i) => (
              <motion.tr
                key={policy.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border/30 hover:bg-accent/30 transition-colors"
              >
                <td className="p-4 flex items-center gap-3">
                  <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="truncate max-w-xs">{policy.name}</span>
                </td>
                <td className="p-4">
                  <Badge variant="secondary" className={categoryColor[policy.category] || ""}>
                    {policy.category}
                  </Badge>
                </td>
                <td className="p-4">
                  {policy.analyzed ? (
                    <span className="text-success text-xs font-mono">Analyzed</span>
                  ) : (
                    <span className="text-muted-foreground text-xs font-mono">Pending</span>
                  )}
                </td>
                <td className="p-4 text-right space-x-2">
                  <Button size="sm" variant="ghost" onClick={() => navigate(`/policies/${policy.id}`)}>
                    <Eye className="h-3.5 w-3.5 mr-1" /> View
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleAnalyze(policy.id, policy.name)}
                    disabled={policy.analyzed}
                  >
                    <SearchIcon className="h-3.5 w-3.5 mr-1" /> Analyze
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={`/policies/${policy.file}`} download>
                      <Download className="h-3.5 w-3.5 mr-1" /> Download
                    </a>
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-8 text-center text-muted-foreground">No policies match your search.</p>
        )}
      </motion.div>
    </div>
  );
}
