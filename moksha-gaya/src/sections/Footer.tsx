import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Pind Daan", href: "/services/pind-daan" },
    { name: "Shraddh Karma", href: "/services/shraddh-karma" },
    { name: "Tarpan", href: "/services/tarpan" },
    { name: "Narayan Bali", href: "/services/narayan-bali" },
    { name: "Tripindi Shraddh", href: "/services/tripindi-shrink" },
    { name: "Online Pind Daan", href: "/services/online-pind-daan" }
  ];

  const bottomLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Sacred Places", href: "/places" },
    { name: "Leave a Review", href: "/leave-a-review" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" }
  ];

  return (
    <footer className="bg-[#f8f5f0]/90 backdrop-blur-md text-[#5c4a37] pt-20 pb-8 border-t border-[#efe9de] relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1 md:col-span-3">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex animate-fade-in">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                {/* Rotating gold dashed outer border */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#b17a20] opacity-70 animate-slow-spin" />
                {/* Logo Image inside circle */}
                <div className="w-9 h-9 rounded-full overflow-hidden bg-white border border-[#efe9de] flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/hero/gaya_rituals_logo.png" 
                    alt="Gaya Rituals Logo" 
                    className="w-full h-full object-cover scale-110 animate-slow-spin-reverse"
                  />
                </div>
              </div>
              <span className="font-serif text-lg font-bold tracking-widest text-[#2c1a04] group-hover:text-[#b17a20] transition-colors leading-none">
                GAYA RITUALS
              </span>
            </Link>
            <p className="text-sm text-[#7c6954] leading-relaxed mb-6">
              &quot;Moksha Begins With Sacred Remembrance&quot;<br/>
              A premium spiritual concierge platform delivering authentic Vedic rituals and pilgrimage assistance in Gaya, Bihar.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-[#efe9de] flex items-center justify-center text-[#2c1a04] hover:bg-[#b17a20] hover:text-white transition-all">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#efe9de] flex items-center justify-center text-[#2c1a04] hover:bg-[#b17a20] hover:text-white transition-all">
                <span className="text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#efe9de] flex items-center justify-center text-[#2c1a04] hover:bg-[#b17a20] hover:text-white transition-all">
                <span className="text-xs font-bold">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2c1a04] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#b17a20] hover:underline transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2c1a04] mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#b17a20] hover:underline transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours Col */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2c1a04] mb-6 uppercase tracking-wider">Working Hours</h4>
            <ul className="space-y-4 text-sm text-[#7c6954]">
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">📅</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold font-serif text-sm">Operations</p>
                  <p className="text-xs">Monday - Sunday</p>
                  <p className="text-xs">6:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">📿</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold font-serif text-sm">Ritual Hours</p>
                  <p className="text-xs">Sunrise to Sunset</p>
                  <p className="text-xs">(As prescribed by Shastras)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info Col */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2c1a04] mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#7c6954]">
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">📞</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold">Phone Support</p>
                  <a href="tel:+917070719993" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">+91 70707 19993</a>
                  <a href="tel:+919905852715" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">+91 99058 52715</a>
                  <a href="tel:+917277948658" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">+91 72779 48658</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">💬</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold">WhatsApp Support</p>
                  <a href="https://wa.me/917070719993" target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">+91 70707 19993</a>
                  <a href="https://wa.me/919905852715" target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">+91 99058 52715</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">📧</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold">Email Address</p>
                  <a href="mailto:info@gayarituals.com" className="block text-xs hover:text-[#b17a20] hover:underline transition-colors">
                    info@gayarituals.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b17a20] mt-0.5">📍</span>
                <div>
                  <p className="text-[#2c1a04] font-semibold">Office Location</p>
                  <p className="text-xs leading-relaxed">
                    Nawagarhi, Anpurna Niwas Gaya ji, Bihar - 823001
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#efe9de] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#958370]">
          <p>© {new Date().getFullYear()} Gaya Rituals. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            {bottomLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-[#2c1a04] hover:underline transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
