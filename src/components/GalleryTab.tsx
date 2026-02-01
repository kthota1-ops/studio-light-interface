import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GalleryTab = () => {
  const stats = [
    { label: "Time Saved", value: "42.5s", icon: "⏱️" },
    { label: "Cuts Made", value: "14", icon: "✂️" },
    { label: "Transitions", value: "8", icon: "🔄" },
    { label: "Audio Fixes", value: "3", icon: "🔊" },
  ];

  const waveformBars = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    height: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen pt-24 pb-8 px-6 overflow-auto">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -bottom-64 left-1/4"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] -bottom-32 right-1/4"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-success">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-xs font-medium text-success">Export Ready</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Project Complete
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your video has been processed and is ready for download
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Video Preview - Takes 2 columns */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-foreground shadow-2xl">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-indigo-500/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
              
              <div className="relative aspect-video bg-foreground">
                {/* Video Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/80" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </motion.button>
                </div>

                {/* Top Info Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
                      <span className="text-[10px] font-mono text-white/80">00:00:00</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-success/80 backdrop-blur-sm flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[10px] font-medium text-white">Mastered</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
                      <span className="text-[10px] text-white/80">1920 × 1080</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
                      <span className="text-[10px] text-white/80">30 FPS</span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm">
                    <span className="text-[10px] font-mono text-white/80">02:34</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <Button variant="premium" size="lg" className="flex-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download MP4
              </Button>
              <Button variant="outline" size="lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                Share
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats & AI */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <span className="text-lg">{stat.icon}</span>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* AI Commentary */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">AI Summary</h4>
                  <p className="text-[10px] text-muted-foreground">Auto-generated analysis</p>
                </div>
              </div>

              {/* Waveform */}
              <div className="h-12 flex items-end justify-center gap-0.5 mb-3 px-2">
                {waveformBars.map((bar, i) => (
                  <motion.div
                    key={bar.id}
                    className="w-1 bg-gradient-to-t from-primary/40 to-primary rounded-full"
                    initial={{ height: 4 }}
                    animate={{ 
                      height: [4, bar.height * 0.4 + 4, 4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.03,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                "Strong pacing with natural cut points. Enhanced audio clarity and applied 8 seamless transitions."
              </p>

              <button className="w-full py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Play Recap
              </button>
            </div>

            {/* New Project Button */}
            <button className="w-full py-3 rounded-xl border border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-medium text-muted-foreground hover:text-foreground flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Start New Project
            </button>
          </motion.div>
        </div>

        {/* Export Options */}
        <motion.div 
          className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30 border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Export Options</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Choose your preferred format and quality</p>
            </div>
            <div className="flex items-center gap-2">
              {["MP4", "MOV", "WEBM", "GIF"].map((format) => (
                <button 
                  key={format}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    format === "MP4" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryTab;
