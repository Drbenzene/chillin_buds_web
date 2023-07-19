// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// // module.exports = nextConfig

// const withPWA = require('next-pwa');
// // const withPWA = require("@ducanh2912/next-pwa").default()

// module.exports = withPWA({
//   dest: 'public', 
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === 'development',
// });

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  // disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  runtimeCaching,
  disable: false,
  buildExcludes: [/middleware-manifest.json$/],
})

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
})

module.exports = nextConfig
