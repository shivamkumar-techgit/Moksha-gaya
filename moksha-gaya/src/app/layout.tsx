import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/sections/WhatsAppButton";
import LanguageToggle from "@/components/LanguageToggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import InteractiveBackdrop from "@/components/InteractiveBackdrop";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://gayarituals.com"),
  title: {
    default: "Gaya Rituals - Authentic Ancestral Rituals in Gaya",
    template: "%s | Gaya Rituals",
  },
  description: "Authentic ancestral rituals (Pind Daan, Shraddh, Tarpan, Narayan Bali) and complete pilgrimage coordination in Gaya, Bihar by verified Vedic Pandits.",
  keywords: ["Pind Daan Gaya", "Gaya Rituals", "Tarpan Falgu River", "Shraddh Karma Gaya", "Narayan Bali Puja", "Gaya Pilgrimage Stay"],
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden" suppressHydrationWarning>
        {/* Upgraded Premium Background Animations */}
        <InteractiveBackdrop />

        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <WhatsAppButton />
        <LanguageToggle />
        <Footer />
      </body>
    </html>
  );
}
