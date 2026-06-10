"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { saveLead, getEnquiryWhatsAppUrl, openWhatsApp } from "@/utils/leads";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ritual: "Pind Daan Puja",
    message: ""
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
      ritual: formData.ritual,
      package: "Traditional", // default package for contact page
      date: new Date().toISOString().split("T")[0],
      additionalInfo: formData.message || undefined
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
    const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, formData.name, formData.ritual);
    openWhatsApp(whatsappUrl);
  };

  const contactInfo = [
    {
      title: "Phone Support",
      value: (
        <span className="block space-y-1">
          <a href="tel:+917070719993" className="hover:text-[#2c1a04] hover:underline transition-all block">+91 70707 19993</a>
          <a href="tel:+919905852715" className="hover:text-[#2c1a04] hover:underline transition-all block">+91 99058 52715</a>
          <a href="tel:+917277948658" className="hover:text-[#2c1a04] hover:underline transition-all block">+91 72779 48658</a>
        </span>
      ),
      desc: "Call us to speak with a verified coordinator immediately.",
      icon: "📞"
    },
    {
      title: "WhatsApp Support",
      value: (
        <span className="block space-y-1">
          <a href="https://wa.me/917070719993" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c1a04] hover:underline transition-all block">+91 70707 19993</a>
          <a href="https://wa.me/919905852715" target="_blank" rel="noopener noreferrer" className="hover:text-[#2c1a04] hover:underline transition-all block">+91 99058 52715</a>
        </span>
      ),
      desc: "Message us for quick assistance and ritual booking details.",
      icon: "💬"
    },
    {
      title: "Email Address",
      value: (
        <a href="mailto:mokshagaya@gmail.com" className="hover:text-[#2c1a04] hover:underline transition-all block">mokshagaya@gmail.com</a>
      ),
      desc: "For NRIs, corporate queries, or documentation uploads.",
      icon: "📧"
    },
    {
      title: "Main Office",
      value: "Nawagarhi, {Anpurna Niwas - Pd. Sidhnath ji Dubhaliya}, Gaya ji, Bihar - 823001",
      desc: "Our primary physical coordination office in Gaya.",
      icon: "📍"
    }
  ];

  return (
    <div className="bg-[#faf8f5] py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Connect With Us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2c1a04] mb-6">
            Speak with a Coordinator
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            We are here to assist you with every aspect of your spiritual journey to Gaya. Send us an inquiry, and our team will get in touch with you shortly.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#efe9de] p-8 shadow-xs hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4 w-12 h-12 rounded-lg bg-[#faf8f5] border border-[#efe9de] flex items-center justify-center text-[#b17a20]">
                  {info.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-1">{info.title}</h3>
                <p className="text-sm font-semibold text-[#b17a20] mb-2">{info.value}</p>
                <p className="text-xs text-[#7c6954] leading-relaxed">{info.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#f8f1e5] border border-[#b17a20]/30 text-[#b17a20] text-3xl flex items-center justify-center mx-auto mb-6">
                  📿
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04] mb-4">Request Submitted Successfully</h2>
                <p className="text-sm text-[#5c4a37] leading-relaxed max-w-md mx-auto mb-8">
                  Pranam, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.ritual}</strong> has been registered.
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
                    href={getEnquiryWhatsAppUrl(refId, formData.name, formData.ritual)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2"
                  >
                    💬 Send to WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", ritual: "Pind Daan Puja", message: "" });
                    }}
                    className="px-8 py-3.5 bg-transparent hover:bg-stone-100 border border-[#e2d6c3] text-[#2c1a04] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-2">Send an Enquiry</h2>
                <p className="text-xs text-[#7c6954] mb-8">
                  Fill in your details below. A dedicated coordinator will contact you to explain the ritual procedure and provide custom quotes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Your Name</label>
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
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter number"
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email"
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Ritual of Interest</label>
                      <select
                        value={formData.ritual}
                        onChange={(e) => setFormData({ ...formData, ritual: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      >
                        <option>Pind Daan Puja</option>
                        <option>Shraddh Karma</option>
                        <option>Tarpan Ritual</option>
                        <option>Narayan Bali Ritual</option>
                        <option>Tripindi Shraddh</option>
                        <option>Online Pind Daan</option>
                        <option>Other / Travel Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Message or Gotra Details (Optional)</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details of gotra, family lineage, or specific travel needs..."
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Google Maps Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-16 bg-white rounded-2xl border border-[#efe9de] p-4 md:p-6 shadow-sm overflow-hidden"
        >
          <div className="mb-4 pl-2">
            <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-1">Our Location in Gaya</h3>
            <p className="text-xs text-[#7c6954]">{"Office: Nawagarhi, {Anpurna Niwas - Pd. Sidhnath ji Dubhaliya}, Gaya ji, Bihar - 823001"}</p>
          </div>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-[#efe9de]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5901243171353!2d85.00898517596001!3d24.775200378036204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3299712a44139%3A0xe108bc59e5170d10!2sVishnupad%20Temple!5e0!3m2!1sen!2sin!4v1717529450000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full filter sepia-[0.15] contrast-[0.95] hover:sepia-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
