"use client";

import React, { useState } from "react";
import { saveLead, getEnquiryWhatsAppUrl, openWhatsApp } from "@/utils/leads";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Pind Daan Ritual",
    date: "",
    requirements: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const newLead = saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || undefined,
      ritual: formData.service,
      package: "Traditional", // default package
      date: formData.date || new Date().toISOString().split("T")[0],
      additionalInfo: formData.requirements || undefined
    });

    setRefId(newLead.id);
    setSubmitted(true);

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
    const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, newLead.name, newLead.ritual);
    openWhatsApp(whatsappUrl);
  };

  return (
    <section 
      id="book" 
      className="py-24 text-white relative overflow-hidden"
      style={{ backgroundImage: "radial-gradient(circle at center, #3a2205, #1a0e02)" }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }} />
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {/* Decorative Lotus Icon / Symbol Placeholder */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-amber-400 mb-6 backdrop-blur-md border border-white/10">
          <span className="text-3xl">🕉️</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Begin Your Sacred Journey Today
        </h2>

        {/* Supporting text */}
        <p className="text-lg text-amber-100/80 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
          Connect with our experienced coordinators and receive personal, scriptural guidance for Pind Daan, Shraddh, or other sacred family rituals in Gaya.
        </p>

        {/* Interactive Booking Enquiry Form (Inline) */}
        <div className="bg-white rounded-2xl p-8 md:p-10 text-left max-w-2xl mx-auto shadow-2xl border border-white/10 text-zinc-950">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#f8f1e5] border border-[#b17a20]/30 text-[#b17a20] text-3xl flex items-center justify-center mx-auto mb-6">
                📿
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2c1a04] mb-4">Request Submitted Successfully</h3>
              <p className="text-sm text-[#5c4a37] leading-relaxed max-w-md mx-auto mb-8">
                Pranam, <strong>{formData.name}</strong>. Your ritual enquiry has been recorded.
              </p>
              <div className="bg-[#faf8f5] rounded-xl border border-[#efe9de] p-6 text-left text-xs text-[#7c6954] space-y-2.5 max-w-md mx-auto mb-8">
                <p><strong>Reference ID:</strong> {refId}</p>
                <p><strong>Contact phone:</strong> {formData.phone}</p>
                <p className="border-t border-[#efe9de]/50 pt-2 text-[#b17a20] font-semibold text-center">
                  A personal coordinator will contact you shortly on WhatsApp or phone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={getEnquiryWhatsAppUrl(refId, formData.name, formData.service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2"
                >
                  💬 Send to WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", service: "Pind Daan Ritual", date: "", requirements: "" });
                  }}
                  className="px-8 py-3.5 bg-transparent hover:bg-stone-100 border border-[#e2d6c3] text-[#2c1a04] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-[#2c1a04] mb-2 text-center">Submit a Ritual Enquiry</h3>
              <p className="text-xs text-[#7c6954] mb-8 text-center">Our team will call you within 24 hours to guide you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma" 
                      className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@gmail.com" 
                      className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 7070719993" 
                      className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Required Service</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all"
                      required
                    >
                      <option value="Pind Daan Ritual">Pind Daan Ritual</option>
                      <option value="Shraddh Karma">Shraddh Karma</option>
                      <option value="Tarpan Ritual">Tarpan Ritual</option>
                      <option value="Narayan Bali Puja">Narayan Bali Puja</option>
                      <option value="Tripindi Shraddh">Tripindi Shraddh</option>
                      <option value="Online Pind Daan">Online Pind Daan</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5c4a37] mb-2">Any Specific Requirements / Ancestor Names</label>
                  <textarea 
                    rows={3}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Mention Gotra, location preferred, or names of ancestors if you'd like..." 
                    className="w-full px-4 py-3 rounded-lg border border-[#efe9de] focus:outline-hidden focus:border-[#b17a20] text-sm text-[#2c1a04] bg-[#faf8f5]/50 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Submit Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
