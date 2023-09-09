/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true }, // turned off optimization for SSG
};

module.exports = nextConfig;
