import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sacred-places",
        destination: "/places",
        permanent: true,
      },
      {
        source: "/sacred-places/:slug",
        destination: "/places/:slug",
        permanent: true,
      },
      {
        source: "/narayan-bali-puja-in-gaya",
        destination: "/narayan-bali-puja-gaya",
        permanent: true,
      },
      {
        source: "/tripindi-shraddha-in-gaya",
        destination: "/tripindi-shraddha-gaya",
        permanent: true,
      },
      {
        source: "/pind-daan-booking-gaya",
        destination: "/book-pind-daan-gaya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
