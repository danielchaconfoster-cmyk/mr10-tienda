"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter">
            MR<span className="text-red-500">10</span>
          </span>
          <span className="text-xs opacity-70 hidden sm:block uppercase tracking-widest">Camisetas Retro</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/catalogo" className="hover:text-red-400 transition">Catálogo</Link>
          <Link href="/catalogo?cat=chile" className="hover:text-red-400 transition hidden sm:block">Chile</Link>
          <Link href="/catalogo?cat=selecciones" className="hover:text-red-400 transition hidden sm:block">Selecciones</Link>
          <Link href="/catalogo?cat=clubes" className="hover:text-red-400 transition hidden sm:block">Clubes</Link>
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-xs font-bold transition"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
