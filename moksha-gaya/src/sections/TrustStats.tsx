"use client";

import React, { useEffect, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

function StatCounter({ value, suffix, label, sublabel, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  // Format count to locales if large
  const formattedCount = count.toLocaleString("en-IN");

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center text-center p-6 bg-white border border-[#efe9de] rounded-2xl shadow-xs relative h-full group hover:border-[#b17a20]/30 transition-all duration-300"
    >
      {/* Decorative gold background accent */}
      <div className="absolute inset-0 bg-[#faf8f5] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10" />
      
      {/* Icon badge */}
      <div className="w-12 h-12 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
        {icon}
      </div>
      
      {/* Counter Value */}
      <div className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04] mb-1.5 flex items-baseline justify-center">
        <span>{formattedCount}</span>
        <span className="text-[#b17a20] ml-0.5">{suffix}</span>
      </div>
      
      {/* Label */}
      <div className="text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-1">
        {label}
      </div>
      
      {/* Sublabel */}
      <div className="text-[11px] text-[#7c6954] font-medium leading-normal">
        {sublabel}
      </div>
    </div>
  );
}

export default function TrustStats() {
  const stats: StatItemProps[] = [
    {
      value: 10000,
      suffix: "+",
      label: "Families Served",
      sublabel: "Fulfilling ancestral duties with peace of mind",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      value: 25,
      suffix: "+",
      label: "Years Experience",
      sublabel: "Deep spiritual roots and lineage expertise in Gaya",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      value: 5000,
      suffix: "+",
      label: "Rituals Completed",
      sublabel: "Pind Daan, Narayan Bali, and Shraddh Karma executed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: 24,
      suffix: "x7",
      label: "Coordinator Support",
      sublabel: "Constant guidance for logistics and ritual process",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      value: 100,
      suffix: "%",
      label: "Verified Pandits",
      sublabel: "Experienced local Gayawal Vedic Acharyas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 bg-white relative border-y border-[#efe9de]/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={index === 4 ? "col-span-2 md:col-span-1" : ""}>
              <StatCounter {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
