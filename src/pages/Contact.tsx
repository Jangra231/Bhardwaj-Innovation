/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import * as Lucide from "lucide-react";

interface ContactProps {
  initialService?: string;
  initialProduct?: string;
}

export default function Contact({ initialService = "", initialProduct = "" }: ContactProps) {
  // Local form state
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    organization: "",
    designation: "",
    serviceNeeded: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    data?: any;
    dbMode?: string;
    details?: { field: string; message: string }[];
  } | null>(null);

  // Parse query parameters to pre-fill the form if navigating from a dynamic detail CTA
  useEffect(() => {
    // Get query params from location hash
    const hash = window.location.hash;
    const queryPart = hash.split("?")[1];
    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      const serviceParam = params.get("service");
      const productParam = params.get("product");
      const sectorParam = params.get("sector");

      if (serviceParam) {
        setFormData((prev) => ({
          ...prev,
          serviceNeeded: serviceParam,
          message: `I would like to receive information, specifications, and a quote for: ${serviceParam}.`,
        }));
      } else if (productParam) {
        setFormData((prev) => ({
          ...prev,
          serviceNeeded: `General Hardware Inquiry`,
          message: `I would like to receive pricing and availability details for the product: ${productParam}.`,
        }));
      } else if (sectorParam) {
        let matchedService = "Custom Software Solutions";
        let subDetails = "";
        
        switch (sectorParam.toLowerCase()) {
          case "transportation":
            matchedService = "Fleet Management";
            subDetails = "large commercial vehicle fleets, route optimization, and diesel consumption analytics.";
            break;
          case "government":
            matchedService = "Government Fleet Management";
            subDetails = "AIS-140 compliance, CDAC servers routing, and emergency panic button installations.";
            break;
          case "healthcare":
            matchedService = "Custom Software Solutions";
            subDetails = "temperature-controlled cold chain vaccine transport, active ambient temperature logs, and rapid ambulance response dispatch.";
            break;
          case "mining":
            matchedService = "Custom Software Solutions";
            subDetails = "heavy machinery active telemetry, fuel theft protection, and high-precision off-road GPS routing.";
            break;
          case "education":
            matchedService = "Vehicle Tracking";
            subDetails = "school bus real-time route sharing with guardians, over-speed alert system, and driver camera feed monitoring.";
            break;
          case "corporate":
            matchedService = "Fleet Management";
            subDetails = "executive transport tracking, shift dispatch reports, and carbon emissions audits.";
            break;
          default:
            matchedService = "Custom Software Solutions";
            subDetails = "specific enterprise requirements.";
        }

        setFormData((prev) => ({
          ...prev,
          serviceNeeded: matchedService,
          message: `I would like to explore custom IoT and fleet tracking solutions tailored for our operations in the ${sectorParam} industry. We are specifically looking to address: ${subDetails}`,
        }));
      }
    } else {
      // Default fallback
      if (initialService) {
        setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
      } else if (initialProduct) {
        setFormData((prev) => ({
          ...prev,
          serviceNeeded: "General Hardware Inquiry",
          message: `Inquiry regarding: ${initialProduct}`,
        }));
      }
    }
  }, [initialService, initialProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: result.message || "Enquiry submitted successfully!",
          data: result.data,
          dbMode: result.dbMode,
        });
        // Reset form
        setFormData({
          name: "",
          contactNo: "",
          email: "",
          organization: "",
          designation: "",
          serviceNeeded: "",
          message: "",
        });
      } else {
        setSubmitResult({
          success: false,
          message: result.error || "Failed to submit enquiry. Please check your fields.",
          details: result.details,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitResult({
        success: false,
        message: "Network error. Unable to contact our telemetry servers.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesList = [
    "Vehicle Tracking",
    "Fleet Management",
    "Reflective Tape",
    "Dashcam Solutions",
    "Personalized Tracking",
    "Custom Software Solutions",
    "Government Fleet Management",
    "BMS for EV Batteries",
    "General Hardware Inquiry",
    "Other Consultancy",
  ];

  return (
    <div className="relative">
      {/* HERO BANNER */}
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

      {/* CONTACT BODY SPLIT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: CONTACT DETAILS & VECTOR MAP */}
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

            {/* HIGH-FIDELITY VECTOR MAP GRAPHIC */}
            <div className="relative border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Map Location</span>
                <span className="text-[10px] font-mono text-sky-500 bg-sky-50 px-2 py-0.5 rounded">30.7046° N, 76.8014° E</span>
              </div>
              
              {/* Premium abstract graphic of our location map */}
              <div className="relative h-64 w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
                {/* Simulated map graphic */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Map lines */}
                    <path d="M 0 50 Q 150 150 400 120" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                    <path d="M 100 0 Q 180 200 250 300" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                    <path d="M 0 220 L 500 180" stroke="#FFFFFF" strokeWidth="1" fill="none" />
                    <path d="M 300 0 Q 280 180 400 300" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
                  </svg>
                </div>

                {/* Concentric pulsing radar waves of the headquarters address */}
                <div className="absolute h-16 w-16 bg-sky-500/20 rounded-full animate-ping"></div>
                <div className="absolute h-8 w-8 bg-sky-500/30 rounded-full animate-pulse"></div>
                <div className="absolute h-3 w-3 bg-sky-500 rounded-full shadow-lg shadow-sky-500"></div>

                {/* Flag tag overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-15 bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-2 shadow-xl flex items-center gap-2 max-w-50">
                  <Lucide.Building className="h-4 w-4 text-sky-600" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase leading-none text-slate-800">Chandigarh HQ</p>
                    <p className="text-[8px] text-slate-400 mt-0.5 leading-none">Industrial Area Phase 1</p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center italic">
                Our main factory, R&D lab, and dispatch units are consolidated in this center.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT ENQUIRY FORM */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm text-left h-fit">
            <div className="space-y-2 mb-8">
              <h3 className="text-xl font-bold text-slate-900">Send Us A Message</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Fill out our secure enquiry form. All data is written securely to MongoDB Atlas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Lucide.User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Contact Number <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Lucide.Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="form-contactNo"
                      name="contactNo"
                      type="tel"
                      required
                      placeholder="Enter mobile number"
                      value={formData.contactNo}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Lucide.Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Name of Organization</label>
                  <div className="relative">
                    <Lucide.Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="form-organization"
                      name="organization"
                      type="text"
                      placeholder="Enter company name"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Your Designation</label>
                  <div className="relative">
                    <Lucide.Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      id="form-designation"
                      name="designation"
                      type="text"
                      placeholder="Enter job designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Service Required <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Lucide.HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <select
                    id="form-serviceNeeded"
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="">-- Select Service Needed --</option>
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Detailed Message <span className="text-red-500">*</span></label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Please elaborate on your asset size, vehicle types, sensors requirement, or custom integration desires..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-white border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-xl text-sm transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                id="btn-submit-enquiry"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-400 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-sky-500/10 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Lucide.Loader2 className="h-5 w-5 animate-spin" />
                    Submitting Enquiry to Cloud...
                  </>
                ) : (
                  <>
                    <Lucide.Send className="h-5 w-5" />
                    Send Secure Enquiry
                  </>
                )}
              </button>

              {/* Success or Error alerts */}
              {submitResult && (
                <div className={`p-4 rounded-xl text-xs space-y-2 border text-left ${submitResult.success ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-800"}`}>
                  <div className="flex gap-2 items-center font-bold">
                    {submitResult.success ? (
                      <Lucide.CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Lucide.XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                    )}
                    <span>{submitResult.message}</span>
                  </div>

                 

                  {!submitResult.success && submitResult.details && (
                    <div className="pt-1.5 space-y-1 list-disc pl-4 text-[11px] text-rose-600 font-medium">
                      {submitResult.details.map((det, i) => (
                        <p key={i}>
                          • <span className="capitalize">{det.field}</span>: {det.message}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
