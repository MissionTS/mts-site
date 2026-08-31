"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

export type TeamProfile = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export function TeamProfiles({ title, people }: { title: string; people: TeamProfile[] }) {
  const [selected, setSelected] = useState<TeamProfile | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <>
    <div>
      <h3 className="text-xl font-extrabold text-mission-ink">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <button key={person.name} type="button" onClick={() => setSelected(person)} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-mission-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-mission-navy focus:ring-offset-2">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-mission-navy to-mission-ink text-5xl font-black tracking-tight text-mission-gold">
              {person.image ? <Image src={person.image} alt={person.name} width={640} height={480} className="h-full w-full object-cover object-top" /> : person.name.split(" ").map((part) => part[0]).join("")}
            </div>
            <div className="p-5">
              <div className="text-lg font-extrabold text-mission-ink">{person.name}</div>
              <div className="mt-1 text-sm leading-6 text-slate-600">{person.role}</div>
              <div className="mt-4 text-sm font-bold text-mission-navy transition group-hover:text-mission-gold">Meet {person.name.split(" ")[0]} →</div>
            </div>
          </button>
        ))}
      </div>
    </div>

    {selected && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-mission-ink/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selected.name} profile`} onMouseDown={() => setSelected(null)}>
        <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
          <button type="button" onClick={() => setSelected(null)} aria-label="Close profile" className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-mission-navy shadow-lg transition hover:bg-mission-mist"><XMarkIcon className="h-6 w-6" /></button>
          <div className="grid sm:grid-cols-[1fr_1.35fr]">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-mission-navy to-mission-ink text-7xl font-black text-mission-gold sm:aspect-auto sm:min-h-[420px]">
              {selected.image ? <Image src={selected.image} alt={selected.name} width={900} height={675} className="h-full w-full object-cover object-top" /> : selected.name.split(" ").map((part) => part[0]).join("")}
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-7 sm:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-mission-navy">Mission Technology Solutions</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-mission-ink">{selected.name}</h2>
              <p className="mt-2 font-bold text-mission-gold">{selected.role}</p>
              <div className="mt-6 space-y-5">{selected.bio.split(/(?=What I do:|Why I do it:|Most interesting fact:|Least interesting fact:)/).map((part, index) => { const split = part.indexOf(":"); const heading = split > -1 ? part.slice(0, split + 1) : index === 0 ? "About" : ""; const body = split > -1 ? part.slice(split + 1).trim() : part.trim(); return <div key={`${heading}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-mission-navy">{heading}</p><p className="mt-2 leading-7 text-slate-600">{body}</p></div>; })}</div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>;
}

