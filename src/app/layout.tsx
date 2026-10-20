import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "SinoAfrica Trade | Export Auto, Sourcing & Etudes Chine-Gabon",
  description:
    "Votre passerelle directe vers la Chine : export automobile, sourcing & fret, et accompagnement aux etudes. Accompagnement certifie Chine-Gabon.",
  keywords: ["export auto Chine", "sourcing Chine Afrique", "etudes en Chine", "fret Chine Gabon"],
  openGraph: {
    title: "SinoAfrica Trade",
    description: "Votre passerelle directe vers la Chine",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}