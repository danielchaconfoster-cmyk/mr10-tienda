"use client";
import type { Product } from "@/lib/products";
import JerseyMock, { jerseyPalette } from "./JerseyMock";

export default function ProductMedia({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const palette = jerseyPalette[product.slug] ?? { primary: "#888888" };

  if (product.video) {
    return (
      <video
        src={product.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={className}
      />
    );
  }

  return <JerseyMock {...palette} className={className} />;
}
