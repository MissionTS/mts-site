/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
