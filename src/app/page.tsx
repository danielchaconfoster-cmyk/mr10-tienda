import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";

export default function Home() {
  const featured = products.slice(0, 8);
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-600 font-bold">Lo más buscado</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Camisetas legendarias</h2>
          </div>
          <Link href="/catalogo" className="text-sm font-bold text-neutral-700 hover:text-red-600">
            Ver todo →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { t: "Envíos a todo Chile", d: "Despachos vía Starken y Chilexpress en 2-5 días hábiles." },
            { t: "Cambios y devoluciones", d: "Hasta 14 días para cambios de talla. Sin complicaciones." },
            { t: "Compra segura", d: "Pago con WebPay, Mercado Pago y transferencia bancaria." },
          ].map((b) => (
            <div key={b.t} className="border-l-4 border-red-600 pl-4">
              <h3 className="font-black text-xl">{b.t}</h3>
              <p className="text-white/70 mt-2">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { cat: "chile", title: "Chile", desc: "La Roja, Colo-Colo, U de Chile y más." },
            { cat: "selecciones", title: "Selecciones", desc: "Brasil, Argentina, Holanda, Italia." },
            { cat: "clubes", title: "Clubes", desc: "Milan, Boca Juniors y leyendas europeas." },
          ].map((c) => (
            <Link
              key={c.cat}
              href={`/catalogo?cat=${c.cat}`}
              className="group relative aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden flex items-end p-6 hover:ring-2 hover:ring-red-600 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative text-white">
                <h3 className="text-3xl font-black">{c.title}</h3>
                <p className="text-white/80 mt-1">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
