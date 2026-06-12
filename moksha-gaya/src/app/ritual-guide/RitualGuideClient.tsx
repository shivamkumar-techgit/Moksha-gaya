"use client";

import React, { useState } from "react";
import { ritualGuides } from "@/data/ritualGuides";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Send 
} from "lucide-react";
import { saveLead, getEnquiryWhatsAppUrl, openWhatsApp } from "@/utils/leads";

export default function RitualEncyclopediaPage() {
  const [activeTab, setActiveTab] = useState(0);
  const currentGuide = ritualGuides[activeTab] || ritualGuides[0];

  // Lead Form state
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
      ritual: currentGuide.title,
      package: "Encyclopedia Enquiry",
      date: formData.date || new Date().toISOString().split("T")[0],
      additionalInfo: `Requested ritual guidance from Encyclopedia: ${currentGuide.title}`
    });

    setRefId(newLead.id);
    setIsBooked(true);

    // Trigger Email API (non-blocking)
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

    // Open WhatsApp link in new tab automatically
    const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, formData.name, currentGuide.title);
    openWhatsApp(whatsappUrl);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">
            Ritual Knowledge Center
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Vedic Ritual Encyclopedia
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-sm text-[#5c4a37]">
            A comprehensive guide to ancestral rites, pujas, and devotional services performed in Gaya. Explore the scriptural significance, Vedic procedures, and spiritual benefits of each ritual.
          </p>
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Navigation Tabs (Sidebar style) */}
          <div className="lg:col-span-4 bg-white border border-[#efe9de] rounded-2xl p-5 shadow-xs lg:sticky lg:top-24">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 pb-3 border-b border-[#efe9de] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#b17a20]" />
              Explore Rituals
            </h3>
            
            {/* Tab Links */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none shrink-0">
              {ritualGuides.map((guide, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={guide.slug}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsBooked(false);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal text-left w-auto lg:w-full shrink-0 ${
                      isActive
                        ? "bg-[#2c1a04] text-white shadow-xs"
                        : "text-[#5c4a37] hover:bg-[#faf8f5] hover:text-[#b17a20] bg-white border border-[#efe9de] lg:border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base">{guide.icon}</span>
                      <span>{guide.category}</span>
                    </div>
                    <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform ${isActive ? "text-[#b17a20] translate-x-1" : "text-[#7c6954]/45"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                
                {/* Title & Overview Card */}
                <div className="bg-white border border-[#efe9de] rounded-2xl p-8 md:p-10 shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-2xl text-[#b17a20] mb-2 block">{currentGuide.icon}</span>
                  <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
                    {currentGuide.title}
                  </h2>
                  <p className="text-sm text-[#5c4a37] leading-relaxed mb-6 font-medium">
                    {currentGuide.introduction}
                  </p>
                  <div className="p-5 bg-[#faf8f5] rounded-xl border border-[#efe9de]/70">
                    <h4 className="font-serif text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Overview</h4>
                    <p className="text-xs text-[#7c6954] leading-relaxed">{currentGuide.overview}</p>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Best Time */}
                  <div className="bg-white border border-[#efe9de] p-5 rounded-xl flex gap-4 items-start shadow-xs">
                    <Calendar className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Best Time to Perform</h4>
                      <p className="text-xs text-[#7c6954] leading-relaxed">{currentGuide.bestTime}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-white border border-[#efe9de] p-5 rounded-xl flex gap-4 items-start shadow-xs">
                    <Clock className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Ritual Duration</h4>
                      <p className="text-xs text-[#7c6954] leading-relaxed">{currentGuide.duration}</p>
                    </div>
                  </div>

                  {/* Who Should Perform */}
                  <div className="bg-white border border-[#efe9de] p-5 rounded-xl flex gap-4 items-start shadow-xs">
                    <User className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Eligible Performers</h4>
                      <p className="text-xs text-[#7c6954] leading-relaxed">{currentGuide.whoShouldPerform}</p>
                    </div>
                  </div>

                  {/* Related Places */}
                  <div className="bg-white border border-[#efe9de] p-5 rounded-xl flex gap-4 items-start shadow-xs">
                    <MapPin className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-1">Related Sacred Places</h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {currentGuide.relatedSacredPlaces.map((place, pIdx) => (
                          <span key={pIdx} className="px-2 py-1 rounded bg-[#faf8f5] border border-[#efe9de] text-[10px] text-[#7c6954] font-medium">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Significance Card */}
                <div className="bg-white border border-[#efe9de] rounded-2xl p-8 shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b17a20]" />
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3">Spiritual Significance</h3>
                  <p className="text-sm text-[#7c6954] leading-relaxed">{currentGuide.significance}</p>
                </div>

                {/* Step-by-Step Procedure */}
                <div className="bg-white border border-[#efe9de] rounded-2xl p-8 shadow-xs">
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-6">Procedure &amp; Vedic Steps</h3>
                  <div className="relative pl-6 border-l border-[#efe9de] space-y-6 ml-3">
                    {currentGuide.procedure.map((step, sIdx) => (
                      <div key={sIdx} className="relative">
                        <span className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-[#f8f1e5] border-2 border-[#b17a20] text-[#b17a20] font-bold text-[10px] flex items-center justify-center">
                          {sIdx + 1}
                        </span>
                        <p className="text-sm text-[#7c6954] leading-relaxed pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-white border border-[#efe9de] rounded-2xl p-8 shadow-xs">
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-6">Key Spiritual Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentGuide.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="p-4 rounded-xl border border-[#efe9de] bg-[#faf8f5]/30 flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#b17a20] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#7c6954] leading-relaxed font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA & Link buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#enquiry-section"
                    className="flex-1 text-center py-4 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300 cursor-pointer"
                  >
                    Enquire for {currentGuide.category}
                  </a>
                  <Link
                    href={`/ritual-guide/${currentGuide.slug}`}
                    className="flex-1 text-center py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                  >
                    Read In-Depth Guide
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Contextual Lead Enquiry Form */}
            <div id="enquiry-section" className="bg-[#2c1a04] text-[#d6cdb8] rounded-3xl border border-[#b17a20]/30 p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/10 rounded-full blur-3xl" />
              
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Enquire About {currentGuide.category}
              </h2>
              <p className="text-xs text-[#a39785] mb-8 leading-relaxed">
                Connect with our local Gayawal Acharyas to coordinate gotra-specific rituals. Fill out this quick form, and we will contact you shortly.
              </p>

              {isBooked ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center text-emerald-400 space-y-3">
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <h3 className="font-bold text-white">Pranam, Submission Received!</h3>
                  <p className="text-xs">
                    Your request for {currentGuide.title} has been logged. Reference ID: <span className="font-bold">{refId}</span>.
                    <br />A Vedic coordinator will contact you shortly.
                  </p>
                  <a
                    href={getEnquiryWhatsAppUrl(refId, formData.name, currentGuide.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                        Devotee Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-[#1c1917] border border-[#efe9de]/20 focus:border-[#b17a20] rounded-lg text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                        Mobile Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-3 bg-[#1c1917] border border-[#efe9de]/20 focus:border-[#b17a20] rounded-lg text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 bg-[#1c1917] border border-[#efe9de]/20 focus:border-[#b17a20] rounded-lg text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                        Tentative Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1c1917] border border-[#efe9de]/20 focus:border-[#b17a20] rounded-lg text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#b17a20] hover:bg-white text-white hover:text-[#2c1a04] text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
