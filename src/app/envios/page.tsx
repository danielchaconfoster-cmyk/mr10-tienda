export const metadata = {
  title: "Envíos — MR10 Camisetas",
  description: "Información sobre envíos a todo Chile. Plazos, costos y métodos.",
};

export default function EnviosPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      <p className="text-xs uppercase tracking-widest text-red-600 font-bold">Información</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">Envíos</h1>

      <h2 className="mt-10 text-2xl font-black">Cobertura</h2>
      <p className="text-neutral-700">
        Realizamos envíos a todo Chile vía <strong>Starken</strong> y <strong>Chilexpress</strong>. Una
        vez confirmado tu pedido y el pago, despachamos en un plazo de 24 a 48 horas hábiles.
      </p>

      <h2 className="mt-8 text-2xl font-black">Plazos estimados</h2>
      <ul className="mt-4 space-y-2 text-neutral-700">
        <li>🚚 <strong>Región Metropolitana:</strong> 1 a 2 días hábiles desde el despacho.</li>
        <li>🚚 <strong>Regiones (zonas urbanas):</strong> 2 a 4 días hábiles.</li>
        <li>🚚 <strong>Zonas extremas y rurales:</strong> 4 a 7 días hábiles.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black">Costos</h2>
      <p className="text-neutral-700">
        El valor del envío se calcula según comuna de destino y peso del paquete. Te informamos el
        costo exacto al confirmar tu pedido por WhatsApp.
      </p>

      <h2 className="mt-8 text-2xl font-black">Retiro presencial</h2>
      <p className="text-neutral-700">
        También puedes coordinar retiro en Santiago sin costo adicional. Escríbenos por WhatsApp
        para agendar.
      </p>

      <div className="mt-10 bg-neutral-100 p-6 rounded-2xl">
        <p className="text-sm text-neutral-700">
          ¿Dudas sobre tu envío?{" "}
          <a href="https://wa.me/56996323790" className="text-red-600 font-bold underline">
            Escríbenos por WhatsApp
          </a>
          .
        </p>
      </div>
    </article>
  );
}
