import React from "react";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gayarituals.com/#localbusiness",
    "name": "Gaya Rituals",
    "image": "https://gayarituals.com/images/hero/gaya_rituals_logo.png",
    "url": "https://gayarituals.com",
    "telephone": "+917070719993",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nawagarhi, Anpurna Niwas Gaya ji",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "postalCode": "823001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.775200,
      "longitude": 85.008985
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://gayarituals.com/#organization",
    "name": "Gaya Rituals",
    "url": "https://gayarituals.com",
    "logo": "https://gayarituals.com/images/hero/gaya_rituals_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7070719993",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://gayarituals.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `https://gayarituals.com${item.item}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleSchemaProps {
  headline: string;
  image: string;
  datePublished?: string;
  description: string;
  url: string;
}

export function ArticleSchema({ headline, image, datePublished, description, url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://gayarituals.com${url}`
    },
    "headline": headline,
    "image": image.startsWith("http") ? image : `https://gayarituals.com${image}`,
    "datePublished": datePublished || new Date().toISOString().split("T")[0],
    "author": {
      "@type": "Organization",
      "name": "Gaya Rituals",
      "url": "https://gayarituals.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gaya Rituals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gayarituals.com/images/hero/gaya_rituals_logo.png"
      }
    },
    "description": description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  url: string;
}

export function ServiceSchema({ name, description, image, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://gayarituals.com/#localbusiness",
      "name": "Gaya Rituals",
      "image": "https://gayarituals.com/images/hero/gaya_rituals_logo.png",
      "url": "https://gayarituals.com",
      "telephone": "+917070719993",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nawagarhi, Anpurna Niwas Gaya ji",
        "addressLocality": "Gaya",
        "addressRegion": "Bihar",
        "postalCode": "823001",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Gaya"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Bihar"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "serviceType": "Religious & Spiritual Rituals",
    "url": url.startsWith("http") ? url : `https://gayarituals.com${url}`,
    ...(image ? { "image": image.startsWith("http") ? image : `https://gayarituals.com${image}` } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
