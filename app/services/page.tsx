"use client";

import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "@/lib/data/services";

const renderIcon = (name: string, className = "h-6 w-6 text-sky-600") => {
  const IconComponent = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return <Lucide.CheckCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function ServicesPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=1200"
            alt="Connected Cyber Grid"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Comprehensive Telematics & IoT Engineering
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Providing AIS-certified vehicular safety systems, heavy-duty industrial telemetry transceivers, dynamic BMS controllers, and bespoke analytics platforms.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="group flex flex-col justify-between bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
              >
                <Link href={`/services/${service.id}`} className="block">
                  <div className="relative h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-sky-600 shadow-md">
                      {renderIcon(service.icon, "h-6 w-6")}
                    </div>
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 font-light">
                      {service.shortDesc}
                    </p>
                  </div>
                </Link>

                <Link href={`/services/${service.id}`} className="p-8 pt-0 block">
                  <div className="pt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-500 gap-1.5">
                    Learn More Detail
                    <Lucide.ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                alt="Programming Source Code Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 text-left max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight">Need a Custom IoT Hardware or Software Solution?</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Our in-house R&amp;D lab specializes in custom PCB layouts, BLE sensor configurations, advanced power optimization algorithms, and corporate-scale dashboard builders. Let&apos;s discuss your targets.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 shrink-0 px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-colors text-white font-bold rounded-xl shadow-md cursor-pointer"
            >
              Consult Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
