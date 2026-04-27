const MessageBubble = ({ msg }) => {
  return <div className={`bubble ${msg.type}`}>{msg.text}</div>;
};

export default MessageBubble;