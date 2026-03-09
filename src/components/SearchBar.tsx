import { Search as SearchIcon, ArrowRight, FileText, IndianRupee, Car, Shield, GraduationCap, Smartphone, Brain, Lock, HeartPulse, Landmark, Megaphone, Camera, AlertOctagon, LayoutDashboard, Library, Bell, Activity, ShieldAlert, FileBarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

interface SearchItem {
  title: string;
  url: string;
  category: string;
  keywords: string[];
  icon: any;
}

const searchIndex: SearchItem[] = [
  // Core Pages
  { title: "Dashboard", url: "/", category: "Navigation", keywords: ["home", "dashboard", "overview", "stats", "main"], icon: LayoutDashboard },
  { title: "Policy Library", url: "/policies", category: "Navigation", keywords: ["library", "policies", "pdf", "documents", "upload", "analyze"], icon: Library },
  { title: "Rules Extraction", url: "/rules", category: "Navigation", keywords: ["rules", "extract", "analysis", "regulation"], icon: FileText },
  { title: "New Updates", url: "/updates", category: "Navigation", keywords: ["updates", "new", "recent", "notifications"], icon: Bell },
  { title: "Impact Simulation", url: "/impact", category: "Navigation", keywords: ["impact", "simulation", "stakeholder", "graph", "network"], icon: Activity },
  { title: "Risk Analysis", url: "/risk", category: "Navigation", keywords: ["risk", "analysis", "assessment", "compliance"], icon: ShieldAlert },
  { title: "Reports", url: "/reports", category: "Navigation", keywords: ["reports", "summary", "analytics", "distribution"], icon: FileBarChart },

  // Tax Policy Topics
  { title: "Tax Policy", url: "/tax-policy", category: "Tax", keywords: ["tax", "income tax", "slabs", "gst", "tds", "capital gains"], icon: IndianRupee },
  { title: "New Tax Regime Slabs 2026", url: "/tax-policy", category: "Tax", keywords: ["new regime", "tax slabs", "4 lakh", "8 lakh", "12 lakh", "30%"], icon: IndianRupee },
  { title: "Standard Deduction ₹75,000", url: "/tax-policy", category: "Tax", keywords: ["standard deduction", "75000", "salaried", "deduction"], icon: IndianRupee },
  { title: "Capital Gains Tax", url: "/tax-policy", category: "Tax", keywords: ["capital gains", "long term", "short term", "12.5%", "20%", "equity"], icon: IndianRupee },
  { title: "TDS Threshold Changes", url: "/tax-policy", category: "Tax", keywords: ["tds", "threshold", "interest income", "senior citizen"], icon: IndianRupee },

  // Road Rules Topics
  { title: "Road Safety Rules", url: "/road-rules", category: "Road Rules", keywords: ["road", "traffic", "driving", "safety", "highway", "vehicle"], icon: Car },
  { title: "Speed Limits India", url: "/road-rules", category: "Road Rules", keywords: ["speed limit", "100 km/h", "highway", "city limit", "50 km/h"], icon: Car },
  { title: "Drink & Drive Laws", url: "/road-rules", category: "Road Rules", keywords: ["drink drive", "alcohol", "blood alcohol", "dui", "penalty", "imprisonment"], icon: Car },
  { title: "Seat Belt & Helmet Rules", url: "/road-rules", category: "Road Rules", keywords: ["seat belt", "helmet", "isi", "fine", "1000", "mandatory"], icon: Car },
  { title: "No Mobile While Driving", url: "/road-rules", category: "Road Rules", keywords: ["mobile phone", "driving", "hands free", "5000", "license suspension"], icon: Car },

  // IPS Rules Topics
  { title: "IPS Rules & Regulations", url: "/ips-rules", category: "IPS", keywords: ["ips", "police", "indian police service", "service rules"], icon: Shield },
  { title: "All India Services Act 1951", url: "/ips-rules", category: "IPS", keywords: ["all india services", "recruitment", "promotion", "deputation"], icon: Shield },
  { title: "IPS Conduct Rules 1968", url: "/ips-rules", category: "IPS", keywords: ["conduct", "integrity", "political neutrality", "code of conduct"], icon: Shield },
  { title: "IPS Discipline & Appeal Rules", url: "/ips-rules", category: "IPS", keywords: ["discipline", "appeal", "inquiry", "misconduct", "penalty"], icon: Shield },

  // AICTE Topics
  { title: "AICTE Rules & Regulations", url: "/aicte-rules", category: "Education", keywords: ["aicte", "technical education", "approval", "engineering", "college"], icon: GraduationCap },
  { title: "AICTE Approval Process 2026-27", url: "/aicte-rules", category: "Education", keywords: ["approval process", "infrastructure", "faculty", "eligibility"], icon: GraduationCap },
  { title: "AICTE IDEA Lab", url: "/aicte-rules", category: "Education", keywords: ["idea lab", "stem", "innovation", "hands on", "product visualization"], icon: GraduationCap },
  { title: "Anti-Ragging Regulations", url: "/aicte-rules", category: "Education", keywords: ["ragging", "anti ragging", "ugc", "helpline", "committee"], icon: GraduationCap },

  // Cyber Crime Topics
  { title: "Cyber Crime Laws India", url: "/cyber-crime", category: "Cyber", keywords: ["cyber crime", "it act", "hacking", "online fraud", "phishing"], icon: Smartphone },
  { title: "Hacking & Unauthorized Access", url: "/cyber-crime", category: "Cyber", keywords: ["hacking", "unauthorized access", "section 66", "3 years", "5 lakh"], icon: Smartphone },
  { title: "Identity Theft Laws", url: "/cyber-crime", category: "Cyber", keywords: ["identity theft", "66c", "66d", "fake profile", "spoofing"], icon: Smartphone },
  { title: "Online Financial Fraud", url: "/cyber-crime", category: "Cyber", keywords: ["financial fraud", "phishing", "upi fraud", "investment scam", "deepfake"], icon: Smartphone },
  { title: "Cyberbullying Laws", url: "/cyber-crime", category: "Cyber", keywords: ["cyberbullying", "harassment", "revenge porn", "trolling", "doxxing"], icon: Smartphone },
  { title: "DPDP Act 2023 - Data Protection", url: "/cyber-crime", category: "Cyber", keywords: ["data protection", "dpdp", "personal data", "breach notification", "72 hours"], icon: Smartphone },
  { title: "Cyber Crime Helpline 1930", url: "/cyber-crime", category: "Cyber", keywords: ["helpline", "1930", "report", "complaint", "emergency"], icon: Smartphone },

  // AI Governance Topics
  { title: "AI Governance in India", url: "/ai-governance", category: "AI", keywords: ["ai", "artificial intelligence", "governance", "regulation", "india ai"], icon: Brain },
  { title: "IndiaAI Mission ₹10,372 Crore", url: "/ai-governance", category: "AI", keywords: ["indiaai", "mission", "10372 crore", "compute", "gpu"], icon: Brain },
  { title: "Seven Sutras of Responsible AI", url: "/ai-governance", category: "AI", keywords: ["seven sutras", "responsible ai", "safety", "transparency", "accountability"], icon: Brain },
  { title: "AI Ethics & Accountability", url: "/ai-governance", category: "AI", keywords: ["ai ethics", "fairness", "human oversight", "non discrimination"], icon: Brain },

  // DPDP Rules Topics
  { title: "DPDP Rules 2025", url: "/dpdp-rules", category: "Data Protection", keywords: ["dpdp", "data protection", "digital personal data", "privacy", "consent"], icon: Lock },
  { title: "Data Protection Board of India", url: "/dpdp-rules", category: "Data Protection", keywords: ["data protection board", "dpbi", "adjudication", "complaints"], icon: Lock },
  { title: "DPDP Enforcement Timeline", url: "/dpdp-rules", category: "Data Protection", keywords: ["enforcement", "timeline", "phases", "rollout", "compliance"], icon: Lock },
  { title: "Penalties ₹250 Crore", url: "/dpdp-rules", category: "Data Protection", keywords: ["penalty", "250 crore", "fine", "breach", "non compliance"], icon: Lock },

  // Insurance Policy Topics
  { title: "Insurance Policies", url: "/insurance-policy", category: "Insurance", keywords: ["insurance", "health", "travel", "marine", "accident", "policy"], icon: HeartPulse },
  { title: "Health Insurance - FMP, YHIP, SHIP", url: "/insurance-policy", category: "Insurance", keywords: ["health insurance", "family mediclaim", "fmp", "yhip", "ship", "sship", "senior"], icon: HeartPulse },
  { title: "Travel Insurance - Overseas Mediclaim", url: "/insurance-policy", category: "Insurance", keywords: ["travel insurance", "overseas", "mediclaim", "business", "holiday", "employment", "studies"], icon: HeartPulse },
  { title: "Marine Insurance", url: "/insurance-policy", category: "Insurance", keywords: ["marine insurance", "cargo", "voyage", "annual policy", "open cover"], icon: HeartPulse },
  { title: "Commercial Insurance", url: "/insurance-policy", category: "Insurance", keywords: ["commercial", "burglary", "money", "plate glass", "professional indemnity"], icon: HeartPulse },
  { title: "Arogya Sanjeevani Policy", url: "/insurance-policy", category: "Insurance", keywords: ["arogya sanjeevani", "asp", "irdai", "standard health", "mandatory"], icon: HeartPulse },

  // AML Policy Topics
  { title: "Anti-Money Laundering Policy", url: "/aml-policy", category: "AML", keywords: ["aml", "anti money laundering", "pmla", "kyc", "sebi", "fiu"], icon: Landmark },
  { title: "Client Due Diligence (CDD)", url: "/aml-policy", category: "AML", keywords: ["cdd", "client due diligence", "kyc", "beneficial owner", "verification"], icon: Landmark },
  { title: "Suspicious Transaction Reporting", url: "/aml-policy", category: "AML", keywords: ["suspicious transaction", "str", "ctr", "fiu", "reporting", "money laundering"], icon: Landmark },
  { title: "Risk Profiling - Low Medium High", url: "/aml-policy", category: "AML", keywords: ["risk profiling", "low risk", "medium risk", "high risk", "pep", "net worth"], icon: Landmark },

  // Whistle Blower Topics
  { title: "Whistle Blower Policy", url: "/whistle-blower", category: "Compliance", keywords: ["whistle blower", "whistleblower", "fraud", "reporting", "ethics", "retaliation"], icon: Megaphone },
  { title: "Confidential Reporting Mechanism", url: "/whistle-blower", category: "Compliance", keywords: ["confidential", "reporting", "anonymous", "vigilance officer", "audit committee"], icon: Megaphone },

  // Social Media Blackmail Topics
  { title: "Social Media Blackmail", url: "/social-media-blackmail", category: "Awareness", keywords: ["blackmail", "social media", "nude", "sextortion", "extortion", "images"], icon: Camera },
  { title: "Sextortion - What to Do", url: "/social-media-blackmail", category: "Awareness", keywords: ["sextortion", "what to do", "victim", "evidence", "report", "lawyer"], icon: Camera },
  { title: "Online Harassment Prevention", url: "/social-media-blackmail", category: "Awareness", keywords: ["harassment", "prevention", "safety tips", "privacy", "two factor"], icon: Camera },

  // Online Fraud Topics
  { title: "Online Fraud Complaint", url: "/online-fraud", category: "Fraud", keywords: ["online fraud", "complaint", "cybercrime.gov.in", "report", "financial fraud"], icon: AlertOctagon },
  { title: "Women/Children Crime Report", url: "/online-fraud", category: "Fraud", keywords: ["women", "children", "stalking", "child pornography", "csam", "report anonymously"], icon: AlertOctagon },
  { title: "Financial Fraud - UPI/Card/Banking", url: "/online-fraud", category: "Fraud", keywords: ["upi fraud", "card fraud", "banking fraud", "sim swap", "loan app", "cryptocurrency"], icon: AlertOctagon },
  { title: "How to File Cybercrime Complaint", url: "/online-fraud", category: "Fraud", keywords: ["file complaint", "cybercrime portal", "register", "track", "acknowledgment"], icon: AlertOctagon },
];

const categoryColor: Record<string, string> = {
  Navigation: "text-blue-500",
  Tax: "text-yellow-500",
  "Road Rules": "text-orange-500",
  IPS: "text-green-500",
  Education: "text-purple-500",
  Cyber: "text-red-500",
  AI: "text-cyan-500",
  "Data Protection": "text-indigo-500",
  Insurance: "text-emerald-500",
  AML: "text-amber-500",
  Compliance: "text-pink-500",
  Awareness: "text-rose-500",
  Fraud: "text-red-600",
};

export function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = query.trim().length > 0
    ? searchIndex.filter((item) => {
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.includes(q))
      );
    }).slice(0, 10)
    : [];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (url: string) => {
    navigate(url);
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results.length > 0) {
      e.preventDefault();
      handleNavigate(results[selectedIndex].url);
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={containerRef}>
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search policies, rules, topics..."
        className="pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full transition-all"
      />

      {/* Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {results.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No results for "<span className="text-foreground font-medium">{query}</span>"
            </div>
          ) : (
            <div className="py-1">
              {results.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`${item.title}-${i}`}
                    onClick={() => handleNavigate(item.url)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${i === selectedIndex ? "bg-primary/10 text-primary" : "hover:bg-accent/50 text-foreground"
                      }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${categoryColor[item.category] || "text-muted-foreground"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground">{item.category}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100" />
                  </button>
                );
              })}
            </div>
          )}
          <div className="px-4 py-2 border-t border-border/50 text-[10px] text-muted-foreground flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono">↑↓</kbd> navigate
            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono ml-2">Enter</kbd> select
            <kbd className="px-1.5 py-0.5 rounded bg-muted text-[10px] font-mono ml-2">Esc</kbd> close
          </div>
        </div>
      )}
    </div>
  );
}
