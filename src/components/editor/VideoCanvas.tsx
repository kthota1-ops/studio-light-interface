import { useState } from "react";
import { motion } from "framer-motion";

interface TimelineBlock {
  id: string;
  type: "video" | "cut";
  start: number;
  width: number;
  label: string;
}

const mockBlocks: TimelineBlock[] = [
  { id: "1", type: "video", start: 0, width: 15, label: "Intro" },
  { id: "2", type: "cut", start: 15, width: 3, label: "Cut" },
  { id: "3", type: "video", start: 18, width: 25, label: "Main Content" },
  { id: "4", type: "cut", start: 43, width: 2, label: "Cut" },
  { id: "5", type: "video", start: 45, width: 20, label: "B-Roll" },
  { id: "6", type: "video", start: 65, width: 18, label: "Interview" },
  { id: "7", type: "cut", start: 83, width: 2, label: "Cut" },
  { id: "8", type: "video", start: 85, width: 15, label: "Outro" },
];

const VideoCanvas = () => {
  const [playheadPosition, setPlayheadPosition] = useState(35);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 30);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  };

  const currentTime = (playheadPosition / 100) * 154;

  return (
    <div className="h-full flex flex-col gap-3">
      {/* Video Player */}
      <div className="flex-1 relative bg-foreground rounded-2xl overflow-hidden border border-border/50 shadow-lg">
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/90" />

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between bg-gradient-to-b from-black/40 to-transparent">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm">
              <span className="text-[10px] font-mono text-white/80">{formatTime(currentTime)}</span>
            </div>
            <div className="px-2 py-1 rounded-md bg-primary/80 backdrop-blur-sm">
              <span className="text-[10px] font-medium text-white">1080p</span>
            </div>
          </div>
          <div className="px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-white/80">02:34:00</span>
          </div>
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between bg-gradient-to-t from-black/40 to-transparent">
          <div className="flex items-center gap-2">
            <motion.button 
              className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="19 20 9 12 19 4 19 20" />
                <line x1="5" y1="19" x2="5" y2="5" stroke="white" strokeWidth="2" />
              </svg>
            </motion.button>
            <motion.button 
              className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="5 4 15 12 5 20 5 4" />
                <line x1="19" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2" />
              </svg>
            </motion.button>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-success/20 backdrop-blur-sm border border-success/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-[10px] text-success font-medium">AI Processing</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-28 bg-gradient-to-b from-secondary/30 to-secondary/10 border border-border/50 rounded-2xl p-3">
        {/* Timeline Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h4 className="text-xs font-semibold text-foreground">Timeline</h4>
            <div className="flex items-center gap-1">
              {[
                { color: "bg-primary/60", label: "Video" },
                { color: "bg-destructive/60", label: "Cut" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary/50">
                  <div className={`w-2 h-2 rounded-sm ${item.color}`} />
                  <span className="text-[10px] text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 rounded-md text-[10px] text-muted-foreground hover:bg-secondary/50 transition-colors">−</button>
            <span className="text-[10px] text-muted-foreground px-1">100%</span>
            <button className="px-2 py-1 rounded-md text-[10px] text-muted-foreground hover:bg-secondary/50 transition-colors">+</button>
          </div>
        </div>

        {/* Timeline Track */}
        <div 
          className="relative h-14 bg-background/50 rounded-xl overflow-hidden cursor-pointer border border-border/30"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setPlayheadPosition((x / rect.width) * 100);
          }}
        >
          {/* Time Markers */}
          <div className="absolute top-0 left-0 right-0 h-5 flex items-center border-b border-border/30 bg-secondary/30">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div 
                key={percent} 
                className="absolute flex flex-col items-center"
                style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
              >
                <span className="text-[8px] text-muted-foreground font-mono">
                  {formatTime((percent / 100) * 154).slice(0, 5)}
                </span>
              </div>
            ))}
          </div>

          {/* Blocks */}
          <div className="absolute top-5 left-0 right-0 bottom-0 px-1">
            {mockBlocks.map((block) => (
              <motion.div
                key={block.id}
                className={`absolute top-1 bottom-1 rounded-md transition-all ${
                  block.type === "video" 
                    ? "bg-primary/30 border border-primary/40 hover:bg-primary/40" 
                    : "bg-destructive/20 border border-destructive/30 hover:bg-destructive/30"
                }`}
                style={{
                  left: `${block.start}%`,
                  width: `${block.width}%`,
                }}
                whileHover={{ y: -1 }}
              />
            ))}
          </div>

          {/* Playhead */}
          <motion.div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
            style={{ left: `${playheadPosition}%` }}
            initial={false}
            animate={{ left: `${playheadPosition}%` }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-glow" />
            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoCanvas;
