// src/app/layout.js
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotonWhatsAppFlotante from '@/components/BotonWhatsAppFlotante';
import { Nunito_Sans, Fredoka } from 'next/font/google'; // CAMBIO: Fredoka en lugar de Fredoka_One

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans', // Variable CSS para Nunito Sans
  display: 'swap',
  weight: ['400', '700'] // Pesos que usarás de Nunito Sans
});

const fredoka = Fredoka({ // Usamos la importación de Fredoka
  subsets: ['latin'],
  variable: '--font-fredoka',   // Variable CSS para Fredoka
  display: 'swap',
  weight: ['400', '600', '700'] // Especifica los pesos que quieres usar de Fredoka (ej: regular, semibold, bold)
                                // Revisa Google Fonts para los pesos disponibles de "Fredoka"
});

export const metadata = {
  title: "Ludikids Tandil",
  description: "Talleres infantiles divertidos y educativos en Tandil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunitoSans.variable} ${fredoka.variable}`}>
      <body className="flex flex-col min-h-screen font-cuerpo"> {/* font-cuerpo se definirá en Tailwind */}
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