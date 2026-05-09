"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useCart, buildWhatsAppMessage } from "@/lib/cart";
import { waLink } from "@/lib/config";

export default function CartDrawer() {
  const { items, isOpen, close, remove, setQty, total, clear } = useCart();
  const waUrl = waLink(buildWhatsAppMessage(items, total));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/60 z-40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="font-black text-xl">Tu carrito ({items.length})</h2>
              <button
                onClick={close}
                aria-label="Cerrar"
                className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center text-xl"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500">
                  <p className="text-5xl mb-4">🛒</p>
                  <p className="font-bold text-lg text-neutral-900">Tu carrito está vacío</p>
                  <p className="text-sm mt-1">Agrega camisetas desde el catálogo.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li
                      key={`${i.slug}-${i.size}`}
                      className="flex gap-3 border-b pb-4"
                    >
                      <div className="flex-1">
                        <p className="font-bold text-sm">{i.name}</p>
                        <p className="text-xs text-neutral-500">
                          {i.team} · {i.year} · Talla {i.size}
                        </p>
                        <p className="font-black mt-1">
                          ${(i.price * i.qty).toLocaleString("es-CL")} CLP
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => setQty(i.slug, i.size, i.qty - 1)}
                            className="w-7 h-7 rounded border hover:bg-neutral-100"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{i.qty}</span>
                          <button
                            onClick={() => setQty(i.slug, i.size, i.qty + 1)}
                            className="w-7 h-7 rounded border hover:bg-neutral-100"
                          >
                            +
                          </button>
                          <button
                            onClick={() => remove(i.slug, i.size)}
                            className="ml-auto text-xs text-red-600 hover:underline"
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-5 space-y-3 bg-neutral-50">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-700">Total</span>
                  <span className="text-2xl font-black">
                    ${total.toLocaleString("es-CL")} CLP
                  </span>
                </div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full transition"
                >
                  Finalizar por WhatsApp
                </a>
                <button
                  onClick={clear}
                  className="block w-full text-center text-xs text-neutral-500 hover:text-red-600"
                >
                  Vaciar carrito
                </button>
                <p className="text-xs text-neutral-500 text-center">
                  Te conectaremos con un asesor para confirmar stock, talla y pago.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
