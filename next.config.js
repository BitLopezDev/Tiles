/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.platzi.com',
        port: '',
       
      },
    ],
  },
  
}

module.exports = nextConfig
