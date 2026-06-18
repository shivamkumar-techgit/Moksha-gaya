"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Video, Mail, Award, Globe, VideoIcon, Send } from "lucide-react";

export default function OnlinePindDaanGayaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      title: "1. Detailed Registration",
      desc: "Provide your Gotra, family lineage details, and the names/photos of the departed ancestors. Our coordinators help finalize the appropriate Muhurat."
    },
    {
      title: "2. Live Video Setup",
      desc: "Receive a dedicated Zoom, WhatsApp, or Google Meet link. Our team coordinates the time zone differences so you can join comfortably from home."
    },
    {
      title: "3. Live Sankalp & Puja",
      desc: "Join the video call to perform the initial Sankalp. Watch live as our Vedic Pandits chant the Sanskrit mantras and offer pindas at Vishnupad or Falgu River."
    },
    {
      title: "4. Proof & Prasad Shipping",
      desc: "Get full HD recordings and photos of the rituals. The sacred Prasad, Falgu clay, and Vishnu Charana threads are packaged and couriered to your address."
    }
  ];

  const nriTestimonials = [
    {
      name: "Ramesh Sharma",
      location: "London, UK",
      quote: "Due to health reasons, I couldn't travel to India. Gaya Rituals coordinated everything over Zoom. The clarity of the stream and the Pandit's guidance was superb. Highly recommended."
    },
    {
      name: "Preeti Patel",
      location: "California, USA",
      quote: "Excellent online service. We did the annual Shraddh for our father. The coordination was perfect, taking our US time zone into account. We received the Prasad parcel within a week."
    },
    {
      name: "Aravind Subramanian",
      location: "Singapore",
      quote: "Very professional and transparent. They shared videos of the entire pind arpan. Performing the Sankalp live made us feel like we were physically standing at Vishnupad Temple."
    }
  ];

  const faqs = [
    {
      q: "Is Online Pind Daan scripturally valid?",
      a: "Yes, in situations where a devotee cannot travel due to health, distance, or travel restrictions, scriptures allow performing rituals via proxy (Pratinidhi). Our pandits conduct the custom Sankalp in your name and Gotra while you participate and watch live via video stream."
    },
    {
      q: "How does the online Pind Daan process work?",
      a: "1. You register with ancestor names and Gotra. 2. A live HD video link is shared. 3. You join the call for the initial Sankalp. 4. The Pandit performs the Tarpan and Pinda Arpan at Gaya. 5. You watch the live ceremony and perform remote prayers."
    },
    {
      q: "Do we receive Prasad and ritual proof?",
      a: "Yes, we record the complete ceremony and share high-definition photos and videos of the offerings. We also package and ship the sacred Prasad, Falgu Bhasma, and Vishnu Charana thread to your domestic or international address."
    },
    {
      q: "What do I need to prepare at home for the online puja?",
      a: "You only need a stable internet connection, a quiet space, and optionally a photo of your ancestors. The pandit will guide you on doing minor symbolic water offerings (Tarpan) from your home during the call."
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
            Remote Vedic Coordination
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Online Pind Daan in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Can't travel to Gaya? Connect with verified local Pandits via live HD video streaming. Complete ancestral rituals with full Vedic authenticity from anywhere in the world.
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
              Book Online Ritual
            </Link>
            <a 
              href="#how-it-works" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* Global Audience Highlights */}
      <section className="py-20 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#b17a20] text-xs font-bold uppercase tracking-wider block">NRI &amp; Distant Families Support</span>
              <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
                Bridging Distance with Devotion
              </h2>
              <p className="text-sm text-[#5c4a37] leading-relaxed">
                We understand that professional commitments, physical ailments, and distance can make traveling to Gaya difficult. Online Pind Daan ensures you do not miss your vital duties towards your ancestors (Pitru Dharma).
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-2 items-start">
                  <Globe className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-[#2c1a04]">Global Timezone Sync</h4>
                    <p className="text-[11px] text-[#5c4a37]">We coordinate timings matching US, UK, Europe, and Asia timezones.</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <VideoIcon className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-[#2c1a04]">HD Live Streaming</h4>
                    <p className="text-[11px] text-[#5c4a37]">Private links shared on secure video platforms for clear view.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-2 bg-[#faf8f5] border border-[#efe9de] rounded-2xl shadow-md overflow-hidden">
                <img 
                  src="/images/gallery/ritual-ai5.png" 
                  alt="Online Puja Live Stream" 
                  className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider animate-pulse flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" /> Live Streaming
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section id="how-it-works" className="py-24 bg-[#faf8f5] border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Workflow</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              How the Online Ritual Works
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#efe9de] shadow-2xs relative">
                <h3 className="font-serif font-bold text-sm text-[#2c1a04] mb-3">{step.title}</h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-b border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Devotee Feedback</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Trusted by Families Globally
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {nriTestimonials.map((t, idx) => (
              <div key={idx} className="bg-[#faf8f5]/40 p-6 rounded-xl border border-[#efe9de] flex flex-col justify-between">
                <p className="text-xs text-[#5c4a37] italic leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-xs text-[#2c1a04]">{t.name}</h4>
                  <span className="text-[10px] text-[#b17a20] font-semibold">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual Image Banner */}
      <section className="py-12 bg-[#faf8f5]">
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

      {/* FAQ */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Online Pind Daan FAQ
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-[#faf8f5] p-12 rounded-3xl border border-[#efe9de] shadow-md relative overflow-hidden">
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
              Schedule Your Remote Pind Daan
            </h2>
            <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
              Ensure you fulfil your ancestral responsibilities. You can easily <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> to set up your online live session. To understand the detailed process, feel free to <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-now" 
                className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
              >
                Register Ritual
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-transparent hover:bg-white text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
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
