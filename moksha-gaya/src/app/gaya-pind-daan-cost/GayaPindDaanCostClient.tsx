"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { DollarSign, ShieldAlert, Sparkles, Check, HelpCircle } from "lucide-react";

export default function GayaPindDaanCostClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const costBreakdown = [
    { title: "Pandit Ji Dakshina", desc: "Covers the chanting fees and lineage study for the priest conducting the ritual." },
    { title: "Ritual Materials (Samagri)", desc: "Includes fresh ingredients like barley flour, sesame, honey, curd, flowers, and kush grass." },
    { title: "Brahmin Bhoj", desc: "Covers standard vegetarian food served to Vedic priests to conclude the puja." },
    { title: "Local Logistics", desc: "Includes transfers to Falgu River, Vishnupad Temple, Akshay Vat, and other Vedis." }
  ];

  const comparisons = [
    { label: "Pricing Model", traditional: "Variable, negotiated at each temple", gayarituals: "Fixed and transparent package rates" },
    { label: "Dakshina", traditional: "Asked separately at every location", gayarituals: "Fully included in the package" },
    { label: "Puja Ingredients", traditional: "Devotees often asked to purchase extra", gayarituals: "100% sourced and pre-packaged" },
    { label: "Brahmin Bhojan", traditional: "Arranged separately by devotee", gayarituals: "Managed completely by our team" }
  ];

  const faqs = [
    {
      q: "What are the main components of the Gaya Pind Daan cost?",
      a: "The total cost covers: 1. Pandit Ji's Dakshina. 2. High-quality ritual ingredients (barley, honey, sesame, curd, fruits, sweets). 3. Temple permissions and Vedi entry charges. 4. Feeding of local Brahmins (Brahmin Bhoj). 5. Local transfers between the Vedis."
    },
    {
      q: "Is Pandit Dakshina included in your package cost?",
      a: "Yes, unlike traditional bookings where pandas might demand additional Dakshina at each Vedi, our packages include the complete Pandit Dakshina upfront, ensuring zero uncomfortable negotiations."
    },
    {
      q: "Are there any hidden charges or mandatory temple payments?",
      a: "No. Gaya Rituals guarantees 100% pricing transparency. We cover all material costs, priest dakshinas, and entry tickets in the package. General temple charity is optional and completely left to your discretion."
    },
    {
      q: "How can we pay the package cost?",
      a: "We accept payments via UPI, major credit/debit cards, Net Banking, and Bank Transfers. You can pay a token advance online to secure your date and Pandit, and the remainder upon arrival in Gaya."
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
            Pricing Integrity
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Gaya Pind Daan Cost &amp; Rates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Understand the complete breakdown of ritual expenses in Gaya. Enjoy a peaceful pilgrimage experience without unexpected demands or hidden costs.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <Link 
              href="/book-now" 
              className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Request Price Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Detailed Breakdown</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Where Does Your Payment Go?
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costBreakdown.map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5]/55 p-6 rounded-xl border border-[#efe9de]">
                <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-2">{item.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value comparison */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Avoid Hidden Charges</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Traditional Pandas vs. Gaya Rituals
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="bg-white rounded-2xl border border-[#efe9de] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#efe9de] bg-[#faf8f5]/50">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#2c1a04]">Aspect</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#7c6954]">Traditional Route</th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#b17a20]">Gaya Rituals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efe9de]/50">
                  {comparisons.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#faf8f5]/20 transition-colors">
                      <td className="py-4 px-6 text-sm font-semibold text-[#2c1a04]">{item.label}</td>
                      <td className="py-4 px-6 text-xs text-red-600 font-medium">{item.traditional}</td>
                      <td className="py-4 px-6 text-xs text-green-700 font-bold">{item.gayarituals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Gaya Pind Daan Cost FAQ
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
              Get an Instant Custom Estimate
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Based on your family size, guest counts, and lodging preferences, we can share a customized estimate. Feel free to <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for details. You can also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> for cost breakdowns by vedi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Rates
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
