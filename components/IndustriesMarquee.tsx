"use client";

import * as Lucide from "lucide-react";

const industries = [
  { name: "Government & Public Sector", icon: Lucide.Landmark },
  { name: "Transport & Logistics", icon: Lucide.Truck },
  { name: "Energy & EV Mobility", icon: Lucide.BatteryCharging },
] as const;

export default function IndustriesMarquee() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="relative overflow-hidden border-y border-slate-100 bg-white py-12"
    >
      <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
      <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p
          id="industries-heading"
          className="text-center text-sm font-medium text-slate-500"
        >
          Industries <span className="font-bold text-sky-600">We Serve</span>
        </p>
      </div>

      <div
        className="flex animate-scroll motion-reduce:animate-none"
        aria-label="Industries we serve carousel"
      >
        {[...industries, ...industries, ...industries].map(
          ({ name, icon: Icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="group mx-8 flex shrink-0 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-6 py-3 transition-all duration-300 hover:border-sky-200 hover:shadow-md"
            >
              <div className="rounded-lg bg-sky-50 p-2 text-sky-600 transition-colors group-hover:bg-sky-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="whitespace-nowrap text-xs font-semibold text-slate-600">
                {name}
              </span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
