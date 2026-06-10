import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/sections/WhatsAppButton";
import LanguageToggle from "@/components/LanguageToggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Moksha Gaya - Authentic Ancestral Rituals",
  description: "Authentic ancestral rituals (Pind Daan, Shraddh, Tarpan) and pilgrimage coordination in Gaya, Bihar.",
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
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <LanguageToggle />
        <Footer />
      </body>
    </html>
  );
}
