import { motion } from "framer-motion";

type TabType = "lobby" | "editor" | "studio";

interface SegmentedControlProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "lobby", label: "Lobby" },
  { id: "editor", label: "Editor" },
  { id: "studio", label: "Studio" },
];

const SegmentedControl = ({ activeTab, onTabChange }: SegmentedControlProps) => {
  return (
    <div className="relative flex items-center gap-1 p-1 bg-secondary rounded-full">
      {/* Sliding Pill Background */}
      <motion.div
        className="absolute top-1 bottom-1 bg-background rounded-full shadow-soft"
        initial={false}
        animate={{
          x: activeTab === "lobby" ? 0 : activeTab === "editor" ? 80 : 160,
          width: 76,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ left: 4 }}
      />

      {/* Tab Buttons */}
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
            activeTab === tab.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
