"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Star, Flame, Sparkles, Check, ListChecks } from "lucide-react";

export default function TripindiShraddhaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const signs = [
    { title: "Chronic Illnesses", desc: "Repeated, unexplained health setbacks affecting family members despite proper medical care.", icon: "🩺" },
    { title: "Business Obstacles", desc: "Unexpected financial losses, debt accumulation, or failure of multiple business ventures.", icon: "📉" },
    { title: "Marriage Delays", desc: "Difficulty in finding a suitable life partner or continuous disruptions in marital harmony.", icon: "💍" },
    { title: "Childbirth Struggles", desc: "Facing delays or consistent obstacles in expanding the family (Vansh Vridhi).", icon: "👶" }
  ];

  const steps = [
    { title: "Lineage Sankalp", desc: "Declaring the names and gotras of paternal, maternal, and spouse lineages to initiate salvation." },
    { title: "Three-Metal Pujas", desc: "Invoking deities using gold, silver, and copper plates to appease standard, lower, and higher soul classes." },
    { title: "Pinda Visarjan", desc: "Offering the special triangular pindas and dispersing the ashes into the holy Falgu River." }
  ];

  const faqs = [
    {
      q: "What is Tripindi Shraddha?",
      a: "Tripindi Shraddha is a specialized rite performed to pacify unsatisfied ancestral souls from three different lineages (paternal, maternal, and spouse) who passed away in different states. It clears deep-seated karmic blocks affecting descendants."
    },
    {
      q: "Who should perform Tripindi Shraddha?",
      a: "Anyone experiencing recurring problems such as severe blockages in career or business, chronic unexplained illnesses in the family, long-term marriage delays, or difficulties in childbirth (Vansh Vridhi) is advised to perform this puja."
    },
    {
      q: "What are the benefits of performing Tripindi Shraddha in Gaya?",
      a: "Gaya is the ultimate landing ground for ancestral spirits. Performing Tripindi here multiplies the efficacy of the mantra chants and offering pindas, ensuring that the ancestors of multiple lineages cross over instantly and stop obstructing family growth."
    },
    {
      q: "What is the difference between Narayan Bali and Tripindi Shraddha?",
      a: "Narayan Bali is performed specifically for ancestors who passed away unnatural or accidental deaths. Tripindi Shraddha is performed to satisfy ancestors who passed away naturally but remain unsatisfied due to skipped annual rituals or bad planetary combinations."
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
            Lineage Resolution
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Tripindi Shraddha in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Pacify unsatisfied ancestors from paternal, maternal, and spouse lineages. Clear karmic blockages and bring peace and prosperity to your household.
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
              Book Tripindi Puja
            </Link>
            <a 
              href="#signs" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Check Symptoms
            </a>
          </motion.div>
        </div>
      </section>

      {/* Signs you need Tripindi */}
      <section id="signs" className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Diagnostic Guidelines</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Signs of Unsatisfied Lineage Souls
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {signs.map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5]/40 p-6 rounded-xl border border-[#efe9de] hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja steps */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Procedural Flow</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Tripindi Shraddha Ritual Process
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {steps.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#efe9de] relative">
                <span className="absolute top-4 right-4 text-3xl font-bold text-[#b17a20]/10">0{idx + 1}</span>
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2 mt-2">{item.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Image Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="relative p-2 bg-white border border-[#efe9de] rounded-3xl shadow-lg overflow-hidden max-w-xl mx-auto">
            <Image 
              src="/images/pind-daan-gaya.jpg" 
              alt="Pind Daan Ritual at Vishnupad Temple Gaya" 
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-2xl aspect-[16/10]"
            />
            <span className="text-[10px] text-[#b17a20] font-bold uppercase tracking-wider block mt-3 text-center">Pind Daan Ritual at Vishnupad Temple Gaya</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Tripindi Shraddha FAQ
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
              Schedule Your Tripindi Shraddha
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Contact our temple coordinators to confirm planetary dates (Muhurats) and secure certified Gayawal Pandas. You can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> directly. If you want to check the complete rituals first, feel free to <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Muhurats
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Speak to Pandit Ji
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
