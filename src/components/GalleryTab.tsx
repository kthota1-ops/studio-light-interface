import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const GalleryTab = () => {
  const [selectedFormat, setSelectedFormat] = useState("MP4");
  const [selectedQuality, setSelectedQuality] = useState("1080p");

  const stats = [
    { label: "Time Saved", value: "42.5", unit: "sec", trend: "+18%", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )},
    { label: "Smart Cuts", value: "14", unit: "edits", trend: "Auto", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    )},
    { label: "Transitions", value: "8", unit: "applied", trend: "Smooth", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    )},
    { label: "Audio Enhanced", value: "3", unit: "tracks", trend: "Clear", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    )},
  ];

  const formats = ["MP4", "MOV", "WEBM"];
  const qualities = ["4K", "1080p", "720p"];

  const waveformBars = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    height: Math.sin(i * 0.3) * 30 + Math.random() * 20 + 10,
  }));

  return (
    <div className="min-h-screen pt-24 pb-8 px-4 md:px-8 overflow-auto">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.03] blur-[100px]" />
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[80px] bottom-0 right-0"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Success Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-success/10 border border-success/20 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <motion.svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              className="text-success"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <polyline points="20 6 9 17 4 12" />
            </motion.svg>
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Your video is ready
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            AI processing complete • 14 optimizations applied
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Video Section - 3 cols */}
          <motion.div 
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Video Player */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-indigo-500/30 to-primary/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-foreground border border-border/50 shadow-2xl">
                {/* Video Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
                
                {/* Scanlines Effect */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                }} />

                {/* Center Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button 
                    className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" />
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </motion.button>
                </div>

                {/* Top Overlay */}
                <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm text-[10px] font-mono text-white/80">
                        00:00 / 02:34
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-primary/80 text-[10px] font-medium text-white">
                        HD 1080p
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-success/80 text-[10px] font-medium text-white">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Mastered
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[
                        <svg key="prev" width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5" stroke="white" strokeWidth="2"/></svg>,
                        <svg key="play" width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
                        <svg key="next" width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="white" strokeWidth="2"/></svg>,
                      ].map((icon, i) => (
                        <button key={i} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                          {icon}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-white/60">
                      <span>1920×1080</span>
                      <span>•</span>
                      <span>30fps</span>
                      <span>•</span>
                      <span>H.264</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Controls */}
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Format Select */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary/50">
                    {formats.map((format) => (
                      <button 
                        key={format}
                        onClick={() => setSelectedFormat(format)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedFormat === format 
                            ? "bg-background text-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                  
                  {/* Quality Select */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary/50">
                    {qualities.map((quality) => (
                      <button 
                        key={quality}
                        onClick={() => setSelectedQuality(quality)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedQuality === quality 
                            ? "bg-background text-foreground shadow-sm" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {quality}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Share
                  </Button>
                  <Button size="sm" className="shadow-glow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar - 2 cols */}
          <motion.div 
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Stats */}
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Processing Results</h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-foreground">{stat.value}</span>
                        <span className="text-xs text-muted-foreground">{stat.unit}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-success/10 text-[10px] font-medium text-success">
                      {stat.trend}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Summary */}
            <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">AI Summary</h3>
                <span className="px-2 py-0.5 rounded-md bg-primary/10 text-[10px] font-medium text-primary">
                  Auto-generated
                </span>
              </div>

              {/* Waveform - evenly distributed across full width */}
              <div className="h-12 flex items-center justify-between mb-3 p-3 rounded-xl bg-background/50 border border-border/30">
                {waveformBars.map((bar, i) => (
                  <motion.div
                    key={bar.id}
                    className="w-[3px] bg-primary/60 rounded-full"
                    animate={{ 
                      height: [bar.height * 0.2, bar.height * 0.7, bar.height * 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.02,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Excellent pacing detected. Applied 14 intelligent cuts at natural transition points. Audio levels normalized with noise reduction.
              </p>

              <Button variant="outline" size="sm" className="w-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                Play Audio Summary
              </Button>
            </div>

            {/* New Project */}
            <motion.button 
              className="w-full p-4 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/50 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary transition-colors">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">Start New Project</p>
                <p className="text-[10px] text-muted-foreground">Upload another video</p>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTab;
