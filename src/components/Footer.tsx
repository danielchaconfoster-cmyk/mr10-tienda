export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-black text-lg tracking-tight">
            MR<span className="text-red-500">10</span>
          </h3>
          <p className="mt-2 text-white/60">Camisetas retro y vintage de fútbol. Historia para vestir.</p>
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
