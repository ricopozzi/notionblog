/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", 's3.us-west-2.amazonaws.com']
  },
  amp: true
}

module.exports = nextConfig
