"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface MediaItem {
  id: number;
  type: "photo";
  category: "puja" | "spots";
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

const GALLERY_MEDIA: MediaItem[] = [
  // Curated Main Photos
  {
    id: 1,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image7.jpg",
    thumbnail: "/images/rituals/pinddan-image7.jpg",
    title: "Vows at Falgu Riverbed",
    description: "Devotees reciting traditional gotra vows led by verified Gayawal Acharyas."
  },
  {
    id: 2,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image2.webp",
    thumbnail: "/images/temples/vishnu-pad-image2.webp",
    title: "Vishnupad Temple Entrance Gates",
    description: "The main gateway welcoming pilgrims to the historic foot impressions of Lord Vishnu."
  },
  {
    id: 3,
    type: "photo",
    category: "spots",
    src: "/images/gallery/local-gaya4.jpg",
    thumbnail: "/images/gallery/local-gaya4.jpg",
    title: "Akshay Vat Holy Banyan Courtyard",
    description: "The eternal banyan tree where devotees offer final pindas to break the cycle of rebirth."
  },
  {
    id: 4,
    type: "photo",
    category: "spots",
    src: "/images/gallery/gaya-airport.jpg",
    thumbnail: "/images/gallery/gaya-airport.jpg",
    title: "Gaya Airport Reception",
    description: "Pilgrims landing at Gaya International Airport are greeted by our local coordination team."
  },

  // Additional Gallery Folder Photos
  {
    id: 5,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai4.png",
    thumbnail: "/images/gallery/ritual-ai4.png",
    title: "Vedic Tarpan on River Falgu",
    description: "Sacred water and sesame seed offering ceremonies for peace of ancestral souls."
  },
  {
    id: 6,
    type: "photo",
    category: "spots",
    src: "/images/gallery/local-gaya9.jpg",
    thumbnail: "/images/gallery/local-gaya9.jpg",
    title: "Pilgrims at Local Gaya Shrines",
    description: "Spiritual gatherings at ancient shrines nested in the holy hills of Gaya."
  },
  {
    id: 7,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg1.jpeg",
    thumbnail: "/images/gallery/pindimg1.jpeg",
    title: "Ancestral Pind Daan Offerings",
    description: "Arranging and decorating the sacred barley flour balls for worship."
  },
  {
    id: 8,
    type: "photo",
    category: "spots",
    src: "/images/rituals/pinddan-image3.jpg",
    thumbnail: "/images/rituals/pinddan-image3.jpg",
    title: "Gaya Ghats Assembly",
    description: "Devotees assembling early morning at the riverbank ghats to commence Pitrupaksha Shraddh."
  },
  {
    id: 9,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image8.jpg",
    thumbnail: "/images/rituals/pinddan-image8.jpg",
    title: "Preparing the Sacred Pindas",
    description: "Structuring barley flour, honey, milk, and black sesame into traditional offerings."
  },
  {
    id: 10,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg3.jpeg",
    thumbnail: "/images/gallery/pindimg3.jpeg",
    title: "Sankalp Rites with Pandit Ji",
    description: "Brahmin coordinator guiding the pilgrim family through the Gotra chanting."
  },
  {
    id: 11,
    type: "photo",
    category: "puja",
    src: "/images/gallery/local-gaya10.jpg",
    thumbnail: "/images/gallery/local-gaya10.jpg",
    title: "Recitation of Lineage Names",
    description: "Traditional recitation of ancestor names for three generations during the ritual."
  },
  {
    id: 12,
    type: "photo",
    category: "puja",
    src: "/images/gallery/local-gaya11.jpg",
    thumbnail: "/images/gallery/local-gaya11.jpg",
    title: "Brahmin Bhojan Rites",
    description: "Serving traditional food to local Brahmins as the final concluding step of Shraddh."
  },
  {
    id: 13,
    type: "photo",
    category: "puja",
    src: "/images/gallery/local-gaya12.jpg",
    thumbnail: "/images/gallery/local-gaya12.jpg",
    title: "Holy River Bathing & Rites",
    description: "Devotees taking symbolic dips and offering prayers on the sand banks."
  },
  {
    id: 14,
    type: "photo",
    category: "spots",
    src: "/images/gallery/local-gaya.jpg",
    thumbnail: "/images/gallery/local-gaya.jpg",
    title: "Panoramic View of Gaya Town",
    description: "The ancient pilgrimage city nestled amidst historical hills and river banks."
  },

  // Newly Added Pindimg Images
  {
    id: 15,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg.jpeg",
    thumbnail: "/images/gallery/pindimg.jpeg",
    title: "Pitru Tarpan Offerings",
    description: "Specialized offerings made by devotees for peace and elevation of ancestral souls."
  },
  {
    id: 16,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg1.jpeg",
    thumbnail: "/images/gallery/pindimg1.jpeg",
    title: "Sankalp Vidhi Rituals",
    description: "Devotees taking initial vows at the holy ghats under verified pandit instructions."
  },
  {
    id: 17,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg2.jpeg",
    thumbnail: "/images/gallery/pindimg2.jpeg",
    title: "Pind Arpan at Vishnupad",
    description: "Presenting sacred barley pindas directly at the footprint complex."
  },
  {
    id: 18,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg3.jpeg",
    thumbnail: "/images/gallery/pindimg3.jpeg",
    title: "Gaya Shraddh Mantras",
    description: "Priests reciting sacred texts for pitru dosha mitigation."
  },
  {
    id: 19,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg4.jpeg",
    thumbnail: "/images/gallery/pindimg4.jpeg",
    title: "Rice & Sesame Offerings",
    description: "Close-up of the traditional offerings prepared for three generations of ancestors."
  },
  {
    id: 20,
    type: "photo",
    category: "puja",
    src: "/images/gallery/pindimg5.jpeg",
    thumbnail: "/images/gallery/pindimg5.jpeg",
    title: "Devotional Sankalp Vows",
    description: "Pilgrims pouring holy waters to conclude their traditional vows."
  },

  // AI Rituals Folder
  {
    id: 21,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai1.png",
    thumbnail: "/images/gallery/ritual-ai1.png",
    title: "Gotra Sankalp Invocation",
    description: "Vedic chanting and pouring of holy waters during the opening Sankalp vows."
  },
  {
    id: 22,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai2.png",
    thumbnail: "/images/gallery/ritual-ai2.png",
    title: "Vows at Temple Shrines",
    description: "Family members taking part in standard prayer and vows under our pandit's direction."
  },
  {
    id: 23,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai3.png",
    thumbnail: "/images/gallery/ritual-ai3.png",
    title: "Vedic Fire Havan Karma",
    description: "Performing sacred havans to finalize specialized rites like Narayan Bali."
  },
  {
    id: 24,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai4.png",
    thumbnail: "/images/gallery/ritual-ai4.png",
    title: "Pinda Salvation Rites",
    description: "Setting up offerings for ancestral blessings in front of local shrines."
  },
  {
    id: 25,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai5.png",
    thumbnail: "/images/gallery/ritual-ai5.png",
    title: "Devotional Pitru Tarpan",
    description: "Offering water mixed with kusha grass and sesame seeds to ancestors."
  },
  {
    id: 26,
    type: "photo",
    category: "puja",
    src: "/images/gallery/ritual-ai6.png",
    thumbnail: "/images/gallery/ritual-ai6.png",
    title: "Gayawal Acharya Chanting",
    description: "Acharyas reciting verses from Garuda Purana for the peace of departed souls."
  },

  // Temples Folder
  {
    id: 27,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image.jpg",
    thumbnail: "/images/temples/vishnu-pad-image.jpg",
    title: "Vishnupad Temple Shikhara",
    description: "Close-up of the temple's 30-meter high octagonal tower carved out of black granite."
  },
  {
    id: 28,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image2.webp",
    thumbnail: "/images/temples/vishnu-pad-image2.webp",
    title: "Sanctum of Vishnupad",
    description: "Inside the main chamber holding the footprints of Lord Vishnu embedded in solid rock."
  },
  {
    id: 29,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image3.webp",
    thumbnail: "/images/temples/vishnu-pad-image3.webp",
    title: "Inner Courtyard Shrines",
    description: "Various smaller shrines surrounding the main Vishnupad structure where subsidiary rites are done."
  },
  {
    id: 30,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image4.jpg",
    thumbnail: "/images/temples/vishnu-pad-image4.jpg",
    title: "Historic Temple Architecture",
    description: "Exploring the intricate granite pillars built under the patronage of Queen Ahilyabai Holkar."
  },
  {
    id: 31,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image5.webp",
    thumbnail: "/images/temples/vishnu-pad-image5.webp",
    title: "Vishnupad Main Gate Assembly",
    description: "Devotees entering the holy gates for darshan and pitru path."
  },
  {
    id: 32,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image6.jpg",
    thumbnail: "/images/temples/vishnu-pad-image6.jpg",
    title: "Footprint Chamber Pillars",
    description: "Granite pillar carvings representing rich historical details of Ahilyabai era."
  },
  {
    id: 33,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image7.jpg",
    thumbnail: "/images/temples/vishnu-pad-image7.jpg",
    title: "Ancient Shrines Around Temple",
    description: "Holy spots located within the temple complex used for offering prayers."
  },
  {
    id: 34,
    type: "photo",
    category: "spots",
    src: "/images/temples/vishnu-pad-image8.webp",
    thumbnail: "/images/temples/vishnu-pad-image8.webp",
    title: "Evening Arati at Vishnupad",
    description: "The serene view of evening lamps lit by pandas inside the temple complex."
  },

  // Rituals / Falgu River Folder
  {
    id: 35,
    type: "photo",
    category: "spots",
    src: "/images/rituals/falgu-river.png",
    thumbnail: "/images/rituals/falgu-river.png",
    title: "Falgu River Panoramic View",
    description: "Wide shot of the Falgu riverbed where sand pindas are offered as per age-old custom."
  },
  {
    id: 36,
    type: "photo",
    category: "spots",
    src: "/images/rituals/falgu-river1.avif",
    thumbnail: "/images/rituals/falgu-river1.avif",
    title: "Falgu River Rites Ghats",
    description: "Devotees performing water Tarpan at the edge of the Falgu stream."
  },
  {
    id: 37,
    type: "photo",
    category: "spots",
    src: "/images/rituals/falgu-river2.jpg",
    thumbnail: "/images/rituals/falgu-river2.jpg",
    title: "Falgu River Sandbed Shrines",
    description: "Offering places set up directly on the dry sand banks of the undercurrent river."
  },
  {
    id: 38,
    type: "photo",
    category: "spots",
    src: "/images/rituals/falgu-river3.webp",
    thumbnail: "/images/rituals/falgu-river3.webp",
    title: "Sunset Over Falgu Ghats",
    description: "A peaceful view of the sunset, wrapping up the daytime Pitru Shraddh rites."
  },

  // Rituals Pind Daan Images
  {
    id: 39,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image1.jpg",
    thumbnail: "/images/rituals/pinddan-image1.jpg",
    title: "Pind Daan Puja Vidhi",
    description: "Traditional puja setup showing rice-balls placed on banana leaves for Pitru Arpan."
  },
  {
    id: 40,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image2.jpg",
    thumbnail: "/images/rituals/pinddan-image2.jpg",
    title: "Vedic Priest Gotra Chanting",
    description: "Family lineage Gotra recitations to establish direct connection with ancestors."
  },
  {
    id: 41,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image3.jpg",
    thumbnail: "/images/rituals/pinddan-image3.jpg",
    title: "Sankalp Water Pouring",
    description: "Pouring holy water through hands to seal the commitment of puja vows."
  },
  {
    id: 42,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image4.jpg",
    thumbnail: "/images/rituals/pinddan-image4.jpg",
    title: "Pinda Formation Using Barley",
    description: "Kneading barley flour, sesame, ghee, and milk into smooth round pindas."
  },
  {
    id: 43,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image5.jpg",
    thumbnail: "/images/rituals/pinddan-image5.jpg",
    title: "Vedic Prayers on Falgu Sand",
    description: "Offering sand pindas on the banks of Falgu, recalling the legend of Goddess Sita."
  },
  {
    id: 44,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image6.jpg",
    thumbnail: "/images/rituals/pinddan-image6.jpg",
    title: "Kusha Grass Tarpan",
    description: "Dripping water through Kusha grass rings, a key purifying step in Shraddh."
  },
  {
    id: 45,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image7.jpg",
    thumbnail: "/images/rituals/pinddan-image7.jpg",
    title: "Gaya Rites Offerings",
    description: "Traditional leaf plates filled with puja items for the three main generations."
  },
  {
    id: 46,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image8.jpg",
    thumbnail: "/images/rituals/pinddan-image8.jpg",
    title: "Ancestor Vows Chanting",
    description: "Pilgrims following the pandit's verbal instructions with complete focus."
  },
  {
    id: 47,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image9.jpg",
    thumbnail: "/images/rituals/pinddan-image9.jpg",
    title: "Pinda Dedication to Deities",
    description: "Placing offerings dedicated to Lord Vishnu and Yama for ancestors' smooth journey."
  },
  {
    id: 48,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image10.jpg",
    thumbnail: "/images/rituals/pinddan-image10.jpg",
    title: "Shraddh Karma in Progress",
    description: "A complete overview of the devotee family gathered for ancestral rites."
  },
  {
    id: 49,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image11.jpg",
    thumbnail: "/images/rituals/pinddan-image11.jpg",
    title: "Offerings at Akshay Vat Tree",
    description: "Devotees tying thread and placing pindas under the eternal tree for salvation."
  },
  {
    id: 50,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image12.jpg",
    thumbnail: "/images/rituals/pinddan-image12.jpg",
    title: "Tarpan Puja with Kusha Grass",
    description: "Priests guiding family members in placing black sesame seeds during Tarpan."
  },
  {
    id: 51,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image13.jpg",
    thumbnail: "/images/rituals/pinddan-image13.jpg",
    title: "Ancestral Vows (Sankalp) Ceremony",
    description: "Tying the holy red thread (Kalava) on the wrist to begin the holy rituals."
  },
  {
    id: 52,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image14.jpg",
    thumbnail: "/images/rituals/pinddan-image14.jpg",
    title: "Gotra & Ancestral Recitations",
    description: "Pandit ji detailing the lineage gotras of maternal and paternal sides."
  },
  {
    id: 53,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image15.jpg",
    thumbnail: "/images/rituals/pinddan-image15.jpg",
    title: "Puja at Pretshila Hill Rites",
    description: "Specialized offerings made at Pretshila for ancestral spirits stuck in limbo."
  },
  {
    id: 54,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image16.jpg",
    thumbnail: "/images/rituals/pinddan-image16.jpg",
    title: "Annual Shraddh Puja",
    description: "Devotees performing annual Pitru Paksha puja under verified Vedic guidance."
  },
  {
    id: 55,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image17.webp",
    thumbnail: "/images/rituals/pinddan-image17.webp",
    title: "Devotional Offerings at Shrines",
    description: "Placing rice-balls and sesame offerings in front of Lord Vishnu Footprints."
  },
  {
    id: 56,
    type: "photo",
    category: "puja",
    src: "/images/rituals/pinddan-image18.jpg",
    thumbnail: "/images/rituals/pinddan-image18.jpg",
    title: "Salvation Rites for Ancestors",
    description: "Final prayers by the family for the transition of ancestral souls to heaven."
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"all" | "puja" | "spots">("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter media based on active tab
  const filteredMedia = GALLERY_MEDIA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  // Limit visible items on homepage
  const visibleMedia = isExpanded ? filteredMedia : filteredMedia.slice(0, 4);

  const handleNext = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % visibleMedia.length;
    });
  }, [selectedItemIndex, visibleMedia.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + visibleMedia.length) % visibleMedia.length;
    });
  }, [selectedItemIndex, visibleMedia.length]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, handleNext, handlePrev]);

  const currentSelectedItem = selectedItemIndex !== null ? visibleMedia[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#b17a20]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#b17a20] text-xs font-semibold uppercase tracking-wider block mb-2">Spiritual Gallery</span>
          <h2 className="font-serif text-4xl font-bold text-[#2c1a04] mb-4">
            Holy Moments &amp; Sacred Places
          </h2>
          <div className="w-20 h-1 bg-[#b17a20] mx-auto mb-6" />
          <p className="text-base text-[#5c4a37]">
            Explore real photos from our rituals, the holy temples of Gaya, and our comprehensive support facilities.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {[
            { id: "all", label: "All Photos" },
            { id: "puja", label: "Puja & Rites" },
            { id: "spots", label: "Sacred Spots" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as typeof activeTab);
                setSelectedItemIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${activeTab === tab.id
                ? "bg-[#b17a20] text-white border-transparent shadow-md"
                : "bg-white text-[#5c4a37] border-[#efe9de] hover:border-[#b17a20]/40 hover:text-[#b17a20]"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleMedia.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-xl border border-[#efe9de] bg-white overflow-hidden shadow-xs hover:shadow-md hover:border-[#b17a20]/30 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedItemIndex(idx)}
              >
                {/* Media Thumbnail Container */}
                <div className="relative h-56 overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-[#2c1a04]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#b17a20] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-[#2c1a04]/90 text-[#d6cdb8] border border-[#b17a20]/30 px-2.5 py-1 rounded-full z-10">
                    Photo
                  </span>
                </div>

                {/* Media Metadata */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#2c1a04] mb-2 group-hover:text-[#b17a20] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#7c6954] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#faf8f5] flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#b17a20]">
                    <span>View Photo</span>
                    <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button */}
        {filteredMedia.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                if (isExpanded) {
                  setIsExpanded(false);
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  setIsExpanded(true);
                }
              }}
              className="px-8 py-3.5 bg-transparent border border-[#efe9de] text-[#2c1a04] hover:bg-[#b17a20] hover:text-white hover:border-transparent text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
            >
              {isExpanded ? "Show Less" : `View All Photos (${filteredMedia.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && currentSelectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1c1917]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#efe9de]/10 flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Preview Screen */}
              <div className="flex-grow bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px] md:w-[65%]">
                <img
                  src={currentSelectedItem.src}
                  alt={currentSelectedItem.title}
                  className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain"
                />

                {/* Left Arrow Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 hover:bg-black text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                  aria-label="Previous Media"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 hover:bg-black text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                  aria-label="Next Media"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Media Detail Sidebar */}
              <div className="p-8 md:w-[35%] flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-[#efe9de] overflow-y-auto max-h-[40vh] md:max-h-full">
                <div>
                  <span className="text-[#b17a20] text-[10px] font-bold uppercase tracking-widest block mb-2">
                    Holy Picture
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2c1a04] mb-4">
                    {currentSelectedItem.title}
                  </h3>
                  <p className="text-sm text-[#5c4a37] leading-relaxed">
                    {currentSelectedItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#efe9de]/50 flex justify-between items-center text-xs text-[#7c6954]">
                  <span>Item {selectedItemIndex + 1} of {filteredMedia.length}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#b17a20]">Moksha Dham Gayaji</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
