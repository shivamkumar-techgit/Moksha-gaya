"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories as categories } from "@/data/faq";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Have Questions?</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Find answers to common questions about ancestral rituals, travel coordination, pricing, and our online services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 border-b border-[#efe9de] pb-6">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setOpenIndex(0); // reset open item
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-[#b17a20] text-white shadow-sm"
                  : "bg-[#faf8f5] text-[#5c4a37] hover:bg-[#efe8db]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {categories[activeCategory].items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-[#efe9de] rounded-xl overflow-hidden bg-[#faf8f5]/40 hover:bg-[#faf8f5] transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 text-[#2c1a04]"
                >
                  <span className="font-serif font-bold text-lg md:text-xl">
                    {item.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#efe9de] text-[#b17a20] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[#5c4a37] leading-relaxed border-t border-[#efe9de]/50">
                        <p className="mt-4">{item.a}</p>
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
  );
}
