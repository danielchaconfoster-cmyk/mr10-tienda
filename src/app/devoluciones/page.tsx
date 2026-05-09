export const metadata = {
  title: "Devoluciones — MR10 Camisetas",
  description: "Política de cambios y devoluciones de MR10 Camisetas.",
};

export default function DevolucionesPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-red-600 font-bold">Información</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">Cambios y devoluciones</h1>

      <h2 className="mt-10 text-2xl font-black">Plazo</h2>
      <p className="mt-2 text-neutral-700">
        Tienes <strong>14 días corridos</strong> desde la recepción del producto para solicitar un cambio
        de talla o devolución.
      </p>

      <h2 className="mt-8 text-2xl font-black">Condiciones</h2>
      <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-6">
        <li>El producto debe estar en su estado original, sin uso, sin lavar y con sus etiquetas.</li>
        <li>Debe incluirse el embalaje original.</li>
        <li>El costo del envío de devolución es por cuenta del cliente, salvo que se trate de un error
        nuestro o defecto de fábrica.</li>
        <li>En caso de cambio por talla, despachamos el nuevo producto sin costo de envío adicional.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black">Cómo solicitarlo</h2>
      <ol className="mt-4 space-y-2 text-neutral-700 list-decimal pl-6">
        <li>Escríbenos por WhatsApp indicando tu número de pedido.</li>
        <li>Te enviamos los datos de envío para que despaches el producto.</li>
        <li>Una vez recibido y revisado, coordinamos el cambio o reembolso.</li>
      </ol>

      <h2 className="mt-8 text-2xl font-black">Reembolsos</h2>
      <p className="mt-2 text-neutral-700">
        Los reembolsos se realizan vía transferencia bancaria en un plazo de hasta 5 días hábiles tras
        la recepción y revisión del producto.
      </p>

      <div className="mt-10 bg-neutral-100 p-6 rounded-2xl">
        <p className="text-sm text-neutral-700">
          ¿Necesitas iniciar un cambio?{" "}
          <a href="https://wa.me/56996323790" className="text-red-600 font-bold underline">
            Escríbenos por WhatsApp
          </a>
          .
        </p>
      </div>
    </article>
  );
}
