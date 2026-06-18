"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, MessageCircle, MapPin, BadgeCheck, Languages } from "lucide-react";

export default function BestPanditClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trustFactors = [
    {
      title: "Traditional Lineage",
      desc: "Allocated priests belong to the authentic Gayawal Panda community, who hold the historical scriptural right to perform these rites.",
      icon: "📜"
    },
    {
      title: "Vedic Education",
      desc: "Our priests have formal certification from Sanskrit Gurukuls and deep mastery of the Garuda Purana, Vayu Purana, and Shraddh rituals.",
      icon: "📚"
    },
    {
      title: "Language Fluency",
      desc: "Complete rituals performed in your preferred regional language, ensuring clear understanding of every Sanskrit Sankalp.",
      icon: "🗣️"
    },
    {
      title: "Zero Hidden Demands",
      desc: "All priestly charges (Dakshina) are transparently declared beforehand. No uncomfortable negotiations at the temples.",
      icon: "⚖️"
    }
  ];

  const languages = [
    "Hindi", "English", "Telugu", "Tamil", "Kannada", "Bengali", "Gujarati", "Marathi"
  ];

  const faqs = [
    {
      q: "Who are the Gayawal Pandas (Pandits)?",
      a: "Gayawal Pandas are the traditional, lineage-based priests of Gaya who hold the exclusive right granted by Lord Vishnu to perform ancestral salvation rituals at the sacred Vedis of Gaya. They maintain ancient records of families (Bahi Khata) spanning centuries."
    },
    {
      q: "Do your Pandits speak local regional languages?",
      a: "Yes, we coordinate rituals with Pandits who are fluent in various languages including Hindi, English, Telugu, Tamil, Kannada, Bengali, and Gujarati. This ensures you understand every step and mantra of the ceremony."
    },
    {
      q: "How do you verify the credentials of the Pandits?",
      a: "All Pandits registered with Gaya Rituals are verified Gayawal Brahmins who have completed formal Vedic education in scripture, gotra lineage rules, and ritual mechanics. They have a minimum of 10-15 years of experience."
    },
    {
      q: "What is the customary Dakshina for the Pandits?",
      a: "Dakshina (priest offering) is transparently included in all our Economy, Standard, and Premium packages. This removes any ambiguity, hidden demands, or last-minute negotiation, allowing you to focus completely on the ritual."
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
            Verified Vedic Priests
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Best Pandit for Pind Daan in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Connect with experienced, certified, and multi-lingual Gayawal Pandas. Authenticity, transparent pricing, and complete ritual guidance for your peace of mind.
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
              Book Pandit Ji Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Consult a Priest
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Qualifications</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Our Pandit Verification Standards
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustFactors.map((item, idx) => (
              <div key={idx} className="bg-[#faf8f5]/40 p-8 rounded-xl border border-[#efe9de] flex gap-4 items-start shadow-2xs">
                <span className="p-3 bg-white border border-[#efe9de] rounded-lg text-3xl shrink-0">
                  {item.icon}
                </span>
                <div className="text-left space-y-1">
                  <h3 className="font-serif font-bold text-base text-[#2c1a04]">{item.title}</h3>
                  <p className="text-xs text-[#5c4a37] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support Section */}
      <section className="py-20 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Language Compatibility</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Rituals in Your Mother Tongue
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
            <p className="text-xs text-[#7c6954] mt-4">
              It is vital to understand the Mantras and Sankalp being chanted. We pair your family with a Pandit who speaks your preferred language.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, idx) => (
              <div key={idx} className="px-5 py-2.5 bg-white border border-[#efe9de] rounded-full text-xs font-bold text-[#2c1a04] flex items-center gap-2 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b17a20]" />
                {lang}
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
              Verified Pandit FAQ
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
              Connect with Verified Gayawal Pandas
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              We check details such as gotra, puja dates, and language fluency. You can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> to speak with our priest coordinators to confirm. To review the procedures beforehand, make sure to <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Book Pandit Ji
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Inquire Over Phone
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
