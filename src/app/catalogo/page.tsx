import { products, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const categories: { key: Product["category"] | "all"; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "chile", label: "Chile" },
  { key: "selecciones", label: "Selecciones" },
  { key: "clubes", label: "Clubes" },
];

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const validCats: Product["category"][] = ["chile", "selecciones", "clubes"];
  const active = validCats.includes(cat as Product["category"]) ? (cat as Product["category"]) : "all";
  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-red-600 font-bold">Catálogo</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          {active === "all" ? "Todas las camisetas" : categories.find((c) => c.key === active)?.label}
        </h1>
        <p className="text-neutral-600 mt-2">{filtered.length} productos disponibles</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => {
          const isActive = active === c.key;
          const href = c.key === "all" ? "/catalogo" : `/catalogo?cat=${c.key}`;
          return (
            <Link
              key={c.key}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-bold transition ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {c.label}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}
