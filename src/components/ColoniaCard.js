// src/components/ColoniaCard.js
import Image from 'next/image';
import { FaLeaf, FaSun, FaSnowflake, FaCheckCircle } from 'react-icons/fa'; // Iconos de ejemplo

export default function ColoniaCard({ colonia }) {
  const numeroWhatsApp = "5492494648966";
  const mensajeWhatsApp = `Hola Ludikids, ¡quisiera más información sobre la "${colonia.nombre}"!`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  // Determinar un icono basado en la temporada (opcional, para un toque visual)
  let IconoTemporada = FaLeaf; // Icono por defecto
  if (colonia.temporada.toLowerCase().includes('verano')) IconoTemporada = FaSun;
  if (colonia.temporada.toLowerCase().includes('invierno')) IconoTemporada = FaSnowflake;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-300">
      {/* Sección de Imagen */}
      {colonia.imagen && (
        <div className="lg:w-2/5 relative h-64 lg:h-auto"> {/* Control de altura y ancho para layout flex */}
          <Image
            src={colonia.imagen}
            alt={`Imagen de ${colonia.nombre}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1023px) 100vw, 40vw"
          />
        </div>
      )}

      {/* Sección de Contenido */}
      <div className={`p-6 sm:p-8 flex flex-col ${colonia.imagen ? 'lg:w-3/5' : 'w-full'}`}>
        <div className="flex items-center mb-3">
          <IconoTemporada className="w-7 h-7 text-ludikids-amarillo mr-3" />
          <h2 className="text-2xl sm:text-3xl font-bold font-titulo text-ludikids-turquesa">
            {colonia.nombre}
          </h2>
        </div>
        
        <p className="text-sm text-gray-500 mb-1"><span className="font-semibold">Temporada:</span> {colonia.temporada}</p>
        <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Edades:</span> {colonia.edades}</p>
        
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base flex-grow">
          {colonia.descripcion}
        </p>

        {colonia.destacados && colonia.destacados.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Actividades destacadas:</h4>
            <ul className="space-y-2">
              {colonia.destacados.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <FaCheckCircle className="w-4 h-4 text-ludikids-turquesa mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
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
            className="block w-full md:w-auto md:inline-block text-center bg-ludikids-amarillo text-zinc-800 font-semibold font-titulo py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-base"
          >
            Consultar / Inscribirse
          </a>
        </div>
      </div>
    </div>
  );
}