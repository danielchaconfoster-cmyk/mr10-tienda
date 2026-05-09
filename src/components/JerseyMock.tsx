type Stripe = { color: string; width?: number };

type Props = {
  primary: string;
  secondary?: string;
  accent?: string;
  stripes?: Stripe[];
  number?: string;
  text?: string;
  className?: string;
};

export default function JerseyMock({
  primary,
  secondary = "#ffffff",
  accent,
  stripes,
  number = "10",
  text = "MR10",
  className = "",
}: Props) {
  const id = Math.random().toString(36).slice(2, 8);
  return (
    <svg
      viewBox="0 0 400 480"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#0a0a0a" />
          <stop offset="1" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id={`shirt-${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={primary} stopOpacity="1" />
          <stop offset="1" stopColor={primary} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="400" height="480" fill={`url(#bg-${id})`} />
      <g transform="translate(50,40)">
        {/* shirt body */}
        <path
          d="M50,40 L120,10 L140,30 L180,30 L200,10 L270,40 L290,80 L260,100 L260,360 L60,360 L60,100 L30,80 Z"
          fill={`url(#shirt-${id})`}
          stroke="#000"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        {/* sleeves */}
        <path
          d="M50,40 L20,90 L30,140 L70,120 L60,80 Z"
          fill={primary}
          stroke="#000"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        <path
          d="M270,40 L300,90 L290,140 L250,120 L260,80 Z"
          fill={primary}
          stroke="#000"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
        {/* collar */}
        <path
          d="M140,30 L160,50 L180,30 L160,30 Z"
          fill={secondary}
        />
        {/* stripes (optional) */}
        {stripes?.map((s, i) => (
          <rect
            key={i}
            x={70 + i * (s.width ?? 25)}
            y="40"
            width={s.width ?? 25}
            height="320"
            fill={s.color}
            opacity="0.85"
          />
        ))}
        {/* accent diagonal */}
        {accent && (
          <path
            d="M60,100 L260,180 L260,200 L60,120 Z"
            fill={accent}
            opacity="0.8"
          />
        )}
        {/* number */}
        <text
          x="160"
          y="240"
          textAnchor="middle"
          fontFamily="Arial Black, sans-serif"
          fontSize="120"
          fontWeight="900"
          fill={secondary}
          opacity="0.95"
        >
          {number}
        </text>
        {/* text/team */}
        <text
          x="160"
          y="100"
          textAnchor="middle"
          fontFamily="Arial Black, sans-serif"
          fontSize="22"
          fontWeight="900"
          fill={secondary}
          opacity="0.9"
          letterSpacing="2"
        >
          {text}
        </text>
      </g>
    </svg>
  );
}

// Per-product palette mapping
export const jerseyPalette: Record<string, Omit<Props, "className">> = {
  "brasil-1970": { primary: "#FFCD00", secondary: "#009C3B", text: "BRASIL", number: "10" },
  "argentina-1986": { primary: "#75AADB", secondary: "#ffffff", stripes: [{ color: "#ffffff", width: 30 }, { color: "#75AADB", width: 30 }, { color: "#ffffff", width: 30 }, { color: "#75AADB", width: 30 }, { color: "#ffffff", width: 30 }, { color: "#75AADB", width: 30 }, { color: "#ffffff", width: 30 }], text: "ARGENTINA", number: "10" },
  "chile-1998": { primary: "#D52B1E", secondary: "#ffffff", text: "CHILE", number: "11" },
  "holanda-1988": { primary: "#FF6900", secondary: "#000000", text: "NEDERLAND", number: "12" },
  "francia-1998": { primary: "#002654", secondary: "#ED2939", text: "FRANCE", number: "10" },
  "italia-1990": { primary: "#1E3A8A", secondary: "#ffffff", text: "ITALIA", number: "9" },
  "alemania-1990": { primary: "#ffffff", secondary: "#000000", accent: "#DD0000", text: "DEUTSCHLAND", number: "10" },
  "milan-1990": { primary: "#A50034", secondary: "#000000", stripes: [{ color: "#A50034", width: 40 }, { color: "#000000", width: 40 }, { color: "#A50034", width: 40 }, { color: "#000000", width: 40 }, { color: "#A50034", width: 40 }], text: "MILAN", number: "9" },
  "colo-colo-1991": { primary: "#ffffff", secondary: "#000000", text: "COLO-COLO", number: "10" },
  "u-de-chile-1994": { primary: "#003DA5", secondary: "#ffffff", text: "U DE CHILE", number: "11" },
  "nigeria-1994": { primary: "#008753", secondary: "#ffffff", text: "NIGERIA", number: "9" },
  "boca-juniors-2000": { primary: "#003F87", secondary: "#FFD700", accent: "#FFD700", text: "BOCA", number: "10" },
};
