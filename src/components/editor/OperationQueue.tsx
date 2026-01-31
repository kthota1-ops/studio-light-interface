import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Operation {
  id: string;
  name: string;
  timestamps: string;
  status: "pending" | "processing" | "complete";
}

const mockOperations: Operation[] = [
  { id: "1", name: "Smart Trim", timestamps: "00:15 → 00:18", status: "complete" },
  { id: "2", name: "Audio Normalize", timestamps: "Full Track", status: "complete" },
  { id: "3", name: "Remove Silence", timestamps: "00:43 → 00:45", status: "processing" },
  { id: "4", name: "Color Grade", timestamps: "Full Video", status: "pending" },
  { id: "5", name: "Smart Cut", timestamps: "01:23 → 01:25", status: "pending" },
  { id: "6", name: "Transition: Dissolve", timestamps: "02:10", status: "pending" },
];

const OperationQueue = () => {
  const getStatusIcon = (status: Operation["status"]) => {
    switch (status) {
      case "complete":
        return (
          <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-success">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        );
      case "processing":
        return (
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        );
      case "pending":
        return (
          <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
          </div>
        );
    }
  };

  return (
    <div className="h-full flex flex-col bg-background border border-border rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Operation Queue</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {mockOperations.filter(o => o.status === "pending").length} pending • {mockOperations.filter(o => o.status === "processing").length} processing
        </p>
      </div>

      {/* Operations List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {mockOperations.map((operation, index) => (
          <motion.div
            key={operation.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative bg-card border border-border rounded-xl p-4 overflow-hidden group hover:border-primary/20 transition-colors"
          >
            {/* Left Accent Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              operation.status === "complete" ? "bg-success" :
              operation.status === "processing" ? "bg-primary" :
              "bg-muted-foreground/20"
            }`} />

            <div className="flex items-start gap-3 pl-2">
              {getStatusIcon(operation.status)}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">
                  {operation.name}
                </h4>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {operation.timestamps}
                </p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Execute Button */}
      <div className="p-4 border-t border-border">
        <Button className="w-full glow-primary" size="lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Confirm & Execute
        </Button>
        <p className="text-[10px] text-center text-muted-foreground mt-2">
          Estimated processing time: ~45s
        </p>
      </div>
    </div>
  );
};

export default OperationQueue;
