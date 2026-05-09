"use client";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { waLink } from "@/lib/config";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState("M");

  const directWa = waLink(
    `¡Hola MR10! Quiero comprar:\n\n• ${product.name} (${product.team} ${product.year}) — Talla ${size}\n\nPrecio: $${product.price.toLocaleString("es-CL")} CLP\n\n¿Disponibilidad y formas de pago?`
  );

  return (
    <>
      <div className="mt-8">
        <p className="text-sm font-bold mb-3">Talla</p>
        <div className="flex gap-2 flex-wrap">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`w-12 h-12 rounded-lg font-bold transition border-2 ${
                size === s
                  ? "border-red-600 bg-red-600 text-white"
                  : "border-neutral-300 hover:border-red-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={directWa}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-center transition"
        >
          Comprar por WhatsApp
        </a>
        <button
          onClick={() => add(product, size)}
          className="flex-1 border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white font-bold py-4 px-6 rounded-full transition"
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
