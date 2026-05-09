export const SITE = {
  name: "MR10 Camisetas",
  whatsapp: "+56996323790",
  whatsappRaw: "56996323790",
  email: "contacto@mr10.cl",
  city: "Santiago, Chile",
  url: "https://mr10-tienda.vercel.app",
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(text)}`;
