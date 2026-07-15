import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import * as Lucide from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home Dashboard", href: "/" },
    { label: "Company Story", href: "/about" },
    { label: "Our Service Grid", href: "/services" },
    { label: "Hardware Products", href: "/products" },
    { label: "Contact Operations", href: "/contact" },
  ];

  const coreServices = [
    { label: "Vehicle Tracking", href: "/services/vehicle-tracking" },
    { label: "Fleet Management", href: "/services/fleet-management" },
    { label: "Reflective Tape AIS", href: "/services/reflective-tape" },
    { label: "AI Dashcam Solutions", href: "/services/dashcam-solutions" },
    { label: "Personalized Tracking", href: "/services/personalized-tracking" },
    { label: "Smart Battery BMS", href: "/services/ev-bms" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-900 text-left">

        <div className="space-y-6">
          <Logo light showText />
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Bhardwaj Innovations is an enterprise pioneer in IoT telematics, manufacturing government-mandated AIS-140 compliance hardware, smart vehicle battery management systems (BMS), and customized logistics tracking software dashboards.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors">
              <Lucide.Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors">
              <Lucide.Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 hover:bg-sky-600 rounded-lg text-slate-400 hover:text-white transition-colors">
              <Lucide.Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left font-light flex items-center gap-1.5"
                >
                  <Lucide.ChevronRight className="h-3 w-3" /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Our Key Services
          </h4>
          <ul className="space-y-3">
            {coreServices.map((srv, idx) => (
              <li key={idx}>
                <Link
                  href={srv.href}
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left font-light flex items-center gap-1.5"
                >
                  <Lucide.ChevronRight className="h-3 w-3" /> {srv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 text-xs text-slate-400 leading-relaxed font-light">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">
            Contact Head Office
          </h4>
          <p className="flex items-start gap-2.5">
            <Lucide.MapPin className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
            <span>
              Bhardwaj Innovations<br />
              125, Industrial Area, Phase 1,<br />
              Chandigarh, India - 160002
            </span>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Phone className="h-4 w-4 text-sky-500 shrink-0" />
            <a href="tel:+919876543210" className="hover:text-sky-400 transition-colors">
              +91 98765 43210
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Mail className="h-4 w-4 text-sky-500 shrink-0" />
            <a href="mailto:info@bhardwajinnovations.com" className="hover:text-sky-400 transition-colors">
              info@bhardwajinnovations.com
            </a>
          </p>
          <p className="flex items-center gap-2.5">
            <Lucide.Clock className="h-4 w-4 text-sky-500 shrink-0" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[10px] uppercase font-semibold tracking-wider">
        <p>&copy; {currentYear} Bhardwaj Innovations. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-sky-500 transition-colors cursor-pointer">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-sky-500 transition-colors cursor-pointer">Terms of Service</Link>
          <Link href="/sla" className="hover:text-sky-500 transition-colors cursor-pointer">SLA Undertakings</Link>
        </div>
      </div>
    </footer>
  );
}
