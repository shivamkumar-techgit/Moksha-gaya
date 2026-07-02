"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, Shield, Flame, BookOpen, Clock, Users } from "lucide-react";
import { packages } from "@/data/packages";

export default function GayaPindDaanClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      title: "Sankalp",
      desc: "Chanting name, Gotra, and intent to liberate ancestors under Vedic priest guidance."
    },
    {
      title: "Pinda Creation",
      desc: "Mixing barley flour, black sesame seeds, honey, and ghee into round pindas (balls)."
    },
    {
      title: "Arpanam",
      desc: "Offering the pindas at Falgu river banks, Vishnupad Temple, and Akshay Vat."
    },
    {
      title: "Brahmin Bhojan",
      desc: "Feeding Vedic Brahmins and offering charity (Dakshina) to seal the blessings."
    }
  ];

  const faqs = [
    {
      q: "What pooja is done in Gaya?",
      a: "The primary pooja performed in Gaya is Pind Daan (also known as Gaya Shradh). This sacred ancestral ritual is performed to offer peace and salvation (Moksha) to the departed souls of ancestors."
    },
    {
      q: "What rituals are performed in Gaya?",
      a: "The main rituals performed in Gaya include Snana (holy bath), Sankalpa, Pinda Daan (offering rice balls), and Tarpan (offering sacred water) at major holy sites like the Vishnupad Temple and the Phalgu River."
    },
    {
      q: "What is the cost of performing Pind Daan in Gaya?",
      a: "The cost of performing Pind Daan varies depending on the number of Vedis (locations) and Brahmins fed. Standard packages start from ₹5,500 and go up to ₹21,000 for multi-day premium packages which include VIP assistance, transport, and lodging."
    },
    {
      q: "When is the best time to perform Gaya Pind Daan?",
      a: "While Pind Daan can be performed throughout the year, the 15-day period of Pitru Paksha (usually in September-October) is considered the most auspicious. Other highly recommended times are Amavasya, Solar or Lunar eclipses."
    },
    {
      q: "What items (samagri) are required for Gaya Pind Daan?",
      a: "The primary items are barley flour (jau ka aata) or rice flour for making the Pinda, honey, sesame seeds (til), milk, curd, ghee, and kush grass. Our package covers all necessary high-quality ritual items."
    },
    {
      q: "Do your packages include accommodation and travel support in Gaya?",
      a: "Yes, our Standard and Premium packages include local cab services for vedi transport, and our Premium package includes premium accommodation stay. We ensure a completely hassle-free experience for senior citizens."
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-[#faf8f5]/60 to-[#f3ebd8]/80 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.06), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-semibold uppercase tracking-widest block mb-3"
          >
            Ancestral Salvation Rites
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Gaya Pind Daan Packages &amp; Cost
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Explore transparent packages, Vedic process details, and booking information for Gaya Pind Daan. Complete support for visiting families and remote devotees.
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
              View Pricing Tiers
            </Link>
            <a 
              href="https://wa.me/917070719993"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <span>💬</span> WhatsApp Inquiry
            </a>
          </motion.div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Transparent Pricing</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
              Gaya Pind Daan Package Tiers
            </h2>
            <p className="text-sm text-[#7c6954]">
              Choose the package that suits your family's needs. All rituals are performed with absolute adherence to Vedic scriptures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "border-[#b17a20] bg-[#faf8f5] shadow-lg lg:scale-105 z-10 before:absolute before:inset-0 before:border-[3px] before:border-[#b17a20]/30 before:rounded-2xl before:pointer-events-none before:m-1"
                    : "border-[#efe9de] bg-white shadow-2xs hover:shadow-xs"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b17a20] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div>
                  <div className="mb-4 text-left">
                    <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-1">{pkg.name}</h3>
                    <p className="text-[11px] text-[#7c6954] min-h-[40px]">{pkg.desc}</p>
                    <div className="mt-3">
                      <span className="text-lg font-bold text-[#b17a20]">{pkg.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-left border-t border-[#efe9de] pt-4">
                    {pkg.features.slice(0, 6).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-[#5c4a37]">
                        <Check className="w-4 h-4 text-[#b17a20] shrink-0 mr-2 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/book-now"
                  className={`w-full py-3 rounded-full text-center font-bold text-[9px] uppercase tracking-widest transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#b17a20] text-white hover:bg-[#2c1a04]"
                      : "bg-transparent border border-[#2c1a04] text-[#2c1a04] hover:bg-[#2c1a04] hover:text-white"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Ritual Process */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Process Guidelines</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              How the Puja is Performed
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#efe9de] text-left relative">
                <span className="absolute top-4 right-4 text-4xl font-extrabold text-[#b17a20]/10">{idx + 1}</span>
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2 mt-2">{step.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{step.desc}</p>
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

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Gaya Pind Daan FAQ
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

      {/* CTA Section */}
      <section className="py-24 bg-[#faf8f5] border-t border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-12 rounded-3xl border border-[#efe9de] shadow-xl relative overflow-hidden">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
              Book Your Gaya Pind Daan Service Today
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Plan in advance, especially during Pitru Paksha, to secure experienced pandit slots and convenient lodging near the temple. To schedule your rites, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for customized packages. You can also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> for a complete step-by-step overview.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Packages
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
