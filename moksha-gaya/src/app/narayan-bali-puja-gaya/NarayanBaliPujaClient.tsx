"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Flame, BookOpen, Clock, Heart, Award } from "lucide-react";

export default function NarayanBaliPujaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pujaTimeline = [
    {
      day: "Day 1: Invocation & Cleansing",
      steps: [
        "Vedic Snan: Purifying bath and wear traditional dhoti-kurta.",
        "Sankalp: Chanting names, gotras, and the deceased's details to invoke Lord Vishnu.",
        "Straw Body Creation: Creating a symbolic body using Kusha grass to represent the departed soul.",
        "Narayan Bali Havan: Intense sacred fire offerings to release karmic bindings."
      ]
    },
    {
      day: "Day 2: Tarpan & Liberation",
      steps: [
        "Pinda Arpanam: Placing rice/barley pindas on Lord Vishnu's footprint to request direct entry to Vaikuntha.",
        "Brahmin Bhojan: Offering standard vegetarian food, dakshina, and clothes to Vedic priests.",
        "Visarjan: Dispersing ritual remnants into the sacred waters of the Falgu River.",
        "Lineage Blessings: Final prayers seeking ancestor blessings for descendants."
      ]
    }
  ];

  const reasons = [
    { title: "Untimely Deaths", desc: "For family members who passed away due to accidents, sudden illnesses, or suicide.", icon: "🕊️" },
    { title: "Pitru Dosha Relief", desc: "For families experiencing severe astrological blocks, childlessness, or consecutive failures.", icon: "🔱" },
    { title: "Obstacle Removal", desc: "Resolving unexplained delays in marriage, business growth, or professional stability.", icon: "🔑" },
    { title: "Lineage Peace", desc: "Ensuring ancestors trapped in lower realms are fully satisfied and cross over to Pitru Loka.", icon: "🧘" }
  ];

  const faqs = [
    {
      q: "Why is Narayan Bali performed?",
      a: "Narayan Bali is a specialized Vedic ritual performed to satisfy and liberate souls that met untimely, sudden, or unnatural deaths (due to accidents, illnesses, suicide, etc.) and to clear severe Pitru Dosha affecting the family's health, peace, and growth."
    },
    {
      q: "What is the difference between standard Pind Daan and Narayan Bali?",
      a: "Standard Pind Daan is performed for ancestors who passed away naturally, satisfying them and speeding their journey to Pitru Loka. Narayan Bali is an intensive, specialized puja invoking Lord Narayana specifically for souls stuck in lower realms due to unnatural deaths."
    },
    {
      q: "How many days does the Narayan Bali puja take?",
      a: "Narayan Bali is a 2-day comprehensive ritual. The first day involves making dummy straw bodies, doing fire rituals (Havan), and invocation. The second day involves Pinda offerings, Brahmin Bhojan, and formal conclusion."
    },
    {
      q: "What is the cost of Narayan Bali Puja in Gaya?",
      a: "Because Narayan Bali requires 2 days, specialized puja samagri, and multiple pandits, the package cost starts from ₹15,000. It includes lodging support, transportation, all materials, and Brahmin Bhojan."
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
            Specialized Vedic Puja
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Narayan Bali Puja in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Perform the intensive 2-day Narayan Bali ritual under the supervision of verified Vedic Priests. Resolve Pitru Dosha and liberate souls that met untimely deaths.
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
              Book Narayan Bali Puja
            </Link>
            <a 
              href="#timeline" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Puja Timeline
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Perform Narayan Bali */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Significance</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              When Is Narayan Bali Recommended?
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {reasons.map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5]/40 p-6 rounded-xl border border-[#efe9de] hover:shadow-md transition-shadow duration-300">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Puja */}
      <section id="timeline" className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Puja Structure</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Narayan Bali 2-Day Ritual Flow
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="space-y-12">
            {pujaTimeline.map((dayObj, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#efe9de] shadow-xs text-left">
                <h3 className="font-serif font-bold text-lg text-[#b17a20] mb-6 border-b border-[#efe9de] pb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#b17a20]" />
                  {dayObj.day}
                </h3>
                
                <ul className="space-y-4">
                  {dayObj.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start text-xs text-[#5c4a37] gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#f3ebd8] text-[#8c5e1b] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
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
              Narayan Bali FAQ
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
              Schedule Narayan Bali with Expert Priests
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              We handle accommodation, transport, and make sure that multiple experienced priests supervise the fire rituals. To book your dates, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> directly. For more details on the steps involved, please <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Narayan Bali
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Contact Priest Coordinator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
