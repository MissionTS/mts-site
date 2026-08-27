"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const remoteSupportUrl = "https://missionts.rmmservices.net/connect/#/";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#why-mission", label: "Why Mission" },
  { href: "/about", label: "About Us" },
  { href: "/#industries", label: "Industries" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" aria-label="Mission Technology Solutions home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/mission-mark-blue.png" alt="" width={1856} height={1827} priority className="h-10 w-10 object-contain sm:hidden" />
          <Image src="/brand/mission-wordmark-blue.png" alt="Mission Technology Solutions" width={4980} height={539} priority className="hidden h-auto w-[220px] sm:block" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-mission-navy">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 sm:inline-flex">
          <Link href={remoteSupportUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-mission-navy/20 px-4 py-2.5 text-sm font-bold text-mission-navy transition hover:border-mission-gold hover:bg-mission-mist">Remote Support</Link>
          <Link href="/#contact" className="rounded-xl bg-mission-navy px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-90">Talk to Mission</Link>
        </div>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-mission-navy transition hover:bg-mission-mist lg:hidden">
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-6 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto max-w-7xl" aria-label="Mobile navigation">
            <div className="grid gap-1">
              {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3.5 text-base font-bold text-slate-700 transition hover:bg-mission-mist hover:text-mission-navy">{item.label}</Link>)}
            </div>
            <div className="mt-4 grid gap-3">
              <Link href={remoteSupportUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center rounded-xl border border-mission-navy/20 px-5 py-3.5 font-extrabold text-mission-navy">Remote Support</Link>
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center rounded-xl bg-mission-gold px-5 py-3.5 font-extrabold text-mission-ink">Start a Conversation</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
