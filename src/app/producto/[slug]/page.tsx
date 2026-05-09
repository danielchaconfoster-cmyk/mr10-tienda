import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, products } from "@/lib/products";
import JerseyMock, { jerseyPalette } from "@/components/JerseyMock";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} — MR10 Camisetas Retro`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const palette = jerseyPalette[product.slug] ?? { primary: "#888888" };
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <article className="max-w-7xl mx-auto px-4 py-12">
      <nav className="text-xs text-neutral-500 mb-4">
        <Link href="/" className="hover:text-red-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/catalogo" className="hover:text-red-600">Catálogo</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-700">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-neutral-100 rounded-2xl overflow-hidden aspect-square relative">
          <JerseyMock {...palette} className="w-full h-full" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black tracking-widest px-3 py-1.5 rounded">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            {product.team} · {product.year}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-black tracking-tight">{product.name}</h1>
          <p className="mt-4 text-3xl font-black">${product.price.toLocaleString("es-CL")} <span className="text-base font-normal text-neutral-500">CLP</span></p>

          <p className="mt-6 text-neutral-700 text-lg leading-relaxed">{product.description}</p>

          <div className="mt-8 border-t border-neutral-200 pt-6">
            <h2 className="text-xs uppercase tracking-widest text-red-600 font-bold mb-2">Historia</h2>
            <p className="text-neutral-700">{product.story}</p>
          </div>

          <AddToCart product={product} />

          <div className="mt-6 text-xs text-neutral-500 space-y-1">
            <p>📦 Envío a todo Chile vía Starken / Chilexpress</p>
            <p>↩️ Cambios de talla hasta 14 días</p>
            <p>🔒 Pago seguro WebPay / Mercado Pago</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-black mb-6">También te puede gustar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
