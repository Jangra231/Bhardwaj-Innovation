/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Lucide from "lucide-react";
import { SERVICES_DATA } from "../data/services";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (hash: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  // Find the exact service item
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-6">
        <Lucide.AlertCircle className="h-16 w-16 text-rose-500 mx-auto animate-bounce" />
        <h2 className="text-2xl font-bold text-slate-900">Service Category Not Found</h2>
        <p className="text-slate-500">The requested service ID "{serviceId}" does not exist in our systems.</p>
        <button
          onClick={() => onNavigate("#/services")}
          className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold transition-colors cursor-pointer inline-flex items-center gap-2"
        >
          <Lucide.ArrowLeft className="h-4 w-4" /> Back to Services
        </button>
      </div>
    );
  }

  const renderIcon = (name: string, className = "h-5 w-5 text-sky-500") => {
    const IconComponent = (Lucide as any)[name];
    if (!IconComponent) return <Lucide.CheckCircle className={className} />;
    return <IconComponent className={className} />;
  };

  return (
    <div className="relative">
      {/* 1. HERO BANNER */}
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
          <button
            onClick={() => onNavigate("#/services")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors cursor-pointer mb-2"
          >
            <Lucide.ArrowLeft className="h-4 w-4" /> Back to Services
          </button>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl font-light">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. CONTENT MODULES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          
          {/* LEFT 2 COLS: OVERVIEW & DETAILS */}
          <div className="lg:col-span-2 space-y-12 text-left">
            
            {/* Detailed Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">Service Overview</h2>
              <p className="text-slate-600 leading-relaxed font-light text-base">
                {service.longDesc}
              </p>
            </div>

            {/* Bulleted Features */}
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

            {/* IMAGE GALLERY (AS EXPLICITLY REQUESTED) */}
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

            {/* Applications List */}
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

          {/* RIGHT COL: SPECIFICATIONS & CTA */}
          <div className="space-y-8 text-left">
            
            {/* Tech Specifications Box */}
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

            {/* Quick Enquiry Widget */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm text-center space-y-4">
              <h4 className="text-base font-bold text-slate-900">Enquire About This Service</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our solutions design group for a personalized quotation, technical diagram, and telemetry trial setups.
              </p>
              <button
                onClick={() => onNavigate(`#/contact?service=${encodeURIComponent(service.title)}`)}
                className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md hover:shadow-sky-500/10"
              >
                Get Custom Quote
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
