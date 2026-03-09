import { useParams, useNavigate } from "react-router-dom";
import { usePolicyStore } from "@/stores/policyStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Search as SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function PolicyViewer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { policies, analyzePolicy, rules } = usePolicyStore();
  const policy = policies.find((p) => p.id === id);

  if (!policy) {
    return (
      <div className="space-y-4 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/policies")}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Library
        </Button>
        <div className="glass-card p-12 text-center">
          <p className="text-muted-foreground">Policy not found.</p>
        </div>
      </div>
    );
  }

  const policyRules = rules.filter((r) => r.policyId === policy.id);
  const isPdf = policy.file.toLowerCase().endsWith(".pdf");

  const handleAnalyze = () => {
    analyzePolicy(policy.id);
    toast.success(`Rules extracted from "${policy.name}"`);
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
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="ghost" onClick={() => navigate("/policies")}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-heading">{policy.name}</h1>
          <div className="flex items-center gap-3 mt-1">
            <Badge variant="secondary" className={categoryColor[policy.category] || ""}>
              {policy.category}
            </Badge>
            {policy.analyzed ? (
              <span className="text-success text-xs font-mono">✓ Analyzed</span>
            ) : (
              <span className="text-muted-foreground text-xs font-mono">Pending</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleAnalyze} disabled={policy.analyzed}>
            <SearchIcon className="h-3.5 w-3.5 mr-1" /> {policy.analyzed ? "Analyzed" : "Analyze"}
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={`/policies/${policy.file}`} download>
              <Download className="h-3.5 w-3.5 mr-1" /> Download
            </a>
          </Button>
          {policy.analyzed && (
            <Button size="sm" onClick={() => navigate(`/rules?policy=${policy.id}`)}>
              View {policyRules.length} Rules
            </Button>
          )}
        </div>
      </div>

      {/* PDF Preview */}
      {isPdf ? (
        <div className="glass-card overflow-hidden" style={{ height: "70vh" }}>
          <iframe
            src={`/policies/${policy.file}`}
            className="w-full h-full border-0"
            title={policy.name}
          />
        </div>
      ) : (
        <div className="glass-card p-12 text-center space-y-3">
          <p className="text-muted-foreground">Preview not available for this file type.</p>
          <Button variant="outline" asChild>
            <a href={`/policies/${policy.file}`} download>
              <Download className="h-4 w-4 mr-2" /> Download File
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
