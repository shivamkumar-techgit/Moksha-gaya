"use client";

import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { saveLead, getEnquiryWhatsAppUrl } from "@/utils/leads";
import Link from "next/link";

function BookNowWizard() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const placeParam = searchParams.get("place");

  const ritualMap: Record<string, string> = {
    "pind-daan": "Pind Daan Puja",
    "shraddh-karma": "Shraddh Karma",
    "tarpan": "Tarpan Ritual",
    "narayan-bali": "Narayan Bali Ritual",
    "tripindi-shraddh": "Tripindi Shraddh",
    "online-pind-daan": "Online Pind Daan"
  };
  const matchedRitual = serviceParam ? ritualMap[serviceParam] : undefined;

  const placeMap: Record<string, string> = {
    "vishnupad-temple": "Vishnupad Temple",
    "falgu-river": "Falgu River",
    "akshay-vat": "Akshay Vat",
    "pretshila": "Pretshila Hill",
    "ramshila": "Ramshila Hill"
  };
  const matchedPlace = placeParam ? placeMap[placeParam] : undefined;

  const [step, setStep] = useState(1);
  const [refId, setRefId] = useState("");
  const [formData, setFormData] = useState({
    ritual: matchedRitual || "Pind Daan Puja",
    devoteeName: "",
    phone: "",
    email: "",
    gotra: "",
    ancestorName: "",
    package: "Traditional",
    date: "",
    additionalInfo: matchedPlace ? `Planned at: ${matchedPlace}. ` : ""
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLead = saveLead({
      name: formData.devoteeName,
      phone: formData.phone,
      email: formData.email || undefined,
      ritual: formData.ritual,
      package: formData.package,
      date: formData.date,
      additionalInfo: `Gotra: ${formData.gotra || "N/A"}. Ancestor: ${formData.ancestorName || "N/A"}. ${formData.additionalInfo || ""}`
    });
    setRefId(newLead.id);
    setStep(4); // Success step

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
    if (typeof window !== "undefined") {
      const whatsappUrl = getEnquiryWhatsAppUrl(newLead.id, formData.devoteeName, formData.ritual);
      window.open(whatsappUrl, "_blank");
    }
  };

  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3, ease: "easeIn" as const } }
  };

  return (
    <div className="bg-[#faf8f5] py-20 min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-12">
            <div className="flex justify-between items-center text-xs font-bold text-[#b17a20] uppercase tracking-wider mb-3">
              <span className={step >= 1 ? "text-[#b17a20]" : "text-[#9c8974]"}>1. Select Ritual</span>
              <span className={step >= 2 ? "text-[#b17a20]" : "text-[#9c8974]"}>2. Devotee Details</span>
              <span className={step >= 3 ? "text-[#b17a20]" : "text-[#9c8974]"}>3. Package &amp; Date</span>
            </div>
            <div className="w-full h-1 bg-[#efe9de] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#b17a20] transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Wizard Container */}
        <div className="bg-white rounded-2xl border border-[#efe9de] p-8 md:p-10 shadow-sm min-h-[480px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04] mb-2">Select Your Ritual</h2>
                <p className="text-xs text-[#7c6954] mb-8">Choose the ancestral puja or spiritual service you wish to book.</p>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: "Pind Daan Puja", desc: "Ancestral salvation offering performed at Vishnupad, Falgu, and Akshay Vat." },
                    { name: "Shraddh Karma", desc: "Annual traditional rites performed with Vedic discipline." },
                    { name: "Tarpan Ritual", desc: "Water and sesame seed offering rituals." },
                    { name: "Narayan Bali Ritual", desc: "Specialized Garuda Purana puja for severe Pitru Dosha and accidental deaths." },
                    { name: "Tripindi Shraddh", desc: "Rituals to remove obstacles from multiple ancestral lineages." },
                    { name: "Online Pind Daan", desc: "Remote live video ritual participation for NRI & distant families." }
                  ].map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, ritual: item.name });
                        nextStep();
                      }}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col ${
                        formData.ritual === item.name
                          ? "border-[#b17a20] bg-[#faf8f5] shadow-xs"
                          : "border-[#efe9de] hover:border-[#b17a20]/30 hover:bg-[#faf8f5]/20"
                      }`}
                    >
                      <span className="font-serif font-bold text-[#2c1a04] text-base mb-1">{item.name}</span>
                      <span className="text-xs text-[#7c6954]">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04] mb-2">Devotee Information</h2>
                <p className="text-xs text-[#7c6954] mb-8">Provide details about yourself and family lineage/gotra for custom vow-taking (Sankalp).</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.devoteeName}
                      onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Gotra (If known)</label>
                      <input
                        type="text"
                        value={formData.gotra}
                        onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                        placeholder="e.g. Kashyap, Shandilya"
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Departed Ancestor Name (Optional)</label>
                      <input
                        type="text"
                        value={formData.ancestorName}
                        onChange={(e) => setFormData({ ...formData, ancestorName: e.target.value })}
                        placeholder="Ancestor's name"
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-[#faf8f5]">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-3 border border-[#e2d6c3] rounded-full text-xs font-bold uppercase tracking-widest text-[#2c1a04] hover:bg-[#faf6f0] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!formData.devoteeName || !formData.phone}
                      onClick={nextStep}
                      className="flex-1 py-3 bg-[#b17a20] hover:bg-[#2c1a04] disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <form onSubmit={handleSubmit}>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04] mb-2">Choose Package &amp; Date</h2>
                  <p className="text-xs text-[#7c6954] mb-8">Select your service package tier and preferred tentative date for the puja.</p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-3">Service Package</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { name: "Essential", price: "₹ 5,100" },
                          { name: "Traditional", price: "₹ 11,500" },
                          { name: "Complete Family", price: "Quotation" }
                        ].map((pkg) => (
                          <button
                            key={pkg.name}
                            type="button"
                            onClick={() => setFormData({ ...formData, package: pkg.name })}
                            className={`p-4 rounded-xl border text-center transition-all ${
                              formData.package === pkg.name
                                ? "border-[#b17a20] bg-[#faf8f5] shadow-xs"
                                : "border-[#efe9de] hover:border-[#b17a20]/30 hover:bg-[#faf8f5]/20"
                            }`}
                          >
                            <span className="block font-bold text-sm text-[#2c1a04]">{pkg.name}</span>
                            <span className="block text-xs text-[#b17a20] font-serif font-semibold mt-1">{pkg.price}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Tentative Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Additional Instructions / Requests (Optional)</label>
                      <textarea
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        placeholder="Specific dietary requirements, travel support details, etc..."
                        className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-lg text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-[#faf8f5]">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 py-3 border border-[#e2d6c3] rounded-full text-xs font-bold uppercase tracking-widest text-[#2c1a04] hover:bg-[#faf6f0] transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md"
                      >
                        Request Booking
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#f8f1e5] border border-[#b17a20]/30 text-[#b17a20] text-3xl flex items-center justify-center mx-auto mb-6">
                  📿
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04] mb-4">Request Submitted Successfully</h2>
                <p className="text-sm text-[#5c4a37] leading-relaxed max-w-md mx-auto mb-8">
                  Pranam, <strong>{formData.devoteeName}</strong>. Your booking enquiry for <strong>{formData.ritual} ({formData.package} Package)</strong> has been recorded. 
                </p>
                <div className="bg-[#faf8f5] rounded-xl border border-[#efe9de] p-6 text-left text-xs text-[#7c6954] space-y-2.5 max-w-md mx-auto mb-8">
                  <p><strong>Reference ID:</strong> {refId}</p>
                  <p><strong>Gotra:</strong> {formData.gotra || "Not specified"}</p>
                  <p><strong>Tentative Date:</strong> {formData.date}</p>
                  <p><strong>Contact phone:</strong> {formData.phone}</p>
                  <p className="border-t border-[#efe9de]/50 pt-2 text-[#b17a20] font-semibold text-center">
                    A personal coordinator will call you back within 2-4 hours.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={getEnquiryWhatsAppUrl(refId, formData.devoteeName, formData.ritual)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2"
                  >
                    💬 Send to WhatsApp
                  </a>
                  <Link 
                    href="/" 
                    className="px-8 py-3.5 bg-transparent hover:bg-stone-100 border border-[#e2d6c3] text-[#2c1a04] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
                  >
                    Return to Home Page
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function BookNowPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#faf8f5] text-stone-600">Loading booking wizard...</div>}>
      <BookNowWizard />
    </Suspense>
  );
}
