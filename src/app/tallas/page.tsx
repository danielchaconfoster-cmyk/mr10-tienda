export const metadata = {
  title: "Guía de tallas — MR10 Camisetas",
  description: "Tabla de tallas para camisetas retro de fútbol MR10.",
};

const sizes = [
  { size: "S", chest: 96, length: 70, shoulder: 44 },
  { size: "M", chest: 102, length: 72, shoulder: 46 },
  { size: "L", chest: 108, length: 74, shoulder: 48 },
  { size: "XL", chest: 114, length: 76, shoulder: 50 },
  { size: "XXL", chest: 120, length: 78, shoulder: 52 },
];

export default function TallasPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-red-600 font-bold">Información</p>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">Guía de tallas</h1>

      <p className="mt-6 text-neutral-700">
        Nuestras camisetas retro tienen un calce <strong>regular fit</strong> inspirado en la
        confección original de los 80s y 90s. Si tienes dudas, escríbenos por WhatsApp y te
        ayudamos a elegir.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-900 text-white">
              <th className="px-4 py-3 text-left">Talla</th>
              <th className="px-4 py-3 text-left">Pecho (cm)</th>
              <th className="px-4 py-3 text-left">Largo (cm)</th>
              <th className="px-4 py-3 text-left">Hombro (cm)</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s, i) => (
              <tr key={s.size} className={i % 2 === 0 ? "bg-neutral-50" : "bg-white"}>
                <td className="px-4 py-3 font-bold">{s.size}</td>
                <td className="px-4 py-3">{s.chest}</td>
                <td className="px-4 py-3">{s.length}</td>
                <td className="px-4 py-3">{s.shoulder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-black">Cómo medir</h2>
      <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-6">
        <li><strong>Pecho:</strong> mide horizontalmente el contorno bajo las axilas.</li>
        <li><strong>Largo:</strong> desde el centro del cuello hasta el ruedo inferior.</li>
        <li><strong>Hombro:</strong> de costura a costura por la espalda.</li>
      </ul>

      <p className="mt-8 text-sm text-neutral-500">
        Considera que las medidas pueden variar entre +/- 1 a 2 cm por modelo, ya que se
        confeccionan con corte vintage.
      </p>

      <div className="mt-10 bg-neutral-100 p-6 rounded-2xl">
        <p className="text-sm text-neutral-700">
          ¿Dudas con tu talla?{" "}
          <a href="https://wa.me/56996323790" className="text-red-600 font-bold underline">
            Pregúntanos por WhatsApp
          </a>
          .
        </p>
      </div>
    </article>
  );
}
