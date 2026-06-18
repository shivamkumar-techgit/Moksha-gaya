"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Star, Flame, Sparkles, RefreshCw, CalendarRange } from "lucide-react";

export default function GayaShraddhaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const specializedPujas = [
    {
      title: "Gaya Shraddh Karma",
      desc: "Standard annual or one-time ancestral offering conducted on the footprints of Lord Vishnu to satisfy three generations of forefathers.",
      icon: "🕯️",
      duration: "3 Hours"
    },
    {
      title: "Narayan Bali Puja",
      desc: "Specialized 2-day ritual performed to resolve severe Pitru Dosha or satisfy the souls of ancestors who met untimely or accidental deaths.",
      icon: "🔱",
      duration: "2 Days"
    },
    {
      title: "Tripindi Shraddh",
      desc: "A highly effective ritual to appease ancestral souls from maternal, paternal, and spouse lineages who might be stuck in limbo.",
      icon: "🔥",
      duration: "4 Hours"
    },
    {
      title: "Falgu River Tarpan",
      desc: "A water-offering ritual using black sesame seeds and Kush grass to satisfy the thirst and hunger of ancestors residing in Pitru Loka.",
      icon: "💧",
      duration: "1.5 Hours"
    }
  ];

  const comparison = [
    {
      aspect: "Purpose",
      normal: "Annual gratitude tithi offering.",
      gaya: "One-time complete soul liberation (Moksha)."
    },
    {
      aspect: "Effectiveness",
      normal: "Satisfies ancestors for one year.",
      gaya: "Appeases ancestors permanently."
    },
    {
      aspect: "Scriptural Status",
      normal: "Mandatory regular duty (Nitya Karma).",
      gaya: "Highest form of pilgrimage duty (Kamya Karma)."
    },
    {
      aspect: "Pitru Dosha Resolution",
      normal: "Maintains lineage blessings.",
      gaya: "Actively breaks deep ancestral karmic cycles."
    }
  ];

  const faqs = [
    {
      q: "What is the difference between normal Shraddha and Gaya Shraddha?",
      a: "A standard Shraddha is done annually at home or local temples on the death anniversary (Tithi) of the ancestors. Gaya Shraddha is a one-time sacred pilgrimage ritual that gives permanent satisfaction to ancestors, resolving ancestral blocks and helping them attain final salvation."
    },
    {
      q: "When should we perform Narayan Bali or Tripindi Shraddh in Gaya?",
      a: "Narayan Bali is performed to resolve Pitru Dosha caused by untimely, unnatural, or accidental deaths in the family. Tripindi Shraddh is performed to resolve issues when three generations of ancestors are unsatisfied or when there are recurring problems like career blockages, family disputes, or childlessness."
    },
    {
      q: "How many days does the Gaya Shraddha ceremony take?",
      a: "A standard Gaya Shraddha takes 1 day (about 3 hours). The comprehensive 17-Vedi ritual takes 1 to 2 days, and the detailed 45-Vedi ritual requires 3 complete days. Narayan Bali requires a specific 2-day puja process."
    },
    {
      q: "How do we book Gaya Shraddha services with you?",
      a: "You can book directly through our website booking form or by contacting our coordinate managers over WhatsApp/Phone. We verify your Gotra and family background to allocate the right Pandits and schedule the puja timings."
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
            Vedic Ancestral Homage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Gaya Shraddha Karma &amp; Tarpan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Exclusively managed by verified Gayawal Vedic priests. Address Pitru Dosha, perform Tripindi, Tarpan or Narayan Bali, and secure ancestral blessings.
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
              Book Shraddha Puja
            </Link>
            <a 
              href="#puja-types" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Puja Offerings
            </a>
          </motion.div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Scriptural Context</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Home Shraddha vs. Gaya Shraddha
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="bg-[#faf8f5] rounded-2xl border border-[#efe9de] p-6 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#efe9de]">
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#2c1a04] w-1/4">Aspect</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#7c6954]">Normal Annual Shraddha</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#b17a20] bg-[#faf8f5]">Gaya Shraddha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#efe9de]/50">
                  {comparison.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/40 transition-colors">
                      <td className="py-4 px-4 text-sm font-semibold text-[#2c1a04]">{item.aspect}</td>
                      <td className="py-4 px-4 text-xs text-[#5c4a37]">{item.normal}</td>
                      <td className="py-4 px-4 text-xs text-[#5c4a37] font-semibold bg-[#faf8f5]">{item.gaya}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Puja Grid */}
      <section id="puja-types" className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Offerings</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Specialized Puja Offerings in Gaya
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedPujas.map((puja, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs hover:shadow-xs flex gap-6 items-start transition-all duration-300">
                <span className="p-4 rounded-xl bg-[#faf8f5] border border-[#efe9de] text-3xl shrink-0">
                  {puja.icon}
                </span>
                <div className="text-left space-y-2">
                  <h3 className="font-serif font-bold text-lg text-[#2c1a04]">{puja.title}</h3>
                  <p className="text-xs text-[#5c4a37] leading-relaxed">{puja.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f3ebd8] text-[#8c5e1b] text-[10px] font-bold uppercase tracking-wider">
                    <CalendarRange className="w-3.5 h-3.5" />
                    <span>Duration: {puja.duration}</span>
                  </div>
                </div>
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
              Gaya Shraddha FAQ
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
              Schedule Pitru Karma in Gaya
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Ensure your ancestral obligations are completed accurately under proper Vedic guidelines. You can easily <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> to speak directly with a service manager. Feel free to also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> for detailed procedural information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Pujas
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
