/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com',"media.istockphoto.com","cdn.pixabay.com"], // Add any trusted image domains you want to allow
  },
};


export default nextConfig;
