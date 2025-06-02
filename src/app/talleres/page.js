// src/app/talleres/page.js
'use client';

import { useState } from 'react';
import WorkshopCard from '@/components/WorkshopCard';
import { FiFilter, FiX } from 'react-icons/fi'; // Iconos para el botón de filtro

// ... (talleresData y categoriasEdad como estaban o ajustados)
const talleresData = [
  // ... tus datos de talleres ...
  { id: 1, nombre: "Pequeños Artistas", edades: "3 a 5 años", imagen: "/images/talleres/artistas.jpg", /* ... */ },
  { id: 2, nombre: "Aventuras Científicas", edades: "6 a 8 años", imagen: "/images/talleres/ciencia.jpg", /* ... */ },
  { id: 3, nombre: "Mini Chefs", edades: "4 a 7 años", imagen: "/images/talleres/cocina.jpg", /* ... */ },
  { id: 4, nombre: "Exploradores Naturaleza", edades: "9 a 12 años", imagen: "/images/talleres/naturaleza.jpg", /* ... */ },
];

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