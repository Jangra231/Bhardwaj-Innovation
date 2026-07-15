import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-11", showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl bg-white p-0.5 shadow-sm border border-slate-200/50 transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center">
        <span className="text-2xl font-extrabold text-sky-600">B</span>
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-950/10 pointer-events-none" />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
            Bhardwaj
          </span>
          <span className={`text-xs font-semibold tracking-[0.25em] uppercase ${light ? "text-sky-300" : "text-sky-600"}`}>
            Innovations
          </span>
        </div>
      )}
    </div>
  );
}
