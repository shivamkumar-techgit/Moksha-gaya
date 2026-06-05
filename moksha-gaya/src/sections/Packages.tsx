"use client";

import React from "react";
import { motion } from "framer-motion";
import { packages } from "@/data/packages";

export default function Packages() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  return (
    <section id="packages" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Service Bundles</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Our Packages &amp; Pricing
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            We offer transparent, tiered options to suit different requirements, ensuring you receive the appropriate level of comfort and support.
          </p>
        </div>

        {/* Package Tiers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-2xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "border-[#b17a20] bg-[#faf8f5] shadow-lg scale-105 z-10 before:absolute before:inset-0 before:border-[3px] before:border-[#b17a20]/30 before:rounded-2xl before:pointer-events-none before:m-1"
                  : "border-[#efe9de] bg-white shadow-xs hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b17a20] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Most Recommended
                </span>
              )}

              <div>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold text-[#2c1a04] mb-2">{pkg.name}</h3>
                  <p className="text-xs text-[#7c6954] leading-relaxed min-h-[40px]">{pkg.desc}</p>
                  <div className="mt-4">
                    <span className="text-2xl font-bold font-serif text-[#b17a20]">{pkg.price}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-[#5c4a37]">
                      <svg className="w-5 h-5 text-[#b17a20] shrink-0 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="/book-now"
                className={`w-full py-3.5 px-6 rounded-full text-center font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#b17a20] hover:bg-[#2c1a04] text-white shadow-md hover:shadow-lg border border-transparent"
                    : "bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent shadow-xs"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
