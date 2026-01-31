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
    content: "Welcome to Pixelcut AI. I've analyzed your footage and identified 14 potential cut points. Would you like me to proceed with smart trimming?",
    timestamp: "10:24 AM",
  },
  {
    id: "2",
    type: "user",
    content: "Yes, apply smart trim and remove any silent portions longer than 2 seconds.",
    timestamp: "10:25 AM",
  },
  {
    id: "3",
    type: "ai",
    content: "Processing complete. I've removed 6 silent segments totaling 42 seconds. The timeline has been updated with proposed cuts highlighted in red.",
    timestamp: "10:26 AM",
  },
];

const AIChat = () => {
  const [messages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  return (
    <div className="h-full flex flex-col bg-background border border-border rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border flex items-center gap-3">
        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path 
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">TELI Intelligence</h3>
          <p className="text-xs text-muted-foreground">AI Assistant</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] ${
                message.type === "user" ? "bubble-user" : "bubble-ai"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-[10px] mt-2 ${
                message.type === "user" ? "text-primary-foreground/60" : "text-muted-foreground"
              }`}>
                {message.timestamp}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-2xl">
          <span className="text-primary font-mono">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter creative command..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button className="w-8 h-8 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
