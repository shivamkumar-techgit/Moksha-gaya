"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  const posts = [
    {
      title: "The Sacred Importance of Gaya in the Garuda Purana",
      excerpt: "Uncover what ancient Hindu scriptures say about Gaya, the footprints of Lord Vishnu, and why it holds supreme power for ancestral liberation.",
      date: "May 28, 2026",
      category: "Scriptures",
      readTime: "5 min read",
      image: "/images/gallery/ritual-ai2.png"
    },
    {
      title: "A Step-by-Step Guide to Performing Pind Daan",
      excerpt: "If you are planning your first trip to Gaya for ancestral rituals, this comprehensive breakdown explains what to expect, from Sankalp to Brahman Bhoj.",
      date: "May 15, 2026",
      category: "Guides",
      readTime: "8 min read",
      image: "/images/rituals/pinddan-image1.jpg"
    },
    {
      title: "Understanding Pitru Dosha & Remedies in Vedic Astrology",
      excerpt: "Learn how ancestral afflictions are identified in your horoscope, their impact on family life, and how specialized rituals like Narayan Bali resolve them.",
      date: "May 02, 2026",
      category: "Vedic Astrology",
      readTime: "6 min read",
      image: "/images/rituals/pinddan-image16.jpg"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="bg-[#faf8f5] py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Spiritual Knowledge</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2c1a04] mb-6">
            Spiritual Wisdom &amp; Guidance
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Read through articles, detailed scripture references, and checklists to understand the significance of rituals performed in Gaya.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post, idx) => (
            <motion.article 
              key={idx} 
              variants={cardVariants}
              className="bg-white rounded-xl border border-[#efe9de] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-108"
                  />
                </div>

                <div className="p-8">
                  {/* Meta details */}
                  <div className="flex items-center gap-3 text-xs text-[#9c8974] mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#f8f1e5] text-[#b17a20] font-semibold">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 hover:text-[#b17a20] transition-colors duration-300">
                    <a href="#">{post.title}</a>
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-sm text-[#7c6954] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read area */}
              <div className="px-8 pb-8 pt-0 flex items-center justify-between mt-auto">
                <span className="text-xs text-[#9c8974]">{post.readTime}</span>
                <a 
                  href="#"
                  className="text-xs font-bold uppercase tracking-wider text-[#b17a20] hover:text-[#8c5e1b] transition-colors group/btn"
                >
                  Read Article
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
