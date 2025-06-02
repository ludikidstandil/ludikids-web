// src/app/contacto/page.js (Paso D: Con Animaciones y Datos Corregidos)
'use client';

import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

// ¡¡ASEGÚRATE DE QUE ESTAS CONSTANTES ESTÉN DEFINIDAS AQUÍ!!
const datosContacto = {
  direccionLinea1: "Chacabuco 316",
  direccionLinea2: "Tandil, Buenos Aires, Argentina",
  whatsappNumero: "5492494648966",
  whatsappDisplay: "2494 64-8966",
  email: "info.ludikids@gmail.com",
  mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4875885592846!2d-59.13972692437908!3d-37.33096370659943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f97bfd2556f%3A0x73024ef3da792a49!2sChacabuco%20316%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748822889446!5m2!1ses!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};

const redesSociales = [
  { nombre: "Instagram", url: "https://www.instagram.com/ludikids.tandil/", Icono: FaInstagram },
  { nombre: "Facebook", url: "https://web.facebook.com/profile.php?id=61561612434515", Icono: FaFacebookF },
  { nombre: "TikTok", url: "https://www.tiktok.com/@ludikids.tandil", Icono: SiTiktok },
];

export default function ContactoPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-ludikids-turquesa">
            ¡Hablemos!
          </h1>
          {/* El delay en el hijo funciona si el padre tiene la animación O si el hijo también la tiene explícita */}
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200"> 
            Estamos aquí para responder tus preguntas y ayudarte a encontrar el taller perfecto para tus peques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna de Información de Contacto */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6 animate-fade-in-up delay-400">
            <div>
              <h2 className="text-2xl font-semibold font-titulo text-ludikids-turquesa mb-4">Nuestra Ubicación</h2>
              <div className="flex items-start text-gray-700">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-ludikids-amarillo flex-shrink-0" />
                <div>
                  <p>{datosContacto.direccionLinea1}</p>
                  <p>{datosContacto.direccionLinea2}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-titulo text-ludikids-turquesa mb-4">Escríbenos o Llámanos</h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <FaWhatsapp className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                  <a href={`https://wa.me/${datosContacto.whatsappNumero}`} target="_blank" rel="noopener noreferrer" className="hover:text-ludikids-turquesa">
                    {datosContacto.whatsappDisplay} (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="w-5 h-5 mr-3 text-ludikids-amarillo flex-shrink-0" />
                  <a href={`mailto:${datosContacto.email}`} className="hover:text-ludikids-turquesa">
                    {datosContacto.email}
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold font-titulo text-ludikids-turquesa mb-4">Síguenos</h2>
              <div className="flex space-x-4">
                {redesSociales.map(red => (
                  <a 
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.nombre}
                    className="text-zinc-600 hover:text-ludikids-amarillo transition-colors duration-200"
                  >
                    <red.Icono size={28} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna del Mapa */}
          <div className="rounded-xl shadow-lg overflow-hidden animate-fade-in-up delay-600">
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-full min-h-[350px]"
              dangerouslySetInnerHTML={{ __html: datosContacto.mapaIframe }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}