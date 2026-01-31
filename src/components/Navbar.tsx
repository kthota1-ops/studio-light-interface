import { motion } from "framer-motion";
import SegmentedControl from "./SegmentedControl";

type TabType = "lobby" | "editor" | "studio";

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-50 flex items-center justify-center px-6">
      {/* Single Glass Pill Container */}
      <motion.div 
        className="flex items-center gap-6 px-4 py-2.5 rounded-full bg-background/70 backdrop-blur-2xl border border-border/50 shadow-soft-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Branding */}
        <div className="flex items-center gap-3 pl-2">
          {/* Logo */}
          <div className="relative w-7 h-7 bg-primary rounded-lg flex items-center justify-end pr-1 pt-1">
            <div className="w-1.5 h-1.5 bg-background rounded-full" />
          </div>
          
          {/* Brand Text */}
          <div className="flex items-baseline gap-0.5">
            <span className="text-sm font-bold text-foreground tracking-tight">Pixelcut</span>
            <span className="text-sm font-light text-primary">AI</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-border/60" />

        {/* Segmented Control - Center */}
        <SegmentedControl activeTab={activeTab} onTabChange={onTabChange} />

        {/* Divider */}
        <div className="w-px h-6 bg-border/60" />

        {/* System Status */}
        <div className="flex items-center gap-3 pr-2">
          {/* Ready Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-success"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[10px] font-medium text-success">Ready</span>
          </div>

          {/* Profile */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
            <span className="text-[10px] font-semibold text-primary-foreground">JD</span>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
