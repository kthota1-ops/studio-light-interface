import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Operation {
  id: string;
  name: string;
  timestamps: string;
  status: "pending" | "processing" | "complete";
  icon: string;
}

const mockOperations: Operation[] = [
  { id: "1", name: "Smart Trim", timestamps: "00:15 → 00:18", status: "complete", icon: "✂️" },
  { id: "2", name: "Audio Normalize", timestamps: "Full Track", status: "complete", icon: "🔊" },
  { id: "3", name: "Remove Silence", timestamps: "00:43 → 00:45", status: "processing", icon: "🔇" },
  { id: "4", name: "Color Grade", timestamps: "Full Video", status: "pending", icon: "🎨" },
  { id: "5", name: "Smart Cut", timestamps: "01:23 → 01:25", status: "pending", icon: "⚡" },
];

const OperationQueue = () => {
  const completedCount = mockOperations.filter(o => o.status === "complete").length;
  const totalCount = mockOperations.length;

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-2xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Operations</h3>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              {completedCount}/{totalCount} completed
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(completedCount / totalCount) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Operations List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
        {mockOperations.map((operation, index) => (
          <motion.div
            key={operation.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`relative p-3 rounded-xl transition-all cursor-pointer group ${
              operation.status === "processing" 
                ? "bg-primary/5 border border-primary/20" 
                : "bg-background/50 border border-border/30 hover:border-border/50 hover:bg-background/80"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Status Icon */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                operation.status === "complete" 
                  ? "bg-success/10" 
                  : operation.status === "processing"
                  ? "bg-primary/10"
                  : "bg-secondary/50"
              }`}>
                {operation.status === "complete" ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : operation.status === "processing" ? (
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ) : (
                  <span>{operation.icon}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">
                  {operation.name}
                </h4>
                <p className="text-[10px] text-muted-foreground font-mono">
                  {operation.timestamps}
                </p>
              </div>

              {/* Action */}
              <motion.button 
                className="opacity-0 group-hover:opacity-100 w-6 h-6 rounded-md bg-secondary/50 flex items-center justify-center transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </motion.button>
            </div>

            {/* Processing indicator */}
            {operation.status === "processing" && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-indigo-500 to-primary rounded-b-xl"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Execute Button */}
      <div className="p-3 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <Button className="w-full shadow-glow" size="lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Execute All
        </Button>
        <p className="text-[10px] text-center text-muted-foreground mt-2">
          Estimated: ~45 seconds
        </p>
      </div>
    </div>
  );
};

export default OperationQueue;
