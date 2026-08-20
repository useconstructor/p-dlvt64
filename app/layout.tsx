import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altitude Coffee Roasters | Café de Especialidad - Bogotá",
  description: "Tostadora de café de especialidad en Bogotá. Granos de origen único de Huila, Nariño y Etiopía. Proceso artesanal, perfiles de tueste transparentes. Venta directa a cafeterías y consumidores.",
  keywords: "café especialidad, tostadora café, Bogotá, café colombiano, Huila, Nariño, café origen único",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
