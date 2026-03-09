import { motion } from "framer-motion";
import { stakeholderImpacts, stakeholderGraph } from "@/data/policies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ImpactBar({ name, score, type }: { name: string; score: number; type: string }) {
  const colorClass = type === "benefit" ? "bg-success" : type === "cost" ? "bg-destructive" : "bg-primary";
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="font-mono">{(score * 100).toFixed(0)}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
}

function StakeholderNetwork() {
  const { nodes, edges } = stakeholderGraph;
  const positions: Record<string, { x: number; y: number }> = {
    gov: { x: 250, y: 50 },
    cit: { x: 100, y: 180 },
    corp: { x: 400, y: 180 },
    msme: { x: 150, y: 320 },
    stu: { x: 350, y: 320 },
  };

  const nodeColor: Record<string, string> = {
    government: "hsl(217, 91%, 60%)",
    citizen: "hsl(142, 71%, 45%)",
    corporate: "hsl(0, 84%, 60%)",
    msme: "hsl(38, 92%, 50%)",
    student: "hsl(280, 60%, 60%)",
  };

  return (
    <svg viewBox="0 0 500 400" className="w-full max-w-lg mx-auto">
      {edges.map((edge, i) => {
        const from = positions[edge.from];
        const to = positions[edge.to];
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2 - 10;
        return (
          <g key={i}>
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="hsl(217, 33%, 30%)" strokeWidth="1.5" />
            <text x={midX} y={midY} textAnchor="middle" className="fill-muted-foreground text-[9px]">{edge.label}</text>
          </g>
        );
      })}
      {nodes.map((node) => {
        const pos = positions[node.id];
        return (
          <g key={node.id}>
            <circle cx={pos.x} cy={pos.y} r="28" fill={nodeColor[node.type]} opacity="0.2" />
            <circle cx={pos.x} cy={pos.y} r="20" fill={nodeColor[node.type]} opacity="0.8" />
            <text x={pos.x} y={pos.y + 4} textAnchor="middle" className="fill-foreground text-[10px] font-semibold">{node.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ImpactSimulation() {
  const categories = Object.keys(stakeholderImpacts);

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold font-heading">Impact Simulation</h1>
        <p className="text-muted-foreground mt-1">Stakeholder impact analysis by policy category</p>
      </div>

      <Tabs defaultValue={categories[0]}>
        <TabsList className="bg-card border border-border">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="text-xs">{cat}</TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 space-y-4">
                <h2 className="font-heading font-semibold">Impact Scores</h2>
                {stakeholderImpacts[cat].map((impact) => (
                  <ImpactBar key={impact.name} {...impact} />
                ))}
              </div>
              <div className="glass-card p-6">
                <h2 className="font-heading font-semibold mb-4">Stakeholder Network</h2>
                <StakeholderNetwork />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
