export interface GuideSection {
  title: string;
  content: string[];
}

export interface RitualGuide {
  title: string;
  slug: string;
  category: string;
  icon: string;
  shortDesc: string;
  introduction: string;
  overview: string;
  significance: string;
  procedure: string[];
  benefits: string[];
  bestTime: string;
  duration: string;
  whoShouldPerform: string;
  relatedSacredPlaces: string[];
  sections: GuideSection[];
}

export const ritualGuides: RitualGuide[] = [
  {
    title: "Pind Daan Guide",
    slug: "pind-daan",
    category: "Pind Daan",
    icon: "🕉️",
    shortDesc: "Complete understanding of Pind Daan - its meaning, scriptures, procedure, and best times.",
    introduction: "Pind Daan is a sacred Hindu ritual performed to offer homage and food to deceased ancestors. It is believed that after death, the soul travels towards the ancestral realm (Pitru Loka). Performing Pind Daan satisfies their hunger and thirst, assisting their journey towards liberation (Moksha).",
    overview: "A sacred ancestral offering ceremony where rice/barley flour balls (Pinds) are offered to ancestors in Gaya to assist their soul's transition to the spiritual world.",
    significance: "Performers pay back their ancestral debt (Pitru Rin), satisfying ancestors for eternity and ensuring peace, prosperity, and harmony for descendants.",
    procedure: [
      "Taking the lineage vow (Sankalp) mentioning names and gotra.",
      "Offering water mixed with sesame seeds (Tarpan) at Falgu River.",
      "Placing prepared Pindas at Lord Vishnu's footprint at Vishnupad Temple.",
      "Offering the final Pind under the eternal Akshay Vat tree."
    ],
    benefits: [
      "Grants ultimate salvation (Moksha) to ancestors.",
      "Resolves family karmic blocks and removes Pitru Dosha.",
      "Secures peace, prosperity, and blessings for future generations."
    ],
    bestTime: "Pitru Paksha period (Sept-Oct), monthly Amavasya days, or specific Nakshatra transits.",
    duration: "3 to 4 hours (Can be performed in 1 day)",
    whoShouldPerform: "Eldest son, immediate male relative, or designated family representative.",
    relatedSacredPlaces: ["Falgu River", "Vishnupad Temple", "Akshay Vat"],
    sections: [
      {
        title: "Meaning of Pind Daan",
        content: [
          "The word 'Pinda' refers to a rounded ball of rice flour, barley flour, and sesame seeds mixed with milk, ghee, and honey. 'Daan' means charity or offering.",
          "Symbolically, the Pinda represents the physical body and the elements that compose it. Offering the Pinda signifies returning the physical elements back to the universe while praying for the soul's spiritual elevation."
        ]
      },
      {
        title: "Scriptural Importance",
        content: [
          "According to scriptures like the Garuda Purana, Vayu Purana, and Agni Purana, performing Pind Daan in Gaya is highly meritorious. It is said that even a single pinda offered at Gaya satisfies ancestors for thousands of years.",
          "Lord Rama, Sita, and Lakshmana performed Pind Daan for King Dasharatha at the Falgu River in Gaya, highlighting the ancient spiritual heritage of this land."
        ]
      },
      {
        title: "Step-by-Step Procedure",
        content: [
          "Sankalp: Taking a solemn vow under the guidance of a Gayawal Pandit, mentioning the family gotra and lineage names.",
          "Falgu River Tarpan: Offering water mixed with sesame seeds to quench the thirst of the ancestors.",
          "Vishnupad Temple Rites: Placing the prepared Pindas directly at the footprint of Lord Vishnu to secure divine blessings.",
          "Akshay Vat Offering: Offering the final Pinda under the eternal Banyan tree (Akshay Vat) to seal the rituals and ensure permanent peace."
        ]
      },
      {
        title: "Key Benefits",
        content: [
          "Ancestral Salvation: Grants ultimate liberation to souls stuck in lower spiritual realms.",
          "Removal of Pitru Dosha: Clears obstacles in career, marriage, child-birth, and finances caused by ancestral karmic imbalances.",
          "Lineage Blessings: Brings peace, prosperity, and long life to the current and future generations."
        ]
      },
      {
        title: "Best Time to Perform",
        content: [
          "Pitru Paksha: The 16-day period during Bhadrapada (Sept-Oct) is considered the absolute best time.",
          "Amavasya: Every monthly new moon day is highly auspicious for ancestral offerings.",
          "Auspicious Nakshatras: Special transit periods of Sun and Moon can be identified by our pandits for personal family convenience."
        ]
      }
    ]
  },
  {
    title: "Tarpan Guide",
    slug: "tarpan",
    category: "Tarpan",
    icon: "💧",
    shortDesc: "Satisfying ancestors with water and sesame seeds - meaning, significance, and benefits.",
    introduction: "Tarpan is the act of satisfying or pleasing. In Vedic rituals, it refers to offering water mixed with black sesame seeds, barley, Kusha grass, and white flowers to ancestors, deities, and sages. It is a daily or periodic practice to show gratitude to all forces that support our existence.",
    overview: "The sacred practice of offering water mixed with black sesame seeds, barley, and flowers to satisfy and quench the spiritual thirst of ancestors.",
    significance: "Keeps the channel between ancestors and descendants active, allowing positive energy and lineage protection to flow into the household.",
    procedure: [
      "Sitting facing East or South with a copper vessel of water.",
      "Adding sesame seeds, barley, Kusha grass, and white flowers to water.",
      "Chanting lineage mantras and pouring water through fingers.",
      "Praying for ancestral peace and lineage protection."
    ],
    benefits: [
      "Brings emotional and mental stability within the household.",
      "Purifies daily negative energies and minor karmic blockages.",
      "Attracts protection and ancestral blessings for the family."
    ],
    bestTime: "Daily morning, Amavasya days, or during the 16-day Pitru Paksha.",
    duration: "20 to 30 minutes",
    whoShouldPerform: "Any individual who wishes to express gratitude and satisfy their ancestors.",
    relatedSacredPlaces: ["Falgu River", "Vishnupad Temple"],
    sections: [
      {
        title: "What is Tarpan?",
        content: [
          "Tarpan comes from the Sanskrit root word 'Trup', which means to satisfy or please.",
          "Unlike Pind Daan (which involves offering solid food balls), Tarpan is the libation of sacred water. It is performed to quench the spiritual thirst of ancestors who exist in subtle, non-physical states."
        ]
      },
      {
        title: "Why is it Performed?",
        content: [
          "To pay back the 'Pitru Rina' (ancestral debt) that every individual inherits at birth.",
          "To keep the subtle channel between ancestors and descendants active, allowing positive energies to flow into the household.",
          "It serves as a constant reminder of our roots, lineage, and the continuity of life."
        ]
      },
      {
        title: "Benefits of Tarpan",
        content: [
          "Mental Clarity: Brings emotional stability and reduces stress within the household.",
          "Karmic Purification: Relieves the performer of minor daily sins and negative energy accumulation.",
          "Protection: Creates a protective spiritual shield around the family through the blessings of satisfied ancestors."
        ]
      }
    ]
  },
  {
    title: "Tripindi Shraddha Guide",
    slug: "tripindi-shraddha",
    category: "Tripindi Shraddha",
    icon: "🔥",
    shortDesc: "Satisfying ancestors of three generations to resolve long-standing obstacles.",
    introduction: "Tripindi Shraddha is a special ritual performed to appease unsatisfied ancestors across three generations (fathers, grandfathers, and great-grandfathers). It resolves cases where regular annual Shraddha has been missed for consecutive years, leading to ancestral anger.",
    overview: "A powerful one-day ritual performed to appease unsatisfied ancestors across three generations who might have died with unfulfilled material desires.",
    significance: "Resolves ancestral anger arising from missed annual Shraddha ceremonies, clearing deep obstacles in the lives of descendants.",
    procedure: [
      "Kalash Sthapana and invocation of Brahma, Vishnu, and Mahesh.",
      "Preparation of three distinct Pindas representing the three deities (Rice, Barley, Black Sesame).",
      "Recitation of specialized lineage purification mantras.",
      "Offering Pindas at sacred points and performing Havan (fire ritual)."
    ],
    benefits: [
      "Removes delays and obstacles in marriage and career.",
      "Brings financial stability and clears chronic debt cycles.",
      "Protects future children from lineage-based ancestral curses."
    ],
    bestTime: "Amavasya days, Pitru Paksha, or specific astrologically advised dates.",
    duration: "2 to 3 hours",
    whoShouldPerform: "The primary Karta (eldest male) facing lineage-based obstacles.",
    relatedSacredPlaces: ["Vishnupad Temple", "Pretshila Hill"],
    sections: [
      {
        title: "Purpose of Tripindi Shraddha",
        content: [
          "Regular Shraddha satisfies ancestors of the immediate past generation. Tripindi Shraddha satisfies all ancestors from the previous three generations who might have died with unfulfilled material desires.",
          "It removes obstacles that block the path of younger generations in terms of marriage, employment, and education."
        ]
      },
      {
        title: "Procedure of the Puja",
        content: [
          "Requires three Pindas made of different grains to represent different deities: Rice (representing Lord Vishnu), Barley (representing Lord Brahma), and Black Sesame (representing Lord Shiva).",
          "Involves Kalash Sthapana, recitation of specialized mantras, and prayers to the three deities to grant peace to the souls of the deceased."
        ]
      },
      {
        title: "Key Benefits",
        content: [
          "Resolves Marriage Delays: Frequently helps in finding matching life partners by removing lineage blockages.",
          "Financial Growth: Stabilizes erratic business conditions and debt cycles.",
          "Lineage Protection: Ensures that future children are born healthy and without ancestral curses."
        ]
      }
    ]
  },
  {
    title: "Narayan Bali Guide",
    slug: "narayan-bali",
    category: "Narayan Bali",
    icon: "🔱",
    shortDesc: "Special two-day puja to resolve severe Pitru Dosha and liberate souls that met untimely deaths.",
    introduction: "Narayan Bali is a highly specialized and powerful ritual performed to appease Lord Vishnu (Narayana) and release souls that are trapped in transition due to unnatural deaths, accidents, or unfulfilled desires. It is a vital remedy for severe ancestral afflictions.",
    overview: "A highly specialized two-day Vedic ritual performed to appease Lord Vishnu and release souls trapped in transition due to untimely or unnatural deaths.",
    significance: "Converts troubled, wandering spirits (Preta) into peaceful ancestors (Pitru), clearing severe family afflictions and psychological blocks.",
    procedure: [
      "Installing symbolic wheat-flour bodies for the deceased.",
      "Performing the holy Narayan Bali puja on Day 1.",
      "Executing the ancestral Pind Daan and Havan on Day 2.",
      "Feeding of Brahmanas and distributing charity (Dakshina)."
    ],
    benefits: [
      "Liberates souls of relatives who died of accidents, suicide, or sudden disease.",
      "Resolves severe, persistent Pitru Dosha in the family horoscope.",
      "Restores harmony, progeny blessings, and health to the lineage."
    ],
    bestTime: "Auspicious planetary transits, Pitru Paksha, or monthly new moon days.",
    duration: "2 days (Rigorous Vedic schedule)",
    whoShouldPerform: "Devotees experiencing severe, repetitive family tragedies or progeny issues.",
    relatedSacredPlaces: ["Vishnupad Temple", "Falgu River Banks"],
    sections: [
      {
        title: "Purpose of Narayan Bali",
        content: [
          "If a family member met an untimely death (by accident, suicide, sudden illness, or drowning), their soul might not cross over to the ancestral realm easily. Narayan Bali helps free such souls.",
          "It also directly targets severe Pitru Dosha, where ancestral distress manifests as repetitive family tragedies, inability to conceive, or business failures."
        ]
      },
      {
        title: "When is it Needed?",
        content: [
          "When an astrologer identifies Pitru Dosha in the family birth charts.",
          "If a family experiences continuous obstacles, sudden deaths, lack of career growth, or relationship breakdowns without logical reasons.",
          "When standard Pind Daan rituals do not bring the desired relief or peace."
        ]
      },
      {
        title: "Ritual Process & Benefits",
        content: [
          "Duration: It is a rigorous two-day ritual performed under strict Vedic rules.",
          "Key Ceremonies: Involves the installation of wheat flour bodies representing the deceased, offering specific mantras, and performing havan (fire ritual).",
          "Ultimate Peace: Converts the troubled, wandering spirit (Preta) into a peaceful ancestor (Pitru), removing negative psychic loops from the family lineage."
        ]
      }
    ]
  },
  {
    title: "Pitra Dosh Puja Guide",
    slug: "pitra-dosh",
    category: "Pitra Dosh Puja",
    icon: "🪐",
    shortDesc: "Recognizing the signs of Pitru Dosha and performing rituals to bring peace and prosperity.",
    introduction: "Pitra Dosh is a karmic debt of our ancestors that reflects in our horoscope (Kundali) as planetary configurations, particularly when Rahu or Ketu conjuncts the Sun or Moon. Performing Pitra Dosh Puja helps clear this ancestral baggage.",
    overview: "A specialized remedial puja performed to alleviate ancestral planetary afflictions (Pitru Dosha) that show up in the birth charts of descendants.",
    significance: "Acts as a formal lineage apology and offering to seek forgiveness for past wrongs committed by ancestors or descendants.",
    procedure: [
      "Pooja of local deities and Kalash Sthapana.",
      "Mantra chanting of Rahu, Ketu, Sun, and Moon to clear afflictions.",
      "Ancestor invoking rituals and offering of specialized Pindas.",
      "Brahmin Bhoj and charity to complete the purification."
    ],
    benefits: [
      "Restores household harmony and resolves chronic marital friction.",
      "Promotes child-bearing blessings and healthy progeny.",
      "Removes business stagnation and unlocks career promotions."
    ],
    bestTime: "During Pitru Paksha, Amavasya, or custom astrological Nakshatra transits.",
    duration: "2 to 3 hours",
    whoShouldPerform: "Devotees whose horoscopes show Rahu/Ketu conjunctions with Sun/Moon.",
    relatedSacredPlaces: ["Vishnupad Temple", "Akshay Vat"],
    sections: [
      {
        title: "Common Signs of Pitra Dosh",
        content: [
          "Delays in Marriage: Difficulty finding a suitable match or facing sudden breakdowns in marriage discussions.",
          "Childlessness/Progeny Issues: Problems in conceiving, frequent miscarriages, or children facing chronic health issues.",
          "Financial Instability: Constant debt, loss of wealth, or failures in business despite hard work.",
          "Frequent Health Issues: Chronic diseases affecting multiple family members sequentially."
        ]
      },
      {
        title: "Importance of the Puja",
        content: [
          "In Hindu tradition, ancestors are given equal status to gods. If ancestors are unhappy or suffering, their negative vibration affects the descendant's progress.",
          "Pitra Dosh Puja acts as a formal apology and offering, seeking forgiveness for any wrongs committed by ancestors or descendants."
        ]
      },
      {
        title: "Benefits of Pitra Dosh Puja",
        content: [
          "Restores Family Harmony: Resolves unnecessary arguments and friction between couples and siblings.",
          "Promotes Progeny: Blesses couples with healthy children and smooth pregnancies.",
          "Unlocks Career Success: Removes stagnancy in employment, promotion, and business ventures."
        ]
      }
    ]
  },
  {
    title: "Gaya Shraddha Guide",
    slug: "gaya-shraddha",
    category: "Gaya Shraddha",
    icon: "🛕",
    shortDesc: "The ultimate ancestral offering package performed across the holy shrines of Gaya.",
    introduction: "Gaya Shraddha is the complete set of ancestral offerings performed across the primary sacred sites (Vedis) of Gaya. Vedic scriptures state that performing Shraddha here satisfies ancestors for eternity and elevates them directly to Vaikuntha.",
    overview: "The complete, traditional package of ancestral offerings performed across the sacred sites of Gaya to ensure permanent salvation of ancestors.",
    significance: "Ancient texts claim that a single Gaya Shraddha satisfies ancestors for eternity, helping them attain Vaikuntha (Lord Vishnu's abode).",
    procedure: [
      "Falgu River purification bath and initial Tarpan libations.",
      "Vishnupad Temple offerings directly at the footprint of Lord Vishnu.",
      "Akshay Vat Banyan tree final Pind offering and sealing prayers.",
      "Concluding Brahmin Bhojan and charity (Dakshina) distribution."
    ],
    benefits: [
      "Satisfies ancestors eternally, elevating them to higher realms.",
      "Fulfills the supreme duty of Pitru Rin (ancestral debt).",
      "Attracts peace, longevity, and wealth to the performer's family."
    ],
    bestTime: "Pitru Paksha fortnight (Sept-Oct), monthly Amavasya, or during solar/lunar eclipses.",
    duration: "1 to 3 days (depending on the number of Vedis covered)",
    whoShouldPerform: "Any individual seeking to offer the ultimate tribute and peace to their parents and ancestors.",
    relatedSacredPlaces: ["Falgu River", "Vishnupad Temple", "Akshay Vat", "Pretshila Hill"],
    sections: [
      {
        title: "Importance of Gaya Shraddha",
        content: [
          "Gaya is spiritually recognized as the ultimate Pitru Tirtha (ancestral pilgrimage spot). Rites performed here grant liberation directly to ancestors, freeing them from lower realms.",
          "The ceremony is considered complete only when performed across the three major holy sites: Falgu River, Vishnupad footprint, and Akshay Vat."
        ]
      },
      {
        title: "Ritual Execution Details",
        content: [
          "We coordinate the entire ceremony, ensuring qualified Gayawal pandits guide you with traditional mantras.",
          "Brahmin Bhojan is arranged immediately following the offerings, completing the scriptural requirements."
        ]
      }
    ]
  },
  {
    title: "Vishnu Charan Shringar Guide",
    slug: "vishnu-charan-shringar",
    category: "Vishnu Charan Shringar",
    icon: "👣",
    shortDesc: "Devotional evening decoration of Lord Vishnu's sacred footprint inside Vishnupad Temple.",
    introduction: "Vishnu Charan Shringar is a highly auspicious evening ritual of decorating the divine footprint (Dharmasila) of Lord Vishnu with flowers, sandalwood paste, ornaments, and lamps. It is performed to invoke divine grace, protection, and household prosperity.",
    overview: "A beautiful devotional ritual of decorating the sacred footprints of Lord Vishnu (Charan) in Gaya with flowers, sandalwood paste, and ornaments.",
    significance: "Performed in the evening to seek divine grace, health, and spiritual prosperity, connecting the devotee directly to the footprints of liberation.",
    procedure: [
      "Purifying the sacred footprints (Charan) with Ganga water.",
      "Applying pure chandan (sandalwood paste) and drawing sacred symbols.",
      "Adorning the footprint with fresh flower garlands, tulsi leaves, and ornaments.",
      "Chanting Vishnu Sahasranama and performing Maha Aarti with lit lamps."
    ],
    benefits: [
      "Attracts divine grace, peace, and positive energy to the devotee.",
      "Fosters deep devotion (Bhakti) and spiritual progress.",
      "Removes negative planetary influences and brings family health."
    ],
    bestTime: "Every evening, Ekadashi days, or during major festivals like Diwali and Holi.",
    duration: "1 to 2 hours (Evening ritual)",
    whoShouldPerform: "Devotees seeking divine protection, health, and spiritual prosperity.",
    relatedSacredPlaces: ["Vishnupad Temple"],
    sections: [
      {
        title: "The Dharmasila Footprint",
        content: [
          "The Vishnupad Temple houses a 40cm footprint of Lord Vishnu, imprinted on solid basalt rock known as Dharmasila.",
          "Participating in or sponsoring the Shringar (decoration) of this divine footprint is considered highly meritorious, clearing sins and bringing peace."
        ]
      },
      {
        title: "Evening Aarti & Devotion",
        content: [
          "The ritual culminates in a majestic evening aarti where the decorated footprint is worshipped with incense, lamps, and Vedic chants.",
          "It is a visual and spiritual feast, filling the temple hall with positive, high-frequency energy."
        ]
      }
    ]
  },
  {
    title: "Pitra Paksha Shraddha Guide",
    slug: "pitra-paksha",
    category: "Pitra Paksha Shraddha",
    icon: "📅",
    shortDesc: "The sacred 16-day period dedicated to ancestral rites and worship.",
    introduction: "Pitra Paksha (literally 'fortnight of the ancestors') is a 16-lunar day period in the Hindu calendar when Hindus pay homage to their ancestors (Pitrus), especially through food offerings. It is the most auspicious window of the year for Shraddha.",
    overview: "The auspicious 16-day memory rites performed during the fortnight of ancestors, when ancestors visit their earthly descendants.",
    significance: "Scriptures state that performing Shraddha during this time ensures that the offerings reach the ancestors directly, granting them instant satisfaction.",
    procedure: [
      "Daily libation of water and sesame seeds (Tarpan) in the morning.",
      "Preparing special food without onion/garlic for offerings.",
      "Feeding local Brahmanas and offering charity (clothes, grains).",
      "Pausing all celebratory and new material purchase events."
    ],
    benefits: [
      "Directly feeds and satisfies ancestors during their earthly visit.",
      "Brings immense family harmony, longevity, and progeny blessings.",
      "Clears long-standing lineage-based karmic obstacles."
    ],
    bestTime: "The 16-day period of Bhadrapada month (September-October).",
    duration: "16 Days (Or specific tithi matching parent's death)",
    whoShouldPerform: "The eldest male of the family or descendants honoring their parents.",
    relatedSacredPlaces: ["Falgu River", "Vishnupad Temple", "Akshay Vat"],
    sections: [
      {
        title: "Significance of Pitra Paksha",
        content: [
          "It is believed that during this fortnight, the gateway between the Pitru Loka and Earth opens, allowing the souls of ancestors to visit their descendants.",
          "Scriptures state that performing Shraddha during this time ensures that the offerings reach the ancestors directly, granting them satisfaction and elevating their spiritual state."
        ]
      },
      {
        title: "Ritual Process & Restrictions",
        content: [
          "Daily Offerings: Devotees perform daily Tarpan with water and black sesame.",
          "Brahmin Bhojan: Preparing special food and feeding verified local Brahmins. The food is believed to reach the ancestors.",
          "Charity (Daan): Offering clothes, grains, and cows is highly recommended during this period.",
          "Restrictions: Auspicious events like marriages, buying new houses, or initiating new projects are paused, as this period is completely dedicated to remembrance and introspection."
        ]
      }
    ]
  }
];
