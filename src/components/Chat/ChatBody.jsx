import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import Options from "./Options";
import SummaryCard from "./SummaryCard";

const ChatBody = ({ messages, currentStep, onOptionClick, data }) => {
  // detectar si el bot está "escribiendo"
  const isTyping = messages[messages.length - 1]?.typing;

  // referencia al final del chat
  const bottomRef = useRef(null);

  // scroll automático 
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-body">
      {messages.map((m, i) => (
        <MessageBubble key={i} msg={m} />
      ))}

      {/* NO mostrar opciones mientras escribe */}
      {currentStep?.type === "options" && !isTyping && (
        <Options
          options={currentStep.options}
          onSelect={onOptionClick}
        />
      )}

      {/* lo mismo para summary */}
      {currentStep?.type === "summary" && !isTyping && (
        <SummaryCard data={data} />
      )}

      {/* ancla invisible para scroll */}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatBody;