"use client";

import React from "react";
import { motion } from "framer-motion";
import { sacredPlaces } from "@/data/sacredPlaces";
import Link from "next/link";

export default function SacredPlaces() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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

  return (
    <section id="sacred-places" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Sacred Geography</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Sacred Places of Gaya
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Every spot in Gaya holds historical, religious, and spiritual significance. The efficacy of your rituals is amplified manifold when performed at these holy locations.
          </p>
        </div>

        {/* Places Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sacredPlaces.map((place, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="rounded-xl border border-[#efe9de] bg-[#faf8f5]/40 hover:bg-[#faf8f5] hover:border-[#b17a20]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-108"
                  />
                  {/* Floating Glass Icon Badge */}
                  <div className="absolute top-4 left-4 text-xl w-10 h-10 bg-white/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-xs text-[#b17a20]">
                    {place.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 group-hover:text-[#b17a20] transition-colors duration-300">
                    {place.name}
                  </h3>
                  <p className="text-sm text-[#7c6954] leading-relaxed mb-6">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 mt-auto">
                <Link 
                  href={`/places/${place.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#b17a20] hover:text-[#2c1a04] transition-colors group/btn"
                >
                  Explore Significance
                  <svg className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
