/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@absinthe/socket', '@fluentui/react'])
// const runtimeCaching = require('next-pwa/cache')

const isDevelopment = () => process.env.NODE_ENV !== "production";

const rewritesConfig = () => isDevelopment()
    ? [
        {
            source: "/api/:slug*",
            destination: "http://localhost:4000/api/:slug*"
        }
    ]
    : [];

const nextConfig =
    withTM({
      reactStrictMode: true,
      // pwa: {
      //     dest: 'public',
      //     runtimeCaching,
      // },
      compiler: {
        relay: {
          src: "./src",
          schema: "./data/schema.graphql-queries",
          exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
          language: "typescript"
        },
      },
      experimental: {
        concurrentFeatures: true,
        runtime: 'nodejs'
      },
      rewrites: () => {
          console.debug("rewriting", isDevelopment());
          return Promise.resolve(rewritesConfig());
      }
    });

module.exports = nextConfig
