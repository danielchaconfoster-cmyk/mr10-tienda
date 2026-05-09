"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { SITE, waLink } from "@/lib/config";

export default function Navbar() {
  const { count, open } = useCart();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-30 backdrop-blur bg-black/80 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="MR10 Camisetas"
            width={44}
            height={44}
            priority
            className="rounded-full ring-2 ring-yellow-500/40"
          />
          <span className="text-xs opacity-70 hidden sm:block uppercase tracking-widest font-bold">
            Camisetas Retro
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link href="/catalogo" className="hover:text-red-400 transition">
            Catálogo
          </Link>
          <Link href="/catalogo?cat=chile" className="hover:text-red-400 transition hidden md:block">
            Chile
          </Link>
          <Link
            href="/catalogo?cat=selecciones"
            className="hover:text-red-400 transition hidden md:block"
          >
            Selecciones
          </Link>
          <Link href="/catalogo?cat=clubes" className="hover:text-red-400 transition hidden md:block">
            Clubes
          </Link>
          <a
            href={waLink(`Hola ${SITE.name}, quiero hacer una consulta.`)}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-2 rounded-full text-xs font-bold transition hidden sm:block"
          >
            WhatsApp
          </a>
          <button
            onClick={open}
            aria-label="Abrir carrito"
            className="relative bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full font-bold transition flex items-center justify-center"
          >
            🛒
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
