import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Submit Enquiry",
      desc: "Fill out the simple booking or contact form with your details, gotra, and preferred ritual dates."
    },
    {
      step: "02",
      title: "Speak With Coordinator",
      desc: "A dedicated coordinator will contact you to answer your questions and understand family-specific requirements."
    },
    {
      step: "03",
      title: "Finalize Requirements",
      desc: "We help you finalize the location (temple/river banks), date, time, pandit, hotel options, and local transfers."
    },
    {
      step: "04",
      title: "Booking Confirmation",
      desc: "You will receive a clear, itemized booking details sheet. Pay the booking fee to secure your slot."
    },
    {
      step: "05",
      title: "Ritual Performance",
      desc: "Our verified Pandit will perform the rituals in Gaya with complete Vedic accuracy, while you participate physically or live online."
    },
    {
      step: "06",
      title: "Completion Support",
      desc: "Conclude with Brahman Bhoj, and receive completion media, Dry Prasad shipping, and digital certificates."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#faf8f5] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Sacred Journey Process</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            We follow a step-by-step managed workflow to ensure complete peace of mind, allowing you to focus on devotion while we handle the logistics.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-[#efe8db] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-[#efe9de] relative flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Step badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-lg bg-[#b17a20] text-white flex items-center justify-center text-lg font-bold font-serif shadow-md">
                  {step.step}
                </div>

                <div className="pt-4">
                  <h3 className="font-serif text-xl font-bold text-[#2c1a04] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7c6954] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
