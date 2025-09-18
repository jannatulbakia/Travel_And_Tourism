"use client";

import { useState } from "react";

export default function Chatbot() {
  const [log, setLog] = useState<string[]>([]);
  const [msg, setMsg] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  const addLog = (entry: string) => setLog((prev) => [...prev, entry]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    addLog(`You: ${msg}`);
    const currentMessage = msg;
    setMsg("");
    setIsLoading(true); 

    try {
      const r = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });
      const data = await r.json();

      if (data?.reply) {
        addLog(`Bot: ${data.reply}`);
      } else {
        addLog("Error: " + JSON.stringify(data));
      }
    } catch (e: any) {
      addLog("Error: " + e.message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Travel Assistant
      </button>

      {isChatOpen && (
        <div className="fixed bottom-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-120 p-3 flex flex-col">
          <h1 className="text-xl font-bold mb-2">Travel Chat</h1>
          <div className="flex-1 border rounded p-2 overflow-auto bg-gray-50 whitespace-pre-wrap">
            {log.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-center mt-2">
                <div className="loader"></div>
              </div>
            )}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Say something..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="flex-1 border p-2 rounded"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3; /* Light grey */
          border-top: 4px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}