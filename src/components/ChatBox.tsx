import { useState, useRef, useEffect } from 'react';
import { Activity, X, Send, Brain } from 'lucide-react';
import { SYSTEM_PROMPT } from '@/data/knowledgeBase';

const HF_API_KEY = import.meta.env.VITE_HF_API_KEY;

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatBoxProps {
  show?: boolean;
  onClose?: () => void;
  isPanel?: boolean;
}

export function ChatBox({ show, onClose, isPanel = false }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Build the API messages with the system prompt for context
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...updatedMessages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ];

      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta-llama/Llama-3.1-8B-Instruct:cerebras",
            messages: apiMessages,
            max_tokens: 1024,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || `Error ${response.status}`);
      }

      const reply = data?.choices?.[0]?.message?.content ?? "No response";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (error: any) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "❌ " + (error.message || "Error contacting Hugging Face API"),
      }]);
    } finally {
      setLoading(false);
    }
  };

  // Only render if show is true or if isPanel mode
  if (!isPanel && !show) return null;

  return (
    <div className="fixed bottom-24 right-6 w-[400px] h-[550px] bg-card border border-border/50 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-primary/10 border-b border-border/50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold font-heading text-lg">A</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-card rounded-full" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">PolicyAI Assistant</h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Online • Context-Aware Agent</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Welcome to PolicyAI</h4>
              <p className="text-sm text-muted-foreground px-6">
                I know everything about this platform — policies, rules, insurance docs, tax changes, and more. Ask me anything!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 w-full max-w-[300px]">
              {[
                'What are the new income tax slabs?',
                'List all insurance policy categories',
                'What are the road safety rules?',
                'Explain the DPDP Act 2023',
                'What are IPS conduct rules?',
                'Tell me about AI governance in India',
              ].map((text) => (
                <button
                  key={text}
                  onClick={() => setInput(text)}
                  className="text-xs p-2.5 rounded-lg border border-border/50 bg-muted/30 hover:bg-primary/10 hover:border-primary/30 transition-all text-left text-muted-foreground hover:text-primary"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mr-2 mt-1">
                <span className="text-primary font-bold text-[10px]">A</span>
              </div>
            )}
            <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm whitespace-pre-wrap ${msg.role === 'user'
              ? 'bg-primary text-primary-foreground ml-4 rounded-tr-none'
              : 'bg-muted border border-border/50 text-foreground rounded-tl-none'
              }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mr-2 mt-1">
              <span className="text-primary font-bold text-[10px]">A</span>
            </div>
            <div className="bg-muted border border-border/50 p-4 rounded-2xl rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-background/50 border-t border-border/50 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about policies, rules, insurance..."
            className="w-full bg-muted border border-border/50 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="absolute right-2 p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-3">
          Powered by PolicyAI Agent
        </p>
      </div>
    </div>
  );
}