// src/app/proyectos/[slug]/page.js (Enfocado en Texto Extenso)

import Link from 'next/link';
// Ya no necesitamos Image aquí si no hay imagen principal en esta página
// import Image from 'next/image'; 
// import { notFound } from 'next/navigation';

// Asumimos que proyectosData está disponible aquí (importado o definido)
// Recuerda tener la propiedad 'descripcionExtensa' en cada objeto de proyecto
const proyectosData = [
  { id: 1, slug: "festejos-de-cumpleanos-ludicos", titulo: "Festejos de Cumpleaños Lúdicos", categoria: "Eventos Infantiles", descripcionCorta: "...", descripcionExtensa: "Aquí va la descripción larga y detallada del festejo de cumpleaños... \nPuede tener múltiples párrafos si usas '\\n' para separar." /*, imagen: "/images/proyectos/cumple.jpg" */ },
  { id: 2, slug: "ludikids-va-a-las-escuelas", titulo: "Ludikids va a las Escuelas", categoria: "Colaboraciones Educativas", descripcionCorta: "...", descripcionExtensa: "Descripción extensa de cómo Ludikids colabora con escuelas...\nOtro párrafo de la descripción."/*, imagen: "/images/proyectos/escuelas.jpg" */ },
  { id: 3, slug: "talleres-creativos-adultos", titulo: "Talleres Creativos para Adultos", categoria: "Desarrollo Personal", descripcionCorta: "...", descripcionExtensa: "Detalles sobre los talleres para adultos, el ambiente, los beneficios..."/*, imagen: "/images/proyectos/adultos.jpg" */ },
  { id: 4, slug: "proyectos-para-geriatricos", titulo: "Conectando Generaciones", categoria: "Proyectos Comunitarios", descripcionCorta: "...", descripcionExtensa: "Información detallada sobre los proyectos intergeneracionales en geriátricos..."/*, imagen: "/images/proyectos/geriatricos.jpg" */ },
];

function getProjectData(slug) {
  return proyectosData.find(p => p.slug === slug);
}

export default async function ProyectoDetallePage(props) { // Usamos props como en la corrección anterior
  const slug = props.params.slug;
  const proyecto = getProjectData(slug);

  if (!proyecto) {
    // notFound();
    return <div className="container mx-auto py-20 text-center"><p>Proyecto no encontrado para slug: {slug}</p></div>;
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-50"> {/* Fondo ligeramente diferente para la página de detalle */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg"> {/* Contenedor blanco para el contenido */}
          
          <div className="mb-8">
            <Link href="/proyectos" className="text-ludikids-turquesa hover:text-ludikids-amarillo font-medium transition-colors duration-200">
              ← Volver a todos los Proyectos
            </Link>
          </div>

          {/* No mostramos la imagen principal del proyecto aquí */}
          {/* 
          {proyecto.imagen && (
            <div className="mb-8 rounded-xl shadow-xl overflow-hidden">
              <Image
                src={proyecto.imagen}
                alt={`Imagen de ${proyecto.titulo}`}
                width={800} 
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          */}

          <span className="text-sm font-semibold uppercase tracking-wider text-ludikids-amarillo bg-ludikids-turquesa px-3 py-1 rounded-full inline-block mb-4">
            {proyecto.categoria}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-titulo text-zinc-800 mb-6">
            {proyecto.titulo}
          </h1>
          
          {/* Descripción Extensa */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {/* Si la descripción extensa tiene saltos de línea (\n), los convertimos en párrafos */}
            {proyecto.descripcionExtensa.split('\n').map((parrafo, index) => (
              // Solo renderiza el párrafo si no está vacío (después de trim)
              parrafo.trim() && <p key={index}>{parrafo}</p>
            ))}
          </div>

          {/* Aquí podrías añadir en el futuro:
              - Objetivos específicos del proyecto
              - Metodología
              - Testimonios
              - Galería de fotos pequeñas si aplica (diferente a la imagen principal)
              - Botón de contacto específico para este proyecto
          */}

        </article>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   return proyectosData.map((proyecto) => ({
//     slug: proyecto.slug,
//   }));
// }