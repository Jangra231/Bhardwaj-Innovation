/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Lucide from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface ProductsProps {
  onNavigate: (hash: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  return (
    <div className="relative">
      {/* HERO BANNER */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
            alt="Corporate Hardware Laboratory"
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Our Products</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            High-Precision Tracking Hardware
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Engineered with robust internal antennas, aggressive magnetic mounts, highly durable casings, and smart backup batteries for extreme environmental performance.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                onClick={() => onNavigate(`#/products/${product.id}`)}
                className="group flex flex-col justify-between bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer text-left"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-light">
                      {product.shortDesc}
                    </p>

                    {/* Key features bullets preview */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Key Features
                      </span>
                      {product.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex gap-2 items-start text-xs text-slate-600 font-light">
                          <span className="text-sky-500 font-bold shrink-0 mt-0.5">•</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button className="w-full py-3 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-800 border border-slate-150 hover:border-sky-200 transition-colors text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-sm">
                    View Technical Details
                    <Lucide.ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SLA INQUIRY BANNER */}
          <div className="bg-slate-950 text-white rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="absolute inset-0 z-0 opacity-10">
              <img
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1000"
                alt="Diagnostics Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold tracking-tight">Looking for bulk fleet pricing?</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                We support high-volume OEM customizations, customized casing decals, custom SIM integrations, and deep discount profiles for fleets exceeding 50+ nodes.
              </p>
            </div>
            <button
              onClick={() => onNavigate("#/contact")}
              className="relative z-10 shrink-0 px-6 py-3 bg-sky-600 hover:bg-sky-500 transition-colors text-white font-bold rounded-xl shadow-md cursor-pointer"
            >
              Get Bulk Quotation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
