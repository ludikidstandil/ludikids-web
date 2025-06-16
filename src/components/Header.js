// src/components/Header.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio', isExternal: false },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros', isExternal: false },
    { href: '/talleres', label: 'Talleres', isExternal: false },
    { href: '/colonia', label: 'Colonia', isExternal: false },
    { href: '/proyectos', label: 'Proyectos', isExternal: false },
    { href: '/contacto', label: 'Contacto', isExternal: false },
    // NUEVO ENLACE EXTERNO AÑADIDO AL FINAL
    { 
      href: 'https://admin.ludikidstandil.com/mialumno', 
      label: 'Mi Alumno', 
      isExternal: true 
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMobileMenuOpen) { // 640px es 'sm'
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-ludikids-amarillo shadow-md sticky top-0 z-50 border-b-4 border-ludikids-turquesa">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-ludikids.png"
                alt="Logo Ludikids"
                width={160}
                height={50}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Sección de Enlaces para Escritorio */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => {
              // Los enlaces externos no se marcan como activos basados en el pathname actual
              const isActive = !link.isExternal && pathname === link.href; 
              
              if (link.isExternal) {
                return (
                  <a
                    key={link.label} // Usar label como key si href podría no ser único en un futuro más complejo
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-md text-sm lg:text-base font-titulo font-semibold text-zinc-800 hover:text-ludikids-turquesa transition-colors duration-200 ease-in-out"
                  >
                    {link.label}
                  </a>
                );
              }
              // Enlace interno
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-titulo font-semibold transition-colors duration-200 ease-in-out
                    ${
                      isActive
                        ? 'text-white bg-ludikids-turquesa shadow-sm'
                        : 'text-zinc-800 hover:text-ludikids-turquesa'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Botón Hamburguesa para Móvil */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-ludikids-turquesa hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ludikids-turquesa"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable para Móvil */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && pathname === link.href;
              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)} // También cierra el menú
                    className="block px-3 py-2 rounded-md text-base font-titulo font-semibold text-zinc-800 hover:text-white hover:bg-ludikids-turquesa transition-colors duration-200 ease-in-out"
                  >
                    {link.label}
                  </a>
                );
              }
              // Enlace interno
              return (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-titulo font-semibold transition-colors duration-200 ease-in-out
                    ${
                      isActive
                        ? 'text-white bg-ludikids-turquesa'
                        : 'text-zinc-800 hover:text-white hover:bg-ludikids-turquesa'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}