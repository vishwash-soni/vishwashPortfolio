import React from "react";
import { LuBotMessageSquare } from "react-icons/lu";

function Ai() {
  const openAiAssistant = () => {
    window.open(
      "https://my-ai-assistant-silk.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span
        className="
          absolute right-16 top-1/2 -translate-y-1/2
          whitespace-nowrap
          rounded-lg bg-black px-3 py-2
          text-sm text-white
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
          pointer-events-none
        "
      >
        Ask my AI Assistant 🤖
      </span>

      {/* AI Button */}
      <button
        onClick={openAiAssistant}
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-full
          bg-black text-white
          border border-gray-700
          shadow-lg shadow-black/30
          hover:scale-110
          hover:shadow-xl
          transition-all duration-300
          cursor-pointer
        "
        aria-label="Open AI Assistant"
      >
        <LuBotMessageSquare className="w-7 h-7" />
      </button>
    </div>
  );
}

export default Ai;