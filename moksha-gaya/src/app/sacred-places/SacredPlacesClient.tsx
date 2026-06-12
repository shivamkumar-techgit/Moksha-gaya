"use client";

import React from "react";
import { motion } from "framer-motion";
import { sacredPlaces } from "@/data/sacredPlaces";

export default function SacredPlacesPage() {
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

  return (
    <div className="bg-[#faf8f5] py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Sacred Geography</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2c1a04] mb-6">
            Spiritual Geography of Gaya
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Every spot in Gaya holds ancient spiritual significance. The efficacy of ancestral rites is amplified when performed at these revered locations.
          </p>
        </div>

        {/* Places Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sacredPlaces.map((place, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="rounded-xl border border-[#efe9de] bg-white hover:border-[#b17a20]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo Header */}
                <a href={`/sacred-places/${place.slug}`} className="relative h-48 overflow-hidden bg-stone-100 block">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-108"
                  />
                  {/* Floating Glass Icon Badge */}
                  <div className="absolute top-4 left-4 text-xl w-10 h-10 bg-white/70 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-xs text-[#b17a20]">
                    {place.icon}
                  </div>
                </a>

                <div className="p-8">
                  <h2 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 group-hover:text-[#b17a20] transition-colors duration-300">
                    <a href={`/sacred-places/${place.slug}`}>{place.name}</a>
                  </h2>
                  <p className="text-sm text-[#7c6954] leading-relaxed">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 mt-auto flex items-center justify-between border-t border-[#faf8f5] pt-5">
                <a 
                  href={`/sacred-places/${place.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#b17a20] hover:text-[#2c1a04] transition-colors group/btn"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5 ml-1 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href={`/book-now?place=${place.slug}`}
                  className="text-xs font-bold uppercase tracking-widest text-[#5c4a37] hover:text-[#b17a20] transition-colors"
                >
                  Book Ritual
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
