import { useState } from "react";
import { motion } from "framer-motion";

const LobbyTab = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const features = [
    { icon: "⚡", label: "Smart Cuts", desc: "AI-powered editing" },
    { icon: "🎨", label: "Color Grade", desc: "Professional looks" },
    { icon: "🔊", label: "Audio Clean", desc: "Crystal clear sound" },
    { icon: "✨", label: "Auto Effects", desc: "One-click magic" },
  ];

  const stats = [
    { value: "10M+", label: "Videos Processed" },
    { value: "50K+", label: "Active Creators" },
    { value: "4.9", label: "User Rating" },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden pb-12 pt-24">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -right-32 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full bg-primary/3 blur-3xl" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Hero */}
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Next-Gen Video Intelligence</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
              PIXEL
            </span>
            <span className="bg-gradient-to-r from-primary via-primary to-indigo-500 bg-clip-text text-transparent">
              CUT
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base text-muted-foreground max-w-sm leading-relaxed">
            Transform raw footage into polished content with the power of artificial intelligence.
          </p>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 mt-6">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Browse Files
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Paste URL
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border/50">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Drop Zone */}
        <motion.div
          className={`relative aspect-square max-w-md mx-auto w-full rounded-[28px] transition-all duration-500 ${
            isDragging 
              ? "bg-primary/5 border-2 border-primary shadow-glow scale-[1.02]" 
              : "bg-gradient-to-br from-secondary/60 to-secondary/30 border border-border/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Inner Glow */}
          <div className={`absolute inset-0 rounded-[28px] transition-opacity duration-500 ${isDragging ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-primary/10 to-transparent" />
          </div>

          {/* Animated Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`relative w-32 h-32 transition-transform duration-500 ${isDragging ? "scale-110" : ""}`}>
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 rounded-full border border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-500"
                animate={{ 
                  scale: isDragging ? [1, 1.3, 1] : [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: isDragging ? 0.6 : 2, repeat: Infinity }}
              />
              <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-primary/50 blur-xl" />
            </div>
          </div>

          {/* Drop Zone Content */}
          <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
            <motion.div className="text-center" animate={{ y: isDragging ? -3 : 0 }}>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isDragging ? "text-primary" : "text-foreground"
              }`}>
                {isDragging ? "Release to upload" : "Drop your video here"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">MP4, MOV, AVI up to 4GB</p>
            </motion.div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-border/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-border/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-border/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-border/40 rounded-br-lg" />
        </motion.div>
      </div>

      {/* Feature Pills - Bottom Section */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
            >
              <span className="text-xs">{feature.icon}</span>
              <span className="text-xs font-medium text-foreground">{feature.label}</span>
              <span className="text-[10px] text-muted-foreground hidden sm:inline">· {feature.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground mb-3 uppercase tracking-widest">Trusted by creators worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-30">
            {['YouTube', 'TikTok', 'Vimeo', 'Twitch'].map((brand) => (
              <span key={brand} className="text-xs font-semibold text-muted-foreground">{brand}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LobbyTab;
