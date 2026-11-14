// Inline SVG icons traced from the reference design.

export function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="10" height="5" viewBox="0 0 20 10" fill="none" aria-hidden="true">
      <polyline points="0.8,0.8 10,9.2 19.2,0.8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function OfferBadge() {
  // Scalloped circle: a disc with twelve bumps around its edge.
  const bumps = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    return <circle key={i} cx={16 + 12.6 * Math.cos(a)} cy={16 + 12.6 * Math.sin(a)} r="3.4" />;
  });
  return (
    <svg width="15.5" height="15.5" viewBox="0 0 32 32" aria-hidden="true">
      <g fill="#ed5a34">
        <circle cx="16" cy="16" r="13" />
        {bumps}
      </g>
      <g fill="#fff">
        <circle cx="11.6" cy="11.6" r="2.3" />
        <circle cx="20.4" cy="20.4" r="2.3" />
      </g>
      <line x1="20.6" y1="10.4" x2="11.4" y2="21.6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function UpiIcon() {
  return (
    <svg width="13.5" height="19" viewBox="0 0 27 38" aria-hidden="true">
      <polygon points="18,0.8 27,20 6.8,38" fill="#0f7f43" />
      <polygon points="10.6,0 19.2,19 0,38" fill="#e77732" />
    </svg>
  );
}

export function WalletIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M19 9V5.5A2.5 2.5 0 0 0 16.5 3h-12A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21h12a2.5 2.5 0 0 0 2.5-2.5V16" />
      <path d="M4.5 6.2h12" />
      <rect x="11" y="9" width="11" height="7" rx="2.2" />
      <circle cx="15" cy="12.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CardIcon() {
  return (
    <svg width="16" height="12.5" viewBox="0 0 32 25" fill="none" aria-hidden="true">
      <rect x="1.2" y="1.2" width="29.6" height="22.6" rx="3" stroke="currentColor" strokeWidth="2.4" />
      <rect x="1.2" y="6.5" width="29.6" height="4.2" fill="currentColor" />
      <circle cx="6.5" cy="18.2" r="2" fill="currentColor" />
    </svg>
  );
}

export function BankIcon() {
  return (
    <svg width="13" height="12.5" viewBox="0 0 26 25" fill="currentColor" aria-hidden="true">
      <polygon points="13,0 26,5.6 26,7.6 0,7.6 0,5.6" />
      <rect x="1" y="8.8" width="24" height="1.4" />
      <rect x="2.4" y="11" width="2.6" height="9.4" />
      <rect x="8.4" y="11" width="2.6" height="9.4" />
      <rect x="15" y="11" width="2.6" height="9.4" />
      <rect x="21" y="11" width="2.6" height="9.4" />
      <rect x="0" y="21.4" width="26" height="3.6" />
    </svg>
  );
}
