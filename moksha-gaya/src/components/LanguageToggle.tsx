/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import Script from "next/script";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export default function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    // Define the global Google Translate init callback
    (window as any).googleTranslateElementInit = () => {
      try {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "hi",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      } catch (err) {
        console.error("Error initializing Google Translate:", err);
      }
    };

    // Check language from cookies & DOM periodically
    const checkLang = () => {
      if (typeof document === "undefined") return;
      const htmlEl = document.documentElement;
      const htmlLang = htmlEl.lang || htmlEl.getAttribute("lang") || "";
      const transCookie = getCookie("googtrans") || "";
      
      const isHindi = htmlLang.toLowerCase().startsWith("hi") || 
                      transCookie.includes("/hi") ||
                      htmlEl.classList.contains("translated-ltr");
                      
      if (isHindi) {
        setCurrentLang("hi");
      } else {
        setCurrentLang("en");
      }
    };

    const interval = setInterval(checkLang, 1000);
    checkLang();

    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    if (typeof document === "undefined") return;
    
    // Determine current language state dynamically from DOM & cookies
    const htmlEl = document.documentElement;
    const htmlLang = htmlEl.lang || htmlEl.getAttribute("lang") || "";
    const transCookie = getCookie("googtrans") || "";
    const isCurrentlyHindi = htmlLang.toLowerCase().startsWith("hi") || 
                            transCookie.includes("/hi") ||
                            htmlEl.classList.contains("translated-ltr");

    const nextLang = isCurrentlyHindi ? "en" : "hi";
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;

    if (nextLang === "en") {
      // Clear Google Translate cookies at all domain levels
      const hostname = window.location.hostname;
      const parts = hostname.split('.');
      const domains = [hostname, `.${hostname}`, ""];
      
      if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join('.');
        domains.push(rootDomain);
        domains.push(`.${rootDomain}`);
      }

      domains.forEach(d => {
        const domainStr = d ? `; domain=${d}` : "";
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr}`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC${domainStr}`;
      });
      
      // Clear session/local storage
      try {
        sessionStorage.removeItem("googtrans");
        localStorage.removeItem("googtrans");
      } catch (e) {
        console.error(e);
      }

      if (selectEl) {
        try {
          selectEl.value = "";
          selectEl.dispatchEvent(new Event("change"));
        } catch (err) {
          console.error("Error setting combo value:", err);
        }
      }
      
      // Force reload to completely clean up translated DOM and reset language state
      window.location.reload();
      return;
    }

    if (selectEl) {
      // Set value: Google combo uses 'hi' for Hindi
      selectEl.value = "hi";
      selectEl.dispatchEvent(new Event("change"));
      setCurrentLang("hi");
    } else {
      console.warn("Google Translate widget not ready in DOM yet, falling back to cookie override.");
      // Fallback: Set cookie directly and reload
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/hi; path=/; domain=.${domain}`;
      document.cookie = `googtrans=/en/hi; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/hi; path=/;`;
      window.location.reload();
    }
  };

  return (
    <>
      {/* Hidden Container for Google Translate Element */}
      <div 
        id="google_translate_element" 
        style={{ 
          display: "none", 
          visibility: "hidden", 
          width: 0, 
          height: 0, 
          position: "absolute", 
          pointerEvents: "none" 
        }} 
      />

      {/* Load Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />

      {/* Floating Language Toggle Button (Bottom Left) */}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-full bg-[#2c1a04]/95 backdrop-blur-md border border-[#b17a20]/40 text-white shadow-xl hover:shadow-2xl hover:border-[#b17a20] hover:scale-105 active:scale-98 transition-all duration-300 group cursor-pointer"
        aria-label="Toggle Language / भाषा बदलें"
      >
        {/* Icon Circle Wrapper */}
        <div className="relative w-9 h-9 rounded-full bg-[#b17a20] flex items-center justify-center text-white shrink-0 shadow-md">
          {/* Slow rotating dashed outer border */}
          <div className="absolute -inset-1 rounded-full border border-dashed border-[#b17a20] opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 animate-slow-spin-reverse" />
          
          {/* Globe/Language Icon */}
          <Languages className="w-5 h-5 text-white" />
        </div>

        {/* Label Text */}
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-[#b17a20] uppercase tracking-widest leading-none mb-1">
            Language / भाषा
          </span>
          <span className="text-xs font-semibold tracking-wide text-white group-hover:text-[#b17a20] transition-colors leading-none">
            {currentLang === "en" ? "English ➔ हिंदी" : "हिंदी ➔ English"}
          </span>
        </div>
      </button>
    </>
  );
}
