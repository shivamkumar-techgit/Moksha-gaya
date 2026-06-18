"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, ShieldAlert, Award, ShieldCheck, ChevronDown } from "lucide-react";
import { packages } from "@/data/packages";

export default function GayaPindDaanPackagesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const inclusions = [
    { name: "Verified Priests", desc: "Expert Gayawal Pandas matching family Gotra requirements." },
    { name: "Puja Materials", desc: "Barley flour, sesame, honey, ghee, kush grass, and offering pots." },
    { name: "Temple Tickets", desc: "VIP fast track entry and permissions for major Gaya Vedis." },
    { name: "Linage Records", desc: "Verification and registry updates in traditional family Bahi Khatas." }
  ];

  const faqs = [
    {
      q: "What does the standard Gaya Pind Daan package include?",
      a: "Our Standard package includes a verified Vedic Pandit, premium puja materials, Brahmin Bhoj for 5 Brahmins, 7 to 9 sacred Vedis covered, a dedicated transport vehicle for all Vedis, priority temple queues, and general accommodation guidance."
    },
    {
      q: "Do your packages include feeding local Brahmins (Brahmin Bhojan)?",
      a: "Yes. In Vedic rituals, feeding Brahmins is crucial to seal the puja. The Economy package feeds 2 Brahmins, the Standard feeds 5, and the Premium package includes feeding 11 Brahmins, in line with ancient custom."
    },
    {
      q: "How many Vedis are covered in the Basic, Standard, and Premium packages?",
      a: "The Basic package covers the 3 primary locations (Vishnupad, Falgu River, Akshay Vat). Standard covers 7-9 key spots. The Premium package covers all 45+ historical Vedis across Gaya, spread over 2 to 3 days."
    },
    {
      q: "Can the package details be customized for multiple family members?",
      a: "Yes. If multiple family members are performing Pind Daan together under the same Gotra, we customize the package to avoid duplicating costs for transport, lodging, or materials, charging only for additional Sankalps and Bhojans."
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
            Transparent Offerings
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Gaya Pind Daan Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Compare our comprehensive package structures designed for your maximum comfort. Ensure ancestral salvation with professional Vedic priests, stay, and local transport coordination.
          </motion.p>
        </div>
      </section>

      {/* Package grid */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-6xl">
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
                    Most Selected
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
                    {pkg.features.map((feat, fIdx) => (
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
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">What is Included</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Puja Samagri &amp; Essentials Included
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusions.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#efe9de] text-left">
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2">{item.name}</h3>
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
              Package Inquiries FAQ
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
              Need Help Choosing a Package?
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Our coordinators are available on call to answer your queries about custom Vedis, travel slots, and language support. You can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> directly. If you want to check the complete rituals list first, feel free to <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Book Selected Package
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Ask a Coordinator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
