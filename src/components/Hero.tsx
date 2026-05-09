"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-red-950 to-black text-white">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-36 relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-red-400 font-bold"
        >
          Camisetas Retro · Chile
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-5xl md:text-7xl font-black tracking-tighter leading-none"
        >
          Historia<br />
          <span className="text-red-500">para vestir.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          Las camisetas que marcaron generaciones. Selecciones, clubes y los momentos
          que quedaron grabados en la historia del fútbol mundial.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/catalogo"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-bold transition"
          >
            Ver catálogo
          </Link>
          <Link
            href="/catalogo?cat=chile"
            className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full font-bold transition"
          >
            Camisetas de Chile
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
