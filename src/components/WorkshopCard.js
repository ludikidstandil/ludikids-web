// src/components/WorkshopCard.js
import Image from 'next/image';
import Link from 'next/link'; // Opcional, si quieres un botón que lleve a otra página

export default function WorkshopCard({ taller }) {
  const numeroWhatsApp = "5492494648966";
  const mensajeWhatsApp = `Hola Ludikids, ¡quisiera más información sobre el taller "${taller.nombre}"!`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 h-full">
      {taller.imagen && (
        <div className="relative w-full h-48 sm:h-56"> {/* Altura fija para la imagen */}
          <Image
            src={taller.imagen}
            alt={`Imagen del taller ${taller.nombre}`}
            fill // 'fill' hace que la imagen llene el contenedor padre (necesita position:relative en el padre)
            style={{ objectFit: 'cover' }} // similar a bg-cover, o usa 'contain' si prefieres
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Ayuda a Next/Image a elegir el mejor tamaño
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold font-titulo text-ludikids-turquesa mb-2">
          {taller.nombre}
        </h3>
        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Edades:</span> {taller.edades}</p>
        <p className="text-sm text-gray-600 mb-3"><span className="font-semibold">Horarios:</span> {taller.horarios}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow">
          {taller.descripcionCorta}
        </p>
        {taller.beneficios && taller.beneficios.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-800 mb-1">Beneficios:</p>
            <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
              {taller.beneficios.map((beneficio, index) => (
                <li key={index}>{beneficio}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-auto pt-4 border-t border-gray-200"> {/* mt-auto empuja esto al final si la tarjeta tiene altura variable */}
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-ludikids-amarillo text-zinc-800 font-semibold font-titulo py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-200"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}