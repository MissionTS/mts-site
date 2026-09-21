"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "./SupportStats.module.css";

// Illustrative values only. Replace these series with verified support data
// before changing the sample-data disclosure or describing this as live.
const metrics = [
  { id: "email", title: "Email First Response", unit: "min", values: [7, 8, 6, 9, 7, 4, 8, 7, 6, 8], min: 0, max: 10, ticks: [0, 5, 10] },
  { id: "phone", title: "Phone Call Response Time", unit: "min", values: [3, 2, 4, 1, 3, 5, 2, 4, 3, 3], min: 0, max: 6, ticks: [0, 3, 6] },
  { id: "satisfaction", title: "Average Satisfaction Score", unit: "%", values: [98, 96, 99, 95, 100, 92, 98, 99, 95, 98], min: 90, max: 100, ticks: [90, 95, 100] },
];

function weekdays(now: Date) {
  const localDay = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Indiana/Indianapolis", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(now);
  const cursor = new Date(`${localDay}T12:00:00Z`);
  const days: Date[] = [];
  while (days.length < 10) {
    if (cursor.getUTCDay() !== 0 && cursor.getUTCDay() !== 6) days.unshift(new Date(cursor));
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return days;
}

const dateLabel = (date: Date) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" }).format(date);

export function SupportStats() {
  return (
    <section id="support-stats" aria-label="Support at a glance" className="scroll-mt-28 bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <Link href="/support-stats" className="group block rounded-sm py-2 text-mission-navy transition hover:bg-mission-mist/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-mission-navy">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-base font-medium">Support at a glance</h2>
              <p className="mt-1 text-xs text-slate-500">How Fast Our Support Is (Live)</p><p className="mt-1 text-[11px] text-slate-500">Sample data</p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-slate-200 lg:min-w-[540px]">
              {metrics.map((metric, index) => (
                <div key={metric.id} className="px-3 first:pl-0 sm:px-6 lg:first:pl-6">
                  <p className="text-3xl font-normal tabular-nums tracking-tight">{metric.values.reduce((sum, value) => sum + value, 0) / metric.values.length}<span className="ml-1 text-sm text-slate-500">{metric.unit}</span></p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{["Email response", "Phone response", "Satisfaction"][index]}</p>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 160 32" className="mt-2 h-7 w-full max-w-40 overflow-hidden" fill="none">
                    <path d="M2 18H42L49 14L56 21L64 4L72 28L80 12L87 18H158" stroke="currentColor" strokeOpacity=".18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path className={styles.pulse} style={{ animationDelay: `${index * -0.8}s` }} d="M2 18H42L49 14L56 21L64 4L72 28L80 12L87 18H158" pathLength="100" stroke="var(--mission-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium">View support metrics <ArrowRightIcon aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" /></span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export function SupportStatsDetail() {
  const [days, setDays] = useState<Date[]>([]);
  useEffect(() => {
    const update = () => setDays(weekdays(new Date()));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="support-stats" aria-labelledby="support-stats-title" className="scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-mission-navy">Support, by the numbers</p>
            <h1 id="support-stats-title" className="mt-3 text-3xl font-medium leading-tight tracking-tight text-mission-navy sm:text-4xl">Real people. Ready to help.</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">Less time waiting. More time moving your mission forward.</p>
          </div>
          <div className="text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-mission-navy"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mission-gold" />Illustrative support metrics</span>
            <p className="mt-2 text-xs">Latest 10 weekdays · Eastern time</p>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {metrics.map((metric) => {
            const average = metric.values.reduce((sum, value) => sum + value, 0) / metric.values.length;
            const points = metric.values.map((value, index) => ({ x: 36 + index * 28, y: 128 - ((value - metric.min) / (metric.max - metric.min)) * 104 }));
            const line = points.map((point) => `${point.x},${point.y}`).join(" ");
            return (
              <article key={metric.id} className="min-w-0 border-t border-mission-navy/20 pt-6">
                <h3 className="text-sm font-medium leading-6 text-mission-navy">{metric.title}</h3>
                <p className="mt-5 text-5xl font-normal tabular-nums tracking-tight text-mission-navy sm:text-[3.5rem]">{average}<span className="ml-1.5 text-xl font-normal tracking-normal text-slate-500">{metric.unit}</span></p>
                <p className="mt-2 text-xs font-normal text-slate-500">10-weekday sample average</p>
                {days.length > 0 ? <>
                  <svg viewBox="0 0 310 164" role="img" aria-labelledby={`${metric.id}-chart-title`} className="mt-7 w-full">
                    <title id={`${metric.id}-chart-title`}>{metric.title}: illustrative weekday trend, {dateLabel(days[0])} through {dateLabel(days[9])}. Daily values are available below.</title>
                    <defs><linearGradient id={`${metric.id}-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d3a63b" stopOpacity=".12"/><stop offset="100%" stopColor="#d3a63b" stopOpacity="0"/></linearGradient></defs>
                    {metric.ticks.map((tick) => {
                      const y = 128 - ((tick - metric.min) / (metric.max - metric.min)) * 104;
                      return <g key={tick}><line x1="36" x2="288" y1={y} y2={y} stroke="#dce3e8" strokeDasharray="3 4"/><text x="26" y={y + 4} textAnchor="end" fontSize="10" fill="#526171">{tick}</text></g>;
                    })}
                    <polygon points={`36,128 ${line} 288,128`} fill={`url(#${metric.id}-fill)`}/>
                    <polyline points={line} fill="none" stroke="#30506c" strokeWidth="1.75" strokeLinejoin="round" strokeLinecap="round"/>
                    {points.map((point, index) => <circle key={index} cx={point.x} cy={point.y} r="2.5" fill="#d3a63b" stroke="white" strokeWidth="1.5"><title>{dateLabel(days[index])}: {metric.values[index]} {metric.unit}</title></circle>)}
                    {[0, 4, 9].map((index) => <text key={index} x={points[index].x} y="154" textAnchor={index === 0 ? "start" : index === 9 ? "end" : "middle"} fontSize="10" fill="#526171">{dateLabel(days[index])}</text>)}
                  </svg>
                  <details className="mt-3 text-xs text-slate-600">
                    <summary className="cursor-pointer rounded py-2 font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-mission-navy">View daily sample values</summary>
                    <table className="mt-2 w-full text-left"><caption className="sr-only">{metric.title} illustrative data</caption><thead><tr><th scope="col" className="py-2">Date</th><th scope="col" className="text-right">{metric.unit === "%" ? "Score" : "Minutes"}</th></tr></thead><tbody>{days.map((day, index) => <tr key={day.toISOString()} className="border-t border-slate-200"><th scope="row" className="py-2 font-normal">{dateLabel(day)}, {day.getUTCFullYear()}</th><td className="text-right">{metric.values[index]}{metric.unit === "%" ? "%" : ""}</td></tr>)}</tbody></table>
                  </details>
                </> : <div className="mt-7 h-48" aria-label="Loading weekday chart" />}
              </article>
            );
          })}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-6 text-slate-500">Sample data shown for illustration; these charts are not a live performance report. Dates roll forward automatically, excluding Saturdays and Sundays.</p>
      </div>
    </section>
  );
}

