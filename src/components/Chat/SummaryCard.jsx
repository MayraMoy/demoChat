import { useEffect, useRef } from "react";
import { saveLead } from "../../utils/saveLead";
import { generateWhatsAppMessage } from "../../utils/generateWhatsAppMessage";

const SummaryCard = ({ data }) => {
  const phone = "00000000000";

  // ID estable (NO cambia entre renders)
  const leadIdRef = useRef(crypto.randomUUID());

  // flag anti doble ejecución
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) return;

    sentRef.current = true;

    saveLead({
      id: leadIdRef.current,
      ...data,
    });
  }, [data]);

  const handleWhatsApp = () => {
    const message = generateWhatsAppMessage(data);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const formatLabel = (key) =>
    key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="summary-card">
      <p style={{ fontWeight: 500, marginBottom: 8 }}>
        Resumen de tu solicitud
      </p>

      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          <strong>{formatLabel(key)}:</strong> {value}
        </p>
      ))}

      <button
        className="restart-btn"
        onClick={handleWhatsApp}
        style={{ marginTop: 12 }}
      >
        📲 Enviar por WhatsApp
      </button>
    </div>
  );
};

export default SummaryCard;