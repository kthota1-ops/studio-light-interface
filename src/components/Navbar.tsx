import { motion } from "framer-motion";
import SegmentedControl from "./SegmentedControl";

type TabType = "lobby" | "editor" | "studio";

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass-heavy z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Branding */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative w-8 h-8 bg-primary rounded-lg flex items-center justify-end pr-1.5 pt-1.5">
            <div className="w-2 h-2 bg-background rounded-full" />
          </div>
          
          {/* Brand Text */}
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-foreground tracking-tight">Pixelcut</span>
            <span className="text-lg font-light text-primary">AI</span>
          </div>

          {/* Divider & Context */}
          <div className="flex items-center gap-4 ml-4">
            <div className="w-px h-6 bg-border" />
            <span className="text-[10px] font-mono text-muted-foreground spacing-studio uppercase">
              Workspace // Alpha_01
            </span>
          </div>
        </div>

        {/* Segmented Control - Center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <SegmentedControl activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        {/* System Status */}
        <div className="flex items-center gap-4">
          {/* Ready Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
            <motion.div 
              className="w-2 h-2 rounded-full bg-success"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-success">Ready</span>
          </div>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
            <span className="text-xs font-semibold text-primary-foreground">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
