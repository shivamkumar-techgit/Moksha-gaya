import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Verified Pandits",
      desc: "Our rituals are guided by highly qualified and verified Vedic priests with years of experience and scriptural knowledge.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      desc: "We provide upfront package prices with clear inclusions and exclusions. You will never face any last-minute cost escalations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "End-to-End Assistance",
      desc: "From airport pickup to accommodation, transit, and puja material sourcing, we manage every detail of your spiritual journey.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Dedicated Support",
      desc: "You will have a dedicated personal coordinator to assist you before, during, and after the rituals in Gaya.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Authentic Ritual Practices",
      desc: "Every ritual is performed in strict adherence to Vedic scriptures, traditional family customs, and gotra requirements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Personalized Spiritual Assistance",
      desc: "We balance sacred tradition with your comfort, providing custom ritual coordination, personal guidance, and smooth arrangements.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl border border-[#efe9de] hover:border-[#b17a20]/30 bg-[#faf8f5]/40 hover:bg-[#faf8f5] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
