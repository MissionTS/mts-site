"use client";

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const remoteSupportUrl = "https://missionts.rmmservices.net/connect/#/";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  ["Managed IT", "Responsive support and proactive maintenance", "/managed-it"],
  ["Cybersecurity", "Layered protection and recovery planning", "/cybersecurity"],
  ["Networking", "Business Wi-Fi, switching, and architecture", "/networking"],
  ["Microsoft 365 & Cloud", "Secure identity, devices, and collaboration", "/kokomo-microsoft-365"],
  ["Mission Connect", "Business voice and unified communications", "/mission-connect"],
  ["Cabling & Physical Security", "Cameras, access control, and infrastructure", "/structured-cabling-security"],
];

const industryLinks = [
  ["Healthcare", "Reliable systems for the pace of care"],
  ["Government & Municipalities", "Clear, accountable technology planning"],
  ["Manufacturing", "Connected operations and secure facilities"],
  ["Schools & Education", "Safer, easier-to-manage environments"],
  ["Nonprofits", "Right-sized technology for mission-driven teams"],
  ["Small & Growing Businesses", "A foundation that scales with you"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="bg-mission-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-6 py-2 text-xs font-bold sm:gap-6 lg:px-8">
          <a href="tel:+17652458515" className="text-slate-200 transition hover:text-mission-gold">Helpdesk: (765) 245-8515</a>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <Link href={remoteSupportUrl} target="_blank" rel="noopener noreferrer" className="text-mission-gold transition hover:text-white">Remote Support <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between bg-mission-navy px-6 py-4 lg:bg-transparent lg:px-8">
        <Link href="/" aria-label="Mission Technology Solutions home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/mission-wordmark-white.png" alt="Mission Technology Solutions" width={4980} height={539} priority className="absolute left-1/2 top-1/2 h-auto w-[255px] -translate-x-1/2 -translate-y-1/2 sm:hidden" />
          <Image src="/brand/mission-wordmark-blue.png" alt="Mission Technology Solutions" width={4980} height={539} priority className="hidden h-auto w-[260px] sm:block xl:w-[300px]" />
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const hasDropdown = item.label === "Services" || item.label === "Industries";
            const links = item.label === "Services" ? serviceLinks : industryLinks;
            return hasDropdown ? (
              <div key={item.href} className="relative" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <button type="button" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-mission-navy" aria-expanded={openDropdown === item.label} onFocus={() => setOpenDropdown(item.label)}>
                  {item.label}<ChevronDownIcon className={`h-4 w-4 transition ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && <div className="absolute left-1/2 top-full z-50 w-[min(92vw,680px)] -translate-x-1/2 pt-4" onMouseLeave={() => setOpenDropdown(null)}><div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-mission-ink/20"><Link href={item.href} className="mb-2 flex items-center justify-between rounded-2xl bg-mission-navy px-5 py-4 text-sm font-black text-white transition hover:bg-mission-ink" onClick={() => setOpenDropdown(null)}><span>Explore all {item.label.toLowerCase()}</span><span className="text-mission-gold" aria-hidden="true">→</span></Link><div className="grid gap-1 sm:grid-cols-2">{links.map(([label, description, href]) => <Link key={label} href={href ?? `/industries#${label.toLowerCase().replaceAll(" ", "-")}`} className="group flex gap-3 rounded-2xl px-4 py-3.5 transition hover:bg-mission-mist" onClick={() => setOpenDropdown(null)}><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-mission-gold transition group-hover:scale-125" /><span><span className="block text-sm font-extrabold text-mission-ink">{label}</span><span className="mt-0.5 block text-xs leading-5 text-slate-500">{description}</span></span></Link>)}</div></div></div>}
              </div>
            ) : <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-mission-navy">{item.label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-3 sm:inline-flex">
          <Link href="/#contact" className="rounded-xl bg-mission-gold px-4 py-2.5 text-sm font-extrabold text-mission-ink shadow-sm shadow-mission-gold/30 transition hover:-translate-y-0.5 hover:brightness-105">Get Started</Link>
        </div>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="order-first inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 text-white transition hover:bg-white/10 lg:order-none lg:hidden">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto max-w-7xl" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {nav.map((item) => item.label === "Services" || item.label === "Industries" ? <details key={item.href} className="group rounded-xl"><summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold text-slate-700 transition hover:bg-mission-mist hover:text-mission-navy">{item.label}<ChevronDownIcon className="h-5 w-5 transition group-open:rotate-180" /></summary><div className="mb-2 ml-4 grid gap-1 border-l-2 border-mission-gold/40 pl-3">{(item.label === "Services" ? serviceLinks : industryLinks).map(([label, description, href]) => <Link key={label} href={href ?? `/industries#${label.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 hover:bg-mission-mist hover:text-mission-navy"><span className="block">{label}</span><span className="mt-0.5 block text-xs font-medium text-slate-400">{description}</span></Link>)}</div></details> : <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3.5 text-base font-bold text-slate-700 transition hover:bg-mission-mist hover:text-mission-navy">{item.label}</Link>)}
            </div>
            <div className="mt-4 grid gap-3">
              <Link href={remoteSupportUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center rounded-xl border border-mission-navy/20 px-5 py-3.5 font-extrabold text-mission-navy">Remote Support</Link>
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center rounded-xl bg-mission-gold px-5 py-3.5 font-extrabold text-mission-ink">Get Started</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
