// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center">
      
      {/* Sección de Bienvenida Principal (Hero) con Imagen de Fondo */}
      <div 
        className="relative bg-cover bg-center text-white animate-fade-in-down flex items-center justify-center" // Añadido flex para centrar contenido
        // Ajusta la altura mínima para escritorio y móvil
        // Opción A: Una fracción de la altura de la pantalla
        // className="... min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]" // 60% del alto del viewport, etc.
        // Opción B: Una altura fija en píxeles para escritorio, y diferente para móvil si es necesario
        // Para esta opción, quitamos el padding vertical del div exterior y lo ponemos en el interior
        style={{ 
          backgroundImage: "url('/images/fondo-hero.jpg')",
          minHeight: '500px' // EJEMPLO: Altura mínima para escritorio, ajusta este valor
          // Podrías usar media queries en CSS para alturas diferentes en móvil si este enfoque no basta
        }}
      >
        {/* Superposición oscura opcional */}
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Aumenté un poco la opacidad */}
        
        {/* Contenedor del Texto del Hero */}
        <div className="relative max-w-3xl mx-auto px-4 z-10 py-16 sm:py-20"> {/* Padding vertical AQUI para el contenido */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-titulo mb-6">
            Bienvenidos a Ludikids
          </h1>
          <p className="text-xl sm:text-2xl font-cuerpo mb-8">
            Un espacio para jugar, crear y descubrir
          </p>
          <p className="text-base sm:text-lg leading-relaxed"> {/* Quité mb-10 de aquí para que no empuje tanto */}
            Ludikids es una institución privada dedicada al desarrollo integral de niños y niñas de 3 a 12 años, a través de talleres lúdicos, creativos y recreativos que estimulan el aprendizaje y la imaginación. Ofrecemos también nuestra Colonia de Invierno y de Verano, con propuestas dinámicas y divertidas durante el receso escolar.
          </p>
        </div>
      </div>

      {/* Sección de Llamada a la Acción (Botones) */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 animate-fade-in-up delay-200">
          {/* ... (botones sin cambios) ... */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/talleres" className="block bg-ludikids-amarillo text-zinc-800 font-semibold font-titulo py-4 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105">
              Nuestros Talleres
            </Link>
            <Link href="/colonia" className="block bg-ludikids-turquesa text-white font-semibold font-titulo py-4 px-6 rounded-lg shadow-md hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Colonia de Vacaciones
            </Link>
            <Link href="/proyectos" className="block bg-ludikids-amarillo text-zinc-800 font-semibold font-titulo py-4 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105">
              Nuestros Proyectos
            </Link>
          </div>
        </div>
      </div>


      {/* Sección Adicional (Proyectos Comunitarios y Filosofía) */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {/* ... (contenido sin cambios) ... */}
          <div className="p-6 bg-white rounded-lg shadow-sm animate-fade-in-up delay-400">
            <h2 className="text-2xl font-titulo font-semibold text-ludikids-turquesa mb-3">
              Compromiso con la Comunidad
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Además, llevamos adelante proyectos educativos y comunitarios en articulación con escuelas e instituciones de la ciudad.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm animate-fade-in-up delay-600">
            <h2 className="text-2xl font-titulo font-semibold text-ludikids-turquesa mb-3">
              Nuestra Filosofía
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Creemos profundamente en el juego como motor de transformación, capaz de potenciar habilidades, vínculos y experiencias significativas.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 mt-12 animate-fade-in-up delay-800">
          <p className="text-lg text-gray-700 mb-2">
            Hacé clic en los botones de arriba para conocer más sobre nuestras propuestas.
          </p>
          <p className="text-xl font-semibold text-ludikids-turquesa">
            ¡Te esperamos!
          </p>
        </div>
      </div>

    </div>
  );
}