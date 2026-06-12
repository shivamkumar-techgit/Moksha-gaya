"use client";

import React, { useState } from "react";
import { ritualGuides } from "@/data/ritualGuides";
import Link from "next/link";
import { BookOpen, Calendar, Mail, Phone, User, CheckCircle2, ChevronRight } from "lucide-react";
import { saveLead } from "@/utils/leads";

export default function RitualGuideDetailPage({ slug }: { slug: string }) {
  // Find current guide
  const currentGuide = ritualGuides.find((g) => g.slug === slug);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!currentGuide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
        <div className="text-center p-8 bg-white border border-[#efe9de] rounded-2xl max-w-sm shadow-md">
          <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-3">Guide Not Found</h2>
          <p className="text-sm text-[#7c6954] mb-6">The requested ritual guide does not exist or has been relocated.</p>
          <Link href="/" className="px-6 py-2.5 bg-[#b17a20] text-white text-xs font-bold uppercase tracking-widest rounded-full">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Save lead to local storage
      const newLead = saveLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || undefined,
        ritual: currentGuide.title,
        package: "Standard Guidance",
        date: formData.date || new Date().toISOString().split("T")[0],
        additionalInfo: formData.additionalInfo || `Enquiry from Ritual Guide page: ${currentGuide.title}`
      });

      // Submit lead to our API route for email notifications
      const response = await fetch("/api/send-email", {
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
      });

      if (!response.ok) {
        throw new Error("Failed to send email notifications. Lead saved in database.");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", date: "", additionalInfo: "" });
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-[#efe9de] rounded-2xl p-6 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 pb-3 border-b border-[#efe9de] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#b17a20]" />
                Ritual Guides
              </h3>
              <nav className="flex flex-col gap-2">
                {ritualGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/ritual-guide/${guide.slug}`}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      guide.slug === slug
                        ? "bg-[#2c1a04] text-white shadow-xs"
                        : "text-[#5c4a37] hover:bg-[#faf8f5] hover:text-[#b17a20]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span>{guide.icon}</span>
                      <span>{guide.category}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${guide.slug === slug ? "text-[#b17a20]" : "text-[#7c6954]/50"}`} />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Main Content Panel */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Guide Header Banner */}
            <div className="bg-white border border-[#efe9de] rounded-2xl p-8 md:p-10 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#b17a20]/15 text-[#b17a20] px-3 py-1 rounded-full mb-4 inline-block">
                Ritual Knowledge Center
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04] mb-4">
                {currentGuide.title}
              </h1>
              <p className="text-base text-[#5c4a37] leading-relaxed mb-6 font-medium">
                {currentGuide.introduction}
              </p>
              <div className="w-24 h-1 bg-[#b17a20]" />
            </div>

            {/* Detailed Guide Content Sections */}
            <div className="space-y-8">
              {currentGuide.sections.map((section, idx) => (
                <div key={idx} className="bg-white border border-[#efe9de] rounded-2xl p-8 shadow-xs">
                  <h2 className="font-serif text-2xl font-bold text-[#2c1a04] mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#b17a20] rounded-full" />
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((para, pIdx) => (
                      <p key={pIdx} className="text-sm text-[#7c6954] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contextual Lead Enquiry Form */}
            <div id="enquiry-form" className="bg-[#2c1a04] text-[#d6cdb8] rounded-3xl border border-[#b17a20]/30 p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/10 rounded-full blur-3xl" />
              
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Enquire About {currentGuide.category}
              </h2>
              <p className="text-xs text-[#a39785] mb-8 leading-relaxed">
                Connect with our local Gayawal Acharyas to coordinate gotra-specific rituals. Fill out this quick form, and we will contact you shortly.
              </p>

              {submitSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center text-emerald-400 space-y-3">
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <h3 className="font-bold text-white">Pranam, Submission Received!</h3>
                  <p className="text-xs">Your inquiry has been successfully registered. Our Vedic coordinator will reach out to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl p-4 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#b17a20]" />
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
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#b17a20]" />
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
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#b17a20]" />
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
                      <label className="block text-[10px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#b17a20]" />
                        Tentative Ritual Date
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
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#b17a20] hover:bg-white text-white hover:text-[#2c1a04] text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Request..." : `Enquire for ${currentGuide.category} Now`}
                  </button>
                </form>
              )}
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
