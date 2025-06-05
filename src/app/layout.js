// src/app/layout.js
import "./globals.css"; // Asegúrate que esta sea la ÚNICA importación de globals.css
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotonWhatsAppFlotante from '@/components/BotonWhatsAppFlotante';
import { Nunito_Sans, Fredoka } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
  weight: ['400', '700']
});

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
  weight: ['400', '600'] // Ajusta los pesos que necesites, ej: ['400', '600', '700']
});

// Define tu URL base de producción
// ¡¡¡IMPORTANTE!!! CAMBIA ESTO A TU DOMINIO FINAL CUANDO LO TENGAS
const PRODUCTION_URL = "https://www.ludikidstandil.com"; 
// Si aún no tienes el dominio, puedes usar temporalmente tu URL de vercel.app
// Ejemplo: const PRODUCTION_URL = "https://ludikids-web-next.vercel.app";


export const metadata = {
  // Metadatos generales del sitio
  title: {
    default: "Ludikids Tandil - Talleres Infantiles Creativos y Divertidos", // Título por defecto
    template: "%s | Ludikids Tandil", // Plantilla para títulos de páginas internas
  },
  description: "Ludikids: Un espacio para jugar, crear y descubrir. Talleres lúdicos, recreativos y educativos para niños de 3 a 12 años en Tandil. Colonia de vacaciones y proyectos educativos.",
  
  // Favicon
  icons: {
    icon: '/favicon.ico', // Asegúrate de tener tu favicon.ico en la carpeta public/
    // apple: '/apple-touch-icon.png', // Si tienes uno para Apple
  },

  // Open Graph (para Facebook, WhatsApp, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'es_AR', // Español de Argentina
    url: PRODUCTION_URL, // URL canónica de tu sitio
    siteName: 'Ludikids Tandil',
    title: 'Ludikids Tandil - Talleres Infantiles Creativos y Divertidos',
    description: 'Descubre Ludikids, un espacio único en Tandil para el desarrollo integral de niños a través del juego, la creatividad y talleres educativos.',
    images: [
      {
        url: `${PRODUCTION_URL}/ludikids-og-image.png`, // URL ABSOLUTA de tu imagen de vista previa
        width: 1200,
        height: 630,
        alt: 'Ludikids Tandil - Espacio Creativo para Niños',
      },
    ],
  },

  // Twitter Cards (para Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Ludikids Tandil: ¡Juego, Creación y Aprendizaje para Niños!',
    description: 'Explora los talleres, colonias y proyectos educativos de Ludikids en Tandil, diseñados para potenciar la creatividad y el desarrollo infantil.',
    images: [`${PRODUCTION_URL}/ludikids-og-image.png`], // URL ABSOLUTA de tu imagen
    // site: '@TuUsuarioDeTwitter', // Opcional
    // creator: '@TuUsuarioPersonal', // Opcional
  },
  
  // Otros metadatos importantes
  metadataBase: new URL(PRODUCTION_URL),
  alternates: {
    canonical: '/', // URL canónica para la página de inicio
  },
  // keywords: ['talleres infantiles tandil', 'ludikids', 'actividades para niños tandil', 'colonia de vacaciones tandil', 'psicopedagogía tandil'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunitoSans.variable} ${fredoka.variable}`}>
      <body className="flex flex-col min-h-screen font-cuerpo bg-gray-50"> {/* bg-gray-50 para un fondo ligeramente diferente */}
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
        <BotonWhatsAppFlotante /> 
      </body>
    </html>
  );
}