export const flow = [
  // INICIO
  {
    id: "start",
    msg: "¡Hola! 👋 Soy la ranita asistente virtual. ¿En qué servicio necesitás ayuda?",
  },

  // selector de empresa 
  {
    id: "empresa",
    msg: "Seleccioná el servicio:",
    type: "options",
    key: "empresa",
    options: [
      "Seguridad (X-28)",
      "Internet (CONECTA2)",
    ],
  },

  // tipo de cliente
  {
    id: "perfil",
    msg: "¿Cómo podemos ayudarte?",
    type: "options",
    key: "perfil",
    options: [
      "Quiero contratar",
      "Ya soy cliente (soporte)",
      "Otra consulta",
    ],
  },

  // X-28 — VENTAS
  {
    id: "x28_categoria",
    msg: "¿Qué te interesa?",
    type: "options",
    key: "categoria",
    options: [
      "Alarmas para el hogar",
      "Alarmas para negocios",
      "Seguridad vehicular",
      "Cámaras de seguridad",
    ],
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Quiero contratar",
  },

  // datos personales en el modulo de ventas
  {
    id: "x28_nombre",
    msg: "¿Cuál es tu nombre completo?",
    type: "text",
    key: "nombre",
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Quiero contratar",
  },

  // ubicacion en el modulo de ventas
  {
  id: "x28_ubicacion",
  msg: "¿En qué zona se encuentra la propiedad?",
  type: "options",
  key: "ubicacion",
  options: [
    "Carmen de Areco",
    "Tres Sargentos",
    "Zona rural cercana",
    "Otra localidad"
  ],
  condition: (d) =>
    d.empresa === "Seguridad (X-28)" &&
    d.perfil === "Quiero contratar",
  next: "x28_ubicacion_detalle"
  },

  // dirreccion exacta solo si la ubicacion es "Otra localidad"
  {
  id: "x28_ubicacion_detalle",
  msg: "Indicanos la localidad exacta por favor",
  type: "text",
  key: "ubicacion_detalle",
  condition: (d) =>
    d.ubicacion === "Otra localidad" &&
    d.empresa === "Seguridad (X-28)" &&
    d.perfil === "Quiero contratar",
  next: "x28_riesgo"
  },

  // pregunta de riesgo solo para seguridad
  {
    id: "x28_riesgo",
    msg: "¿Tenés zonas exteriores a proteger?",
    type: "options",
    key: "riesgo",
    options: ["Sí", "No", "No estoy seguro"],
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Quiero contratar",
  },

  // pregunta de camaras solo para modulo de ventas
  {
    id: "x28_camaras",
    msg: "¿Querés agregar cámaras?",
    type: "options",
    key: "camaras",
    options: ["Sí", "No"],
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Quiero contratar",
  },

  // contacto en el modulo de ventas
  {
    id: "x28_contacto",
    msg: "Dejanos tu número:",
    type: "text",
    key: "contacto",
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Quiero contratar",
  },

  // X-28 — SOPORTE
  {
    id: "x28_soporte_tipo",
    msg: "¿Qué necesitás?",
    type: "options",
    key: "soporte",
    options: [
      "Asistencia técnica",
      "App Mi Alarma",
      "Emergencia",
      "Facturación",
    ],
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  // problema específico solo para asistencia técnica
  {
    id: "x28_problema",
    msg: "Describí el problema:",
    type: "text",
    key: "problema",
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  // contacto en el modulo de soporte
  {
    id: "x28_contacto_soporte",
    msg: "Dejanos tu número:",
    type: "text",
    key: "contacto",
    condition: (d) =>
      d.empresa === "Seguridad (X-28)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  // CONECTA2 — VENTAS
  {
    id: "net_nombre",
    msg: "¿Cuál es tu nombre completo?",
    type: "text",
    key: "nombre",
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
  },

  {
    id: "net_ubicacion",
    msg: "¿En qué localidad estás?",
    type: "options",
    key: "ubicacion",
    options: [
      "Carmen de Areco",
      "Tres Sargentos",
      "Zona rural cercana",
      "Otra localidad"
    ],
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
    next: "conecta2_ubicacion_detalle"
  },

  {
  id: "conecta2_ubicacion_detalle",
  msg: "Indicanos la localidad exacta por favor",
  type: "text",
  key: "ubicacion_detalle",
  condition: (d) =>
    d.ubicacion === "Otra localidad" &&
    d.empresa === "Internet (CONECTA2)" &&
    d.perfil === "Quiero contratar",
  next: "net_uso"
  },

  {
    id: "net_uso",
    msg: "¿Para qué usás internet?",
    type: "options",
    key: "uso",
    options: [
      "Trabajo",
      "Streaming",
      "Gaming",
      "Uso básico",
      "Todo un poco",
    ],
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
  },

  {
    id: "net_dispositivos",
    msg: "¿Cuántos dispositivos?",
    type: "options",
    key: "dispositivos",
    options: ["1-3", "4-6", "Más de 6"],
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
  },

  {
    id: "net_plan",
    msg: "¿Qué plan te interesa?",
    type: "options",
    key: "plan",
    options: ["10 Mbps", "20 Mbps", "30 Mbps", "No estoy seguro"],
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
  },

  {
    id: "net_contacto",
    msg: "Dejanos tu número:",
    type: "text",
    key: "contacto",
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Quiero contratar",
  },

  // CONECTA2 — SOPORTE
  {
    id: "net_soporte_tipo",
    msg: "¿Qué problema tenés?",
    type: "options",
    key: "soporte",
    options: [
      "Sin conexión",
      "Internet lento",
      "Router",
      "Facturación",
    ],
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  {
    id: "net_problema",
    msg: "Describí el problema:",
    type: "text",
    key: "problema",
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  {
    id: "net_contacto_soporte",
    msg: "Dejanos tu número:",
    type: "text",
    key: "contacto",
    condition: (d) =>
      d.empresa === "Internet (CONECTA2)" &&
      d.perfil === "Ya soy cliente (soporte)",
  },

  // OTROS (ambos servicios)
  {
    id: "otros",
    msg: "Contanos tu consulta:",
    type: "text",
    key: "consulta",
    condition: (d) => d.perfil === "Otra consulta",
  },

  {
    id: "otros_contacto",
    msg: "Dejanos tu contacto:",
    type: "text",
    key: "contacto",
    condition: (d) => d.perfil === "Otra consulta",
  },


  // FINAL
  {
    id: "done",
    msg: (d) =>
      `Gracias ${d.nombre || ""} 🙌 Un asesor se va a comunicar con vos.`,
    type: "summary",
  },
];
