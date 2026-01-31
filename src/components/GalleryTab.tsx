import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GalleryTab = () => {
  // Mock waveform bars
  const waveformBars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    height: Math.random() * 60 + 20,
    delay: i * 0.05,
  }));

  return (
    <div className="min-h-screen flex flex-col items-center relative overflow-auto pb-20 pt-28">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl -bottom-48 left-1/4 animate-blob"
          style={{ animationDelay: "0s" }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl -bottom-32 right-1/4 animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary/5 blur-2xl -bottom-16 left-1/2 animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Header */}
      <motion.div 
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
          PROJECT_FINALIZED
        </h1>
        <p className="mt-3 text-sm text-muted-foreground spacing-wide uppercase">
          Your video has been processed successfully
        </p>
      </motion.div>

      {/* Master Video */}
      <motion.div 
        className="relative w-full max-w-4xl mx-4 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Ambient Glow */}
        <div className="absolute -inset-4 bg-primary/20 rounded-[48px] blur-2xl animate-pulse-soft" />
        
        {/* Video Frame */}
        <div className="relative aspect-video bg-foreground rounded-3xl overflow-hidden shadow-2xl">
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/90" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button 
              className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-background/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </motion.button>
          </div>

          {/* Mastered Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-success/90 text-success-foreground text-xs font-semibold flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Mastered
          </div>

          {/* Video Info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-background/70 text-xs font-mono">
            <span>1920×1080 • 30fps</span>
            <span>Duration: 02:34</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="w-full max-w-4xl mx-4 mt-12 grid grid-cols-2 gap-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Left - Metrics */}
        <div className="bg-secondary/50 rounded-3xl p-8">
          <h3 className="text-xs text-muted-foreground spacing-studio uppercase mb-6">Processing Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Efficiency Gain</span>
              <span className="text-2xl font-bold text-foreground">42.5s</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Logical Cuts</span>
              <span className="text-2xl font-bold text-foreground">14</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Transitions Applied</span>
              <span className="text-2xl font-bold text-foreground">8</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Audio Enhancements</span>
              <span className="text-2xl font-bold text-foreground">3</span>
            </div>
          </div>
        </div>

        {/* Right - AI Commentary */}
        <div className="bg-secondary/50 rounded-3xl p-8">
          <h3 className="text-xs text-muted-foreground spacing-studio uppercase mb-6">AI Commentary</h3>
          
          {/* Waveform Visual */}
          <div className="h-16 flex items-center justify-center gap-0.5 mb-6">
            {waveformBars.map((bar) => (
              <motion.div
                key={bar.id}
                className="w-1.5 bg-primary/60 rounded-full"
                initial={{ height: 4 }}
                animate={{ 
                  height: [4, bar.height, 4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: bar.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            "Your edit features strong pacing with natural cut points. The AI detected 14 optimal transition moments and enhanced audio clarity throughout."
          </p>

          {/* Play Commentary Button */}
          <button className="w-full py-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Play AI Recap
          </button>
        </div>
      </motion.div>

      {/* Action Deck */}
      <motion.div 
        className="flex flex-col items-center gap-4 mt-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button variant="premium" size="xl" className="min-w-[280px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Master (.MP4)
        </Button>

        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create New Project
        </button>
      </motion.div>
    </div>
  );
};

export default GalleryTab;
