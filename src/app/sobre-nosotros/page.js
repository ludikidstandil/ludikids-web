// src/app/sobre-nosotros/page.js (Con Animación Simple 'animate-fade-in-up' - CORREGIDO)
import Image from 'next/image';

export default function SobreNosotrosPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la Página */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-ludikids-turquesa animate-fade-in-down">
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Nuestra historia, nuestra pasión, nuestro sueño.
          </p>
        </div>

        {/* Sección 1: Origen y Sueño Compartido + Imagen de Fachada */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Columna de Texto */}
          <div className="animate-fade-in-up delay-400 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              Ludikids nació en julio de 2024, en pleno receso de invierno, como un sueño compartido entre profesionales de la educación que decidimos transformar lo que amamos en un espacio real para las infancias de Tandil.
            </p>
            <p>
              Queríamos algo más que un lugar de talleres: soñábamos con un rincón donde los chicos y chicas pudieran jugar, crear, descubrir y ser ellos mismos, acompañados con amor, respeto y mirada atenta.
            </p>
          </div>
          {/* Columna de Imagen */}
          <div className="animate-fade-in-up delay-500">
            <Image
              src="/images/fachada-ludikids.jpg" // Asegúrate que esta ruta es correcta
              alt="Fachada de Ludikids Tandil"
              width={600}  // Reemplaza con tus dimensiones reales
              height={400} // Reemplaza con tus dimensiones reales
              priority
              className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px] mx-auto"
            />
          </div>
        </div>

        {/* Sección 2: El Proyecto, Filosofía y Compromiso + Imagen del Equipo */}
        {/* Animación aplicada al contenedor del grid para que ambos elementos entren juntos */}
        <div className="animate-fade-in-up delay-600">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="md:order-2 space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Así fue tomando forma este proyecto, con el corazón puesto en cada detalle, pensado desde nuestra experiencia como docentes y desde nuestro deseo genuino de aportar algo valioso a la comunidad.
              </p>
              <p>
                En Ludikids creemos en la importancia de generar espacios vivos, donde el juego no sea un pasatiempo, sino una herramienta poderosa para aprender, vincularse y crecer. Porque cuando un niño juega con libertad y alegría, algo se enciende que deja huella para toda la vida.
              </p>
              <p className="font-semibold text-ludikids-turquesa mt-4">
                Estamos acá para acompañar esas infancias, con propuestas auténticas, con compromiso y con el entusiasmo intacto de seguir creando juntos.
              </p>
            </div>
            <div className="md:order-1">
              <Image
                src="/images/equipo-ludikids.jpg" // Asegúrate que esta ruta es correcta
                alt="El equipo de Ludikids"
                width={600}  // Reemplaza con tus dimensiones reales
                height={450} // Reemplaza con tus dimensiones reales
                className="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px] mx-auto"
              />
            </div>
          </div>
        </div> {/* Esta era una llave de cierre de div faltante o mal colocada en el código anterior que te pasé */}
        
      </div> {/* Cierre del div container */}
    </div> // Cierre del div principal
  );
}