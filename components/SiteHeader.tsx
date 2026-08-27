import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-mission", label: "Why Mission" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mission-navy text-lg font-black text-white">M</div>
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-mission-navy">Mission</div>
            <div className="text-xs font-semibold text-slate-500">Technology Solutions</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-mission-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="rounded-xl bg-mission-navy px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
          Talk to Mission
        </Link>
      </div>
    </header>
  );
}
