export const saveLead = async (data) => {
  const payload = {
    id: data.leadId,
    nombre: data.nombre || "",
    empresa: data.empresa || data.servicio || "",
    perfil: data.perfil || "",
    ubicacion: data.ubicacion || "",
    uso_internet: data.uso_internet || "",
    plan: data.plan || "",
    detalle: data.detalle || "",
    contacto: data.contacto || "",
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbx9s-52wEGQsaYUXqcNxbL5JFZIOV6BhYl_Z5X58JXUOwUHwMSAhJIFEsQLw40nlPDrmQ/exec", {
      method: "POST",
      mode: "no-cors", 
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error("Error guardando lead:", err);
  }
};