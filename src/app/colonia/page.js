// src/app/colonia/page.js
'use client'; // Si usas hooks como useState para algo en el futuro, aunque no para este ejemplo estático
import ColoniaCard from '@/components/ColoniaCard';

// Pega aquí el array coloniasData que definimos en el Paso 1
const coloniasData = [
  {
    id: "verano2025",
    nombre: "Colonia de Verano Ludikids ☀️",
    temporada: "Enero y Febrero 2025",
    edades: "3 a 12 años",
    descripcion: "¡Nuestra clásica Colonia de Verano llega recargada de diversión! Dos meses llenos de juegos al aire libre, actividades acuáticas refrescantes (adaptadas y seguras), talleres de arte temáticos, jornadas de cocina, exploración de la naturaleza, música, baile y muchísimas sorpresas. Un espacio para hacer nuevos amigos, disfrutar del receso escolar y seguir aprendiendo mientras juegan. Contamos con grupos reducidos por edad y profesionales especializados para garantizar una experiencia inolvidable y segura.",
    imagen: "/images/colonias/verano.jpg",
    destacados: [
      "Juegos grupales y cooperativos",
      "Talleres de arte y manualidades temáticos",
      "Actividades acuáticas supervisadas",
      "Exploración y contacto con la naturaleza",
      "Meriendas y desayuno incluidos"
    ]
  },
  {
    id: "invierno2024",
    nombre: "Colonia de Invierno Aventurera ❄️",
    temporada: "Receso Invernal (Julio 2025)",
    edades: "3 a 12 años",
    descripcion: "¡El frío no nos detiene! En nuestra Colonia de Invierno, transformamos el receso en una aventura puertas adentro. Ofrecemos talleres especiales de ciencia divertida, creación de cuentos e ilustración, teatro de sombras, construcción con materiales reciclados y jornadas de juegos de ingenio. Un ambiente cálido y estimulante para que los chicos sigan creando, aprendiendo y socializando durante las vacaciones de invierno. ¡Cupos limitados!",
    imagen: "/images/colonias/invierno.jpg",
    destacados: [
      "Talleres de ciencia y experimentos",
      "Creación literaria y artística",
      "Juegos de mesa y estrategia",
      "Actividades de expresión corporal",
      "Ambiente climatizado y seguro",
      "Meriendas y desayuno incluidos"
    ]
  },
];

export default function ColoniaPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-ludikids-turquesa animate-fade-in-down">
            Nuestras Colonias
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
            ¡Aventuras y aprendizaje también durante las vacaciones!
          </p>
        </div>

        {coloniasData.length > 0 ? (
          <div className="space-y-12 lg:space-y-16"> {/* Espacio entre cada tarjeta de colonia */}
            {coloniasData.map((colonia, index) => (
              <div key={colonia.id} className={`animate-fade-in-up delay-${(index * 200) + 400}`}>
                <ColoniaCard colonia={colonia} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Información sobre próximas colonias será publicada aquí.</p>
        )}
      </div>
    </div>
  );
}