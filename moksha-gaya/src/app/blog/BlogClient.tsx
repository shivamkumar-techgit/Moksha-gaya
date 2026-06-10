"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, RefreshCw } from "lucide-react";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

interface BlogClientProps {
  posts: Post[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-[#faf8f5] py-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">
            Spiritual Knowledge
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2c1a04] mb-6">
            Spiritual Wisdom &amp; Guidance
          </h1>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Read through articles, detailed scripture references, and checklists to understand the significance of rituals performed in Gaya.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 bg-white border border-[#efe9de] p-6 rounded-2xl shadow-xs">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "text-white bg-[#2c1a04]"
                      : "text-[#5c4a37] hover:bg-[#faf8f5] border border-[#efe9de] bg-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs order-1 md:order-2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#faf8f5] border border-[#efe9de] rounded-full text-xs text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#9c8974]" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  variants={cardVariants}
                  className="bg-white rounded-xl border border-[#efe9de] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 transform group"
                >
                  <div>
                    {/* Photo Header */}
                    <div className="relative h-48 overflow-hidden bg-stone-100 border-b border-[#efe9de]/40">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-8">
                      {/* Meta details */}
                      <div className="flex items-center gap-3 text-xs text-[#9c8974] mb-4">
                        <span className="px-2.5 py-1 rounded bg-[#f8f1e5] text-[#b17a20] font-semibold">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 hover:text-[#b17a20] transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-[#7c6954] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read area */}
                  <div className="px-8 pb-8 pt-0 flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#9c8974] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#b17a20] hover:text-[#2c1a04] transition-colors flex items-center gap-1 group/btn"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-center py-20 bg-white rounded-2xl border border-[#efe9de] shadow-xs"
            >
              <RefreshCw className="w-10 h-10 text-[#9c8974] mx-auto mb-4 animate-spin-slow" />
              <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-2">No articles found</h3>
              <p className="text-sm text-[#7c6954] mb-6">We couldn&apos;t find any articles matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
