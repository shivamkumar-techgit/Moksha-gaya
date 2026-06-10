"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Book Ritual",
      desc: "Select your package, submit ancestral details (gotra, names), and securely book your dates online."
    },
    {
      step: "02",
      title: "Coordinator Contact",
      desc: "Receive a call from our dedicated Gaya coordinator to document your family lineage, custom rituals, and specific requests."
    },
    {
      step: "03",
      title: "Arrival in Gaya",
      desc: "Our coordinator greets you at the airport/railway station and assists with your transfer, hotel check-in, and local transport."
    },
    {
      step: "04",
      title: "Sankalp",
      desc: "Undergo the sacred initial purification and take the lineage vow (Sankalp) guided by our verified Pandit at the holy river banks."
    },
    {
      step: "05",
      title: "Tarpan",
      desc: "Offer sacred water mixed with black sesame seeds and barley to satisfy and quench the spiritual thirst of your ancestors."
    },
    {
      step: "06",
      title: "Pind Daan",
      desc: "Perform the core offering of rice/barley flour balls (Pinds) at Vishnupad footprint, Falgu River, and under the Akshay Vat tree."
    },
    {
      step: "07",
      title: "Brahmin Bhojan",
      desc: "Feed local Brahmanas in Gaya to conclude the rituals, satisfying the departed souls through sacred food charity."
    },
    {
      step: "08",
      title: "Final Blessings",
      desc: "Receive your completion details, photographs/videos of the rituals, and non-perishable dry Prasad delivered to your address."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#b17a20]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[#b17a20]/5 pointer-events-none animate-slow-spin" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Detailed Ritual Process</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            The Ritual Journey Step-by-Step
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            From your initial booking to the final ancestral blessings, we guide you through each scriptural step with absolute transparency and respect.
          </p>
        </div>

        {/* Timeline Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#efe9de] via-[#b17a20]/40 to-[#efe9de] -translate-x-1/2" />

          {steps.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-stretch mb-12 relative ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Left/Right Card Spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Timeline Center Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20">
                  <div className="w-6 h-6 rounded-full bg-white border-4 border-[#b17a20] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b17a20]" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#efe9de] shadow-xs hover:shadow-md transition-all duration-300 relative group hover:border-[#b17a20]/30 hover:-translate-y-0.5">
                    {/* Number Badge */}
                    <span className="absolute top-6 right-6 font-serif text-3xl font-extrabold text-[#b17a20]/10 group-hover:text-[#b17a20]/25 transition-colors duration-300">
                      {item.step}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 group-hover:text-[#b17a20] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#7c6954] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
