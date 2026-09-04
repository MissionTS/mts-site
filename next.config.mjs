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
      {
        source: "/food-services",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/physical-security",
        destination: "/structured-cabling-security",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/vcio",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
