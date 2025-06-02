// src/components/BotonWhatsAppFlotante.js
'use client';

import { FaWhatsapp } from 'react-icons/fa'; // Importamos el icono de WhatsApp de React Icons

export default function BotonWhatsAppFlotante() {
  const numeroWhatsApp = "5492494648966"; // Tu número con código de país, sin el + ni ceros iniciales
  const mensajePredeterminado = "Hola Ludikids, ¡quisiera más información sobre los talleres!"; // Opcional

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePredeterminado)}`;

  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp-verde text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                 hover:bg-green-700 transition-colors duration-300
                 animate-pulse-whatsapp" // Clase para la animación de pulso
    >
      <FaWhatsapp size={32} /> {/* Icono de WhatsApp, ajusta el tamaño si es necesario */}
      {/* Onda expansiva (se logrará con CSS) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-whatsapp-verde opacity-75 animate-ping-whatsapp"></span>
    </a>
  );
}