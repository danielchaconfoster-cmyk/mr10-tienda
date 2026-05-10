"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "./products";

export type CartItem = {
  slug: string;
  name: string;
  team: string;
  year: string;
  price: number;
  size: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (p: Product, size: string, qty?: number) => void;
  remove: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

const STORAGE_KEY = "mr10-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add: CartCtx["add"] = (p, size, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === p.slug && i.size === size);
      if (existing) {
        return prev.map((i) =>
          i.slug === p.slug && i.size === size ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        { slug: p.slug, name: p.name, team: p.team, year: p.year, price: p.price, size, qty },
      ];
    });
    setIsOpen(true);
  };

  const remove: CartCtx["remove"] = (slug, size) =>
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));

  const setQty: CartCtx["setQty"] = (slug, size, qty) =>
    setItems((prev) =>
      prev
        .map((i) => (i.slug === slug && i.size === size ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    );

  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  return (
    <Ctx.Provider
      value={{
        items,
        add,
        remove,
        setQty,
        clear,
        total,
        count,
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((v) => !v),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function buildWhatsAppMessage(items: CartItem[], total: number) {
  if (items.length === 0) return "Hola MR10, quiero hacer una consulta.";
  const lines = [
    "¡Hola MR10!",
    "Quiero hacer este pedido:",
    "",
    ...items.map(
      (i) =>
        `• ${i.name} (${i.team} ${i.year}) — Talla ${i.size} × ${i.qty} = $${(
          i.price * i.qty
        ).toLocaleString("es-CL")} CLP`
    ),
    "",
    `*Total: $${total.toLocaleString("es-CL")} CLP*`,
    "",
    "¿Me confirmas disponibilidad y forma de pago? Gracias!",
  ];
  return lines.join("\n");
}
