/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.www.nfl.com",
      "nba-smart.imgix.net",
      "logos-world.net",
      "upload.wikimedia.org",
    ],
  },
};
