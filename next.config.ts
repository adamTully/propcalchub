import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "propcalchub.com",
          },
        ],
        destination: "https://www.propcalchub.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
