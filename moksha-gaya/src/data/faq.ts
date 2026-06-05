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
        q: "What is Pind Daan and why is it performed?",
        a: "Pind Daan is a sacred Hindu ritual where rice/barley flour balls (Pinds) are offered to the departed souls of ancestors. According to scriptures, it helps the soul find release from the earthly realm and merge with the Divine, achieving salvation (Moksha)."
      },
      {
        q: "Why is Gaya considered the best place for Pind Daan?",
        a: "Gaya is blessed by Lord Vishnu and contains his footprints at the Vishnupad Temple. Ancient texts state that performing Pind Daan here satisfies ancestors eternally and liberates them from all karmic bonds."
      },
      {
        q: "Can rituals be performed for multiple ancestors?",
        a: "Yes, Pind Daan can be performed for multiple ancestors from both your paternal and maternal sides, as well as other departed relatives or friends. During the Sankalp (vow), the Pandit will recite the names and gotras of all the ancestors you wish to include, and separate Pinds (rice balls) will be offered for each of them."
      }
    ]
  },
  {
    name: "Travel & Transit",
    items: [
      {
        q: "How do I reach Gaya and where do I stay?",
        a: "Gaya has its own railway station and airport. It is also well-connected to Patna airport (about 100 km away). We assist you in booking quality/standard hotels and arrange comfortable AC vehicles for transfers and local sight-seeing."
      },
      {
        q: "Can elderly family members perform these rituals comfortably?",
        a: "Yes. Our Traditional and Complete Family packages are specially designed with elderly comfort in mind, offering minimal walking, priority temple queue access, comfortable private transfers, and a dedicated coordinator to support them."
      },
      {
        q: "How many days are required in Gaya?",
        a: "Usually, 1 to 2 days are sufficient. A 1-day trip is enough for performing the standard Pind Daan rituals at the three primary locations (Falgu River, Vishnupad Temple, and Akshay Vat). If you wish to complete the full 17-point or 45-point traditional Vedis (pilgrimage route), a 2 to 3-day itinerary is recommended."
      }
    ]
  },
  {
    name: "Booking & Pricing",
    items: [
      {
        q: "How do I confirm a booking with Moksha Gaya?",
        a: "You submit an enquiry form with dates and gotra. A coordinator reviews your details, provides a transparent quote, and once confirmed, you pay a small booking advance. We arrange the pandit, materials, and transport in advance."
      },
      {
        q: "Are there any hidden costs during the puja?",
        a: "No. Pricing transparency is our core value. All items listed in your package (such as pandit fees, puja materials, local transport, temple entry coordinates) are included in the package cost. Any optional dakshina is entirely at your discretion."
      },
      {
        q: "What details are needed before booking?",
        a: "To book a ritual, you need to provide: (1) Preferred date(s) for the ceremony, (2) Name of the primary person performing the ritual (Karta), (3) Your Gotra (family lineage), (4) Names and relationships of the ancestors for whom the rituals are to be performed, and (5) The size of your group so we can arrange suitable transportation and lodging."
      }
    ]
  },
  {
    name: "Online Services",
    items: [
      {
        q: "Is online Pind Daan possible?",
        a: "Yes, online Pind Daan is fully possible. If you are unable to travel to Gaya due to health, age, or distance, the rituals can be performed on your behalf by a representative (Pratinidhi) or designated Pandit. You can participate virtually via live video call for the Sankalp."
      },
      {
        q: "Is Online Pind Daan spiritually valid if I cannot visit?",
        a: "Yes, absolutely. Scriptural texts (like the Garuda Purana) state that a ritual performed on your behalf by a representative (Pratinidhi) using your name, gotra, and lineage vow (Sankalp) is fully accepted by the ancestors."
      },
      {
        q: "How do I participate in the online service?",
        a: "We connect you via Zoom or WhatsApp Video. The Pandit guides you in taking the virtual Sankalp from your home, while we physically prepare and offer the pinds at the sacred spots in Gaya. We then courier the Prasad to you."
      }
    ]
  }
];
