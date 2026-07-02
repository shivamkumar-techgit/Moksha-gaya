"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  BookOpen, 
  Droplets, 
  Shield, 
  Sun, 
  Sparkles, 
  Calendar, 
  ChevronDown 
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileGuideOpen, setIsMobileGuideOpen] = useState(false);

  const guideLinks = [
    { 
      name: "Pind Daan in Gaya", 
      href: "/pind-daan-in-gaya", 
      desc: "Authentic ancestral salvation rites", 
      icon: Compass 
    },
    { 
      name: "Why Perform Pind Daan in Gaya?", 
      href: "/why-pind-daan-gaya", 
      desc: "Scriptural significance & holy spots", 
      icon: Compass 
    },
    { 
      name: "Pind Daan Guide", 
      href: "/ritual-guide/pind-daan", 
      desc: "Meaning, importance & procedure", 
      icon: BookOpen 
    },
    { 
      name: "Tarpan Guide", 
      href: "/ritual-guide/tarpan", 
      desc: "Thirst-quenching water offerings", 
      icon: Droplets 
    },
    { 
      name: "Narayan Bali Puja", 
      href: "/ritual-guide/narayan-bali", 
      desc: "Untimely death & Dosha remedies", 
      icon: Shield 
    },
    { 
      name: "Tripindi Shraddha", 
      href: "/ritual-guide/tripindi-shraddha", 
      desc: "Satisfying three generations", 
      icon: Sun 
    },
    { 
      name: "Pitra Dosh Puja", 
      href: "/ritual-guide/pitra-dosh", 
      desc: "Signs & remedial ancestral puja", 
      icon: Sparkles 
    },
    { 
      name: "Gaya Shraddha Guide", 
      href: "/ritual-guide/gaya-shraddha", 
      desc: "Ultimate tribute & complete rites", 
      icon: Compass 
    },
    { 
      name: "Vishnu Charan Shringar", 
      href: "/ritual-guide/vishnu-charan-shringar", 
      desc: "Evening decoration of foot footprint", 
      icon: Sparkles 
    },
    { 
      name: "Pitra Paksha Shraddha", 
      href: "/ritual-guide/pitra-paksha", 
      desc: "Auspicious 16-day memory rites", 
      icon: Calendar 
    }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#efe9de]/45 bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-4 xl:px-6 max-w-7xl h-20 flex items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
            {/* Rotating gold dashed outer border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#b17a20] opacity-70 animate-slow-spin" />
            {/* Logo Image inside circle */}
            <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full overflow-hidden bg-white border border-[#efe9de] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/hero/gaya_rituals_logo.png" 
                alt="Gaya Rituals Logo" 
                className="w-full h-full object-cover scale-110 animate-slow-spin-reverse"
              />
            </div>
          </div>
          <span className="font-serif text-sm xl:text-lg font-bold tracking-widest text-[#2c1a04] group-hover:text-[#b17a20] transition-colors leading-none whitespace-nowrap">
            GAYA RITUALS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 xl:gap-8 ml-16">
          <Link
            href="/"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/about") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/services") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Ritual Services
          </Link>
          <Link
            href="/places"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/places") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Sacred Places
          </Link>

          {/* Ritual Guide Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/ritual-guide"
              className={`text-sm font-semibold tracking-wide transition-colors flex items-center gap-1 cursor-pointer py-2 whitespace-nowrap ${
                pathname?.includes("/ritual-guide") || pathname === "/why-pind-daan-gaya"
                  ? "text-[#b17a20]"
                  : "text-[#5c4a37] hover:text-[#b17a20]"
              }`}
            >
              Ritual Guide
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </Link>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-96 bg-white border border-[#efe9de] rounded-2xl shadow-xl p-3 z-50 flex flex-col gap-0.5"
                >
                  {guideLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className={`flex items-start gap-3 px-4 py-2.5 rounded-xl hover:bg-[#faf8f5] transition-all duration-300 group/item whitespace-nowrap ${
                        pathname === subLink.href ? "bg-[#faf8f5] text-[#b17a20]" : "text-[#5c4a37]"
                      }`}
                    >
                      <div className="mt-0.5 p-1.5 rounded-lg bg-[#faf8f5] group-hover/item:bg-[#b17a20]/10 group-hover/item:text-[#b17a20] transition-colors">
                        <subLink.icon className="w-4 h-4 text-[#7c6954] group-hover/item:text-[#b17a20] transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold group-hover/item:text-[#b17a20] transition-colors whitespace-nowrap">
                          {subLink.name}
                        </div>
                        <div className="text-[10px] text-[#7c6954] font-medium mt-0.5 whitespace-nowrap">
                          {subLink.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#gallery"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/#gallery") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/blog") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              isActive("/contact") ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:block ml-auto shrink-0">
          <Link
            href="/book-now"
            className="px-6 py-2.5 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/20 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap"
          >
            Book a Ritual
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden ml-auto p-2 text-[#2c1a04] hover:text-[#b17a20] transition-colors cursor-pointer shrink-0"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden border-t border-[#efe9de]/50 bg-white/95 backdrop-blur-md px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/about" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/services" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Ritual Services
              </Link>
              <Link
                href="/places"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/places" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Sacred Places
              </Link>

              {/* Mobile Ritual Guide Accordion */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsMobileGuideOpen(!isMobileGuideOpen)}
                  className={`text-base font-semibold transition-colors flex items-center justify-between text-left cursor-pointer ${
                    pathname?.includes("/ritual-guide") || pathname === "/why-pind-daan-gaya"
                      ? "text-[#b17a20]"
                      : "text-[#5c4a37]"
                  }`}
                >
                  <span>Ritual Guide</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileGuideOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isMobileGuideOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 flex flex-col gap-3 border-l border-[#efe9de] mt-1 mb-2 overflow-hidden"
                    >
                      <Link
                        href="/ritual-guide"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileGuideOpen(false);
                        }}
                        className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                          pathname === "/ritual-guide" ? "text-[#b17a20]" : "text-[#5c4a37]/80 hover:text-[#b17a20]"
                        }`}
                      >
                        📖 Ritual Encyclopedia
                      </Link>
                      {guideLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileGuideOpen(false);
                          }}
                          className={`text-sm font-semibold transition-colors ${
                            pathname === subLink.href ? "text-[#b17a20]" : "text-[#5c4a37]/80 hover:text-[#b17a20]"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#gallery"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/#gallery" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/blog" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold transition-colors ${
                  pathname === "/contact" ? "text-[#b17a20]" : "text-[#5c4a37] hover:text-[#b17a20]"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            <Link
              href="/book-now"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all duration-300"
            >
              Book a Ritual
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
