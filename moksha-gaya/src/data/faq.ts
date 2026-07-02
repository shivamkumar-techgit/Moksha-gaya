export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  name: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    name: "Ritual Questions",
    items: [
      {
        q: "What pooja is done in Gaya?",
        a: "The primary pooja performed in Gaya is Pind Daan (also known as Gaya Shradh). This sacred ancestral ritual is performed to offer peace and salvation (Moksha) to the departed souls of ancestors."
      },
      {
        q: "What rituals are performed in Gaya?",
        a: "The main rituals performed in Gaya include Snana (holy bath), Sankalpa, Pinda Daan (offering rice balls), and Tarpan (offering sacred water) at major holy sites like the Vishnupad Temple and the Phalgu River."
      },
      {
        q: "What is Pind Daan and why is it performed?",
        a: "Pind Daan is a sacred Hindu ritual where rice/barley flour balls (Pinds) are offered to the departed souls of ancestors. According to scriptures, it helps the soul find release from the earthly realm and merge with the Divine, achieving salvation (Moksha)."
      },
      {
        q: "Why is Gaya considered the best place for Pind Daan?",
        a: "Gaya is blessed by Lord Vishnu and contains his footprints at the Vishnupad Temple. Ancient texts state that performing Pind Daan here satisfies ancestors eternally and liberates them from all karmic bonds."
      },
      {
        q: "What is Pitru Dosha and what are its signs?",
        a: "Pitru Dosha is an ancestral karmic debt that manifests when ancestors are not at peace. Signs include persistent family obstacles, unexplained health issues, financial instability, and lack of mental peace. Rites like Narayan Bali and Pind Daan in Gaya resolve this."
      },
      {
        q: "What is the best time of the year to perform Pind Daan in Gaya?",
        a: "While Pind Daan can be performed year-round, the 16-day Pitru Paksha period (September–October) is the most auspicious. performing it on Amavasya (new moon) days, solar/lunar eclipses, and during Pitru Paksha brings immense blessings."
      },
      {
        q: "Can women participate or perform Pind Daan?",
        a: "Yes, women can participate. While the eldest son traditionally performs the rites as the 'Karta', scriptures allow daughters, wives, and other female relatives to perform Pind Daan if there is no male heir in the family, or they can sit alongside the Karta during the ritual."
      },
      {
        q: "Who is eligible to perform Pind Daan for ancestors?",
        a: "Typically, the eldest son or immediate male relatives perform the rites. However, other sons, grandsons, brothers, or even maternal relatives can perform Pind Daan. The key requirement is the pure intent (Sankalp) and gotra recitation."
      },
      {
        q: "What is the scriptural source for the importance of Gaya Shraddha?",
        a: "The scriptural basis is described extensively in the Garuda Purana, Vayu Purana, and Agni Purana. These texts declare that even a single offering of Pind at Gaya Vishnupad ensures that ancestors are liberated from hellish worlds and attain Vaikuntha."
      },
      {
        q: "What is Brahmin Bhoj and why is it mandatory?",
        a: "Brahmin Bhojan is the practice of feeding holy Brahmanas. In Vedic belief, ancestors accept the essence of the food through the fed Brahmanas. It is the final, essential step to successfully conclude any Shraddh or Pind Daan ritual."
      }
    ]
  },
  {
    name: "Travel & Transit",
    items: [
      {
        q: "How many days are required for Pind Daan in Gaya?",
        a: "Usually, 1 to 2 days are sufficient. A 1-day trip is enough for performing the standard Pind Daan rituals at the three primary locations (Falgu River, Vishnupad Temple, and Akshay Vat). If you wish to complete the full 17-point or 45-point traditional Vedis (pilgrimage route), a 2 to 3-day itinerary is recommended."
      },
      {
        q: "Is pickup available from Gaya Airport or Patna Airport?",
        a: "Yes. Private transport facility is provided for pickup and drop-off from Gaya Airport (GAY) or Patna Airport (PAT, located about 100 km away) as part of our Complete Pilgrimage Assistance."
      },
      {
        q: "How do I reach Gaya and where do I stay?",
        a: "Gaya has its own railway station and airport. It is also well-connected to Patna airport (about 100 km away). We assist you in booking quality/standard hotels and ensure transport facility is provided for transfers and local sight-seeing."
      },
      {
        q: "Can elderly family members perform these rituals comfortably?",
        a: "Yes. Our Traditional and Complete Family packages are specially designed with elderly comfort in mind, offering minimal walking, priority temple queue access, comfortable private transfers, and a dedicated coordinator to support them."
      },
      {
        q: "Is Bodhgaya sightseeing included in the travel assistance?",
        a: "Yes, we can include an optional guided Bodhgaya sightseeing tour in your itinerary. This covers the Mahabodhi Temple, the sacred Bodhi Tree, the Great Buddha Statue, and various international monasteries."
      },
      {
        q: "Is transport facility provided for the rituals?",
        a: "Yes, comfortable private transport is provided for all local transfers between your lodging, the temples, and ritual sites, catering to both small families and larger groups."
      }
    ]
  },
  {
    name: "Booking & Pricing",
    items: [
      {
        q: "What documents or details are required before booking?",
        a: "You need to provide: (1) Names of the ancestors for whom rites are being performed, (2) Gotra (lineage group), (3) Name of the Karta (performer), (4) Preferred date, and (5) Group size. No government documents are required for the ritual itself, though hotels will require ID proofs."
      },
      {
        q: "What should I bring with me for the ritual?",
        a: "You should carry comfortable traditional Indian wear (preferably white dhoti-kurta for men and sober sarees/suits for women). All physical puja materials (like grains, honey, milk, kush grass) are fully arranged and supplied by us."
      },
      {
        q: "Are there any hidden costs or forced Dakshinas during the puja?",
        a: "No. Pricing transparency is our core value. All items listed in your package (such as pandit fees, puja materials, local transport, temple entry coordinates) are included in the package cost. Any optional dakshina is entirely at your discretion."
      },
      {
        q: "How do I confirm a booking with Gaya Rituals?",
        a: "You submit an enquiry form with dates and gotra. A coordinator reviews your details, provides a transparent quote, and once confirmed, you pay a small booking advance. We arrange the pandit, materials, and transport in advance."
      }
    ]
  },
  {
    name: "Online Services",
    items: [
      {
        q: "Can Pind Daan be performed online?",
        a: "Yes, online Pind Daan is fully possible. If you are unable to travel to Gaya due to health, age, or distance, the rituals can be performed on your behalf by a representative (Pratinidhi) or designated Pandit. You can participate virtually via live video call for the Sankalp."
      },
      {
        q: "Is Online Pind Daan spiritually valid if I cannot visit?",
        a: "Yes, absolutely. Scriptural texts (like the Garuda Purana) state that a ritual performed on your behalf by a representative (Pratinidhi) using your name, gotra, and lineage vow (Sankalp) is fully accepted by the ancestors."
      },
      {
        q: "How does the virtual live video call and Sankalp work?",
        a: "We connect you via a high-definition Zoom or WhatsApp Video call. The Pandit in Gaya chants the sacred mantras and guides you step-by-step to take the virtual Sankalp (vow) from your home, while we prepare and offer the pinds at the physical shrines."
      }
    ]
  }
];
