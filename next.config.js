/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

const withPWA = require('next-pwa');
// const withPWA = require("@ducanh2912/next-pwa").default()

module.exports = withPWA({
  dest: 'public', 
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development',
});