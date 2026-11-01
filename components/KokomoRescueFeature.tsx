import Image from "next/image";

export function KokomoRescueFeature() {
  return (
    <section className="bg-mission-mist px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-center">
        <Image
          src="/photos/kokomo-rescue-mission.jpg"
          alt="Kokomo Rescue Mission, a local community organization"
          width={960}
          height={720}
          className="h-52 w-full rounded-lg object-cover md:h-56"
        />
        <figure className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-mission-navy">A Kokomo community partner</p>
          <blockquote className="mt-3 text-lg font-normal leading-8 text-slate-700">
            “Mission Technology Solutions modernized our organization and has always been a reliable and attentive partner.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-slate-600">Troy · Kokomo Rescue Mission</figcaption>
        </figure>
      </div>
    </section>
  );
}
