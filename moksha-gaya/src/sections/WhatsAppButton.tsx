import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917070719993?text=Pranam%2C%20I%20would%20like%20to%20enquire%20about%20performing%20rituals%20in%20Gaya."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-2.5 sm:pl-3 sm:pr-5 sm:py-2.5 rounded-full bg-[#2c1a04]/95 backdrop-blur-md border border-[#b17a20]/40 text-white shadow-xl hover:shadow-2xl hover:border-[#b17a20] hover:scale-105 active:scale-98 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Icon Circle Wrapper */}
      <div className="relative w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md">
        {/* Slow rotating gold outer border */}
        <div className="absolute -inset-1 rounded-full border border-dashed border-[#b17a20] opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 animate-slow-spin" />
        
        {/* WhatsApp Icon */}
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.994 9.994 0 004.78 1.23h.005c5.505 0 9.99-4.478 9.99-9.985C22.008 6.478 17.521 2 12.012 2zm6.368 14.54c-.263.74-1.282 1.353-1.785 1.411-.475.055-.953.256-3.085-.589-2.73-1.082-4.48-3.87-4.617-4.053-.137-.183-1.108-1.47-1.108-2.81 0-1.338.702-1.996.953-2.251.263-.268.572-.336.762-.336.19 0 .38 0 .546.007.182.006.425-.07.666.518.256.626.877 2.146.953 2.3.076.152.126.331.026.53-.1.199-.151.32-.3.493-.15.172-.315.385-.45.517-.15.143-.31.3-.133.606.176.305.785 1.293 1.685 2.094.12.107.828.745 1.545.986.702.235 1.144.17 1.43-.107.315-.305 1.348-1.568 1.708-2.102.36-.53.72-.44 1.21-.257.493.18 3.123 1.47 3.224 1.572.1.101.1.517-.163 1.256z" />
        </svg>
      </div>
      
      {/* Label Text */}
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[9px] font-bold text-[#b17a20] uppercase tracking-widest leading-none mb-1">Live Support</span>
        <span className="text-xs font-semibold tracking-wide text-white group-hover:text-[#b17a20] transition-colors leading-none">Chat on WhatsApp</span>
      </div>
    </a>
  );
}
