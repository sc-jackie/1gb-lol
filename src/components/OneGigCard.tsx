type OneGigCardProps = {
  className?: string;
};

export function OneGigCard({ className }: OneGigCardProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 210"
      role="img"
      aria-label="CARD, a cream SD card printed 1GB with a gold contact row"
    >
      <title>CARD — 1GB</title>
      <path
        d="M8 8h108l36 28v166H8z"
        fill="#EDE4D0"
        stroke="#1A1612"
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <path d="M116 8v28h36" fill="none" stroke="#1A1612" strokeWidth="6" />
      <text
        x="80"
        y="108"
        textAnchor="middle"
        fill="#1A1612"
        fontFamily="var(--font-plex), IBM Plex Sans, Arial, sans-serif"
        fontWeight="700"
        fontSize="48"
      >
        1GB
      </text>
      <g className="pins">
        <rect x="22" y="168" width="12" height="30" fill="#C6A24A" />
        <rect x="40" y="172" width="12" height="26" fill="#C6A24A" />
        <rect x="58" y="168" width="12" height="30" fill="#C6A24A" />
        <rect x="76" y="174" width="12" height="24" fill="#C6A24A" />
        <rect x="94" y="168" width="12" height="30" fill="#C6A24A" />
        <rect x="112" y="172" width="12" height="26" fill="#C6A24A" />
        <rect x="130" y="168" width="12" height="30" fill="#C6A24A" />
        <rect
          className="gleam"
          x="18"
          y="166"
          width="40"
          height="34"
          fill="url(#gleam)"
        />
      </g>
      <defs>
        <linearGradient id="gleam" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#EDE4D0" stopOpacity="0" />
          <stop offset="50%" stopColor="#F7F0C8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#EDE4D0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <style>{`
        .gleam { animation: pin-gleam 3.2s ease-in-out infinite; }
        @keyframes pin-gleam {
          0%, 55% { transform: translateX(-40px); opacity: 0; }
          70% { opacity: 1; }
          85%, 100% { transform: translateX(140px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gleam { animation: none; }
        }
      `}</style>
    </svg>
  );
}
