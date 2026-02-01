import { useState } from "react";
import { motion } from "framer-motion";

interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    type: "ai",
    content: "I've analyzed your footage and identified 14 potential cut points. Ready to proceed?",
    timestamp: "10:24",
  },
  {
    id: "2",
    type: "user",
    content: "Yes, apply smart trim and remove silent portions > 2 seconds.",
    timestamp: "10:25",
  },
  {
    id: "3",
    type: "ai",
    content: "Done! Removed 6 segments totaling 42s. Timeline updated with proposed cuts in red.",
    timestamp: "10:26",
  },
];

const AIChat = () => {
  const [messages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-secondary/30 to-secondary/10 rounded-2xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">AI Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[90%] px-3 py-2 text-[13px] leading-relaxed ${
                message.type === "user" 
                  ? "bg-primary text-primary-foreground rounded-2xl rounded-br-md" 
                  : "bg-background border border-border/50 text-foreground rounded-2xl rounded-bl-md shadow-sm"
              }`}
            >
              <p>{message.content}</p>
              <p className={`text-[10px] mt-1.5 ${
                message.type === "user" ? "text-primary-foreground/60" : "text-muted-foreground"
              }`}>
                {message.timestamp}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-xl border border-border/50 focus-within:border-primary/50 transition-colors">
          <span className="text-primary text-sm">›</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI anything..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <motion.button 
            className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
