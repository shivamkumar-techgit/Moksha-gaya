"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesPage() {
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
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Service Directory</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2c1a04] mb-6">
            Sacred Ancestral Rites
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Explore our traditional Vedic rituals conducted in Gaya by verified pandits, custom-tailored to satisfy and liberate the souls of your ancestors.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="bg-white rounded-xl border border-[#efe9de] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform group"
            >
              <div>
                {/* Image Header with Zoom on Hover */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  {/* Floating Glass Icon Badge */}
                  <div className="absolute top-4 left-4 text-2xl w-10 h-10 bg-white/70 backdrop-blur-md border border-white/40 rounded-lg flex items-center justify-center shadow-xs">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-3 group-hover:text-[#b17a20] transition-colors duration-300">
                    {service.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm text-[#7c6954] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Action area */}
              <div className="px-8 pb-8 pt-0 mt-auto">
                <a 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#b17a20] hover:text-[#2c1a04] transition-colors group/btn"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
