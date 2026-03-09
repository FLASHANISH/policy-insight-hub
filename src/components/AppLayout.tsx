import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { Activity } from "lucide-react";
import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";

export default function AppLayout() {
  const [showChat, setShowChat] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-foreground overflow-hidden">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0 h-screen relative">
          <header className="h-16 flex items-center border-b border-border/50 px-6 shrink-0 bg-background/50 backdrop-blur-sm z-30">
            <div className="flex items-center gap-4 flex-1">
              <SidebarTrigger />
              <div className="h-4 w-px bg-border/50 mx-2" />
              <span className="text-sm text-muted-foreground font-mono">AI Policy Simulator</span>
              <div className="flex-1 max-w-md ml-4">
                <SearchBar />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6 bg-background/50 relative">
            <div className="max-w-7xl mx-auto pb-20">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Floating Chat Logo Button - Bottom Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-110 transition-all duration-300"
            onClick={() => setShowChat(!showChat)}
          >
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            <span className="relative z-10 text-lg font-bold font-heading">A</span>
          </button>
        </div>

        {/* Chat Overlay */}
        <ChatBox show={showChat} onClose={() => setShowChat(false)} />
      </div>
    </SidebarProvider>
  );
}
