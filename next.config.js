const prod = process.env.NODE_ENV === 'production';

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
  disable: prod ? false : true
});

/** @type {import("next").NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});
