import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <Image
            src="/logo.jpg"
            alt="MR10 Camisetas"
            width={88}
            height={88}
            className="rounded-full ring-2 ring-yellow-500/40"
          />
          <p className="mt-3 text-white/60">Camisetas retro y vintage de fútbol. Historia para vestir.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">Catálogo</h4>
          <ul className="space-y-2">
            <li><a href="/catalogo?cat=chile" className="hover:text-red-400">Chile</a></li>
            <li><a href="/catalogo?cat=selecciones" className="hover:text-red-400">Selecciones</a></li>
            <li><a href="/catalogo?cat=clubes" className="hover:text-red-400">Clubes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">Información</h4>
          <ul className="space-y-2">
            <li><a href="/envios" className="hover:text-red-400">Envíos</a></li>
            <li><a href="/devoluciones" className="hover:text-red-400">Devoluciones</a></li>
            <li><a href="/tallas" className="hover:text-red-400">Guía de tallas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-3">Contacto</h4>
          <ul className="space-y-2">
            <li>contacto@mr10.cl</li>
            <li>
              <a href="https://wa.me/56996323790" target="_blank" rel="noreferrer" className="hover:text-red-400">
                WhatsApp +56 9 9632 3790
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mr10.camisetas.cl"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-red-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @mr10.camisetas.cl
              </a>
            </li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} MR10 Camisetas. Todos los derechos reservados.
      </div>
    </footer>
  );
}
