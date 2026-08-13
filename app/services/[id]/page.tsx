import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { SERVICES_DATA } from "@/lib/data/services";
import { getUniqueServiceMedia } from "@/lib/unique-service-media";
import { notFound } from "next/navigation";

const renderIcon = (name: string, className = "h-5 w-5 text-sky-500") => {
  const IconComponent = (
    Lucide as unknown as Record<
      string,
      React.ComponentType<{ className?: string }>
    >
  )[name];
  if (!IconComponent) return <Lucide.CheckCircle className={className} />;
  return <IconComponent className={className} />;
};

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ id: s.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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

  // Find related services
  const relatedServices = SERVICES_DATA.filter(
    (s) => s.id !== service.id,
  ).slice(0, 3);

  const serviceVisuals = getUniqueServiceMedia(service.id, [
    service.image,
    ...service.gallery,
  ]);

  return (
    <div className="relative">
      {/* HERO SECTION with Video/GIF Background */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        {/* Page-specific visual background */}
        <div className="absolute inset-0 z-0">
          <img
            src={serviceVisuals[0]}
            alt={`${service.title} in use`}
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/85 to-slate-950/60"></div>
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div
            className="absolute top-20 right-32 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-10 left-20 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-left space-y-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer mb-2 group"
          >
            <Lucide.ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl font-light">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12 text-left">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Service Overview
              </h2>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                {service.longDesc}
              </p>
            </div>

            {/* GIF/Video Showcase */}
            {(service.gifUrl || service.videoUrl) && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Service Gallery & Operational Preview
                </h3>

                {/* Main Video Preview */}
                {service.videoUrl && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                    <div className="aspect-video bg-slate-950 relative">
                      {service.videoUrl.toLowerCase().endsWith(".gif") ? (
                        <img
                          src={service.videoUrl}
                          alt={`${service.title} preview`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={service.videoUrl}
                          poster={serviceVisuals[1]}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent"></div>

                      <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-[10px] text-white font-medium uppercase tracking-wider">
                          Live Preview
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* GIF Preview */}
                {service.gifUrl && (
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                    <div className="aspect-video bg-slate-100 relative">
                    <img
                      src={serviceVisuals[1]}
                      alt={`${service.title} operational visual`}
                      className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Lucide.CheckCircle2 className="h-5 w-5 text-emerald-500" /> Key
                Features & Capabilities
              </h3>
              <div className="grid sm:grid-cols-1 gap-3 pt-3">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex gap-3 text-sm text-slate-600 font-light"
                  >
                    <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Visuals */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Solution Visuals & Architecture
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceVisuals.slice(3, 6).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="group relative h-56 rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${service.title} illustration ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Typical Applications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.applications.map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-sky-100 transition-all"
                  >
                    <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                      <Lucide.TrendingUp className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8 text-left">
            {/* Specifications */}
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

            {/* CTA Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm text-center space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                Enquire About This Service
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our solutions design group for a
                personalized quotation, technical diagram, and telemetry trial
                setups.
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-slate-900">
                Related Services
              </h3>
              <Link
                href="/services"
                className="text-sm font-semibold text-sky-600 hover:text-sky-500 transition-colors flex items-center gap-1"
              >
                View All <Lucide.ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((rs) => {
                const relatedVisual = getUniqueServiceMedia(rs.id, [
                  rs.image,
                  ...rs.gallery,
                ])[6];

                return (
                  <Link
                    key={rs.id}
                    href={`/services/${rs.id}`}
                    className="group bg-white rounded-xl border border-slate-100 hover:border-sky-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedVisual}
                        alt={rs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {rs.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rs.shortDesc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
