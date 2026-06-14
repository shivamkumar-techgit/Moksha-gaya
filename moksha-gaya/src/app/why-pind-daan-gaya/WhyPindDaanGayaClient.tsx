"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Sparkles, FileText } from "lucide-react";

export default function WhyPindDaanGayaPage() {
  const benefits = [
    {
      title: "Spiritual Benefits",
      desc: "Connects descendants to their spiritual roots and clears ancestral lineage karma.",
      icon: "🕉️"
    },
    {
      title: "Peace & Ancestral Satisfaction",
      desc: "Quenches the spiritual hunger and thirst of departed souls, helping them cross over.",
      icon: "🕊️"
    },
    {
      title: "Relief from Pitru Dosha",
      desc: "Mitigates severe planetary afflictions and repetitive failures caused by ancestor distress.",
      icon: "🪐"
    },
    {
      title: "Blessings for Family Prosperity",
      desc: "Unlocks professional growth, business stability, and overall household abundance.",
      icon: "💰"
    },
    {
      title: "Removal of Karmic Obstacles",
      desc: "Clears invisible blocks hindering child-birth, career success, and life progress.",
      icon: "🔑"
    },
    {
      title: "Inner Peace & Fulfillment",
      desc: "Fulfilling this sacred filial responsibility brings deep mental peace and spiritual satisfaction.",
      icon: "🧘"
    },
    {
      title: "Family Harmony & Well-being",
      desc: "Promotes mutual love, resolves long-term disputes, and ensures the family's health.",
      icon: "🏡"
    }
  ];

  const sacredSpots = [
    {
      name: "Falgu River",
      desc: "The unique river where water flows beneath the sand bed. Performing Tarpan and Pind Daan on its banks is considered the first step of salvation rites.",
      history: "Sita Devi once cursed the river to flow underground, making its sand highly sacred (Phalgu Bhasma) for offerings."
    },
    {
      name: "Vishnupad Temple",
      desc: "Houses the 40cm footprint of Lord Vishnu stamped in solid basalt stone, representing the point where Lord Vishnu pressed the demon Gayasur under the earth.",
      history: "Placing Pindas directly on the footprint ensures that the ancestors' souls are directly received by Lord Vishnu."
    },
    {
      name: "Akshay Vat",
      desc: "The eternal Banyan tree that survives all cosmic destruction (Pralaya). It is here that pilgrims perform the final concluding pinda offering.",
      history: "Sita Devi blessed this tree with immortality, and offerings made here permanently seal the ancestor's journey to heaven."
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative py-24 bg-gradient-to-b from-[#faf8f5]/60 to-[#f3ebd8]/80 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.05), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-semibold uppercase tracking-widest block mb-3 animate-pulse"
          >
            Spiritual Significance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c1a04] mb-6 leading-tight"
          >
            Why Perform Pind Daan in Gaya?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Understand the immense scriptural power of Gaya Ji, the holy land blessed by Lord Vishnu, where ancestral souls find final liberation (Moksha).
          </motion.p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#b17a20] uppercase tracking-wider block mb-2">Sacred Pilgrimage</span>
              <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">Gaya: The Eternal Center for Pitru Karya</h2>
              <p className="text-sm text-[#5c4a37] leading-relaxed">
                In Hindu theology, Gaya is designated as the most sacred place on Earth for performing post-death rites (Shraddh and Pind Daan). The scriptures describe Gaya as the body of the demon Gayasur, who was purified by Lord Vishnu and granted a boon: anyone who performs ancestral rites here will achieve immediate salvation for their forefathers.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#efe9de] rounded-xl shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#b17a20]">
                <FileText className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-[#2c1a04]">What the Scriptures Say</h3>
              </div>
              <p className="text-xs text-[#5c4a37] leading-relaxed">
                The <strong>Garuda Purana</strong> states: <em>&quot;By offering even a single pinda in Gaya, one&apos;s ancestors are immediately freed from hellish realms and travel to the divine realm of Pitru Loka.&quot;</em> The <strong>Vayu Purana</strong> devotes several chapters explaining that any food or water offered to ancestors in Gaya becomes inexhaustible, bringing permanent satisfaction to their souls.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3">Devotees from India and Abroad</h3>
              <p className="text-sm text-[#5c4a37] leading-relaxed">
                Every year, millions of pilgrims—including NRI families from the US, UK, Canada, and Southeast Asia—travel to Gaya. Whether performing these rites in-person or remotely via our online digital coordination, devotees seek to clear ancestral debt (Pitru Rina) and resolve family blockages.
              </p>
            </div>
          </div>

          {/* Right Highlights Panel */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="bg-white text-[#2c1a04] p-8 rounded-2xl border border-[#efe9de] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl" />
              <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#b17a20]" />
                The Holy Gaya Trinity
              </h3>
              
              <div className="space-y-6">
                {sacredSpots.map((spot, idx) => (
                  <div key={idx} className="border-b border-[#efe9de] pb-4 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-[#2c1a04] mb-1.5">{spot.name}</h4>
                    <p className="text-xs text-[#5c4a37] leading-relaxed mb-1">{spot.desc}</p>
                    <span className="text-[10px] text-[#b17a20] font-semibold block">{spot.history}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Premium Cards */}
      <section className="py-24 bg-white border-y border-[#efe9de]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Why It Matters</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04] mb-4">
              Benefits of Pind Daan in Gaya
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
            <p className="text-sm text-[#7c6954]">
              Here are the spiritual and material blessings described in Vedic literature that descend upon the family when ancestral rites are performed authentically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-xl border border-[#efe9de] bg-[#faf8f5]/40 hover:bg-[#faf8f5] hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                <div className="text-3xl mb-4 w-12 h-12 rounded-lg bg-white border border-[#efe9de] group-hover:bg-[#b17a20] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-2 group-hover:text-[#b17a20] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#5c4a37] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Booking Banner */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white text-[#2c1a04] p-12 rounded-3xl border border-[#efe9de] shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
          
          <Sparkles className="w-8 h-8 text-[#b17a20] mx-auto mb-6 animate-pulse" />
          
          <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
            Perform Rites with Verified Gayawal Pandits
          </h2>
          <p className="text-sm text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
            Ensure your offerings are made in strict compliance with the Gotra requirements and Vedic scriptures. Talk to our coordinators to schedule in-person or remote video rituals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-now" 
              className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Book Ritual Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] hover:border-[#b17a20]/30 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
