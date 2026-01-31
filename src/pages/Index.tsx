import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import LobbyTab from "@/components/LobbyTab";
import EditorTab from "@/components/EditorTab";
import GalleryTab from "@/components/GalleryTab";

type TabType = "lobby" | "editor" | "studio";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("lobby");

  return (
    <div className="min-h-screen bg-background">
      {/* The Horizon - Global Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Stage */}
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {activeTab === "lobby" && (
            <motion.div
              key="lobby"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <LobbyTab />
            </motion.div>
          )}
          {activeTab === "editor" && (
            <motion.div
              key="editor"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <EditorTab />
            </motion.div>
          )}
          {activeTab === "studio" && (
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <GalleryTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-8 glass-heavy flex items-center justify-between px-6 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-6">
          <span>FPS: 60.0</span>
          <span className="text-border">|</span>
          <span>ENGINE: V2.6</span>
        </div>
        <div className="flex items-center gap-6">
          <span>RENDER: GPU</span>
          <span className="text-border">|</span>
          <span>LATENCY: 12ms</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
