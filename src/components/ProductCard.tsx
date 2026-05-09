"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import JerseyMock, { jerseyPalette } from "./JerseyMock";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const palette = jerseyPalette[product.slug] ?? { primary: "#888888" };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow"
    >
      <Link href={`/producto/${product.slug}`}>
        <div className="relative bg-neutral-100 aspect-square overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <JerseyMock {...palette} className="w-full h-full" />
          </div>
          {product.badge && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black tracking-widest px-2 py-1 rounded">
              {product.badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <p className="text-[11px] uppercase tracking-widest text-neutral-500">
            {product.team} · {product.year}
          </p>
          <h3 className="mt-1 font-bold text-neutral-900 group-hover:text-red-600 transition">
            {product.name}
          </h3>
          <p className="mt-2 font-black text-lg text-neutral-900">
            ${product.price.toLocaleString("es-CL")} CLP
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
