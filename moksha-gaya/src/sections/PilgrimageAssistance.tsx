"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PilgrimageAssistance() {
  const services = [
    {
      title: "Airport Pickup & Drop",
      desc: "Private, sanitized AC vehicles with professional drivers to transfer you seamlessly from Gaya (GAY) or Patna (PAT) airports.",
      emoji: "✈️"
    },
    {
      title: "Railway Station Transfers",
      desc: "Warm welcome and priority transfers directly from Gaya Junction railway station platforms directly to your lodging.",
      emoji: "🚂"
    },
    {
      title: "Vetted Hotel Bookings",
      desc: "Vetted selection of premium, standard, and budget hotels near the main temples, ensuring high hygiene, comfort, and hot water.",
      emoji: "🏨"
    },
    {
      title: "AC Sedans & SUVs",
      desc: "Choose from a private fleet of well-maintained AC Sedan cars (for small families) and spacious AC SUVs (for large groups).",
      emoji: "🚗"
    },
    {
      title: "Local Site Transport",
      desc: "Timely, scheduled transit between your hotel, the Falgu River banks, Vishnupad Temple, and the Akshay Vat tree.",
      emoji: "📍"
    },
    {
      title: "Bodhgaya Spiritual Tour",
      desc: "Optional extension tours to the peaceful Mahabodhi Temple, the sacred Bodhi Tree, Great Buddha Statue, and monasteries.",
      emoji: "☸️"
    },
    {
      title: "Vishnupad Darshan Priority",
      desc: "Guided priority access, entry support, and customized ritual coordination within the historic, highly-visited Vishnupad Temple.",
      emoji: "🛕"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="pilgrimage-assistance" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Intro */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block">End-to-End Coordination</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04] leading-tight">
              Complete Pilgrimage Assistance
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <p className="text-sm text-[#5c4a37] leading-relaxed">
              We handle all travel, hotel, and transit logistics in Gaya, allowing your family to focus entirely on devotion and ancestral rites without any travel stress.
            </p>
            <div className="p-6 bg-white rounded-2xl border border-[#efe9de] space-y-4">
              <h4 className="font-serif font-bold text-sm text-[#2c1a04]">Our Travel Promise:</h4>
              <ul className="space-y-3 text-xs text-[#7c6954]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% verified, courteous local drivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Clean, fully air-conditioned vehicles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Comfort-first lodging near ritual spots</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((svc, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-[#efe9de] hover:border-[#b17a20]/20 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#faf8f5] group-hover:bg-[#b17a20] text-lg flex items-center justify-center shrink-0 transition-colors duration-300">
                    <span className="select-none">{svc.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#2c1a04] mb-2 group-hover:text-[#b17a20] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#7c6954] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
