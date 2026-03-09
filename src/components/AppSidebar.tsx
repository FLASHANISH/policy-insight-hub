import { LayoutDashboard, Library, FileText, Bell, Activity, ShieldAlert, FileBarChart, IndianRupee, Car, Shield, GraduationCap, Smartphone, Brain, HeartPulse, Lock, Landmark, Megaphone, Camera, AlertOctagon } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Policy Library", url: "/policies", icon: Library },
  { title: "Rules", url: "/rules", icon: FileText },
  { title: "New Updates", url: "/updates", icon: Bell },
  { title: "Impact Simulation", url: "/impact", icon: Activity },
  { title: "Risk Analysis", url: "/risk", icon: ShieldAlert },
  { title: "Reports", url: "/reports", icon: FileBarChart },
  { title: "Tax Policy", url: "/tax-policy", icon: IndianRupee },
  { title: "Road Rules", url: "/road-rules", icon: Car },
  { title: "IPS Rules", url: "/ips-rules", icon: Shield },
  { title: "AICTE Rules", url: "/aicte-rules", icon: GraduationCap },
  { title: "Cyber Crime", url: "/cyber-crime", icon: Smartphone },
  { title: "AI Governance", url: "/ai-governance", icon: Brain },
  { title: "DPDP Rules", url: "/dpdp-rules", icon: Lock },
  { title: "Insurance Policy", url: "/insurance-policy", icon: HeartPulse },
  { title: "AML Policy", url: "/aml-policy", icon: Landmark },
  { title: "Whistle Blower", url: "/whistle-blower", icon: Megaphone },
  { title: "Social Blackmail", url: "/social-media-blackmail", icon: Camera },
  { title: "Online Fraud", url: "/online-fraud", icon: AlertOctagon },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent>
        <div className="p-4 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
            <Activity className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-heading font-bold text-lg tracking-tight">PolicyAI</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/60 uppercase tracking-widest text-xs">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-accent/50 transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
