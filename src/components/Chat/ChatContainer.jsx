import { useEffect, useRef } from "react";
import { useChatFlow } from "../../hooks/useChatFlow";
import { flow } from "../../data/flow";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatContainer = () => {
  const {
    step,
    setStep,
    data,
    messages,
    addMessage,
    handleOption,
    handleText,
    waitingInput,
    setWaitingInput,
    removeTyping,
  } = useChatFlow();

  const currentStep = flow[step];

  // evita doble ejecución en Strict Mode
  const effectLock = useRef(false);

  const getNextValidStep = (index, dataToUse) => {
    for (let i = index; i < flow.length; i++) {
      const s = flow[i];
      if (!s.condition || s.condition(dataToUse)) {
        return i;
      }
    }
    return flow.length;
  };

  const next = (customData) => {
    const dataToUse = customData || data;
    setStep((prev) => getNextValidStep(prev + 1, dataToUse));
  };

  useEffect(() => {
    if (!currentStep) return;

    // evita doble ejecución
    if (effectLock.current) return;
    effectLock.current = true;

    const msg =
      typeof currentStep.msg === "function"
        ? currentStep.msg(data)
        : currentStep.msg;

    // typing
    removeTyping();
    addMessage({ type: "bot", text: "Escribiendo...", typing: true });

    const timeout = setTimeout(() => {
      removeTyping();

      addMessage({ type: "bot", text: msg });

      const needsInput = currentStep.type === "text";
      setWaitingInput(needsInput);

      if (!currentStep.type) {
        next();
      }

      effectLock.current = false;
    }, 800);

    return () => {
      clearTimeout(timeout);
      effectLock.current = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <div id="app">
      <ChatHeader />

      <ChatBody
        messages={messages}
        currentStep={currentStep}
        data={data}
        onOptionClick={(val) => {
          const newData = handleOption(val);
          if (!newData) return;
          next(newData);
        }}
      />

      <ChatFooter
        disabled={!waitingInput}
        onSend={(val) => {
          const newData = handleText(val);
          if (!newData) return;
          next(newData);
        }}
      />
    </div>
  );
};

export default ChatContainer;