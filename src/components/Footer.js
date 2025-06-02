// src/components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const socialLinksData = [
  { href: "https://www.instagram.com/ludikids.tandil/", label: "Instagram", IconComponent: FaInstagram },
  { href: "https://web.facebook.com/profile.php?id=61561612434515", label: "Facebook", IconComponent: FaFacebookF },
  { href: "https://www.tiktok.com/@ludikids.tandil", label: "TikTok", IconComponent: SiTiktok },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 text-zinc-300 border-t-4 border-ludikids-turquesa">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          
          {/* Columna 1: Info Ludikids - MODIFICADA */}
          <div className="space-y-3 text-center md:text-left"> {/* Reducido space-y-4 a space-y-3 */}
            <h3 className="text-xl font-titulo text-ludikids-amarillo">Ludikids Tandil</h3>
            {/* Dirección con Icono */}
            <div className="text-sm"> {/* Contenedor general para la dirección */}
              <div className="flex items-center justify-center md:justify-start"> {/* Flex para icono y primera línea */}
                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-ludikids-amarillo flex-shrink-0" />
                <span>Chacabuco 316</span>
              </div>
              {/* Siguientes líneas de la dirección, indentadas o alineadas según el diseño en md+ */}
              {/* En móvil (text-center en el padre) se centrarán. En md+ (text-left) se alinearán a la izquierda. */}
              {/* Si quieres que en md+ estén indentadas bajo el icono, necesitarías un padding o margen izquierdo aquí */}
              <div className="md:pl-[calc(1rem+0.5rem)]"> {/* 1rem es w-4, 0.5rem es mr-2. Ajusta si cambias tamaño/margen del icono */}
                <p>Tandil, Buenos Aires</p>
                <p>Argentina</p>
              </div>
            </div>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Contacto</h3>
            <div className="text-sm space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <FaWhatsapp className="w-4 h-4 mr-3 text-ludikids-amarillo flex-shrink-0" />
                <a href="https://wa.me/5492494648966" target="_blank" rel="noopener noreferrer" className="hover:text-ludikids-amarillo transition-colors duration-200">
                  2494 64-8966
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="w-4 h-4 mr-3 text-ludikids-amarillo flex-shrink-0" />
                <a href="mailto:info.ludikids@gmail.com" className="hover:text-ludikids-amarillo transition-colors duration-200">
                  info.ludikids@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="space-y-4 text-center md:text-left"> {/* Volví a space-y-4 para que el título "Síguenos" tenga más aire */}
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              {socialLinksData.map(social => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label} 
                  className="text-zinc-400 hover:text-ludikids-amarillo transition-colors duration-200"
                >
                  <social.IconComponent className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-700 text-center">
          <p className="text-sm text-zinc-400">
            © {currentYear} Ludikids. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}