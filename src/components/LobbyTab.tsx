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

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden pb-16">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-primary/3 blur-3xl" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        className="text-center mb-8 z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Next-Gen Video Intelligence</span>
        </motion.div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
          <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent">
            PIXEL
          </span>
          <span className="bg-gradient-to-r from-primary via-primary to-indigo-500 bg-clip-text text-transparent">
            CUT
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p 
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transform raw footage into polished content with the power of artificial intelligence
        </motion.p>
      </motion.div>

      {/* The Aperture - Drop Zone */}
      <motion.div
        className={`relative w-full max-w-xl mx-4 aspect-[16/10] rounded-[32px] transition-all duration-500 ${
          isDragging 
            ? "bg-primary/5 border-2 border-primary shadow-glow scale-[1.02]" 
            : "bg-gradient-to-b from-secondary/50 to-secondary/30 border border-border/50"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Inner Glow */}
        <div className={`absolute inset-0 rounded-[32px] transition-opacity duration-500 ${isDragging ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/10 to-transparent" />
        </div>

        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`relative w-28 h-28 transition-transform duration-500 ${isDragging ? "scale-110" : ""}`}>
            {/* Outer Ring */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle Ring */}
            <motion.div 
              className="absolute inset-3 rounded-full border border-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Ring */}
            <motion.div 
              className="absolute inset-6 rounded-full border border-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            {/* Core */}
            <motion.div 
              className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-gradient-to-br from-primary to-indigo-500"
              animate={{ 
                scale: isDragging ? [1, 1.3, 1] : [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: isDragging ? 0.6 : 2, repeat: Infinity }}
            />
            {/* Glow */}
            <div className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-primary/50 blur-xl" />
          </div>
        </div>

        {/* Drop Zone Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
          <motion.div 
            className="text-center"
            animate={{ y: isDragging ? -5 : 0 }}
          >
            <p className={`text-base font-medium transition-colors duration-300 ${
              isDragging ? "text-primary" : "text-foreground"
            }`}>
              {isDragging ? "Release to upload" : "Drop your video here"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              MP4, MOV, AVI up to 4GB
            </p>
          </motion.div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-border/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-border/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-border/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-border/30 rounded-br-lg" />
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="flex items-center gap-3 mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Browse Files
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          Paste URL
        </button>
      </motion.div>

      {/* Feature Pills */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-3 mt-12 max-w-xl z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
          >
            <span className="text-sm">{feature.icon}</span>
            <span className="text-xs font-medium text-foreground">{feature.label}</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">· {feature.desc}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Trusted By */}
      <motion.div 
        className="mt-16 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="text-xs text-muted-foreground mb-4 spacing-wide uppercase">Trusted by creators worldwide</p>
        <div className="flex items-center justify-center gap-8 opacity-40">
          {['YouTube', 'TikTok', 'Vimeo', 'Twitch'].map((brand) => (
            <span key={brand} className="text-sm font-semibold text-muted-foreground">{brand}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LobbyTab;
