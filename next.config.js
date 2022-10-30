/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: '',
  poweredByHeader: false,
  images: {
    domains: [
      'localhost',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'https://lh3.googleusercontent.com',
    ],
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,
};
