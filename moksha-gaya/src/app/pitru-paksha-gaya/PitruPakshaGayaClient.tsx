"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Users, MapPin, BadgePercent, ShieldCheck, Check } from "lucide-react";

export default function PitruPakshaGayaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tips = [
    { title: "Avoid Temple Rushes", desc: "Our local coordinators secure priority time slots early in the morning, bypassing long public queues." },
    { title: "Secured Lodging", desc: "Get guaranteed pre-booked clean hotels near Vishnupad temple at standard seasonal rates." },
    { title: "Assigned Lineage Priest", desc: "Ensure your family is mapped to the exact Gayawal priest holding your ancestral registry documents." }
  ];

  const packagesHighlights = [
    "Full-Vedi Pind Daan coordination (17 or 45 spots)",
    "Comfortable hotel booking options near Vishnupad Temple",
    "Private local cars for vedi-to-vedi transport",
    "Prasad packaging and home delivery",
    "Multi-lingual Pandits (Telugu, Tamil, Hindi, Kannada, Bengali)"
  ];

  const faqs = [
    {
      q: "What is the significance of Pitru Paksha in Gaya?",
      a: "Pitru Paksha is a sacred 15-day period in the Hindu calendar dedicated to remembering and offering food/water to departed ancestors. Performing Pind Daan in Gaya during this time carries immense spiritual weight, opening the gates of heaven for forefathers and clearing lineage debts."
    },
    {
      q: "When does Pitru Paksha occur and how is it calculated?",
      a: "Pitru Paksha falls during the Bhadrapada month (typically September or October), starting on the day after the full moon (Purnima) and ending on the new moon day (Sarvapitri Amavasya). The exact dates vary yearly based on the lunar calendar."
    },
    {
      q: "Why is advance booking highly recommended for Pitru Paksha in Gaya?",
      a: "During Pitru Paksha, millions of devotees visit Gaya, causing extreme rushes at temples, premium hotel shortages, and high cab rates. Advance booking secures experienced Pandits, VIP temple queue access, comfortable stays, and hassle-free local transport."
    },
    {
      q: "What lodging and transport support do you provide during this peak season?",
      a: "We offer complete end-to-end logistics including verified hotel bookings (near the temples), private cabs for vedi-to-vedi transfers, fast track entry tokens, and dedicated guides to navigate the massive crowds safely."
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-b from-[#faf8f5]/60 to-[#f3ebd8]/80 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.06), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            The Peak Auspicious Season
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Pitru Paksha Pind Daan in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Plan your ancestral rites during the holy 15-day period of Pitru Paksha. Secure experienced local Pandits, hotel lodging, and private local transport in advance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="/book-now" 
              className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Book Pitru Paksha Slot
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Consult Dates
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Book Early */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Advance Scheduling</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Benefits of Booking in Advance
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-[#faf8f5]/40 p-6 rounded-xl border border-[#efe9de] hover:shadow-md transition-all duration-300">
                <span className="text-2xl mb-3 block">📍</span>
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2">{tip.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package checklist highlights */}
      <section className="py-20 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#b17a20] text-xs font-bold uppercase tracking-wider block">Exclusive Season Packages</span>
              <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
                Complete Seasonal Support
              </h2>
              <p className="text-sm text-[#5c4a37] leading-relaxed">
                During this peak time, standard public resources are stretched. Our customized Pitru Paksha packages are built to shield visiting families from coordination hassles.
              </p>

              <ul className="space-y-3">
                {packagesHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs text-[#5c4a37]">
                    <Check className="w-4 h-4 text-[#b17a20] shrink-0 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white border border-[#efe9de] rounded-2xl shadow-md overflow-hidden">
                <Image 
                  src="/images/pind-daan-gaya.jpg" 
                  alt="Pind Daan Ritual at Vishnupad Temple Gaya" 
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Pitru Paksha FAQ
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-[#efe9de] rounded-xl overflow-hidden bg-[#faf8f5]/40 hover:bg-[#faf8f5] transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-[#2c1a04]"
                  >
                    <h3 className="font-serif font-bold text-base md:text-lg">
                      {faq.q}
                    </h3>
                    <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#efe9de] text-[#b17a20] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-xs text-[#5c4a37] leading-relaxed border-t border-[#efe9de]/50">
                          <p className="mt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#faf8f5] border-t border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-12 rounded-3xl border border-[#efe9de] shadow-xl relative overflow-hidden">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
              Pre-Book Pitru Paksha Slots
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Dates fill up fast. Pre-booking ensures your family gotra records are pulled and checked before your arrival in Gaya. To guarantee your slots, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for direct arrangements. You may also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> to prepare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Book Slot Now
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
