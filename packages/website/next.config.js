/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true }, // turned off optimization for SSG,
    transpilePackages: ["@acme/ui", "lodash-es"],
};

module.exports = nextConfig;
