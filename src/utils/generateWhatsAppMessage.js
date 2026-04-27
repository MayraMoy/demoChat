export const generateWhatsAppMessage = (data) => {
  let message = "Hola, te contacto desde el asistente web 👋\n\n";

  message += `🧾 *Datos del cliente*\n`;
  if (data.nombre) message += `• Nombre: ${data.nombre}\n`;
  if (data.contacto) message += `• Contacto: ${data.contacto}\n`;

  message += `\n📌 *Servicio*\n`;
  message += `• Empresa: ${data.empresa}\n`;
  message += `• Tipo: ${data.perfil}\n`;

  // X-28

  if (data.empresa === "Seguridad (X-28)") {
    if (data.perfil === "Quiero contratar") {
      message += `\n🔐 *Interés en seguridad*\n`;
      if (data.categoria) message += `• Servicio: ${data.categoria}\n`;
      if (data.ubicacion) message += `• Ubicación: ${data.ubicacion}\n`;
      if (data.riesgo) message += `• Zonas exteriores: ${data.riesgo}\n`;
      if (data.camaras) message += `• Cámaras: ${data.camaras}\n`;
    }

    if (data.perfil === "Ya soy cliente (soporte)") {
      message += `\n🛠 *Soporte requerido*\n`;
      if (data.soporte) message += `• Tipo: ${data.soporte}\n`;
      if (data.problema) message += `• Problema: ${data.problema}\n`;
    }
  }

  // INTERNET

  if (data.empresa === "Internet (CONECTA2)") {
    if (data.perfil === "Quiero contratar") {
      message += `\n🌐 *Interés en internet*\n`;
      if (data.ubicacion) message += `• Ubicación: ${data.ubicacion}\n`;
      if (data.uso) message += `• Uso: ${data.uso}\n`;
      if (data.dispositivos)
        message += `• Dispositivos: ${data.dispositivos}\n`;
      if (data.plan) message += `• Plan: ${data.plan}\n`;
    }

    if (data.perfil === "Ya soy cliente (soporte)") {
      message += `\n🛠 *Soporte requerido*\n`;
      if (data.soporte) message += `• Tipo: ${data.soporte}\n`;
      if (data.problema) message += `• Problema: ${data.problema}\n`;
    }
  }


  // OTROS

  if (data.consulta) {
    message += `\n💬 *Consulta*\n`;
    message += `• ${data.consulta}\n`;
  }

  return encodeURIComponent(message);
};