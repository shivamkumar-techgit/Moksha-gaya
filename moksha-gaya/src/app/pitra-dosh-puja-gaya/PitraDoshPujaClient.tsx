"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Flame, Calendar, ShieldCheck, MapPin, Landmark, Droplet, Clock, HelpCircle, Check, BookOpen, AlertTriangle
} from "lucide-react";

export default function PitraDoshPujaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const symptoms = [
    { title: "Hindered Career Growth", desc: "Frequent, inexplicable setbacks in professional life, promotions, or business failures despite hard work." },
    { title: "Family Disputes", desc: "Constant, recurring conflicts among family members, marital disharmony, or difficulty in finding a life partner." },
    { title: "Health issues & Delays", desc: "Chronic, undiagnosed medical issues affecting lineage or recurring delays in family expansion (Vansh Vridhi)." }
  ];

  const steps = [
    {
      title: "1. Sacred Bath (Snan)",
      desc: "Purification by bathing in the sacred waters of the Falgu River to cleanse the physical body before performing the karmic rituals."
    },
    {
      title: "2. Lineage Sankalp",
      desc: "An authorized Gayawal Pandit guides the devotee to recite ancient Sanskrit mantras declaring their name, gotra, and ancestral list to anchor the ritual's energy."
    },
    {
      title: "3. Pitru Tarpan & Havan",
      desc: "Offering black sesame seeds, barley flour, and water, followed by a specific fire ritual (Havan) to burn away ancestral debts."
    },
    {
      title: "4. Pind Arpan on Footprint",
      desc: "Placing spherical pindas directly onto the sacred footprints of Lord Vishnu inside the Vishnupad Temple for direct salvation."
    },
    {
      title: "5. Brahmin Bhoj",
      desc: "Concluding the ceremony by feeding Vedic Brahmins and offering charity (Dakshina) to finalize the lineage cleansing."
    }
  ];

  const faqs = [
    {
      q: "What is Pitru Dosha and how does it manifest?",
      a: "Pitru Dosha is a karmic imbalance in a person's birth chart resulting from the unsatisfied souls of departed ancestors. It often manifests as obstacles in career growth, persistent health issues, delayed marriage, financial distress, or frequent family conflicts."
    },
    {
      q: "Why is Gaya the ultimate place for Pitra Dosh Nivaran Puja?",
      a: "Gaya is scripturally recognized as the body of Gayasur, blessed by Lord Vishnu to grant salvation to any soul for whom rituals are performed here. Conducting Pitru Dosh Puja at the footprints of Lord Vishnu (Vishnupad) or Falgu River provides instant liberation to ancestor souls, removing the Dosha."
    },
    {
      q: "What is the best time to perform Pitra Dosh Puja in Gaya?",
      a: "The annual Pitru Paksha period (September-October) is the most auspicious time. Apart from that, performing the puja on any Amavasya (new moon day), solar/lunar eclipse days, or during the transit of Sun into Sagittarius or Pisces is highly beneficial."
    },
    {
      q: "How long does the Pitra Dosh Puja take in Gaya?",
      a: "The puja usually takes between 3 to 4 hours. It includes purificatory baths, Sankalp, specific fire offerings (Havan), Pind Arpan on the footprints of Lord Vishnu, and concluding Brahmin Bhojan."
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
            Ancestral Remedial Rituals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c1a04] mb-6 leading-tight"
          >
            Pitra Dosh Puja in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-3xl mx-auto leading-relaxed"
          >
            Resolve ancestral debt, remove negative astrological blockages, and secure permanent peace for your lineage with authorized Vedic Pandits at Vishnupad Temple, Gaya.
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
              Book Pitra Dosh Puja
            </Link>
            <a 
              href="#what-is-it" 
              className="px-8 py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Read Full Guide
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-28">

        {/* Section 1: What is Pitra Dosh? */}
        <section id="what-is-it" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              Section 01
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              What is Pitra Dosh?
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                In Hindu cosmology and astrology, <strong>Pitra Dosh</strong> represents a deep-seated spiritual obligation or karmic debt that descendants inherit from their forefathers. When ancestors pass away with unfulfilled desires, sudden trauma, or without undergoing correct Vedic post-death rituals, their souls remain bound to the earthly atmosphere. This trapped energy manifests as a planetary curse in the birth charts of their living descendants.
              </p>
              <p>
                Vedic scriptures like the <em>Garuda Purana</em> describe Pitra Dosh as a major cosmic imbalance. Because the souls of ancestors fail to reach the Pitru Loka (ancestral sphere) or obtain rebirth, they suffer from spiritual hunger and restlessness. This restlessness creates a backflow of negative vibrations that directly affects the progress, prosperity, and mental peace of the family descendants.
              </p>
              <p>
                Performing a dedicated <strong>Pitra Dosh Nivaran Puja</strong> is the only method to dissolve this debt. By offering specialized mantras, sacred fire (Havan), and rice balls (Pinda), you satisfy the ancestors' hunger and help them transit to the higher spiritual realms, converting their curses into active blessings.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#efe9de] shadow-xs space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Common Symptoms of Pitra Dosh
            </h3>
            <div className="space-y-4 pt-2">
              {symptoms.map((item, idx) => (
                <div key={idx} className="border-b border-[#efe9de] pb-3 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-xs text-[#2c1a04]">{item.title}</h4>
                  <p className="text-[11px] text-[#5c4a37] mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Why Gaya is Important */}
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
              Why Perform Pitra Dosh Puja in Gaya?
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                Gaya holds an supreme status among all places in India for performing ancestor salvation rites. In the <em>Vayu Purana</em>, Gaya is described as the sacred body of the demon Gayasur, who performed severe penance. Pleased with his devotion, Lord Vishnu granted him a boon that anyone who performs Shradh, Havan, or Pind Daan on his body will secure instant salvation (Moksha) for their ancestors.
              </p>
              <p>
                The presence of the <strong>Vishnupad Temple</strong>, which houses the physical footprint of Lord Vishnu stamped in black basalt stone, makes Gaya a powerful spiritual portal. Offering prayers and pindas directly on this footprint ensures that the ancestor souls are accepted into the direct protection of Lord Vishnu (Vaikuntha), releasing the descendant from any inherited planetary blocks.
              </p>
              <p>
                Moreover, the subterranean <strong>Falgu River</strong> provides sand and holy water representing Sita Devi's blessings. Doing Pitra Dosh rituals on its banks provides absolute purificatory effects, ensuring that even souls who underwent unnatural or sudden demises are completely pacified.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Puja Procedure */}
        <section id="procedure" className="py-12 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 03</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Step-by-Step Puja Procedure
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#efe9de] shadow-2xs relative flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2c1a04] mb-3">{step.title}</h4>
                  <p className="text-[11px] text-[#5c4a37] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Auspicious Timings */}
        <section id="timings" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              Section 04
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Auspicious Muhurats &amp; Timings
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                Astrologically, Pitru Dosh puja yields the best results when performed during specific planetary alignments. The 15-day fortnight of <strong>Pitru Paksha</strong> (September-October) is the most powerful time of the year, as the cosmic gateway between the human and ancestral realms is believed to open fully.
              </p>
              <p>
                If you cannot perform the puja during Pitru Paksha, you can choose any monthly <strong>Amavasya</strong> (new moon day) or perform the rites during solar or lunar eclipses. Our coordinators and verified Gayawal Pandas analyze your birth chart to suggest the best personalized dates for performing this remedial puja.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#efe9de] shadow-xs text-left">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#b17a20]" />
              Recommended Windows
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Annual Pitru Paksha (Bhadrapada/Ashwin Month)</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>All Monthly Amavasya (New Moon) Days</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Solar and Lunar Eclipse Windows</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Transit of Sun in Sagittarius (Dhanu) &amp; Pisces (Meen)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Why Choose Gaya Rituals */}
        <section id="why-us" className="py-12 scroll-mt-20 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 05</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Why Choose Gaya Rituals?
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">1</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">Certified Pandas</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">Direct connection to authorized Gayawal Pandas who verify ancestral logs in historical Bahi Khatas.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">2</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">Customized Remedial Puja</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">Puja materials and mantra alignments are customized specifically to resolve your birth chart's Pitru Dosha factors.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">3</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">End-to-End Travel Care</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">Clean accommodations, premium transport to all Vedis, and VIP fast-track permits inside the main temples.</p>
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

        {/* Section 6: Frequently Asked Questions */}
        <section id="faq" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 06</span>
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
            Resolve Pitru Karma &amp; Remove Astrological Obstacles
          </h2>
          <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
            Pre-book your Pitra Dosh Puja slots with verified Gayawal Pandas. To guarantee your session, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> or <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for detailed coordination. You can also <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link> for all procedural instructions.
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
