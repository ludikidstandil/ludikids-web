// src/components/WorkshopCard.js
import Image from 'next/image';
import { FaWhatsapp, FaRegClock, FaUsers, FaStar, FaCalendarAlt } from 'react-icons/fa';

export default function WorkshopCard({ taller }) {
  const numeroWhatsApp = "5492494648966";
  const mensajeWhatsApp = `Hola Ludikids, ¡quisiera más información sobre el taller "${taller.nombre}"!`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 ease-in-out h-full">
      {taller.imagen && (
        <div className="relative w-full h-48 sm:h-52 overflow-hidden">
          <Image
            src={taller.imagen}
            alt={`Imagen del taller ${taller.nombre}`}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold font-titulo text-ludikids-turquesa mb-3 group-hover:text-teal-700 transition-colors">
          {taller.nombre}
        </h3>
        
        <div className="space-y-2 mb-3 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center">
            <FaUsers className="w-4 h-4 mr-2 text-ludikids-amarillo flex-shrink-0" />
            <span><span className="font-medium text-gray-700">Edades:</span> {taller.edades}</span>
          </div>
          
          {taller.horarios && taller.horarios.length > 0 && (
            <div className="flex items-start">
              <FaCalendarAlt className="w-4 h-4 mr-2 mt-0.5 text-ludikids-amarillo flex-shrink-0" />
              <div>
                <span className="font-medium text-gray-700 block mb-0.5">Días y Horarios:</span>
                {taller.horarios.map((horario, index) => (
                  <p key={index} className="text-gray-600 leading-snug">
                    {horario}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
          {taller.descripcionCorta}
        </p>

        {taller.beneficios && taller.beneficios.length > 0 && (
          <div className="mb-5">
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">Beneficios Clave:</h4> {/* Título para beneficios */}
            <ul className="space-y-1">
              {/* CAMBIO AQUÍ para mostrar hasta 5 beneficios */}
              {taller.beneficios.slice(0, 5).map((beneficio, index) => (
                <li key={index} className="flex items-start text-xs text-gray-600">
                  <FaStar className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto pt-4">
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-ludikids-amarillo text-zinc-800 font-semibold font-titulo py-2.5 px-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}