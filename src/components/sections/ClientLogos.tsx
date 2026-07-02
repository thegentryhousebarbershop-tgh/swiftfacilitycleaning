import {
  Building2,
  HeartPulse,
  Bird,
  Mountain,
  GraduationCap,
  Plus,
  Triangle,
  Factory,
  ShieldCheck,
  Leaf,
  Award,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

const credentials = [
  { icon: ShieldCheck, label: "Insured & Bonded" },
  { icon: BadgeCheck, label: "OSHA Compliant" },
  { icon: Leaf, label: "Green Seal Products" },
  { icon: Award, label: "5-Star Rated Locally" },
];

type Logo = {
  name: string;
  icon: LucideIcon;
  color: string; // brand color shown on hover
  textClass: string; // typographic treatment
  fontFamily?: string;
};

// NOTE: Representative wordmarks — each styled distinctly to read as a real,
// varied logo strip. Replace with licensed client logos (<Image>/SVG) when
// available; the marquee renders any node, so swapping requires no rework.
const logos: Logo[] = [
  { name: "NorthGate", icon: Building2, color: "#1f2d5a", textClass: "font-bold tracking-tight" },
  { name: "Meridian Health", icon: HeartPulse, color: "#0d9488", textClass: "font-semibold tracking-normal" },
  { name: "Cardinal Offices", icon: Bird, color: "#b91c1c", textClass: "font-semibold italic", fontFamily: "Georgia, serif" },
  { name: "BluePeak", icon: Mountain, color: "#2563eb", textClass: "font-extrabold tracking-tighter" },
  { name: "VANTAGE K-12", icon: GraduationCap, color: "#4338ca", textClass: "font-bold uppercase tracking-[0.2em] text-base md:text-lg" },
  { name: "Gateway Clinics", icon: Plus, color: "#059669", textClass: "font-semibold" },
  { name: "SUMMIT REALTY", icon: Triangle, color: "#b45309", textClass: "font-medium uppercase tracking-[0.15em] text-base md:text-lg" },
  { name: "Riverbend Mfg.", icon: Factory, color: "#334155", textClass: "font-bold", fontFamily: "ui-monospace, monospace" },
];

export function ClientLogos() {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 border-y border-border-light bg-white">
      <div className="container-default">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-text-secondary">
          Trusted by facility managers across Missouri
        </p>
      </div>

      {/* Marquee */}
      <div className="marquee-viewport relative mt-8 overflow-hidden" aria-label="Client logos">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />

        <ul className="marquee-track items-center gap-x-12 md:gap-x-16">
          {loop.map((logo, i) => {
            const LogoIcon = logo.icon;
            return (
              <li
                key={`${logo.name}-${i}`}
                aria-hidden={i >= logos.length}
                className="group shrink-0 flex items-center gap-2.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <LogoIcon size={26} style={{ color: logo.color }} aria-hidden="true" className="shrink-0" />
                <span
                  className={`text-xl md:text-2xl whitespace-nowrap ${logo.textClass}`}
                  style={{ color: logo.color, fontFamily: logo.fontFamily }}
                >
                  {logo.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Credential chips */}
      <div className="container-default">
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {credentials.map((c) => (
            <div
              key={c.label}
              className="flex items-center justify-center gap-2 rounded-xl bg-background-secondary px-4 py-3 text-sm font-semibold text-heading"
            >
              <c.icon className="text-accent-blue shrink-0" size={18} aria-hidden="true" />
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
