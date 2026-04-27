import { useState } from "react";
import { flow } from "../data/flow";

export const useChatFlow = () => {
  const [step, setStep] = useState(0);

  // ID GLOBAL DEL LEAD (CLAVE)
  const [data, setData] = useState({
    leadId: crypto.randomUUID(),
  });

  const [messages, setMessages] = useState([]);
  const [waitingInput, setWaitingInput] = useState(false);

  const currentStep = flow[step];

  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  const removeTyping = () => {
    setMessages((prev) => prev.filter((m) => !m.typing));
  };

  // utils
  const cleanPhone = (val) => val.replace(/\D/g, "");

  const isValidPhone = (phone) => {
    return /^[0-9]{8,15}$/.test(phone);
  };

  // OPCIONES
  const handleOption = (value) => {
    const newData = { ...data, [currentStep.key]: value };

    addMessage({ type: "user", text: value });
    setData(newData);

    return newData;
  };

  // TEXTO
  const handleText = (value) => {
    let val = value.trim();

    // TELÉFONO
    if (currentStep.key === "contacto") {
      val = cleanPhone(val);

      if (!isValidPhone(val)) {
        addMessage({
          type: "bot",
          text: "Ingresá un número válido (solo números, entre 8 y 15 dígitos) 📞",
        });
        return null; 
      }
    }

    // DETALLE
    if (currentStep.key === "detalle" && val.length < 5) {
      addMessage({
        type: "bot",
        text: "Contanos un poco más de tu necesidad 🙏",
      });
      return null;
    }

    const newData = { ...data, [currentStep.key]: val };

    addMessage({ type: "user", text: val });
    setData(newData);

    return newData;
  };

  return {
    step,
    setStep,
    data,
    messages,
    currentStep,
    waitingInput,
    setWaitingInput,
    addMessage,
    handleOption,
    handleText,
    removeTyping,
  };
};