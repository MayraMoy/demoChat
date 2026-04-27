const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="avatar">🐸</div>
      <div className="header-info">
        <p>Ranita Asistente</p>
        <span>
          <span className="online-dot"></span>
          En línea
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;