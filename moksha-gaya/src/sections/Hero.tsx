"use client";

import React from "react";
import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 4, x: "12%", y: "85%", duration: 16, delay: 0 },
  { id: 2, size: 6, x: "28%", y: "90%", duration: 24, delay: 2 },
  { id: 3, size: 3, x: "42%", y: "78%", duration: 19, delay: 5 },
  { id: 4, size: 5, x: "58%", y: "88%", duration: 26, delay: 1 },
  { id: 5, size: 4, x: "72%", y: "96%", duration: 22, delay: 3 },
  { id: 6, size: 7, x: "88%", y: "82%", duration: 30, delay: 6 },
  { id: 7, size: 3, x: "18%", y: "65%", duration: 18, delay: 4 },
  { id: 8, size: 5, x: "38%", y: "55%", duration: 25, delay: 7 },
  { id: 9, size: 6, x: "68%", y: "45%", duration: 23, delay: 2 },
  { id: 10, size: 4, x: "92%", y: "75%", duration: 21, delay: 8 },
  { id: 11, size: 5, x: "8%", y: "98%", duration: 25, delay: 3 },
  { id: 12, size: 3, x: "52%", y: "35%", duration: 19, delay: 9 }
];

const MandalaSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full text-[#b17a20] fill-none stroke-current" strokeWidth="0.5">
    <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="85" />
    <circle cx="100" cy="100" r="60" strokeDasharray="1 4" strokeWidth="1" />
    <circle cx="100" cy="100" r="40" />
    <circle cx="100" cy="100" r="20" strokeDasharray="2 2" />
    
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI) / 4;
      const x1 = 100 + 90 * Math.cos(angle);
      const y1 = 100 + 90 * Math.sin(angle);
      const x2 = 100 - 90 * Math.cos(angle);
      const y2 = 100 - 90 * Math.sin(angle);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.3" />
      );
    })}

    {Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * Math.PI) / 3;
      const cx = 100 + 30 * Math.cos(angle);
      const cy = 100 + 30 * Math.sin(angle);
      return (
        <circle key={i} cx={cx} cy={cy} r="30" opacity="0.4" />
      );
    })}
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#faf8f5] overflow-hidden pt-24 pb-16">
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-orange-100/20 blur-3xl pointer-events-none -z-10" 
      />

      {/* Floating Vedic Gold Sparks */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#b17a20]/25 pointer-events-none -z-10"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
          animate={{
            y: [50, -250],
            x: [0, 15, -15, 0],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Left Subtle Rotating Mandala */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ ease: "linear", duration: 240, repeat: Infinity }}
        className="absolute -top-10 -left-10 w-[35%] aspect-square -z-10 pointer-events-none opacity-[0.04]"
      >
        <MandalaSVG />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left flex flex-col items-start"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f3ebd8] text-[#8c5e1b] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs border border-[#e8dcc4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b17a20]" />
              Moksha Begins With Sacred Remembrance
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2c1a04] mb-6 leading-[1.15]">
              Perform Sacred Ancestral Rituals with Authentic Guidance in <span className="text-[#b17a20] relative inline-block">Gaya</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base md:text-lg text-[#5c4a37] mb-8 max-w-2xl font-sans leading-relaxed">
              Authentic ancestral rituals, professional pilgrimage assistance, and spiritual guidance in Gaya, Bihar. Managed with utmost devotion and traditional Vedic accuracy.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <a
                href="#packages"
                className="px-8 py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                Book a Ritual
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 text-center"
              >
                Speak With a Coordinator
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#5c4a37] border-t border-[#ebdcc7]/60 pt-6 w-full">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 text-[10px]">★★★★★</span>
                <span className="font-semibold text-[#2c1a04]">Trusted by Families Across India</span>
              </div>
              <span className="hidden sm:inline text-[#ebdcc7]">•</span>
              <div>
                <span className="font-bold text-[#b17a20]">1500+</span> <span className="font-semibold text-[#2c1a04]">Rituals Coordinated</span>
              </div>
              <span className="hidden sm:inline text-[#ebdcc7]">•</span>
              <div>
                <span className="font-bold text-[#b17a20]">20+ Years</span> <span className="font-semibold text-[#2c1a04]">Traditional Expertise</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Framed Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Rotating Mandala Halo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 180, repeat: Infinity }}
              className="absolute w-[130%] h-[130%] -z-10 pointer-events-none opacity-[0.08]"
            >
              <MandalaSVG />
            </motion.div>
            
            {/* Luxury Picture Frame */}
            <div className="relative p-3 bg-white border border-[#efe9de] rounded-2xl shadow-xl max-w-sm sm:max-w-md overflow-hidden">
              {/* Outer gold border accent */}
              <div className="absolute inset-0 border-[3px] border-[#b17a20]/30 rounded-2xl pointer-events-none m-1.5" />
              <img 
                src="/images/gallery/ritual-ai1.png" 
                alt="Sacred Ritual in Gaya" 
                className="w-full h-auto object-cover rounded-xl aspect-[4/5] object-center filter sepia-[0.1] hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Small floating card badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white border border-[#efe9de] rounded-xl p-4 shadow-lg hidden sm:flex items-center gap-3 animate-fade-in"
            >
              <div className="w-10 h-10 rounded-full bg-[#f8f1e5] flex items-center justify-center text-xl">
                🙏
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-[#b17a20] uppercase tracking-wider">Garuda Purana</p>
                <p className="text-xs font-bold text-[#2c1a04]">Authentic Vedic Sankalp</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mini Trust Factor Badges */}
        <div className="mt-20 pt-10 border-t border-[#ebdcc7]/60 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl text-left">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-sm text-[#2c1a04]">100% Authentic</h4>
              <p className="text-xs text-[#7c6954]">Vedic Ritual Rites</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-sm text-[#2c1a04]">Verified Pandits</h4>
              <p className="text-xs text-[#7c6954]">Experienced &amp; Certified</p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-sm text-[#2c1a04]">Transparent Pricing</h4>
              <p className="text-xs text-[#7c6954]">No Hidden Charges</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: "ellipse(60% 100% at 50% 100%)"
      }} />
    </section>
  );
}
