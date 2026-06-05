import React from "react";
import { testimonials as reviews } from "@/data/testimonials";

export default function Testimonials() {

  return (
    <section id="testimonials" className="py-24 bg-[#faf8f5] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Devotee Feedback</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Devotee Experiences
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Read how we have helped families fulfill their sacred duties towards their ancestors with peace, clarity, and comfort.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-[#efe9de] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-[#b17a20] mb-6">
                  {Array.from({ length: review.rating }).map((_, rIdx) => (
                    <svg key={rIdx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[#7c6954] leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="border-t border-[#efe9de]/50 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#b17a20]/20 bg-stone-100 shrink-0">
                    <img src={review.photo} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2c1a04]">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-[#9c8974]">{review.location}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f8f1e5] text-[#b17a20]">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
