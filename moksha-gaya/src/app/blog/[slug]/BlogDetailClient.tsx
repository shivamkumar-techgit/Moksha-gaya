"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { saveLead, getEnquiryWhatsAppUrl, openWhatsApp } from "@/utils/leads";
import { Calendar, Clock, ChevronRight, HelpCircle, Send } from "lucide-react";

interface Section {
  title: string;
  bodyLines: string[];
}

interface OtherItem {
  title: string;
  slug: string;
  image: string;
  category: string;
}

interface BlogDetailClientProps {
  slug: string;
  metadata: Record<string, string>;
  sections: Section[];
  otherItems: OtherItem[];
}

function renderTextWithMarkdown(text: string) {
  let html = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  
  // Custom link parser supporting external paths or internal booking
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, (match, linkText, url) => {
    let targetUrl = url;
    if (url.includes("Book Now") || url.includes("book-now")) {
      targetUrl = "/book-now";
    } else if (url.includes("Contact Us") || url.includes("contact")) {
      targetUrl = "/contact";
    }
    return `<a href="${targetUrl}" class="text-[#b17a20] font-bold hover:underline">${linkText}</a>`;
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function BlogDetailClient({
  metadata,
  sections,
  otherItems
}: BlogDetailClientProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });
  const [isBooked, setIsBooked] = useState(false);
  const [refId, setRefId] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead = saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      ritual: metadata.title || "Blog Inquiry",
      package: "Blog Page Consultation",
      date: formData.date || new Date().toISOString().split("T")[0],
      additionalInfo: `Inquired from Blog Post: ${metadata.title}`
    });

    setRefId(newLead.id);
    setIsBooked(true);

    // Trigger Email API in the background
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leadId: newLead.id,
        name: newLead.name,
        phone: newLead.phone,
        email: newLead.email,
        ritual: newLead.ritual,
        package: newLead.package,
        date: newLead.date,
        additionalInfo: newLead.additionalInfo
      })
    }).catch(err => console.error("Error triggering email dispatch:", err));

    // Open WhatsApp link automatically
    const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, newLead.name, metadata.title || "Ritual");
    openWhatsApp(whatsappUrl);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-24">
      {/* Article Title & Cover Header */}
      <section className="bg-white border-b border-[#efe9de]/60 pt-16 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Breadcrumbs */}
          <div className="text-xs text-[#9c8974] mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#b17a20] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-[#b17a20] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#2c1a04] font-medium max-w-[200px] sm:max-w-xs md:max-w-md truncate">
              {metadata.title}
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#9c8974]">
              <span className="px-2.5 py-1 rounded bg-[#f8f1e5] text-[#b17a20] font-semibold">
                {metadata.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {metadata.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {metadata.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c1a04] leading-tight">
              {metadata.title}
            </h1>
            
            <p className="text-[#5c4a37] text-base md:text-lg leading-relaxed max-w-3xl">
              {metadata.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cover Image */}
      <div className="container mx-auto px-6 max-w-6xl -mt-6 relative z-10">
        <div className="h-[40vh] min-h-[300px] md:h-[50vh] rounded-3xl overflow-hidden shadow-lg border border-[#efe9de]/60 bg-stone-100">
          <img 
            src={metadata.image || "/images/gallery/ritual-ai2.png"} 
            alt={metadata.title}
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Content Columns Layout */}
      <section className="container mx-auto px-6 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Article Column */}
          <div className="lg:col-span-8 space-y-10">
            {sections.map((sec, idx) => {
              const lowerTitle = sec.title.toLowerCase();

              const isOverview = lowerTitle.includes("overview");
              const isImportance = lowerTitle.includes("importance") || lowerTitle.includes("significance");
              const isProcedure = lowerTitle.includes("procedure") || lowerTitle.includes("process");
              const isBenefits = lowerTitle.includes("benefit");
              const isFAQs = lowerTitle.includes("faq");
              const isCTA = lowerTitle.includes("call to action") || lowerTitle.includes("cta");

              // 1. Overview / Introduction / Importance Block
              if (isOverview || isImportance) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b17a20]" />
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-6">
                      {sec.title}
                    </h2>
                    <div className="space-y-4 text-sm md:text-base text-[#5c4a37] leading-relaxed">
                      {sec.bodyLines.map((line, lIdx) => (
                        <p key={lIdx}>{renderTextWithMarkdown(line)}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // 2. Procedure / Steps Block
              if (isProcedure) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                  >
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-8 pb-3 border-b border-[#efe9de]/50">
                      {sec.title}
                    </h2>
                    <div className="relative pl-6 md:pl-8 border-l border-[#efe9de] space-y-8 ml-3">
                      {sec.bodyLines.map((line, lIdx) => {
                        const isOrdered = /^\d+\.\s/.test(line);
                        const displayNum = isOrdered ? line.match(/^(\d+)\.\s/)?.[1] : lIdx + 1;
                        const displayText = isOrdered ? line.replace(/^\d+\.\s+/, "") : line;

                        return (
                          <div key={lIdx} className="relative group">
                            <span className="absolute -left-[38px] md:-left-[46px] top-0 w-6 h-6 rounded-full bg-[#f8f1e5] border-2 border-[#b17a20] text-[#b17a20] font-bold text-[10px] flex items-center justify-center group-hover:bg-[#b17a20] group-hover:text-white transition-colors duration-300">
                              {displayNum}
                            </span>
                            <div className="bg-[#faf8f5]/40 rounded-xl p-5 border border-[#efe9de]/70 group-hover:border-[#efe9de] group-hover:bg-[#faf8f5] transition-all duration-300">
                              <p className="text-sm md:text-base text-[#5c4a37] leading-relaxed">
                                {renderTextWithMarkdown(displayText)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }

              // 3. Benefits Block
              if (isBenefits) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                  >
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-6">
                      {sec.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sec.bodyLines.map((line, lIdx) => {
                        const cleanLine = line.replace(/^[\*\-\+]\s+/, "");
                        return (
                          <div key={lIdx} className="flex gap-4 p-4 rounded-xl border border-[#efe9de]/70 bg-[#faf8f5]/20 hover:bg-[#faf8f5]/60 hover:border-[#efe9de] transition-colors duration-300">
                            <span className="text-[#b17a20] text-lg font-bold">✨</span>
                            <p className="text-sm text-[#5c4a37] leading-relaxed pt-0.5">
                              {renderTextWithMarkdown(cleanLine)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }

              // 4. FAQs Block
              if (isFAQs) {
                // Group by QA pairs
                const qaPairs: Array<{ q: string; a: string }> = [];
                let currentQ = "";
                let currentA = "";

                sec.bodyLines.forEach((line) => {
                  if (line.startsWith("### Q:") || line.startsWith("Q:")) {
                    if (currentQ) qaPairs.push({ q: currentQ, a: currentA });
                    currentQ = line.replace(/^(### Q:|Q:)\s*/, "");
                    currentA = "";
                  } else if (line.startsWith("### A:") || line.startsWith("A:")) {
                    currentA = line.replace(/^(### A:|A:)\s*/, "");
                  } else {
                    currentA += (currentA ? "\n" : "") + line;
                  }
                });
                if (currentQ) qaPairs.push({ q: currentQ, a: currentA });

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                  >
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-8 flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-[#b17a20]" />
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {qaPairs.map((pair, pIdx) => (
                        <div key={pIdx} className="p-6 rounded-xl border border-[#efe9de] bg-[#faf8f5]/30 hover:bg-white hover:shadow-sm transition-all duration-300">
                          <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-3 flex items-start gap-2">
                            <span className="text-[#b17a20] font-bold">Q.</span>
                            <span>{pair.q}</span>
                          </h3>
                          <div className="text-sm text-[#7c6954] leading-relaxed pl-5 border-l-2 border-[#b17a20]/25">
                            {renderTextWithMarkdown(pair.a)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // 5. Call To Action Block
              if (isCTA) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    key={idx}
                    className="bg-[#2c1a04] text-[#d6cdb8] rounded-2xl p-8 md:p-10 shadow-lg border border-[#b17a20]/30 relative overflow-hidden"
                  >
                    <h2 className="font-serif text-2xl font-bold text-white mb-4">
                      {sec.title}
                    </h2>
                    <div className="space-y-6">
                      {sec.bodyLines.map((line, lIdx) => {
                        const isLinkBlock = line.startsWith("[") && line.includes("](");
                        if (isLinkBlock) {
                          // Clean layout for buttons
                          return (
                            <div key={lIdx} className="pt-2 flex flex-wrap gap-4">
                              {renderTextWithMarkdown(line)}
                            </div>
                          );
                        }
                        return <p key={lIdx} className="text-sm md:text-base leading-relaxed text-[#d6cdb8]">{renderTextWithMarkdown(line)}</p>;
                      })}
                    </div>
                  </motion.div>
                );
              }

              // Fallback standard text
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs">
                  <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-6">
                    {sec.title}
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-[#5c4a37] leading-relaxed">
                    {sec.bodyLines.map((line, lIdx) => (
                      <p key={lIdx}>{renderTextWithMarkdown(line)}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Lead Booking Form */}
            <div className="bg-white rounded-2xl border border-[#efe9de] p-6 shadow-sm border-t-4 border-t-[#b17a20]">
              <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-2">Speak With Coordinator</h3>
              <p className="text-xs text-[#7c6954] mb-6">
                Receive gotra-specific advice and customized pricing guidelines for Gaya rituals.
              </p>

              {isBooked ? (
                <div className="text-center py-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] text-lg flex items-center justify-center mx-auto mb-3">
                    🙏
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#2c1a04] mb-1">Enquiry Received</h4>
                  <p className="text-[10px] text-[#7c6954] mb-4">
                    Reference ID: <span className="font-bold text-[#b17a20]">{refId}</span>
                  </p>
                  <a
                    href={getEnquiryWhatsAppUrl(refId, formData.name, metadata.title || "Blog")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm inline-flex items-center justify-center gap-1.5"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-[9px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full px-3 py-2 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-xs text-[#2c1a04] focus:outline-none focus:border-[#b17a20]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="w-full px-3 py-2 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-xs text-[#2c1a04] focus:outline-none focus:border-[#b17a20]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Date of Visit</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-xs text-[#2c1a04] focus:outline-none focus:border-[#b17a20]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm inline-flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Request Contact
                  </button>
                </form>
              )}
            </div>

            {/* Recommended Posts */}
            {otherItems.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-serif text-base font-bold text-[#2c1a04] pl-1">Related Articles</h4>
                <div className="space-y-3">
                  {otherItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={`/blog/${item.slug}`}
                      className="flex items-center gap-3 p-3 bg-white hover:bg-[#faf8f5] border border-[#efe9de] rounded-xl transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-xs font-bold text-[#2c1a04] truncate group-hover:text-[#b17a20] transition-colors">{item.title}</p>
                        <p className="text-[9px] text-[#9c8974] mt-0.5">{item.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Promise Box */}
            <div className="bg-[#faf8f5] rounded-2xl border border-[#efe9de] p-6">
              <h4 className="font-serif text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-3 pb-2 border-b border-[#efe9de]">
                Moksha Gaya Promise
              </h4>
              <ul className="space-y-3 text-[11px] text-[#7c6954]">
                <li className="flex items-start gap-2">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <span>100% scriptural guidance under Vedic Acharyas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <span>Complete price transparency with zero hidden dakshina.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <span>Respectful support for elderly &amp; NRI families.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
