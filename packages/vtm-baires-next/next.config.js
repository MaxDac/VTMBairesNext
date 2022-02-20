/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPreact = require('next-plugin-preact')

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  compiler: {
    relay: {
      src: "./src",
      schema: "./data/schema.graphql-queries",
      exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
      language: "typescript"
    },
  },
});

module.exports = nextConfig
