"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const remoteSupportUrl = "https://missionts.rmmservices.net/connect/#/";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="bg-mission-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-6 py-2 text-xs font-bold sm:gap-6 lg:px-8">
          <a href="tel:+17652458515" className="text-slate-200 transition hover:text-mission-gold">Helpdesk: (765) 245-8515</a>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <Link href={remoteSupportUrl} target="_blank" rel="noopener noreferrer" className="text-mission-gold transition hover:text-white">Remote Support <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" aria-label="Mission Technology Solutions home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/mission-wordmark-blue.png" alt="Mission Technology Solutions" width={4980} height={539} priority className="absolute left-1/2 h-auto w-[240px] -translate-x-1/2 sm:hidden" />
          <Image src="/brand/mission-wordmark-blue.png" alt="Mission Technology Solutions" width={4980} height={539} priority className="hidden h-auto w-[260px] sm:block xl:w-[300px]" />
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-mission-navy">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 sm:inline-flex">
          <Link href="/#contact" className="rounded-xl bg-mission-gold px-4 py-2.5 text-sm font-extrabold text-mission-ink shadow-sm shadow-mission-gold/30 transition hover:-translate-y-0.5 hover:brightness-105">Get Started</Link>
        </div>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="order-first inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-mission-navy transition hover:bg-mission-mist lg:order-none lg:hidden">
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
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center rounded-xl bg-mission-gold px-5 py-3.5 font-extrabold text-mission-ink">Get Started</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
