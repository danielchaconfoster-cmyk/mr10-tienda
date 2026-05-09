import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR10 — Camisetas Retro de Fútbol",
  description:
    "Camisetas retro y vintage de fútbol. Selecciones, clubes y la historia del fútbol chileno e internacional para vestir.",
  openGraph: {
    title: "MR10 — Camisetas Retro de Fútbol",
    description: "Historia para vestir. Camisetas retro de selecciones y clubes.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
