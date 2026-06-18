"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Check, Calendar, ShieldCheck, MapPin, Landmark, Droplet, Clock, HelpCircle, BookOpen, AlertTriangle
} from "lucide-react";
import { packages } from "@/data/packages";

export default function PindDaanBookingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      title: "1. Select Package & Date",
      desc: "Compare our basic, standard, or premium options and select your preferred dates (Muhurats) based on your family custom."
    },
    {
      title: "2. Input Lineage Details",
      desc: "Provide details such as Gotra, list of ancestors, and name of the main devotee performing the rites to align the mantras."
    },
    {
      title: "3. Priest & Hotel Allocation",
      desc: "Our system assigns a dedicated Gayawal Panda matching your Gotra and books clean accommodations near the temple sanctuary."
    },
    {
      title: "4. Receive Booking Receipt",
      desc: "Get a confirmation invoice detailing hotel check-ins, transport cab contacts, and the assigned priest's credentials."
    }
  ];

  const faqs = [
    {
      q: "How can I book a Pind Daan slot in Gaya?",
      a: "You can easily book a slot by selecting one of our customized packages (Standard, Premium, etc.), entering your gotra/ancestry details, and confirming the date. Our coordinators then assign a verified Gayawal Panda for your ritual."
    },
    {
      q: "What details are required at the time of booking?",
      a: "We require the names of the departed ancestors (if known), their dates of passing (tithi), your family Gotra, and the number of family members attending. Standard ID cards are also needed for local hotel accommodations."
    },
    {
      q: "Is pre-booking required for Pitru Paksha?",
      a: "Yes, pre-booking is highly recommended during Pitru Paksha. Gaya attracts millions of devotees during this 15-day period, and pre-booking ensures guaranteed hotel slots, transport cabs, and priest allocations."
    },
    {
      q: "Can I book a remote/online Pind Daan session?",
      a: "Yes. If you cannot travel to Gaya, we offer live streaming booking where our verified priests conduct the entire ritual at Falgu River or Vishnupad Temple on your behalf, with your presence coordinated via a secure live video call."
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-[#faf8f5]/40 to-[#f3ebd8]/80 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.08), transparent)" }} />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-4"
          >
            Direct Pandit Coordination
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c1a04] mb-6 leading-tight"
          >
            Pind Daan Booking in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-3xl mx-auto leading-relaxed"
          >
            Seamlessly book your ancestor salvation rites with verified Gayawal Pandas. Complete package management, verified lodging, and dedicated transport assistance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="/book-now" 
              className="px-8 py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Start Booking Registration
            </Link>
            <a 
              href="#packages-grid" 
              className="px-8 py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Compare Packages
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-28">

        {/* Section 1: How to Register */}
        <section id="how-to-book" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              Section 01
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              How the Booking Process Works
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                To provide a completely hassle-free spiritual pilgrimage to Gaya, we have digitized the registration and coordination process for Pind Daan. Traditionally, finding the correct Panda holding your family's historical logs (Bahi Khata) required extensive local search. Our coordination network streamlines this by matching your Gotra and family details before you start your journey.
              </p>
              <p>
                By pre-booking your slot, our team can secure priest permissions, organize VIP permits inside the main <strong>Vishnupad Temple</strong>, arrange private vehicle transport to all mandatory Vedis (including Falgu River and Akshay Vat), and guarantee clean, comfortable hotel stays near the ghats.
              </p>
              <p>
                For remote devotees who cannot travel to Gaya, we offer live streaming bookings. The ritual is performed in real-time by qualified Pandas, with you participating over a live video call.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#efe9de] shadow-xs text-left">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#b17a20]" />
              Booking Checklist
            </h3>
            <ul className="space-y-4 pt-2">
              {steps.map((item, idx) => (
                <li key={idx} className="border-b border-[#efe9de] pb-3 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-xs text-[#2c1a04]">{item.title}</h4>
                  <p className="text-[11px] text-[#5c4a37] mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Visual Image Column */}
        <section id="gaya-importance" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-5">
            <div className="relative p-3 bg-white border border-[#efe9de] rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden">
              <Image 
                src="/images/pind-daan-gaya.jpg" 
                alt="Pind Daan Ritual at Vishnupad Temple Gaya" 
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
              />
              <span className="text-[10px] text-[#b17a20] font-bold uppercase tracking-wider block mt-3 text-center">Pind Daan Ritual at Vishnupad Temple Gaya</span>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Landmark className="w-4 h-4" />
              Section 02
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Secure Verified Lodging &amp; Puja permits
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                Gaya attracts millions of pilgrims annually, especially during the 15 days of Pitru Paksha. During peak seasons, unbooked lodging and transport prices surge, and finding verified priests becomes extremely difficult. 
              </p>
              <p>
                Pre-booking through our platform guarantees transparent pricing. We assign verified Pandas who specialize in specific Gotras, coordinate time slots with temple authorities to bypass long queues, and manage hotel bookings near the river banks, ensuring a comfortable experience for senior citizens.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Packages Grid */}
        <section id="packages-grid" className="py-12 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 03</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Available Booking Packages
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
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
                    {pkg.features.slice(0, 5).map((feat, fIdx) => (
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
                  Book Slot
                </Link>
              </div>
            ))}
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

        {/* Section 4: Frequently Asked Questions */}
        <section id="faq" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 04</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-[#efe9de] rounded-xl overflow-hidden bg-white shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-[#2c1a04]"
                  >
                    <h3 className="font-serif font-bold text-base md:text-lg">
                      {faq.q}
                    </h3>
                    <span className={`w-8 h-8 rounded-full bg-[#faf8f5] flex items-center justify-center border border-[#efe9de] text-[#b17a20] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
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
        </section>

      </div>

      {/* CTA Booking Banner */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white text-[#2c1a04] p-12 rounded-3xl border border-[#efe9de] shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
          
          <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
            Coordinate Your Pind Daan with Vedic Accuracy
          </h2>
          <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
            Verify package rates and secure your booking with our priest managers. To guarantee your session, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for detailed coordination. You can also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> for all procedural instructions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-now" 
              className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Book Ritual Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Contact Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
