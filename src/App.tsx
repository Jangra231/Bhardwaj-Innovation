/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SLA from "./pages/SLA";

export default function App() {
  // Listen to the window hash location reactive to back/forward and navigation buttons
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
      // Smooth scroll to top on hash change
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (newHash: string) => {
    window.location.hash = newHash;
  };

  // PARSE HASH ROUTE
  // Route structure examples:
  // - #/
  // - #/about
  // - #/services
  // - #/services/vehicle-tracking
  // - #/products
  // - #/products/2g-wired-gps
  // - #/contact
  // - #/contact?service=Vehicle%20Tracking
  
  const cleanHash = route.split("?")[0] || "#/";
  const parts = cleanHash.replace(/^#\//, "").split("/");
  
  const mainPage = parts[0] || "home"; // 'home', 'about', 'services', 'products', 'contact'
  const subPageId = parts[1] || null; // e.g., 'vehicle-tracking', '2g-wired-gps'

  // Render the requested view page
  const renderPage = () => {
    switch (mainPage) {
      case "home":
        return <Home onNavigate={navigate} />;
      case "about":
        return <About />;
      case "services":
        if (subPageId) {
          return <ServiceDetail serviceId={subPageId} onNavigate={navigate} />;
        }
        return <Services onNavigate={navigate} />;
      case "products":
        if (subPageId) {
          return <ProductDetail productId={subPageId} onNavigate={navigate} />;
        }
        return <Products onNavigate={navigate} />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <Privacy />;
      case "terms":
        return <Terms />;
      case "sla":
        return <SLA />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-sky-500 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar currentRoute={route} onNavigate={navigate} />

      {/* 2. Main content view with transition container */}
      <main className="flex-grow transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
