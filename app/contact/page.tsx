import React, { Suspense } from "react";
import * as Lucide from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Bhardwaj Innovations",
  description:
    "Connect with Bhardwaj Innovations for vehicle fleet tracking installations, custom IoT product designs, or compliance certification audits.",
};

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200"
            alt="Telemetry Dashboard Map"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-sky-400">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Bhardwaj Innovations
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            We are here to support your vehicle fleet tracking installations, custom IoT product designs, or compliance certification audits.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div className="space-y-12 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-sky-600">Company Information</span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Corporate Office</h2>
              <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                Connect directly with our corporate operations group or visit our research center in Chandigarh.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Office Address</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Bhardwaj Innovations<br />
                    125, Industrial Area, Phase 1,<br />
                    Chandigarh, India - 160002
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Phone</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    <a href="tel:+919876543210" className="hover:text-sky-600 transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email Support</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    <a href="mailto:info@bhardwajinnovations.com" className="hover:text-sky-600 transition-colors">
                      info@bhardwajinnovations.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl shrink-0">
                  <Lucide.Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Working Hours</h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Map Location</span>
                <span className="text-[10px] font-mono text-sky-500 bg-sky-50 px-2 py-0.5 rounded">30.7046° N, 76.8014° E</span>
              </div>

              <div className="relative h-64 w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <path d="M 0 50 Q 150 150 400 120" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                    <path d="M 100 0 Q 180 200 250 300" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                    <path d="M 0 220 L 500 180" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                    <path d="M 300 0 Q 280 180 400 300" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
                  </svg>
                </div>

                <div className="absolute h-16 w-16 bg-sky-500/20 rounded-full animate-ping"></div>
                <div className="absolute h-8 w-8 bg-sky-500/30 rounded-full animate-pulse"></div>
                <div className="absolute h-3 w-3 bg-sky-500 rounded-full shadow-lg shadow-sky-500"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-15 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-2 shadow-xl flex items-center gap-2 max-w-50">
                  <Lucide.Building className="h-4 w-4 text-sky-600" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase leading-none text-slate-800">Chandigarh HQ</p>
                    <p className="text-[8px] text-slate-400 mt-0.5 leading-none">Industrial Area Phase 1</p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center italic">
                Our main factory, R&amp;D lab, and dispatch units are consolidated in this center.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm text-left h-fit">
            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-bold text-slate-900">Send Us A Message</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Fill out our secure enquiry form. All data is written securely to MongoDB Atlas and a notification is emailed to our team.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12 text-slate-400 text-sm">
                  <Lucide.Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Loading form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
