import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Zap, Images, Globe, MessageCircle } from "lucide-react";

export default function ELoSAIInterface() {
  const [messages, setMessages] = useState([
    { role: "system", content: "ברוך הבא ל-ELoS AI – המנוע הדו-לשוני שלך." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setMessages([...messages, { role: "user", content: input }]);
    // 👉 replace with real API call
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: `Echo (mini): ${input}`,
        },
      ]);
      setLoading(false);
      setInput("");
    }, 800);
  };

  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      {/* SIDEBAR */}
      <aside className="border-r border-neutral-200/40 bg-neutral-50/40 dark:bg-neutral-800/40 p-4 flex flex-col gap-4" aria-label="Navigation">
        <h1 className="text-2xl font-semibold mb-2">ELoS OS</h1>
        <nav className="space-y-2 text-sm">
          <SidebarItem icon={MessageCircle} label="Chat" active />
          <SidebarItem icon={Globe} label="Translate 2.0" />
          <SidebarItem icon={Images} label="Image Studio" />
          <SidebarItem icon={Zap} label="Agents" />
        </nav>
        <div className="mt-auto text-xs opacity-70">
          Credits Remaining: <strong>1 420</strong>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex flex-col h-screen">
        {/* HEADER */}
        <header className="px-6 py-3 border-b border-neutral-200/40 flex items-center justify-between bg-white/60 dark:bg-neutral-800/60 backdrop-blur-lg">
          <span className="text-xl font-medium">Chat Workspace</span>
          <Button size="sm" variant="secondary">Upgrade</Button>
        </header>

        {/* CHAT FEED */}
        <section className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} content={m.content} />
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-sm opacity-70">
              <Loader2 className="animate-spin w-4 h-4" /> Generating…
            </div>
          )}
        </section>

        {/* INPUT */}
        <footer className="border-t border-neutral-200/40 p-4 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-lg">
          <div className="flex items-end gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="כתוב כאן… / Type here…"
              className="flex-1 min-h-[60px] max-h-40"
            />
            <Button size="icon" onClick={send} disabled={loading}>
              <Zap className="w-5 h-5" />
            </Button>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-xl transition-colors ${
        active
          ? "bg-neutral-200 dark:bg-neutral-700 font-medium"
          : "hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60"
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span>{label}</span>
    </button>
  );
}

function ChatBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      className={`w-fit max-w-[80%] rounded-2xl px-4 py-2 shadow-sm text-sm ${
        isUser
          ? "ml-auto bg-blue-600 text-white" 
          : "bg-neutral-200 dark:bg-neutral-700"
      }`}
    >
      {content}
    </div>
  );
}