import { useState } from "react";

const ChatFooter = ({ disabled, onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="chat-footer">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder="Escribí tu respuesta..."
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button className="send-btn" onClick={handleSubmit} disabled={disabled}>
        ➤
      </button>
    </div>
  );
};

export default ChatFooter;