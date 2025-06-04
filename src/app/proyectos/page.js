// src/app/proyectos/page.js (Sin imágenes en tarjetas, con enlace a detalles)
'use client'; 

import Link from 'next/link';

// Asegúrate de que los datos de los proyectos estén aquí o importados de otra parte
// REEMPLAZA ESTO CON TUS DATOS REALES
const proyectosData = [
  {
    id: 1,
    slug: "festejos-de-cumpleanos-ludicos",
    titulo: "Festejos de Cumpleaños Lúdicos",
    descripcionCorta: "Celebra tu cumple con nosotros de una forma original, creativa y llena de diversión inolvidable para los alumnos del espacio y sus amigos.",
    // imagen: "/images/proyectos/cumple.jpg", // Ya no se usa en esta vista de tarjeta
    categoria: "Eventos Infantiles"
    // descripcionExtensa: "..." // Se usará en la página de detalle
  },
  {
    id: 2,
    slug: "ludikids-va-a-las-escuelas",
    titulo: "Ludikids va a las Escuelas",
    descripcionCorta: "Llevamos nuestra propuesta lúdico-educativa innovadora directamente a instituciones escolares, trabajando en conjunto con docentes.",
    // imagen: "/images/proyectos/escuelas.jpg",
    categoria: "Colaboraciones Educativas"
  },
  {
    id: 3,
    slug: "talleres-creativos-adultos",
    titulo: "Talleres Creativos para Adultos",
    descripcionCorta: "Porque la creatividad no tiene edad. Ofrecemos espacios para que los adultos también puedan explorar su lado artístico y relajarse.",
    // imagen: "/images/proyectos/adultos.jpg",
    categoria: "Desarrollo Personal"
  },
  {
    id: 4,
    slug: "proyectos-para-geriatricos",
    titulo: "Conectando Generaciones",
    descripcionCorta: "Proyectos intergeneracionales que llevan alegría, estimulación cognitiva y conexión social a adultos mayores en residencias.",
    // imagen: "/images/proyectos/geriatricos.jpg",
    categoria: "Proyectos Comunitarios"
  },
  // ... añade más proyectos aquí
    {
    id: 5, // Nuevo ID
    slug: "consultorio-psicopedagogico",
    titulo: "Consultorio Psicopedagógico",
    descripcionCorta: "Acompañamiento individualizado para potenciar el aprendizaje y superar dificultades en niños y adolescentes.",
    // imagen: "/images/proyectos/consultorio.jpg", // Opcional, si tienes imagen para la tarjeta
    categoria: "Apoyo Psicopedagógico",
    // descripcionExtensa la necesitarás para la página de detalle
  },
];


export default function ProyectosPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-ludikids-turquesa animate-fade-in-down">
            Nuestros Proyectos
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Descubre las iniciativas educativas y comunitarias que llevamos adelante con pasión y creatividad.
          </p>
        </div>

        {proyectosData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {proyectosData.map((proyecto, index) => (
              <div 
                key={proyecto.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col p-6 animate-fade-in-up" // Añadido p-6 aquí
                style={{ animationDelay: `${(index * 100) + 300}ms` }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-ludikids-amarillo bg-ludikids-turquesa px-2 py-1 rounded-full mb-3 inline-block self-start">
                  {proyecto.categoria}
                </span>
                <h2 className="text-xl lg:text-2xl font-semibold font-titulo text-zinc-800 mb-3">
                  {proyecto.titulo}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                  {proyecto.descripcionCorta}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-200 text-right">
                  <Link 
                    href={`/proyectos/${proyecto.slug}`} 
                    className="text-sm text-ludikids-turquesa font-semibold hover:underline"
                  >
                    Solicitar más detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Próximamente más proyectos. ¡Mantente atento!</p>
        )}
      </div>
    </div>
  );
}