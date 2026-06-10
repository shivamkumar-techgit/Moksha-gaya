"use client";

import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Experienced Vedic Priests",
      desc: "Our rituals are guided by certified Gayawal Vedic priests with deep scriptural knowledge and decades of ancestral rites experience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparent Ritual Process",
      desc: "Upfront itemized packages with zero hidden dakshinas or forced fees, providing complete pricing honesty and peace of mind.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Personalized Guidance",
      desc: "Detailed one-on-one consulting to determine correct ancestral rituals according to your gotra, custom lineage, and family heritage.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Online & Offline Services",
      desc: "Choose to participate physically in Gaya with on-ground assistance, or join remotely via high-definition live streaming.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Accommodation Assistance",
      desc: "Partnerships with vetted hotels ranging from budget to premium, ensuring a comfortable, clean, and safe stay for your family.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Dedicated Support",
      desc: "A personal coordinator guides your family from airport/railway arrival, hotel check-in, to final temple blessings.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Authentic Gaya Tradition",
      desc: "Rigorous scriptural adherence to Vedic guidelines at the primary holy shrines of Falgu River, Vishnupad Temple, and Akshay Vat.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Why Devotees Trust Moksha Gaya
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            We bridge the gap between sacred Vedic traditions and modern hospitality, ensuring a seamless, respectful, and transparent experience for you and your family.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {points.map((point, index) => {
            const isLast = index === points.length - 1;
            return (
              <div 
                key={index} 
                className={`group p-8 rounded-xl border border-[#efe9de] hover:border-[#b17a20]/30 bg-[#faf8f5]/40 hover:bg-[#faf8f5] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 ${
                  isLast ? "lg:col-span-3 lg:max-w-md lg:mx-auto w-full" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#f8f1e5] group-hover:bg-[#b17a20] text-[#b17a20] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  {point.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3 group-hover:text-[#b17a20] transition-colors duration-300">
                  {point.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[#7c6954] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
