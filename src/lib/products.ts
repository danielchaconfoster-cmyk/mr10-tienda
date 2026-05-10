export type Product = {
  slug: string;
  name: string;
  team: string;
  year: string;
  price: number;
  description: string;
  story: string;
  image: string;
  video?: string;
  category: "selecciones" | "clubes" | "chile";
  badge?: "TIER S" | "TIER A" | "TIER B" | "ÚLTIMAS UNIDADES";
};

export const products: Product[] = [
  {
    slug: "brasil-1970",
    name: "Brasil 1970",
    team: "Selección de Brasil",
    year: "1970",
    price: 35990,
    description:
      "La camiseta amarilla más icónica del fútbol mundial. Cuello en V verde, escudo bordado de la CBD y el inolvidable amarillo canarinho que dio la vuelta al mundo en el Mundial de México 70. Réplica retro confeccionada en poliéster vintage de alta densidad.",
    story:
      "Brasil ganó su tercer título mundial vistiendo este modelo y se quedó con la Copa Jules Rimet de forma definitiva. El equipo de Pelé, Jairzinho, Tostão, Rivelino y Carlos Alberto es considerado por la FIFA como la mejor selección de la historia. Su gol final ante Italia en el Estadio Azteca todavía se estudia como una de las jugadas más perfectas jamás vistas.",
    image: "/products/brasil-1970.svg",
    category: "selecciones",
    badge: "TIER S",
  },
  {
    slug: "argentina-1986",
    name: "Argentina 1986",
    team: "Selección Argentina",
    year: "1986",
    price: 37990,
    description:
      "Camiseta titular de la consagración mundialista en México 86. Bastones celestes y blancos clásicos, cuello redondo y el escudo de la AFA. Inspirada en el modelo Le Coq Sportif original que vistió Maradona.",
    story:
      "Diego Armando Maradona elevó esta camiseta a categoría de mito tras los dos goles ante Inglaterra: la 'Mano de Dios' y el 'Gol del Siglo'. Argentina se coronó campeona del mundo derrotando a Alemania 3-2 en la final. La tela y el corte de esta tricota son exactamente los mismos que se usaron en el calor mexicano.",
    image: "/products/argentina-1986.svg",
    category: "selecciones",
    badge: "TIER S",
  },
  {
    slug: "chile-1998",
    name: "Chile 1998",
    team: "La Roja",
    year: "1998",
    price: 32990,
    description:
      "La camiseta del regreso de Chile a un mundial después de 16 años. Roja intensa con detalles azules y blancos en el cuello y los puños. Escudo bordado de la ANFP. La que vistió la 'Ro-Sa' en Francia 98.",
    story:
      "Marcelo Salas y Iván Zamorano formaron una de las duplas ofensivas más recordadas del continente. Chile clasificó a octavos tras empatar con Italia 2-2 (con doblete de Salas) y caer ante Brasil. Esta camiseta es el símbolo de una generación dorada que devolvió la ilusión al fútbol chileno.",
    image: "/products/chile-1998.svg",
    video: "/products/chile-1998.mp4",
    category: "chile",
    badge: "TIER S",
  },
  {
    slug: "holanda-1988",
    name: "Holanda 1988",
    team: "Países Bajos",
    year: "1988",
    price: 34990,
    description:
      "La 'Naranja Mecánica' campeona de Europa. Diseño geométrico Adidas con triángulos angulares en el pecho, naranja brillante y cuello negro. Una de las piezas más buscadas del coleccionismo mundial.",
    story:
      "Marco van Basten, Ruud Gullit y Frank Rijkaard llevaron a Holanda a su única gran corona internacional en la Eurocopa de Alemania 88. La final ante la URSS quedó en la historia por la volea imposible de Van Basten desde un ángulo cerradísimo. El diseño de esta camiseta marcó toda una era estética del fútbol europeo.",
    image: "/products/holanda-1988.svg",
    category: "selecciones",
    badge: "TIER S",
  },
  {
    slug: "francia-1998",
    name: "Francia 1998",
    team: "Selección de Francia",
    year: "1998",
    price: 35990,
    description:
      "Los Bleus campeones del mundo en casa. Azul real con detalles tricolor en cuello y mangas, gallo bordado y escudo de la FFF. Diseño Adidas que marcó toda una época.",
    story:
      "El primer título mundial francés. Zinedine Zidane firmó dos goles de cabeza en la final ante Brasil (3-0) en el Stade de France. Lilian Thuram, Marcel Desailly, Patrick Vieira, Didier Deschamps. Una camiseta que simboliza la unidad de un país a través del fútbol.",
    image: "/products/francia-1998.svg",
    category: "selecciones",
    badge: "TIER A",
  },
  {
    slug: "italia-1990",
    name: "Italia 1990",
    team: "La Azzurra",
    year: "1990",
    price: 33990,
    description:
      "Italia 90: 'Notti Magiche'. Azul Savoia profundo, cuello redondo blanco con detalle tricolor y escudo de la FIGC bordado. La camiseta del mundial italiano confeccionada por Diadora.",
    story:
      "El mundial en casa para Italia. Salvatore 'Totò' Schillaci se convirtió en la sensación con sus seis goles, ganando el Botín de Oro. Aunque la Azzurra cayó en semifinales ante Argentina por penales (con la lágrima eterna de Maradona), esta camiseta quedó grabada como una de las más bellas de la historia.",
    image: "/products/italia-1990.svg",
    category: "selecciones",
    badge: "TIER A",
  },
  {
    slug: "alemania-1990",
    name: "Alemania 1990",
    team: "Die Mannschaft",
    year: "1990",
    price: 33990,
    description:
      "El diseño Adidas más icónico de la historia. Camiseta blanca con las franjas en zigzag negro, rojo y dorado cruzando el pecho. Un statement visual que definió toda una década.",
    story:
      "Alemania campeona del mundo en Italia 90 venciendo a Argentina 1-0 con gol de penal de Andreas Brehme. Lothar Matthäus, Jürgen Klinsmann, Rudi Völler. Esta tricota se convirtió en pieza de culto: tan icónica que Adidas la ha relanzado múltiples veces como edición limitada.",
    image: "/products/alemania-1990.svg",
    category: "selecciones",
    badge: "TIER A",
  },
  {
    slug: "milan-1990",
    name: "AC Milan 1990",
    team: "Associazione Calcio Milan",
    year: "1989-1990",
    price: 36990,
    description:
      "Bastones rossoneri clásicos con cuello negro en V y publicidad Mediolanum. La camiseta del Milan más dominante de fines de los 80s y comienzos de los 90s.",
    story:
      "Bajo Arrigo Sacchi y luego Fabio Capello, este Milan ganó dos Copas de Europa consecutivas (1989 y 1990) y dos Mundiales de Clubes. Marco van Basten, Ruud Gullit, Frank Rijkaard, Franco Baresi y Paolo Maldini. Considerados por muchos como el mejor equipo de clubes de la historia.",
    image: "/products/milan-1990.svg",
    category: "clubes",
    badge: "TIER A",
  },
  {
    slug: "colo-colo-1991",
    name: "Colo-Colo 1991",
    team: "Club Social y Deportivo Colo-Colo",
    year: "1991",
    price: 36990,
    description:
      "La camiseta blanca del Cacique campeón de la Copa Libertadores de América. Cuello redondo negro, escudo bordado y publicidad Marlboro original. Pieza histórica del fútbol chileno.",
    story:
      "Bajo la dirección del croata Mirko Jozić, Colo-Colo conquistó América venciendo a Olimpia de Paraguay en la final. Único equipo chileno en alzar la Libertadores. Una hazaña histórica con jugadores como Daniel Morón, Javier Margas, Lizardo Garrido, Jaime Pizarro y Marcelo Barticciotto.",
    image: "/products/colo-colo-1991.svg",
    video: "/products/colo-colo-1991.mp4",
    category: "chile",
    badge: "TIER S",
  },
  {
    slug: "u-de-chile-1994",
    name: "U. de Chile 1994",
    team: "Universidad de Chile",
    year: "1994",
    price: 34990,
    description:
      "Azul intenso con cuello blanco en V y escudo del 'Romántico Viajero' bordado. La camiseta del fin de la sequía. Edición homenaje a la generación del bicampeonato.",
    story:
      "La 'U' rompió la maldición de 25 años sin títulos al ganar el Campeonato Nacional 1994 (y luego 1995, en bicampeonato). Marcelo Salas, Sandrino Castec, Cristián Castañeda, Patricio Mardones. Esta camiseta es el símbolo del renacer azul y de una generación que volvió a ilusionar a todo un país.",
    image: "/products/u-de-chile-1994.svg",
    category: "chile",
    badge: "TIER A",
  },
  {
    slug: "nigeria-1994",
    name: "Nigeria 1994",
    team: "Super Eagles",
    year: "1994",
    price: 32990,
    description:
      "Verde brillante con detalles blancos en hombros y cuello, escudo del águila bordado. El diseño africano más bello de los 90s, confeccionado por Adidas para USA 94.",
    story:
      "Nigeria sorprendió al mundo en su primera Copa del Mundo: ganó su grupo y eliminó por sorteo a la favorita Argentina. Solo cayó en octavos ante Italia con gol agónico de Roberto Baggio. Rashidi Yekini, Daniel Amokachi, Emmanuel Amunike, Sunday Oliseh. Camiseta de coleccionista absoluto.",
    image: "/products/nigeria-1994.svg",
    category: "selecciones",
    badge: "TIER A",
  },
  {
    slug: "boca-juniors-2000",
    name: "Boca Juniors 2000",
    team: "Club Atlético Boca Juniors",
    year: "2000",
    price: 35990,
    description:
      "Azul y oro clásicos del Xeneize, con franja amarilla horizontal en el pecho, cuello redondo y publicidad Quilmes. Confeccionada por Nike para la temporada de la consagración intercontinental.",
    story:
      "El Boca de Carlos Bianchi venció al Real Madrid 2-1 en la final intercontinental de Tokio con dos goles de Martín Palermo. Juan Román Riquelme en su esplendor, asistiendo a un Palermo histórico. Walter Samuel, Sebastián Battaglia, Antonio Barijho. Consagración del proyecto más ganador de la historia reciente.",
    image: "/products/boca-2000.svg",
    category: "clubes",
    badge: "TIER A",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getByCategory = (cat: Product["category"]) =>
  products.filter((p) => p.category === cat);
