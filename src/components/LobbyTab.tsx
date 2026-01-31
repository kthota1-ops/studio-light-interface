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
    // Visual feedback only - no actual file handling
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden pb-16">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid-fade opacity-50" />

      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Main Title with Shimmer */}
        <div className="relative inline-block">
          <h1 className="text-7xl md:text-8xl font-black text-foreground tracking-tight">
            PIXELCUT
          </h1>
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-sm text-muted-foreground spacing-studio uppercase">
          AI-Driven Video Architecture
        </p>
      </motion.div>

      {/* The Aperture - Drop Zone */}
      <motion.div
        className={`relative w-full max-w-2xl aspect-video mx-4 rounded-[48px] border transition-all duration-500 ${
          isDragging 
            ? "border-primary border-2 bg-primary/5 shadow-glow" 
            : "border-border bg-background"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Abstract Sphere */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`relative w-32 h-32 transition-transform duration-500 ${isDragging ? "scale-110" : ""}`}>
            {/* Spinning Wireframe Circles */}
            <motion.div 
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ rotateX: 60 }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-primary/40 rounded-full animate-spin-slow"
              style={{ transform: "rotateY(60deg)" }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-primary/50 rounded-full animate-spin-slower"
              style={{ transform: "rotateX(30deg) rotateY(30deg)" }}
            />
            <motion.div 
              className="absolute inset-2 border border-primary/20 rounded-full animate-spin-slow"
              style={{ transform: "rotateY(-45deg)" }}
            />
            <motion.div 
              className="absolute inset-4 border border-primary/30 rounded-full animate-spin-slower"
              style={{ transform: "rotateX(45deg)" }}
            />
            
            {/* Center Glow */}
            <motion.div 
              className="absolute inset-0 m-auto w-4 h-4 bg-primary rounded-full blur-sm"
              animate={{ 
                scale: isDragging ? [1, 1.5, 1] : [1, 1.2, 1],
                opacity: isDragging ? [0.8, 1, 0.8] : [0.5, 0.7, 0.5]
              }}
              transition={{ duration: isDragging ? 0.5 : 2, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Drop Zone Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.p 
            className={`mt-40 text-base transition-colors duration-300 ${
              isDragging ? "text-primary font-medium" : "text-muted-foreground"
            }`}
            animate={{ y: isDragging ? -5 : 0 }}
          >
            {isDragging ? "Release to begin" : "Drop media to begin"}
          </motion.p>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-border/50 rounded-tl-xl" />
        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-border/50 rounded-tr-xl" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-border/50 rounded-bl-xl" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-border/50 rounded-br-xl" />
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        className="flex items-center gap-4 mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <button className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Browse Files
        </button>
        <span className="text-border">or</span>
        <button className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </svg>
          Import from URL
        </button>
      </motion.div>
    </div>
  );
};

export default LobbyTab;
