"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Lucide from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizedRoute = pathname.replace(/^\//, "").split("/")[0] || "home";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-lg py-0"
        : "bg-transparent border-transparent py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" onClick={handleLinkClick} className="cursor-pointer">
          <Logo light={true} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const linkRoute = link.href === "/" ? "home" : link.href.replace(/^\//, "");
            const isLinkActive = normalizedRoute === linkRoute;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
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
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className={`px-5 py-2.5 transition-all text-xs font-bold rounded-xl cursor-pointer shadow-md flex items-center gap-1.5 ${
              isScrolled
                ? "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-500/10"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-none"
            }`}
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </Link>
        </div>

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

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-lg absolute top-full left-0 right-0 py-6 px-6 shadow-xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => {
            const linkRoute = link.href === "/" ? "home" : link.href.replace(/^\//, "");
            const isLinkActive = normalizedRoute === linkRoute;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold transition-all ${
                  isLinkActive
                    ? "bg-slate-900 text-sky-400"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="w-full mt-2 py-3 bg-sky-600 text-white rounded-xl font-bold text-center text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <Lucide.MessageSquare className="h-4 w-4" /> Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
