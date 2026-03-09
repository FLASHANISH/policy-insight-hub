import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Users, FileText, Bell, Activity, ShieldAlert, FileBarChart, IndianRupee, Car, Shield, GraduationCap, Smartphone, Brain, BarChart3, PieChart, Target, Zap, ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Policies",
    value: "19",
    description: "Active policy dashboards",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Recent Updates",
    value: "32",
    description: "Policy updates this month",
    icon: Bell,
    color: "text-green-600",
  },
  {
    title: "Active Users",
    value: "1,247",
    description: "Monthly active users",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "AI Queries",
    value: "3,456",
    description: "Chat interactions this month",
    icon: Brain,
    color: "text-orange-600",
  },
];

const recentPolicies = [
  {
    title: "Online Fraud Complaints",
    description: "National Cyber Crime Reporting Portal for filing online complaints",
    time: "1 hour ago",
    icon: Activity,
  },
  {
    title: "AML Policy & Procedures",
    description: "Anti-Money Laundering compliance framework under PMLA",
    time: "2 hours ago",
    icon: IndianRupee,
  },
  {
    title: "DPDP Rules 2025",
    description: "Digital Personal Data Protection Rules with enforcement timeline",
    time: "3 hours ago",
    icon: Shield,
  },
  {
    title: "Social Media Blackmail",
    description: "Awareness guide on sextortion and online blackmail prevention",
    time: "4 hours ago",
    icon: Smartphone,
  },
  {
    title: "Whistle Blower Policy",
    description: "Confidential reporting mechanism for fraud and violations",
    time: "5 hours ago",
    icon: Brain,
  },
  {
    title: "AI Governance Framework",
    description: "New comprehensive AI governance guidelines with seven sutras",
    time: "6 hours ago",
    icon: Brain,
  },
  {
    title: "Insurance Policies",
    description: "48 insurance policy documents covering health, travel, marine & more",
    time: "1 day ago",
    icon: HeartPulse,
  },
  {
    title: "Cyber Crime Laws",
    description: "Updated digital security regulations and protections",
    time: "2 days ago",
    icon: Smartphone,
  },
];

const quickActions = [
  {
    title: "Create New Policy",
    description: "Draft and implement new policy frameworks",
    icon: FileText,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Run Analysis",
    description: "Analyze policy impact and outcomes",
    icon: BarChart3,
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Generate Report",
    description: "Create comprehensive policy reports",
    icon: PieChart,
    color: "bg-purple-500 hover:bg-purple-600",
  },
];

export default function Dashboard() {

  const categoryColor: Record<string, string> = {
    "Electric Vehicle": "bg-success/20 text-success",
    "Data Protection": "bg-primary/20 text-primary",
    Education: "bg-warning/20 text-warning",
    "Startup Policy": "bg-destructive/20 text-destructive",
    "General Policy": "bg-muted text-muted-foreground",
  };

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold font-heading tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Policy AI Insight Hub - India</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <h3 className="text-2xl font-bold font-heading">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Policies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold font-heading">Recent Policy Updates</h2>
            </div>
            <div className="space-y-4">
              {recentPolicies.map((policy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <policy.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-sm">{policy.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{policy.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">{policy.time}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold font-heading">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="p-4 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center mb-3 mx-auto`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-sm">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* System Overview */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Activity className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-bold font-heading">System Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h4 className="font-semibold">Active Modules</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Policy Library Management</li>
              <li>• Impact Simulation Engine</li>
              <li>• Risk Analysis Tools</li>
              <li>• Report Generation System</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Recent Activity</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• 12 new policies created this week</li>
              <li>• 3,456 AI chat interactions</li>
              <li>• 24 policy updates deployed</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">System Health</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• All systems operational</li>
              <li>• Database synchronized</li>
              <li>• AI models updated</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
