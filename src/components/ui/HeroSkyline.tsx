export function HeroSkyline() {
  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[160px] w-full opacity-70 sm:h-[200px]"
      aria-hidden
    >
      <defs>
        <linearGradient id="bldA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D8D0F0" />
          <stop offset="1" stopColor="#ECE8FA" />
        </linearGradient>
        <linearGradient id="bldB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B7ABEA" />
          <stop offset="1" stopColor="#D8D0F0" />
        </linearGradient>
      </defs>
      <g opacity="0.9">
        <rect x="20" y="120" width="70" height="100" fill="url(#bldA)" rx="6" />
        <rect x="105" y="90" width="54" height="130" fill="url(#bldB)" rx="6" />
        <rect x="175" y="140" width="90" height="80" fill="url(#bldA)" rx="6" />
        <rect x="285" y="70" width="46" height="150" fill="url(#bldB)" rx="6" />
        <rect
          x="345"
          y="110"
          width="60"
          height="110"
          fill="url(#bldA)"
          rx="6"
        />
        <rect x="430" y="60" width="50" height="160" fill="url(#bldB)" rx="8" />
        <rect x="500" y="130" width="80" height="90" fill="url(#bldA)" rx="6" />
        <rect x="600" y="95" width="56" height="125" fill="url(#bldB)" rx="6" />
        <rect x="670" y="145" width="70" height="75" fill="url(#bldA)" rx="6" />
        <rect x="755" y="75" width="48" height="145" fill="url(#bldB)" rx="6" />
        <rect
          x="815"
          y="115"
          width="64"
          height="105"
          fill="url(#bldA)"
          rx="6"
        />
        <rect x="895" y="55" width="52" height="165" fill="url(#bldB)" rx="8" />
        <rect x="965" y="135" width="86" height="85" fill="url(#bldA)" rx="6" />
        <rect
          x="1065"
          y="100"
          width="58"
          height="120"
          fill="url(#bldB)"
          rx="6"
        />
        <rect
          x="1135"
          y="145"
          width="50"
          height="75"
          fill="url(#bldA)"
          rx="6"
        />
        {/* window grid accents */}
        {[105, 285, 430, 600, 755, 895, 1065].map((x, i) => (
          <g key={x} opacity="0.5">
            {[0, 1, 2, 3].map((row) => (
              <rect
                key={row}
                x={x + 10}
                y={100 + i * 4 + row * 22}
                width="10"
                height="10"
                fill="#1E1E1E"
                opacity="0.08"
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
