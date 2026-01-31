import { useState } from "react";
import { motion } from "framer-motion";

interface TimelineBlock {
  id: string;
  type: "video" | "cut";
  start: number; // percentage
  width: number; // percentage
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

  const currentTime = (playheadPosition / 100) * 154; // 2:34 = 154 seconds total

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Video Player */}
      <div className="flex-1 relative bg-foreground rounded-3xl overflow-hidden border border-border">
        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/95" />

        {/* Timecode Overlays */}
        <div className="absolute top-4 left-4 text-background/70 text-xs font-mono">
          {formatTime(currentTime)}
        </div>
        <div className="absolute top-4 right-4 text-background/70 text-xs font-mono">
          02:34:00
        </div>

        {/* Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center hover:bg-background/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Processing Indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
          <span className="text-xs text-background/80 font-medium">AI Processing</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="h-28 bg-background border border-border rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-medium text-muted-foreground spacing-wide uppercase">Timeline</h4>
          <div className="flex items-center gap-4">
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Zoom In
            </button>
            <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Zoom Out
            </button>
          </div>
        </div>

        {/* Timeline Track */}
        <div 
          className="relative h-12 bg-secondary rounded-xl overflow-hidden cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setPlayheadPosition((x / rect.width) * 100);
          }}
        >
          {/* Time Markers */}
          <div className="absolute top-0 left-0 right-0 h-4 flex items-center px-2">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div 
                key={percent} 
                className="absolute text-[8px] text-muted-foreground font-mono"
                style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
              >
                {formatTime((percent / 100) * 154).slice(0, 5)}
              </div>
            ))}
          </div>

          {/* Blocks */}
          <div className="absolute bottom-0 left-0 right-0 h-8">
            {mockBlocks.map((block) => (
              <div
                key={block.id}
                className={`absolute top-0 bottom-0 timeline-block ${
                  block.type === "video" ? "timeline-block-video" : "timeline-block-cut"
                }`}
                style={{
                  left: `${block.start}%`,
                  width: `${block.width}%`,
                }}
                title={block.label}
              />
            ))}
          </div>

          {/* Playhead */}
          <motion.div
            className="absolute top-0 bottom-0 w-0.5 bg-primary z-10 animate-playhead"
            style={{ left: `${playheadPosition}%` }}
            initial={false}
            animate={{ left: `${playheadPosition}%` }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {/* Playhead Handle */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-glow" />
          </motion.div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded timeline-block-video" />
            <span className="text-[10px] text-muted-foreground">Video Segment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded timeline-block-cut" />
            <span className="text-[10px] text-muted-foreground">Proposed Cut</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCanvas;
