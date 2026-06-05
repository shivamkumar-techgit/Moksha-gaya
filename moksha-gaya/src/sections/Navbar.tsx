"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Ritual Services", href: "/services" },
    { name: "Sacred Places", href: "/sacred-places" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#efe9de]/45 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            {/* Rotating gold dashed outer border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#b17a20] opacity-70 animate-slow-spin" />
            {/* Logo Image inside circle */}
            <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-[#efe9de] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/hero/moksha_gayalogo2.png" 
                alt="Moksha Gaya Logo" 
                className="w-full h-full object-cover scale-110 animate-slow-spin-reverse"
              />
            </div>
          </div>
          <span className="font-serif text-lg font-bold tracking-widest text-[#2c1a04] group-hover:text-[#b17a20] transition-colors leading-none">
            MOKSHA GAYA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive(link.href)
                  ? "text-[#b17a20]"
                  : "text-[#5c4a37] hover:text-[#b17a20]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/book-now"
            className="px-6 py-2.5 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/20 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            Book a Ritual
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2c1a04] hover:text-[#b17a20] transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-[#efe9de]/50 bg-white/95 backdrop-blur-md px-6 py-6">
          <nav className="flex flex-col gap-4 mb-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-[#b17a20]"
                    : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="/book-now"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300"
          >
            Book a Ritual
          </a>
        </div>
      )}
    </header>
  );
}
