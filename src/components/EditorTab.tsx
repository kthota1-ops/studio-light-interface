import { motion } from "framer-motion";
import AIChat from "./editor/AIChat";
import VideoCanvas from "./editor/VideoCanvas";
import OperationQueue from "./editor/OperationQueue";

const EditorTab = () => {
  return (
    <div className="h-[calc(100vh-5rem)] flex gap-4 p-4 pt-24">
      {/* Left Panel - AI Liaison (22%) */}
      <motion.div 
        className="w-[22%] flex-shrink-0"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AIChat />
      </motion.div>

      {/* Center Panel - Canvas (56%) */}
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <VideoCanvas />
      </motion.div>

      {/* Right Panel - Operation Queue (22%) */}
      <motion.div 
        className="w-[22%] flex-shrink-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <OperationQueue />
      </motion.div>
    </div>
  );
};

export default EditorTab;
