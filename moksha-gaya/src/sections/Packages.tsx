"use client";

import React from "react";
import { motion } from "framer-motion";
import { packages } from "@/data/packages";

export default function Packages() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const comparisonFeatures = [
    {
      name: "Pandit Ji Assistance",
      basic: "Verified",
      economy: "Verified",
      standard: "Verified",
      premium: "Verified"
    },
    {
      name: "Puja Materials",
      basic: "Sourced",
      economy: "Included",
      standard: "Premium",
      premium: "VVIP Quality"
    },
    {
      name: "Brahmin Bhojan",
      basic: "—",
      economy: "2 Brahmins",
      standard: "5 Brahmins",
      premium: "11 Brahmins"
    },
    {
      name: "Sacred Places (Vedis)",
      basic: "3 Places",
      economy: "5 Places",
      standard: "7-9 Places",
      premium: "45+ Places"
    },
    {
      name: "Duration",
      basic: "1 Hour",
      economy: "2.5 Hours",
      standard: "3 Hours",
      premium: "2-3 Days"
    },
    {
      name: "Online Video Option",
      basic: "Available",
      economy: "Available",
      standard: "Available",
      premium: "Available"
    },
    {
      name: "Local Transport",
      basic: "—",
      economy: "—",
      standard: "Provided",
      premium: "Provided"
    },
    {
      name: "Accommodation Support",
      basic: "Available",
      economy: "Available",
      standard: "Available",
      premium: "Stay Included"
    }
  ];

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

        {/* Package Tiers Grid (4 Columns) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "border-[#b17a20] bg-[#faf8f5] shadow-lg lg:scale-105 z-10 before:absolute before:inset-0 before:border-[3px] before:border-[#b17a20]/30 before:rounded-2xl before:pointer-events-none before:m-1"
                  : "border-[#efe9de] bg-white shadow-xs hover:shadow-md"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b17a20] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  Recommended
                </span>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-2">{pkg.name}</h3>
                  <p className="text-[11px] text-[#7c6954] leading-relaxed min-h-[44px]">{pkg.desc}</p>
                  <div className="mt-4">
                    <span className="text-xl font-bold font-serif text-[#b17a20]">{pkg.price}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-xs text-[#5c4a37]">
                      <svg className="w-4 h-4 text-[#b17a20] shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`w-full py-3 px-4 rounded-full text-center font-bold text-[10px] uppercase tracking-widest transition-all duration-300 ${
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

        {/* Detailed Comparison Table */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl font-bold text-[#2c1a04] mb-2">Compare Packages</h3>
            <p className="text-sm text-[#7c6954]">Review details side-by-side to choose the perfect package for your family.</p>
          </div>

          <div className="bg-[#faf8f5] rounded-2xl border border-[#efe9de] p-4 md:p-6 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-[#efe9de]">
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#2c1a04] w-1/3">Feature</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#7c6954] text-center">Basic</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#7c6954] text-center">Economy</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#b17a20] text-center">Standard</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#7c6954] text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efe9de]/50">
                  {comparisonFeatures.map((feat, index) => (
                    <tr key={index} className="hover:bg-white/50 transition-colors">
                      <td className="py-4 px-4 text-sm font-semibold text-[#2c1a04]">{feat.name}</td>
                      
                      {/* Basic */}
                      <td className="py-4 px-4 text-sm text-[#5c4a37] text-center font-medium">
                        {feat.basic === "Available" ? (
                          <span className="text-[#b17a20] text-lg font-bold">✓</span>
                        ) : feat.basic === "—" ? (
                          <span className="text-[#b17a20]/30 font-serif">—</span>
                        ) : (
                          feat.basic
                        )}
                      </td>

                      {/* Economy */}
                      <td className="py-4 px-4 text-sm text-[#5c4a37] text-center font-medium">
                        {feat.economy === "Available" ? (
                          <span className="text-[#b17a20] text-lg font-bold">✓</span>
                        ) : feat.economy === "—" ? (
                          <span className="text-[#b17a20]/30 font-serif">—</span>
                        ) : (
                          feat.economy
                        )}
                      </td>

                      {/* Standard */}
                      <td className="py-4 px-4 text-sm text-[#b17a20] text-center font-bold bg-[#faf8f5]">
                        {feat.standard === "Available" ? (
                          <span className="text-[#b17a20] text-lg font-bold">✓</span>
                        ) : feat.standard === "—" ? (
                          <span className="text-[#b17a20]/30 font-serif">—</span>
                        ) : (
                          feat.standard
                        )}
                      </td>

                      {/* Premium */}
                      <td className="py-4 px-4 text-sm text-[#5c4a37] text-center font-semibold">
                        {feat.premium === "Available" ? (
                          <span className="text-[#b17a20] text-lg font-bold">✓</span>
                        ) : feat.premium === "—" ? (
                          <span className="text-[#b17a20]/30 font-serif">—</span>
                        ) : (
                          feat.premium
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
