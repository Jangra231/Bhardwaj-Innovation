import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { SERVICES_DATA } from "@/lib/data/services";
import { notFound } from "next/navigation";

const renderIcon = (name: string, className = "h-5 w-5 text-sky-500") => {
  const IconComponent = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return <Lucide.CheckCircle className={className} />;
  return <IconComponent className={className} />;
};

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then((p) => {
    const service = SERVICES_DATA.find((s) => s.id === p.id);
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} | Bhardwaj Innovations`,
      description: service.shortDesc,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) notFound();

  return (
    <div className="relative">
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left space-y-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer mb-2"
          >
            <Lucide.ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl font-light">
            {service.shortDesc}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">Service Overview</h2>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                {service.longDesc}
              </p>
            </div>

            <div className="space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Lucide.CheckCircle2 className="h-5 w-5 text-emerald-500" /> Key Features & Capabilities
              </h3>
              <div className="grid sm:grid-cols-1 gap-3 pt-3">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex gap-3 text-sm text-slate-600 font-light">
                    <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Solution Visuals & Architecture
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="group relative h-56 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${service.title} illustration ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold">
                        View Image
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Typical Applications</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-100 transition-all">
                    <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                      <Lucide.TrendingUp className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 text-left">
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-lg space-y-6">
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
                <Lucide.Cpu className="h-5 w-5 text-sky-400" /> Specifications
              </h3>
              <div className="space-y-4 text-xs font-light">
                {Object.entries(service.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                      {key}
                    </span>
                    <span className="text-slate-300 leading-relaxed block text-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm text-center space-y-4">
              <h4 className="text-base font-bold text-slate-900">Enquire About This Service</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our solutions design group for a personalized quotation, technical diagram, and telemetry trial setups.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="block w-full py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md hover:shadow-sky-500/10"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
