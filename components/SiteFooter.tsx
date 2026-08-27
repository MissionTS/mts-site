import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-mission-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <Image
            src="/brand/mission-wordmark-white.png"
            alt="Mission Technology Solutions"
            width={4980}
            height={540}
            className="h-auto w-full max-w-[280px]"
          />
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">Small-business culture. Enterprise-level solutions.</p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Contact</div>
          <p className="mt-3 text-sm text-slate-300">(765) 245-8515</p>
          <p className="mt-1 text-sm text-slate-300">sales@missionts.com</p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-slate-400">Based in Indiana</div>
          <p className="mt-3 text-sm leading-6 text-slate-300">Serving organizations that want technology to be reliable, secure, and easy to manage.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Mission Technology Solutions. All rights reserved.</div>
    </footer>
  );
}
