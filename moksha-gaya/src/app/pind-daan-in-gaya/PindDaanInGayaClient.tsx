"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, CheckCircle, Clock, Calendar, ArrowRight, ShieldCheck, 
  BookOpen, Landmark, Droplet, FileText, CheckSquare, Sparkles, Award, Heart, HelpCircle, Check
} from "lucide-react";

export default function PindDaanInGayaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      title: "Snan & Purificatory Rites",
      desc: "The ritual begins with a sacred bath (Snan) in the Falgu River or using holy water. Devotees dress in clean, traditional white attire (Dhoti or Kurta for men, simple traditional clothes for women) to maintain physical and spiritual purity during the rites."
    },
    {
      title: "Lineage Sankalp",
      desc: "Guided by our verified Gayawal Pandit, you perform the Sankalp. This involves chanting Sanskrit mantras declaring your identity, Gotra (lineage), relationship to the deceased, and names of three generations of ancestors (Paternal & Maternal) to dedicate the ritual's energy specifically to them."
    },
    {
      title: "Falgu River Tarpan",
      desc: "Water mixed with black sesame seeds (Til), barley flour (Jau), kush grass, and flowers is offered repeatedly through the hands into the river. This satisfies the spiritual thirst of the ancestors and frees them from cravings in the subtle dimensions."
    },
    {
      title: "Vishnupad Pinda Arpan",
      desc: "Spherical pindas made of cooked rice, barley, milk, ghee, and honey are formed. These pindas are placed directly on the basalt stone footprint of Lord Vishnu inside the temple sanctuary, representing the transfer of ancestral souls to the direct protection of Lord Vishnu."
    },
    {
      title: "Akshay Vat Concluding Blessing",
      desc: "Devotees proceed to the immortal Banyan tree (Akshay Vat) where the final pinda is offered. The ceremony concludes with the tying of a sacred yellow/red thread (Mauli) to the tree, asking ancestors for their permanent blessings of peace, health, and family longevity."
    },
    {
      title: "Brahmin Bhojan & Charity",
      desc: "Feeding Vedic Brahmins (Brahmin Bhoj) and offering Dakshina (charitable gifts, grain, and clothes) is the concluding Vedic requirement. The satisfaction of the Brahmins represents the direct satisfaction of the ancestors, sealing the complete process."
    }
  ];

  const faqs = [
    {
      q: "What is Pind Daan and why is it performed?",
      a: "Pind Daan is a sacred Hindu ritual performed to offer food, water, and prayers to the departed souls of ancestors. The term 'Pinda' refers to a rounded ball of rice and barley flour representing the physical shell, and 'Daan' means charity. It is performed to help ancestral souls break free from physical attachments, cross over into the Pitru Loka (ancestral realm), and eventually achieve Moksha (final liberation)."
    },
    {
      q: "Why is Gaya Ji considered the most sacred place for Pind Daan?",
      a: "As described in the Vayu Purana and Garuda Purana, Gaya is the body of the purified demon Gayasur, who received a boon from Lord Vishnu that anyone performing ancestral rites here would achieve immediate salvation for their forefathers. The presence of Lord Vishnu's footprint (Vishnupad) and the immortal tree (Akshay Vat) makes Gaya the ultimate gateway to heaven."
    },
    {
      q: "How many Vedis (offering spots) should one cover in Gaya?",
      a: "A standard Pind Daan covers the 3 primary Vedis: Falgu River, Vishnupad Temple, and Akshay Vat. However, a traditional comprehensive pilgrimage covers 17, 36, or all 45+ historical Vedis across the Gaya region, depending on family custom and time. Our packages cater to all variations."
    },
    {
      q: "Can women perform Pind Daan in Gaya?",
      a: "Yes, absolutely. The Ramayana itself records that Sita Devi performed Pind Daan for King Dasharatha in Gaya when Lord Rama was away. If there are no male descendants in the family, daughters, wives, or mothers are scripturally permitted to perform these rites to bring peace to their loved ones."
    },
    {
      q: "What is the best time of the year to visit Gaya for Pind Daan?",
      a: "Pitru Paksha, the 15-day period in the Hindu month of Ashwin (usually September-October), is considered the absolute best time, as it is believed the gateway to the ancestral world opens. However, you can perform Pind Daan on any Amavasya (new moon day), during solar/lunar eclipses, or on standard monthly tithis throughout the year."
    }
  ];

  return (
    <div className="bg-[#faf8f5] overflow-hidden min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-[#faf8f5]/40 to-[#f3ebd8]/80 border-b border-[#efe9de] text-[#2c1a04] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(177, 122, 32, 0.08), transparent)" }} />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-4"
          >
            Sacred Remembrance &amp; Salvation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2c1a04] mb-6 leading-tight"
          >
            Pind Daan in Gaya
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-[#5c4a37] max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive guide to performing ancestral salvation rites at the sacred locations of Gaya, Bihar. Connect with verified local Gayawal Vedic Pandits and secure eternal peace for your departed forefathers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="/book-now" 
              className="px-8 py-4 bg-[#b17a20] hover:bg-[#2c1a04] border border-transparent hover:border-[#b17a20]/30 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Book Pind Daan Ritual
            </Link>
            <a 
              href="#what-is-it" 
              className="px-8 py-4 bg-transparent hover:bg-[#2c1a04] text-[#2c1a04] hover:text-white border border-[#2c1a04] hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Read Full Guide
            </a>
          </motion.div>
        </div>
      </section>

      {/* Page Navigation Scrollspy links */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-[#efe9de] z-40 hidden md:block">
        <div className="container mx-auto px-6 max-w-5xl flex justify-between py-4 text-xs font-bold uppercase tracking-wider text-[#5c4a37]">
          <a href="#what-is-it" className="hover:text-[#b17a20] transition-colors">What is Pind Daan</a>
          <a href="#gaya-importance" className="hover:text-[#b17a20] transition-colors">Gaya Importance</a>
          <a href="#vishnupad-importance" className="hover:text-[#b17a20] transition-colors">Vishnupad Footprint</a>
          <a href="#falgu-importance" className="hover:text-[#b17a20] transition-colors">Falgu River</a>
          <a href="#procedure" className="hover:text-[#b17a20] transition-colors">puja Procedure</a>
          <a href="#documents" className="hover:text-[#b17a20] transition-colors">Requirements</a>
          <a href="#timing" className="hover:text-[#b17a20] transition-colors">Best Times</a>
          <a href="#why-us" className="hover:text-[#b17a20] transition-colors">Why Choose Us</a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-5xl py-20 space-y-28">

        {/* Section 1: What is Pind Daan? */}
        <section id="what-is-it" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              Section 01
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              What is Pind Daan?
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                In Hindu dharma, <strong>Pind Daan</strong> represents the most critical duty a descendant owes to their departed forefathers. The word <strong>'Pinda'</strong> literally translates to a round, spherical mass of cooked rice or barley flour mixed with black sesame seeds, honey, and milk. This ball represents the physical shell of the soul. <strong>'Daan'</strong> translates to charity, offering, or donation. 
              </p>
              <p>
                According to the <em>Garuda Purana</em>, when a person passes away, the soul departs the physical body and transitions into the state of a 'Preta' (a wandering energy body). In this intermediate state, the soul feels intense spiritual hunger and thirst, yet lacks physical organs to satisfy them. By offering the Pinda under strict Vedic mantras, descendants satisfy this hunger, helping the soul shed its earth-bound desires and travel forward to the ancestral dimension known as <strong>Pitru Loka</strong>.
              </p>
              <p>
                Skipping these vital rites can trap ancestral spirits in a state of limbo, which Vedic literature describes as the origin of <strong>Pitru Dosha</strong>. This cosmic imbalance often manifests in the descendants' lives as career failures, childlessness, financial blockages, or persistent domestic disharmony. Performing Pind Daan resolves these blocks and ensures the continuous flow of ancestral blessings. To proceed with the rituals under the guidance of authorized priests, you can <Link href="/services/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Book Pind Daan Service</Link> today.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#efe9de] shadow-xs space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04]">The Philosophy of Pitru Rina</h3>
            <p className="text-xs text-[#5c4a37] leading-relaxed">
              Every individual is born with three fundamental debts: Deva Rina (debt to gods), Rishi Rina (debt to sages), and <strong>Pitru Rina</strong> (debt to ancestors). While prayers satisfy the gods and learning satisfies the sages, only the ritual of Shradh and Pind Daan can repay the debt to ancestors who passed on the gift of life.
            </p>
            <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#efe9de] text-[11px] text-[#b17a20] font-semibold italic">
              "By satisfying one's ancestors through Pind Daan, one satisfies the entire cosmos, including Lord Brahma, Vishnu, and Shiva." <br /> — Vayu Purana
            </div>
          </div>
        </section>

        {/* Section 2: Why is Gaya important? */}
        <section id="gaya-importance" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-5 order-last lg:order-first bg-white p-8 rounded-2xl border border-[#efe9de] shadow-lg relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[#b17a20]" />
              The Legend of Demon Gayasur
            </h3>
            <p className="text-xs text-[#5c4a37] leading-relaxed space-y-2">
              In ancient times, a demon named Gayasur performed intense penance. Pleased, Lord Vishnu granted him a unique boon: his body would become the most sacred spot on earth. Anyone who touched his body or performed rituals upon it would be purified of all sins and achieve immediate entry into Vaikuntha.
            </p>
            <p className="text-xs text-[#5c4a37] leading-relaxed mt-2">
              To stabilize this powerful purification force, Lord Vishnu placed his foot upon Gayasur's chest, pressing him deep into the earth. The spot where Lord Vishnu stood is the heart of Gaya today, housing the Vishnupad footprint.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Section 02
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Why is Gaya Important for Ancestor Rites?
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                Gaya is designated as the most sacred place on Earth for performing post-death rites (Shraddh and Pind Daan). The scriptures describe Gaya as the body of the demon Gayasur, who was purified by Lord Vishnu and granted a boon: anyone who performs ancestral rites here will achieve immediate salvation for their forefathers.
              </p>
              <p>
                The <em>Garuda Purana</em> states: <em>"By offering even a single pinda in Gaya, one's ancestors are immediately freed from hellish realms and travel to the divine realm of Pitru Loka."</em> The <em>Vayu Purana</em> devotes several chapters explaining that any food or water offered to ancestors in Gaya becomes inexhaustible, bringing permanent satisfaction to their souls.
              </p>
              <p>
                This holy land acts as a spiritual vortex. Rituals performed here bypass the standard long-term karmic cycles, allowing even those souls who died unnatural or painful deaths to find immediate peace. Devotees from all over the world travel to Gaya Ji to release their lineages from ancestral suffering. For a detailed overview of the steps involved, please <Link href="/ritual-guide/pind-daan" className="text-[#b17a20] hover:underline font-semibold">Read Pind Daan Guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Importance of Vishnupad Temple */}
        <section id="vishnupad-importance" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Section 03
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Importance of Vishnupad Temple
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                The <strong>Vishnupad Temple</strong> is the focal spiritual landmark of Gaya. Located on the banks of the Falgu River, it houses a 40-centimeter footprint of Lord Vishnu stamped in solid basalt stone, known as the <em>Vishnu Pada</em>.
              </p>
              <p>
                This footprint represents the exact point where Lord Vishnu pinned the demon Gayasur under the earth. Scripturally, placing the Pindas directly upon this footprint ensures that the ancestors' souls are directly received by Lord Vishnu, carrying them to the highest heavens.
              </p>
              <p>
                Devotees sit around the footprint sanctuary under the guidance of local Gayawal Pandits, chanting the lineage Sankalps. The powerful basalt stone retains the spiritual vibrations of centuries of chants, creating an intense atmosphere of peace and devotion.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative p-3 bg-white border border-[#efe9de] rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden">
              <Image 
                src="/images/pind-daan-gaya.jpg" 
                alt="Pind Daan Ritual at Vishnupad Temple Gaya" 
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
              />
              <span className="text-[10px] text-[#b17a20] font-bold uppercase tracking-wider block mt-3 text-center">Pind Daan Ritual at Vishnupad Temple Gaya</span>
            </div>
          </div>
        </section>

        {/* Section 4: Importance of Falgu River */}
        <section id="falgu-importance" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-20">
          <div className="lg:col-span-5">
            <div className="relative p-3 bg-white border border-[#efe9de] rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden">
              <img 
                src="/images/rituals/falgu-river.png" 
                alt="Falgu River Gaya" 
                className="w-full h-auto object-cover rounded-xl aspect-[4/3]"
              />
              <span className="text-[10px] text-[#b17a20] font-bold uppercase tracking-wider block mt-3 text-center">Holy Banks of Falgu River</span>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Droplet className="w-4 h-4" />
              Section 04
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Importance of Falgu River
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                The <strong>Falgu River</strong> holds a unique status among India's holy rivers. Due to a mythological curse by Sita Devi, the river flows underground, beneath its sandy bed. The water is present just inches beneath the dry sand, giving it the name <em>Antah Salila</em> (subterranean river).
              </p>
              <p>
                According to the Ramayana, when Lord Rama and Lakshmana went to collect puja materials, King Dasharatha's soul appeared before Sita Devi, demanding food. Sita Devi offered pindas made of sand from the Falgu banks, witnessed by the river, a cow, a tulsi plant, and a fire. When the river falsely denied this to Lord Rama, Sita Devi cursed it to flow underground.
              </p>
              <p>
                Because of Sita Devi's blessing, the sand of the Falgu River is considered extremely sacred. Devotees dig small pits in the sand to extract water for Tarpan. Offering sand and water here symbolizes purification, helping release ancestors from negative earthly attachments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Pind Daan Procedure */}
        <section id="procedure" className="py-12 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 05</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Detailed Pind Daan Procedure
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs relative flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#f3ebd8] text-[#8c5e1b] font-bold text-xs flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#2c1a04] mb-3">{step.title}</h3>
                  <p className="text-xs text-[#5c4a37] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Required Documents/Information */}
        <section id="documents" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              Section 06
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Required Information &amp; Details
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                To perform an authentic Vedic Pind Daan, the priest requires specific details of your ancestry. These are considered the actual 'Vedic documents' necessary to anchor the Sankalp mantras correctly.
              </p>
              <p>
                If you do not have all the details, our Pandits can help you identify your lineage records using historical records (Bahi Khata) maintained by Gayawal Pandas. If performing Narayan Bali or Tripindi Shraddha, any detail about the cause of death is also useful. If you have any queries about the required information, feel free to <Link href="/contact" className="text-[#b17a20] hover:underline font-semibold">Contact Us</Link> for direct assistance.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#efe9de] shadow-xs text-left">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#b17a20]" />
               Lineage Details Checklist
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Names of the departed ancestors (up to three generations).</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Gotra (family lineage name) of both paternal and maternal sides.</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Date of passing (Tithi / Lunar day) if known.</span>
              </li>
              <li className="flex items-start text-xs text-[#5c4a37]">
                <Check className="w-4 h-4 text-[#b17a20] mr-2 shrink-0 mt-0.5" />
                <span>Identification document (Aadhaar Card, Passport) for hotel check-ins.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 7 & 8: Best Time & Pitru Paksha Significance */}
        <section id="timing" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-20">
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#efe9de] shadow-md text-left space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#2c1a04] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#b17a20]" />
              Auspicious Vedic Windows
            </h3>
            
            <div className="space-y-4">
              <div className="border-b border-[#efe9de] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b17a20] block">Pitru Paksha (Ashwin Month)</span>
                <p className="text-xs text-[#5c4a37] mt-1">The premium 15-day period in September-October dedicated exclusively to ancestral veneration.</p>
              </div>
              <div className="border-b border-[#efe9de] pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b17a20] block">Amavasya (New Moon Day)</span>
                <p className="text-xs text-[#5c4a37] mt-1">Occurs monthly. Considered the standard day to satisfy ancestors when specific dates are unknown.</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b17a20] block">Lunar &amp; Solar Eclipses</span>
                <p className="text-xs text-[#5c4a37] mt-1">Powerful cosmic alignment days where spiritual offerings yield multiple times the benefit.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[#b17a20] font-bold text-xs uppercase tracking-widest">
              <Clock className="w-4 h-4" />
              Section 07 &amp; 08
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Best Time &amp; Pitru Paksha Significance
            </h2>
            <div className="w-16 h-1 bg-[#b17a20] mb-6" />
            <div className="text-sm text-[#5c4a37] space-y-4 leading-relaxed font-sans">
              <p>
                While Pind Daan in Gaya can be performed throughout the year, the 15-day period of <strong>Pitru Paksha</strong> (occurring during the Bhadrapada/Ashwin month, usually in September-October) holds unmatched cosmic importance.
              </p>
              <p>
                Vedic cosmology states that during Pitru Paksha, the Sun enters the zodiac sign of Virgo (Kanya). At this alignment, the barrier between the earthly plane and the Pitru Loka dissolves. Ancestral souls descend to earth to receive offerings directly from their descendants.
              </p>
              <p>
                Performing Pind Daan on the specific Tithi (anniversary day) of your ancestor's passing during Pitru Paksha brings immense peace to their souls. If you do not know the exact date, the final day of the fortnight, known as <strong>Sarvapitri Amavasya</strong>, is dedicated to performing rites for all ancestors collectively.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Why Choose Gaya Rituals */}
        <section id="why-us" className="py-12 scroll-mt-20 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 09</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2c1a04]">
              Why Choose Gaya Rituals?
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
            <p className="text-xs text-[#7c6954] mt-4 max-w-xl mx-auto">
              We provide professional coordination, matching your family to genuine, experienced Pandas while ensuring a clean and hassle-free travel experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">1</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">Lineage Pandits</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">Direct access to genuine Gayawal Pandas holding ancient lineage document archives (Bahi Khatas) for Gotra checking.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">2</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">Transparent Pricing</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">No hidden priest charges, forced donations, or complex temple negotiations. All costs are declared beforehand.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#efe9de] shadow-2xs space-y-4">
              <span className="w-10 h-10 rounded-full bg-[#f8f1e5] text-[#b17a20] flex items-center justify-center text-xl font-bold">3</span>
              <h3 className="font-serif font-bold text-base text-[#2c1a04]">End-to-End Travel</h3>
              <p className="text-xs text-[#5c4a37] leading-relaxed">Complete logistics support including premium temple hotel bookings, private cabs, and airport/railway transfers.</p>
            </div>
          </div>
        </section>

        {/* Section 10: Frequently Asked Questions */}
        <section id="faq" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#b17a20] text-xs font-bold uppercase tracking-widest block mb-2">Section 10</span>
            <h2 className="font-serif text-3xl font-bold text-[#2c1a04]">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#b17a20] mx-auto mt-4" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-[#efe9de] rounded-xl overflow-hidden bg-white shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-[#2c1a04]"
                  >
                    <h3 className="font-serif font-bold text-base md:text-lg">
                      {faq.q}
                    </h3>
                    <span className={`w-8 h-8 rounded-full bg-[#faf8f5] flex items-center justify-center border border-[#efe9de] text-[#b17a20] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-xs text-[#5c4a37] leading-relaxed border-t border-[#efe9de]/50">
                          <p className="mt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* CTA Booking Banner */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white text-[#2c1a04] p-12 rounded-3xl border border-[#efe9de] shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#b17a20]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl" />
          
          <h2 className="font-serif text-3xl font-bold text-[#2c1a04] mb-4">
            Coordinate Your Pind Daan with Vedic Accuracy
          </h2>
          <p className="text-xs text-[#5c4a37] max-w-xl mx-auto mb-8 leading-relaxed">
            Let us assist you with temple permits, clean accommodation, local cabs, certified Pandits, and authentic puja items. Reach out to speak directly with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-now" 
              className="px-8 py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg transition-all duration-300"
            >
              Book Ritual Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-transparent hover:bg-[#faf8f5] text-[#2c1a04] border border-[#efe9de] text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300"
            >
              Contact Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
