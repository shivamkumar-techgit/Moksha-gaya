"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Scriptural Authenticity",
      desc: "All rituals are executed strictly under the guidelines of the Garuda Purana and Vedic scriptures, custom-tailored to family lineage and gotra.",
      icon: "📜"
    },
    {
      title: "Pricing Transparency",
      desc: "Upfront pricing with complete package inclusions. We maintain absolute honesty without any hidden dakshinas or surprise demands.",
      icon: "⚖️"
    },
    {
      title: "Pilgrim Comfort",
      desc: "We take care of transportation, priority queue coordination, and clean setups so that families can focus entirely on their ancestors.",
      icon: "🕊️"
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#1c1917] text-[#d6cdb8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255, 234, 204, 0.1), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Preserving Sacred Vedic Traditions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#a39785] max-w-2xl mx-auto leading-relaxed"
          >
            Moksha Gaya is dedicated to helping families fulfill their sacred duties towards their ancestors in Gaya with authenticity, respect, and seamless professional coordination.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Split Layout */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left text column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-12"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">Our Vision</h2>
              <p className="text-sm text-[#5c4a37] leading-relaxed mb-4">
                To be the most trusted global platform for ancestral rites, combining traditional scriptural accuracy with modern concierge support. We aim to bring peace of mind to devotees worldwide, ensuring their spiritual pilgrimage to Gaya is handled with absolute devotion.
              </p>
              <div className="w-16 h-0.5 bg-[#b17a20]" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">Our Mission</h2>
              <p className="text-sm text-[#5c4a37] leading-relaxed mb-4">
                To connect pilgrims with certified Vedic pandits, organize high-fidelity remote live rituals for those who cannot travel, and provide end-to-end travel assistance—ensuring every ritual is performed with dignity and transparency.
              </p>
              <div className="w-16 h-0.5 bg-[#b17a20]" />
            </div>
          </motion.div>

          {/* Right image column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Elegant luxury picture frame */}
            <div className="relative p-3 bg-white border border-[#efe9de] rounded-2xl shadow-xl max-w-sm overflow-hidden">
              <div className="absolute inset-0 border-[3px] border-[#b17a20]/30 rounded-2xl pointer-events-none m-1.5" />
              <img 
                src="/images/temples/vishnu-pad-image.jpg" 
                alt="Vishnupad Temple Gaya" 
                className="w-full h-auto object-cover rounded-xl aspect-[4/5] object-center filter sepia-[0.1]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-y border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">Core Values</h2>
            <p className="text-sm text-[#7c6954]">The values that guide every single ancestral offering and pilgrim journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-xl border border-[#efe9de] bg-[#faf8f5]/40 hover:bg-[#faf8f5] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 w-12 h-12 rounded-lg bg-white border border-[#efe9de] group-hover:bg-[#b17a20] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-2 group-hover:text-[#b17a20] transition-colors duration-300">{val.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pandit Highlight */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-3"
        >
          Our Acharyas
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl font-bold text-[#2c1a04] mb-6"
        >
          Verified Vedic Pandits
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-[#5c4a37] leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Our network includes highly qualified Vedic priests belonging to traditional families in Gaya. Each Pandit holds years of scripture-based knowledge, fluent Sanskrit recitation capabilities, and a deep understanding of gotra lineages, ensuring that your ancestral rites are conducted with maximum spiritual validity.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/services" 
            className="px-8 py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            Explore Rituals
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 text-center"
          >
            Consult a coordinator
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
