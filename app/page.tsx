"use client";

import React from "react";
import Link from "next/link";
import * as Lucide from "lucide-react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "@/lib/data/services";
import { PRODUCTS_DATA } from "@/lib/data/products";

const renderIcon = (name: string, className = "h-6 w-6 text-sky-500") => {
  const IconComponent = (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return <Lucide.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function HomePage() {
  const previewServices = SERVICES_DATA.slice(0, 4);
  const featuredProducts = PRODUCTS_DATA.slice(0, 4);

  const stats = [
    { value: "500+", label: "Projects Completed", icon: "Award" },
    { value: "100+", label: "Happy Clients", icon: "Users" },
    { value: "10+", label: "Years Experience", icon: "Calendar" },
    { value: "24/7", label: "Customer Support", icon: "Clock" },
  ];

  const workflows = [
    { step: "01", title: "Requirement Analysis", desc: "We study your operational workflows, vehicles, and assets to propose optimized tracking profiles." },
    { step: "02", title: "Solution Design", desc: "Custom configuration of hardware, sensors (fuel, dashcam, panic, CAN), and dashboard triggers." },
    { step: "03", title: "Implementation & Testing", desc: "Hardware installation on-site coupled with thorough rigorous signal and telemetry testing cycles." },
    { step: "04", title: "Deployment", desc: "Going live on our cloud dashboard, setting up accounts, alerts, geofences, and mobile software applications." },
    { step: "05", title: "Support & Maintenance", desc: "Continuous OTA firmware optimization, 24/7 telemetry monitoring, and field replacements." },
  ];

  return (
    <div className="relative">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=1600"
            alt="Smart GPS Fleet Technology"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse"
            style={{ animationDuration: "12s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold tracking-wide"
            >
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping"></span>
              Enterprise IoT & Telematics Leaders
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
            >
              Smart Tracking Solutions for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                Connected
              </span>{" "}
              Tomorrow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl"
            >
              Advanced GPS Tracking, Fleet Management, and secure IoT Solutions tailored to monitor, optimize, and secure your high-value assets and fleet vehicles seamlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/services"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-white font-medium rounded-xl shadow-lg shadow-sky-500/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group"
              >
                Explore Services
                <Lucide.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 transition-all duration-300 text-slate-200 border border-slate-700 font-medium rounded-xl hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Request Demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 opacity-20 blur-xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md ml-auto text-slate-300 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-sky-400 font-bold tracking-widest text-sm uppercase">Active Dashboard</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Lucide.Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Active Cargo Vehicles</h4>
                    <p className="text-xs text-slate-400">142 units live tracking on route</p>
                  </div>
                  <span className="ml-auto text-emerald-400 font-mono text-xs">98.4%</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Lucide.Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">EV Smart BMS Telemetry</h4>
                    <p className="text-xs text-slate-400">Average Cell Health Index</p>
                  </div>
                  <span className="ml-auto text-emerald-400 font-mono text-xs">99.1%</span>
                </div>
                <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Lucide.Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">AIS-140 Compliance</h4>
                    <p className="text-xs text-slate-400">Emergency panic node check</p>
                  </div>
                  <span className="ml-auto text-emerald-400 font-mono text-xs">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center text-center p-4 space-y-2 border-r last:border-0 border-slate-100 cursor-default"
            >
              <div className="p-3 rounded-full bg-sky-50 text-sky-600 mb-2 transition-colors duration-300">
                {renderIcon(stat.icon, "h-6 w-6")}
              </div>
              <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise-Grade Solutions for Every Asset
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We engineer industry-standard telematic products, and custom software systems designed to scale from small business operations to government departments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {previewServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl border border-slate-100 hover:border-sky-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
              >
                <Link href={`/services/${service.id}`} className="space-y-4">
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90 backdrop-blur-md shadow-md text-sky-600">
                      {renderIcon(service.icon, "h-5 w-5")}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </Link>
                <Link href={`/services/${service.id}`} className="pt-6 mt-auto flex items-center text-xs font-semibold text-sky-600 group-hover:text-sky-500 gap-1.5 border-t border-slate-100">
                  Learn More
                  <Lucide.ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            href="/services"
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-medium rounded-xl shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            View All Services
            <Lucide.ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Enterprise Standard</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Corporate Leaders Choose Bhardwaj Innovations?
              </h2>
            </div>
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              For over a decade, we have designed customized software interfaces, AIS-compliant fleet sensors, and powerful smart tracking units that deliver unmatched reliability in severe industrial conditions.
            </p>

            <div className="space-y-4">
              {[
                { icon: "Award", title: "10+ Years of Industry Experience", desc: "Deep mastery in telemetry algorithms, custom PCB integration, and regulatory transport mandates." },
                { icon: "Settings", title: "Cutting-Edge Hardware & Firmware", desc: "High-speed 4G antennas, intelligent sleep modes, and firmware updates configured Over-The-Air (OTA)." },
                { icon: "Cpu", title: "Customized Software & Dashboards", desc: "Fully proprietary platforms with customized map grids, reports, and instant client integrations." },
                { icon: "Users", title: "Dedicated Technical Support", desc: "Direct support with seasoned telecom engineers and rapid ground replacement technicians." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="p-3 bg-sky-50 text-sky-600 h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    {renderIcon(item.icon, "h-6 w-6")}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1.5 rounded-2xl bg-sky-500/10 blur-lg"></div>
            <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Bhardwaj innovations office teamwork"
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4"
              >
                <div className="h-12 w-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold font-sans">99%</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Operational SLA Guarantee</p>
                  <p className="text-xs text-slate-500">Unmatched server uptime for heavy commercial fleets.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Featured Hardware</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Premium Hardware Built for Harsh Environments
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Explore our top-selling precision hardware terminals. Robust, durable, water-resistant, and certified for reliable enterprise operations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-sky-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left cursor-pointer flex flex-col justify-between"
              >
                <Link href={`/products/${product.id}`}>
                  <div>
                    <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-200">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {product.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {Object.entries(product.specifications).slice(0, 2).map(([key, value], i) => (
                          <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-6 pt-0 mt-auto">
                  <Link href={`/products/${product.id}`} className="w-full py-2.5 bg-slate-50 hover:bg-sky-50 hover:text-sky-600 text-slate-700 border border-slate-100 hover:border-sky-200 transition-colors text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer">
                    View Details
                    <Lucide.ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            href="/products"
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 transition-colors text-white font-medium rounded-xl shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            Explore All Hardware
            <Lucide.ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-sky-600">The Workflow</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simple Five-Step Deployment System
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We guide you from the initial requirement analysis and custom mapping solutions to successful deployment and 24/7 technical operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 text-left relative">
            {workflows.map((flow, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative bg-slate-50 rounded-2xl border border-slate-100 p-6 space-y-4 hover:shadow-lg hover:border-sky-100 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl font-black text-sky-200 group-hover:text-sky-500 transition-colors font-mono block">
                  {flow.step}
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  {flow.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {flow.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200"
            alt="Secure Telematics Dashboard"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to Optimize Your Fleet & Assets?
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Get in touch with our solutions design group today for a customized proposal, physical hardware demo, and software pilot integration.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 transition-all text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:scale-[1.03] active:scale-[0.98] cursor-pointer flex items-center gap-2 group animate-pulse"
                style={{ animationDuration: "3s" }}
              >
                Contact Our Team
                <Lucide.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
