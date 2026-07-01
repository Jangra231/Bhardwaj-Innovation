/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import * as Lucide from "lucide-react";

interface NavbarProps {
  currentRoute: string;
  onNavigate: (hash: string) => void;
}

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    
    // Check initially in case page loaded scrolled down
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Normalize current route name (e.g., #/services/vehicle-tracking -> services)
  const normalizedRoute = currentRoute.split("?")[0].replace(/^#\//, "").split("/")[0] || "home";

  const navLinks = [
    { label: "Home", hash: "#/" },
    { label: "About", hash: "#/about" },
    { label: "Services", hash: "#/services" },
    { label: "Products", hash: "#/products" },
    { label: "Contact", hash: "#/contact" },
  ];

  const handleLinkClick = (hash: string) => {
    onNavigate(hash);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-lg py-0" 
        : "bg-transparent border-transparent py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO LINK */}
        <div onClick={() => handleLinkClick("#/")} className="cursor-pointer">
          <Logo light={true} />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isLinkActive = link.hash === "#/" 
              ? normalizedRoute === "home"
              : normalizedRoute === link.hash.replace(/^#\//, "");

            return (
              <button
                key={link.hash}
                onClick={() => handleLinkClick(link.hash)}
                className={`text-sm font-semibold tracking-wide transition-all relative py-2 cursor-pointer ${
                  isLinkActive 
                    ? "text-white font-bold" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isLinkActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-sky-500"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-get-quote"
            onClick={() => handleLinkClick("#/contact")}
            className={`px-5 py-2.5 transition-all text-xs font-bold rounded-xl cursor-pointer shadow-md flex items-center gap-1.5 ${
              isScrolled
                ? "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-500/10"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-none"
            }`}
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none text-white hover:bg-white/10"
        >
          {mobileMenuOpen ? (
            <Lucide.X className="h-6 w-6" />
          ) : (
            <Lucide.Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE NAV PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-lg absolute top-full left-0 right-0 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => {
            const isLinkActive = link.hash === "#/" 
              ? normalizedRoute === "home"
              : normalizedRoute === link.hash.replace(/^#\//, "");

            return (
              <button
                key={link.hash}
                onClick={() => handleLinkClick(link.hash)}
                className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                  isLinkActive 
                    ? "bg-slate-900 text-sky-400" 
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleLinkClick("#/contact")}
            className="w-full mt-2 py-3 bg-sky-600 text-white rounded-xl font-bold text-center text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
