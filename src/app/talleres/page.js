// src/app/talleres/page.js
'use client';

import { useState } from 'react';
import WorkshopCard from '@/components/WorkshopCard';
import { FiFilter, FiX } from 'react-icons/fi'; // Iconos para el botón de filtro

// ... (talleresData y categoriasEdad como estaban o ajustados)
// src/app/talleres/page.js

const talleresData = [
  {
    id: 1,
    nombre: "Taller Ludico",
    descripcionCorta: "Un espacio pensado para acompañar el desarrollo integral de los más pequeños a través de experiencias dinámicas y creativas",
    edades: "6 a 12 años",
    horarios: [ // AHORA ES UN ARRAY
      "Lunes a Viernes: 9:00 a 12:00hs / 14:00 a 17:00hs / 18:15 a 19:45hs"
    ],
    imagen: "/images/talleres/taller-ludico.jpg",
    beneficios: ["Música: estimula el ritmo y la creatividad.", "Dibujo y pintura: fomenta la expresión artística.", "Juego simbólico: potencia la imaginación y el desarrollo social.", "Baile: promueve el movimiento y la coordinación.", "Juegos reglados: fortalecen la atención, la paciencia y el trabajo en equipo."]
  },
  {
    id: 2,
    nombre: "Rincon del Juego",
    descripcionCorta: "Taller por Hora",
    edades: "3 a 12 años",
    horarios: [
      "Lunes a viernes: 9:00 a 12:0hs / 14:00 a 17:00hs / 18:15 a 19:45hs"
      // Puedes añadir más si este taller tiene múltiples horarios
    ],
    imagen: "/images/talleres/rincon-juego.jpg",
    beneficios: ["Música: estimula el ritmo y la creatividad.", "Dibujo y pintura: fomenta la expresión artística.", "Juego simbólico: potencia la imaginación y el desarrollo social.", "Baile: promueve el movimiento y la coordinación.", "Juegos reglados: fortalecen la atención, la paciencia y el trabajo en equipo."]
  },
  {
    id: 3,
    nombre: "Apoyo Escolar",
    descripcionCorta: "Acompañamiento pedagógico personalizado para reforzar contenidos escolares, resolver dudas y afianzar hábitos de estudio.",
    edades: "6 a 12 años",
    horarios: [ // Si solo tiene un horario, sigue siendo un array con un 
      "Lunes: 18:30 a 20:00hs",
      "Miercoles: 18:30 a 20:00hs",
      "Viernes: 18:30 a 20:00hs"
    ],
    imagen: "/images/talleres/apoyoescolar.jpg",
    beneficios: ["Mejora la comprensión y el rendimiento académico.", "Desarrolla técnicas de estudio y autonomía.", "Aumenta la confianza para abordar tareas y exámenes.", "Ofrece atención personalizada en un ambiente tranquilo."]
  },
  {
    id: 4,
    nombre: "Dibujo y Pintura",
    descripcionCorta: "Exploran el arte, juegan con colores y desarrollan creatividad, concentración y confianza.",
    edades: "6 a 12 años",
    horarios: [ // Puede tener un texto más general o múltiples líneas
      "Lunes: 18:15 a 19:45 hs",
      "Miercoles: 18:15 a 19:45 hs",
      "Viernes: 18:15 a 19:45 hs"
    ],
    imagen: "/images/talleres/dibujo-pintura.jpg",
    beneficios: ["Estimula la creatividad y la imaginación.", "Desarrolla la motricidad fina y la coordinación.", "Fomenta la expresión emocional a través del arte.", "Mejora la concentración y la paciencia.", "Promueve la confianza y el sentido de logro."]
  },
  {
    id: 5,
    nombre: "Ceramica",
    descripcionCorta: "Un espacio para crear, jugar y dar forma a la imaginación con las manos",
    edades: "6 a 12 años",
    horarios: [ // Puede tener un texto más general o múltiples líneas
      "Martes: 18:15 a 19:45 hs",
      "Miercoles: 18:30 a 20:00 hs",
      "Jueves: 16:30 a 18:00 hs / 18:30 a 20:00 hs",
      "Viernes: 18:30 a 20:00 hs"
    ],
    imagen: "/images/talleres/ceramica.jpg",
    beneficios: ["Estimula la creatividad.", "Mejora la motricidad fina.", "Fomenta la concentración.", "Refuerza la autoestima.", "Promueve la expresión emocional."]
  },
  {
    id: 6,
    nombre: "Taller de bijouteri",
    descripcionCorta: "Un espacio para crear accesorios únicos, combinar colores y materiales, y dejar volar la imaginación diseñando piezas de bijouterie.",
    edades: "8 a 12 años",
    horarios: [ // Puede tener un texto más general o múltiples líneas
      "Martes: 18:30 a 20:00hs",
      "Jueves: 18:30 a 20:00hs"
    ],
    imagen: "/images/talleres/bijouteri.jpg",
    beneficios: ["Estimula la creatividad y la imaginación.", "Desarrolla la motricidad fina y la coordinación.", "Favorece la concentración y la paciencia.", "Promueve la expresión personal y la autonomía."]
  },
  {
    id: 7,
    nombre: "Sabado de Aventura",
    descripcionCorta: "Este taller combina cocina, huerta y juegos de laboratorio para que los niños aprendan haciendo",
    edades: "6 a 12 años",
    horarios: [ // Puede tener un texto más general o múltiples líneas
      "Sabado: 10:00 a 13:00 hs",
      "1 Hora de Cocina",
      "1 Hora de Juegos de Laboratorio",
      "1 Hora de Huerta"
    ],
    imagen: "/images/talleres/sabado-aventura.jpg",
    beneficios: [" Cultivan, experimentan y cocinan mientras desarrollan la creatividad y el trabajo en equipo"]
  },
  {
    id: 8,
    nombre: "Taller de Juegos MiniLudi",
    descripcionCorta: "Taller especialmente diseñado para desarrollar habilidades sociales, emocionales y motoras",
    edades: "3 a 5 años",
    horarios: [ // Puede tener un texto más general o múltiples líneas
      "Lunes: 9:00 a 12:00 hs / 18:15 a 19:45hs",
      "Martes: 9:00 a 12:00 hs",
      "Miercoles: 9:00 a 12:00 hs / 18:15 a 19:45hs",
      "Jueves: 9:00 a 12:00 hs",
      "Viernes: 9:00 a 11:00 hs / 18:15 a 19:45hs",
    ],
    imagen: "/images/talleres/miniludi.jpg",
    beneficios: ["En MiniLudi, los más chiquitos (3 a 5 años) viven experiencias únicas a través del juego: movimiento, música, arte y muchas sonrisas."]
  },
  // ... más talleres
];

// ... el resto de tu src/app/talleres/page.js como estaba ...

const categoriasEdad = [
  "Todos",
  "3 a 5 años",
  "6 a 8 años",
  "9 a 12 años",
  "4 a 7 años", // Asegúrate que las categorías coincidan con las 'edades' de tus talleres
];


export default function TalleresPage() {
  const [filtroEdad, setFiltroEdad] = useState("Todos");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // Nuevo estado

  const talleresFiltrados = talleresData.filter(taller => {
    if (filtroEdad === "Todos") return true;
    return taller.edades === filtroEdad;
  });

  const handleFiltroClick = (categoria) => {
    setFiltroEdad(categoria);
    if (window.innerWidth < 768) { // Si estamos en vista móvil (md es 768px)
      setIsMobileFilterOpen(false); // Cierra el menú de filtros móviles después de seleccionar
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-titulo text-ludikids-turquesa animate-fade-in-down">
            Nuestros Talleres Creativos
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Descubre un mundo de aprendizaje y diversión para cada edad. ¡Explora nuestras propuestas!
          </p>
        </div>

        {/* Botón para ABRIR filtros en MÓVIL (visible solo en <md) */}
        <div className="md:hidden mb-6 text-center animate-fade-in-up delay-300">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="inline-flex items-center px-6 py-3 border border-ludikids-turquesa text-base font-medium rounded-lg text-ludikids-turquesa bg-white hover:bg-ludikids-amarillo hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ludikids-turquesa transition-colors duration-200"
          >
            {isMobileFilterOpen ? <FiX className="mr-2 h-5 w-5" /> : <FiFilter className="mr-2 h-5 w-5" />}
            {isMobileFilterOpen ? 'Cerrar Filtros' : 'Filtrar por Edad'}
          </button>
        </div>

        {/* Sección de Filtros */}
        {/* En ESCRITORIO: siempre visible */}
        {/* En MÓVIL: visible solo si isMobileFilterOpen es true */}
        <div 
          className={`mb-10 animate-fade-in-up delay-300
            ${isMobileFilterOpen ? 'block' : 'hidden'} md:flex md:justify-center md:space-x-2 md:space-y-0 space-y-2 flex-wrap justify-center`}
        >
          {categoriasEdad.map((categoria) => (
            <button
              key={categoria}
              onClick={() => handleFiltroClick(categoria)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 w-full md:w-auto mx-1 md:mx-0
                ${
                  filtroEdad === categoria
                    ? 'bg-ludikids-turquesa text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-ludikids-amarillo hover:text-zinc-800'
                }
              `}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Lista de Talleres */}
        {talleresFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {talleresFiltrados.map((taller, index) => (
              <div key={taller.id} className={`animate-fade-in-up delay-${(index * 100) + 400}`}>
                <WorkshopCard taller={taller} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 animate-fade-in-up delay-400">
            No hay talleres disponibles para la edad seleccionada. Prueba otro filtro.
          </p>
        )}
      </div>
    </div>
  );
}