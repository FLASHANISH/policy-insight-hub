import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import PolicyLibrary from "@/pages/PolicyLibrary";
import PolicyViewer from "@/pages/PolicyViewer";
import Rules from "@/pages/Rules";
import Updates from "@/pages/Updates";
import ImpactSimulation from "@/pages/ImpactSimulation";
import RiskAnalysis from "@/pages/RiskAnalysis";
import Reports from "@/pages/Reports";
import TaxPolicy from "@/pages/TaxPolicy";
import RoadRules from "@/pages/RoadRules";
import IpsRules from "@/pages/IpsRules";
import AicteRules from "@/pages/AicteRules";
import CyberCrime from "@/pages/CyberCrime";
import AiGovernance from "@/pages/AiGovernance";
import InsurancePolicy from "@/pages/InsurancePolicy";
import DpdpRules from "@/pages/DpdpRules";
import AmlPolicy from "@/pages/AmlPolicy";
import WhistleBlowerPolicy from "@/pages/WhistleBlowerPolicy";
import SocialMediaBlackmail from "@/pages/SocialMediaBlackmail";
import OnlineFraudComplaint from "@/pages/OnlineFraudComplaint";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/policies" element={<PolicyLibrary />} />
            <Route path="/policies/:id" element={<PolicyViewer />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/impact" element={<ImpactSimulation />} />
            <Route path="/risk" element={<RiskAnalysis />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/tax-policy" element={<TaxPolicy />} />
            <Route path="/road-rules" element={<RoadRules />} />
            <Route path="/ips-rules" element={<IpsRules />} />
            <Route path="/aicte-rules" element={<AicteRules />} />
            <Route path="/cyber-crime" element={<CyberCrime />} />
            <Route path="/ai-governance" element={<AiGovernance />} />
            <Route path="/insurance-policy" element={<InsurancePolicy />} />
            <Route path="/dpdp-rules" element={<DpdpRules />} />
            <Route path="/aml-policy" element={<AmlPolicy />} />
            <Route path="/whistle-blower" element={<WhistleBlowerPolicy />} />
            <Route path="/social-media-blackmail" element={<SocialMediaBlackmail />} />
            <Route path="/online-fraud" element={<OnlineFraudComplaint />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
