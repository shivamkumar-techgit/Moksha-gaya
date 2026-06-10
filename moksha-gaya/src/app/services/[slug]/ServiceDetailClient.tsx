"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { saveLead, getEnquiryWhatsAppUrl, openWhatsApp } from "@/utils/leads";
import Link from "next/link";

interface Section {
  title: string;
  bodyLines: string[];
}

interface OtherItem {
  title: string;
  slug: string;
  image: string;
}

interface ServiceDetailClientProps {
  slug: string;
  metadata: Record<string, string>;
  sections: Section[];
  image: string;
  otherItems: OtherItem[];
}

const particles = [
  { id: 1, size: 3, x: "15%", y: "80%", duration: 18, delay: 0 },
  { id: 2, size: 5, x: "30%", y: "90%", duration: 25, delay: 1 },
  { id: 3, size: 2, x: "45%", y: "75%", duration: 20, delay: 3 },
  { id: 4, size: 4, x: "60%", y: "85%", duration: 28, delay: 2 },
  { id: 5, size: 3, x: "75%", y: "95%", duration: 22, delay: 4 },
  { id: 6, size: 5, x: "90%", y: "80%", duration: 32, delay: 5 }
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
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.3" />;
    })}
    {Array.from({ length: 6 }).map((_, i) => {
      const angle = (i * Math.PI) / 3;
      const cx = 100 + 30 * Math.cos(angle);
      const cy = 100 + 30 * Math.sin(angle);
      return <circle key={i} cx={cx} cy={cy} r="30" opacity="0.4" />;
    })}
  </svg>
);

function renderTextWithMarkdown(text: string) {
  let html = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="/book-now" class="text-[#b17a20] font-bold hover:underline">$1</a>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function ServiceDetailClient({
  metadata,
  sections,
  image,
  otherItems
}: ServiceDetailClientProps) {
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
      ritual: metadata.title || "Pind Daan Ritual",
      package: "Traditional",
      date: formData.date || new Date().toISOString().split("T")[0],
      additionalInfo: `Requested ritual consultation for service: ${metadata.title || "Unknown"}`
    });
    
    setRefId(newLead.id);
    setIsBooked(true);

    // Trigger Email API in the background (non-blocking)
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

    // Open WhatsApp link in a new tab automatically
    const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, newLead.name, `Ritual: ${metadata.title || "Service"}`);
    openWhatsApp(whatsappUrl);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen pb-24">
      {/* Immersive Dark Banner Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden bg-[#1c1917] text-white">
        {/* Blurred Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={metadata.title} 
            className="w-full h-full object-cover opacity-35 filter sepia-[0.15] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#1c1917]/75 to-[#1c1917]/40 z-10" />
        </div>

        {/* Ambient Moving Orbs */}
        <motion.div 
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none z-10"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 180, repeat: Infinity }}
          className="absolute -right-24 -bottom-24 w-96 h-96 opacity-15 pointer-events-none text-[#b17a20] z-10"
        >
          <MandalaSVG />
        </motion.div>

        {/* Floating Sparks */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#b17a20]/30 pointer-events-none z-10"
            style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
            animate={{ y: [0, -150], opacity: [0, 0.7, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}

        {/* Hero Content */}
        <div className="container mx-auto px-6 max-w-6xl pb-12 relative z-20">
          {/* Breadcrumb */}
          <div className="text-xs text-[#a39785] mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{metadata.service_name || metadata.title}</span>
          </div>

          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2"
            >
              Vedic Ancestral Ritual
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {metadata.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-[#d6cdb8] max-w-2xl leading-relaxed"
            >
              {metadata.short_description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Layout Grid */}
      <section className="container mx-auto px-6 max-w-6xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Parsed Content */}
          <div className="lg:col-span-8 space-y-10">
            {sections.map((sec, idx) => {
              if (!sec) return null;
              if (sec.title.toLowerCase() === "hero section") return null;

              const isAbout = sec.title.toLowerCase().includes("about");
              const isSignificance = sec.title.toLowerCase().includes("significance");
              const isProcess = sec.title.toLowerCase().includes("process");
              const isTestimonial = sec.title.toLowerCase().includes("testimonial");
              const isInclusions = sec.title.toLowerCase().includes("included") || sec.title.toLowerCase().includes("inclusion");
              const isFeatures = sec.title.toLowerCase().includes("key features") || sec.title.toLowerCase().includes("remote participation") || sec.title.toLowerCase().includes("benefit");

              // 1. About / Spiritual Significance Block
              if (isAbout || isSignificance) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
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

              // 2. Timeline Process Block
              if (isProcess) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                  >
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-8 pb-3 border-b border-[#faf8f5]">
                      {sec.title}
                    </h2>
                    <div className="relative pl-6 md:pl-8 border-l border-[#efe9de] space-y-8 ml-3">
                      {sec.bodyLines.map((line, lIdx) => {
                        const isOrdered = /^\d+\.\s/.test(line);
                        const displayNum = isOrdered ? line.match(/^(\d+)\.\s/)?.[1] : lIdx + 1;
                        const displayText = isOrdered ? line.replace(/^\d+\.\s+/, "") : line;

                        return (
                          <div key={lIdx} className="relative group">
                            {/* Circle Pin */}
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

              // 3. Remote Features / Benefits Grid Block
              if (isFeatures) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                  >
                    <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-6">
                      {sec.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sec.bodyLines.map((line, lIdx) => {
                        const isBullet = line.startsWith("*") || line.startsWith("-");
                        const cleanLine = isBullet ? line.substring(1).trim() : line;
                        
                        const titleMatch = cleanLine.match(/^\*\*(.*?)\*\*(.*)/);
                        const title = titleMatch ? titleMatch[1] : "";
                        const description = titleMatch ? titleMatch[2].replace(/^:\s*/, "") : cleanLine;

                        let emoji = "✨";
                        const lowerTitle = title.toLowerCase();
                        if (lowerTitle.includes("video call")) emoji = "📹";
                        else if (lowerTitle.includes("real-time") || lowerTitle.includes("participation")) emoji = "🤝";
                        else if (lowerTitle.includes("recorded") || lowerTitle.includes("recording")) emoji = "💾";
                        else if (lowerTitle.includes("pandit") || lowerTitle.includes("priest")) emoji = "🕉️";
                        else if (lowerTitle.includes("nri")) emoji = "🌍";

                        return (
                          <div key={lIdx} className="p-6 rounded-xl border border-[#efe9de] bg-[#faf8f5]/40 hover:bg-[#faf8f5] hover:border-[#b17a20]/30 transition-all duration-300 group/feat flex gap-4">
                            <span className="text-3xl shrink-0 select-none group-hover/feat:scale-105 transition-transform duration-300">
                              {emoji}
                            </span>
                            <div>
                              <h3 className="font-serif font-bold text-base text-[#2c1a04] mb-1 group-hover/feat:text-[#b17a20] transition-colors">
                                {title || "Feature"}
                              </h3>
                              <p className="text-xs text-[#7c6954] leading-relaxed">
                                {renderTextWithMarkdown(description)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }

              // 4. Inclusions Grid Block
              if (isInclusions) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
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
                            <span className="text-[#b17a20] text-lg font-bold">🛕</span>
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

              // 4. Testimonial / Quote Block
              if (isTestimonial) {
                return (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    key={idx} 
                    className="bg-[#1c1917] text-[#d6cdb8] rounded-2xl p-8 md:p-10 shadow-xl border border-[#b17a20]/30 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 text-[#b17a20] pointer-events-none">
                      <MandalaSVG />
                    </div>
                    <span className="text-5xl text-[#b17a20] font-serif block mb-2 leading-none opacity-50">“</span>
                    <div className="font-serif italic text-base md:text-lg text-white mb-6 leading-relaxed relative z-10">
                      {sec.bodyLines.map((line, lIdx) => (
                        <p key={lIdx}>{renderTextWithMarkdown(line.replace(/^>\s+/, ""))}</p>
                      ))}
                    </div>
                    <div className="w-10 h-0.5 bg-[#b17a20] mb-3" />
                    <span className="text-xs uppercase font-bold tracking-widest text-[#b17a20]">Client Experience</span>
                  </motion.div>
                );
              }

              // Default standard block fallback
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={idx} 
                  className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-xs"
                >
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
            })}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Booking Form Card */}
            <div className="bg-white rounded-2xl border border-[#efe9de] p-8 shadow-sm relative overflow-hidden border-t-4 border-t-[#b17a20]">
              <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-2">Book This Ritual</h3>
              <p className="text-xs text-[#7c6954] mb-6">
                Fill details to speak directly with an expert Gayawal Vedic Coordinator.
              </p>

              {isBooked ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f8f1e5] text-[#b17a20] text-xl flex items-center justify-center mx-auto mb-4 border border-[#b17a20]/20">
                    🙏
                  </div>
                  <h4 className="font-serif font-bold text-[#2c1a04] text-lg mb-2">Enquiry Submitted</h4>
                  <p className="text-xs text-[#7c6954] leading-relaxed mb-4">
                    Pranam. Your request for {metadata.title || "this ritual"} on {formData.date || "preferred date"} has been received.
                    <br/><span className="text-[#b17a20] font-bold">Reference ID: {refId}</span>
                    <br/>We will contact you within 2-4 hours.
                  </p>
                  <a
                    href={getEnquiryWhatsAppUrl(refId, formData.name, metadata.title || "Ritual")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
                  >
                    💬 Send to WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter mobile number"
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Tentative Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md mt-4"
                  >
                    Request Consultation
                  </button>
                </form>
              )}
            </div>

            {/* Promises Box */}
            <div className="bg-[#faf8f5] rounded-2xl border border-[#efe9de] p-8">
              <h4 className="font-serif text-base font-bold text-[#2c1a04] mb-4 pb-2 border-b border-[#efe9de]">
                Moksha Gaya Promise
              </h4>
              <ul className="space-y-4 text-xs text-[#5c4a37]">
                <li className="flex items-start gap-3">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <p>100% Scriptural Rites under Garuda Purana guidelines.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <p>Certified, verified local Gayawal Vedic Acharyas.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#b17a20] font-bold">✓</span>
                  <p>Complete price transparency with zero hidden Dakshinas.</p>
                </li>
              </ul>
            </div>

            {/* Other Services Recommendations */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#2c1a04] pl-1">Other Rites</h4>
              <div className="space-y-3">
                {otherItems.map((item, index) => (
                  <Link 
                    key={index} 
                    href={`/services/${item.slug}`}
                    className="flex items-center gap-3 p-3 bg-white hover:bg-[#faf8f5] border border-[#efe9de] rounded-xl transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm font-bold text-[#2c1a04] truncate group-hover:text-[#b17a20] transition-colors">{item.title}</p>
                      <p className="text-[10px] text-[#7c6954]">View Details</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
