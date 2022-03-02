/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const withTM = require('next-transpile-modules')(['@absinthe/socket'])
const runtimeCaching = require('next-pwa/cache')

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
    // withPWA(
        withTM({
            reactStrictMode: true,
            // pwa: {
            //     dest: 'public',
            //     runtimeCaching,
            // },
            compiler: {
                relay: {
                    src: "./base",
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
            },
            images: {
                domains: ["web-platforms.sfo2.cdn.digitaloceanspaces.com"]
            }
        })
    // );

module.exports = nextConfig
