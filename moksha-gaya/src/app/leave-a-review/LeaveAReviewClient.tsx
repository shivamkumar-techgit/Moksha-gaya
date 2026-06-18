"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Star, Copy, Check, ExternalLink, MessageSquare, ThumbsUp, Heart, Award, ArrowRight, Info
} from "lucide-react";

export default function LeaveAReviewClient() {
  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<number | null>(null);
  const [reviewLinkUsed, setReviewLinkUsed] = useState(false);

  const targetKeywords = [
    { word: "Pind Daan", desc: "Ancestral rice-ball offerings" },
    { word: "Gaya", desc: "The holy city of Moksha" },
    { word: "Vishnupad Temple", desc: "Sacred footprint of Lord Vishnu" },
    { word: "Shraddha", desc: "Vedic rites for ancestors" },
    { word: "Pandit", desc: "Vedic priest coordinator" }
  ];

  const templates = [
    {
      id: 1,
      title: "Detailed Ritual Experience",
      text: "Our family completed the Pind Daan and Shraddha rituals in Gaya under the authentic guidance of the Gaya Rituals Pandit. The arrangements at the Vishnupad Temple and Falgu River were seamless, providing us with immense peace and satisfaction."
    },
    {
      id: 2,
      title: "Vedic Pandit & Arrangements Review",
      text: "Highly recommend Gaya Rituals for performing Shraddha and Pind Daan in Gaya. The Pandit assigned was very experienced and explained each ritual step clearly. Excellent arrangements near Vishnupad Temple."
    }
  ];

  const copyToClipboard = (text: string, type: "keyword" | "template", indexOrWord: any) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "keyword") {
        setCopiedKeyword(indexOrWord);
        setTimeout(() => setCopiedKeyword(null), 2000);
      } else {
        setCopiedTemplate(indexOrWord);
        setTimeout(() => setCopiedTemplate(null), 2000);
      }
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const googleReviewUrl = "https://search.google.com/local/writereview?query=Gaya+Rituals+Gaya";

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen font-sans pb-24 pt-12">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-[#faf8f5] to-[#f3ebd8]/60 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.06), transparent)" }} />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="flex justify-center gap-1.5 text-[#b17a20] mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              >
                <Star className="w-7 h-7 fill-current" />
              </motion.div>
            ))}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-extrabold text-[#2c1a04] mb-6 leading-tight"
          >
            Share Your Sacred Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-2xl mx-auto leading-relaxed"
          >
            Thank you for trusting Gaya Rituals to coordinate your ancestral rites. Even 20–30 genuine reviews make a huge difference in helping other families find verified Vedic guides.
          </motion.p>
        </div>
      </section>

      {/* Main Form/Guide Section */}
      <div className="container mx-auto px-6 max-w-3xl mt-12">
        <div className="bg-white rounded-3xl border border-[#efe9de] shadow-xl p-8 md:p-12 space-y-12 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/3 rounded-full blur-3xl" />
          
          {/* Section 1: Target Keywords */}
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center font-bold text-sm">1</span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#2c1a04]">
                Target SEO Keywords
              </h2>
            </div>
            
            <p className="text-xs text-[#5c4a37] leading-relaxed">
              Google ranks profiles higher when client reviews contain specific local terms. Click any of the key terms below to copy it instantly to your clipboard:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {targetKeywords.map((item) => {
                const isCopied = copiedKeyword === item.word;
                return (
                  <button
                    key={item.word}
                    onClick={() => copyToClipboard(item.word, "keyword", item.word)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-24 ${
                      isCopied 
                        ? "border-[#b17a20] bg-[#faf8f5] shadow-xs" 
                        : "border-[#efe9de] bg-white hover:border-[#b17a20]/40 hover:bg-[#faf8f5]/50 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="font-serif font-bold text-sm text-[#2c1a04]">{item.word}</span>
                      <span className="shrink-0 text-[#b17a20]">
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-3.5 h-3.5 opacity-60 hover:opacity-100" />}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8e7b68] leading-tight mt-2">{item.desc}</span>
                    {isCopied && (
                      <span className="absolute bottom-1 right-2 text-[9px] text-[#b17a20] font-semibold tracking-wider uppercase">
                        Copied!
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-[#efe9de]" />

          {/* Section 2: Review Templates */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center font-bold text-sm">2</span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#2c1a04]">
                Choose a Review Template
              </h2>
            </div>
            
            <p className="text-xs text-[#5c4a37]">
              Feel free to use or modify one of these pre-drafted templates that naturally integrate our key SEO keywords:
            </p>

            <div className="space-y-6">
              {templates.map((tpl) => {
                const isCopied = copiedTemplate === tpl.id;
                return (
                  <div 
                    key={tpl.id}
                    className="p-6 rounded-2xl border border-[#efe9de] bg-white space-y-4 hover:border-[#b17a20]/30 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-serif font-bold text-sm text-[#2c1a04]">{tpl.title}</h4>
                      <button
                        onClick={() => copyToClipboard(tpl.text, "template", tpl.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                          isCopied 
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-[#f8f1e5] hover:bg-[#b17a20] text-[#b17a20] hover:text-white border border-transparent"
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy Template
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#efe9de]/60 text-xs text-[#5c4a37] leading-relaxed italic">
                      {/* Dynamically highlight keywords in the text preview */}
                      {tpl.text.split(/(Pind Daan|Gaya|Vishnupad Temple|Shraddha|Pandit)/g).map((part, i) => {
                        const isKeyword = ["Pind Daan", "Gaya", "Vishnupad Temple", "Shraddha", "Pandit"].includes(part);
                        return isKeyword ? (
                          <strong key={i} className="text-[#b17a20] font-bold not-italic">{part}</strong>
                        ) : (
                          part
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="border-[#efe9de]" />

          {/* Section 3: Call to Action */}
          <div className="text-center space-y-6">
            <div className="flex items-center gap-3 justify-center mb-2">
              <span className="w-8 h-8 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center font-bold text-sm">3</span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#2c1a04]">
                Leave Your Review on Google
              </h2>
            </div>
            
            <p className="text-xs text-[#5c4a37] max-w-lg mx-auto leading-relaxed">
              Clicking the button below will open our Google Business Profile review window in a new tab. Paste the template or write your custom feedback there.
            </p>

            <div className="pt-2">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setReviewLinkUsed(true)}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Write Review on Google
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {reviewLinkUsed && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] max-w-md mx-auto flex gap-2 text-left"
              >
                <ThumbsUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Thank you so much!</p>
                  <p className="mt-0.5 opacity-90">Your feedback means the world to us and helps devotees globally make informed decisions. May your ancestors be blessed! 🙏</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Helpful Writing Tips */}
        <div className="mt-8 bg-[#f8f5f0]/70 border border-[#efe9de] rounded-2xl p-6 text-left space-y-4">
          <h4 className="font-serif font-bold text-sm text-[#2c1a04] flex items-center gap-2">
            <Info className="w-4 h-4 text-[#b17a20]" />
            What makes a helpful review?
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-xs text-[#5c4a37] leading-relaxed">
            <li>Mention the specific ritual performed (e.g., <strong>Pind Daan</strong> or <strong>Shraddha</strong>).</li>
            <li>Highlight the helpfulness and Vedic knowledge of our <strong>Pandit</strong>.</li>
            <li>Describe your experience at specific locations like the <strong>Vishnupad Temple</strong> or the Falgu River in <strong>Gaya</strong>.</li>
            <li>Share details about the cleanliness, arrangements, or lodging coordinates provided.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
