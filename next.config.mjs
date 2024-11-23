/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/About",
        destination: "/Time",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
