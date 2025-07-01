/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: `${process.env.CONTENTFUL_SPACE_ID}/**`,
      },
    ],
  },
};

export default nextConfig;
