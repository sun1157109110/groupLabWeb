/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      pathname: '/600/**',
    }, ],
  },
}


export default nextConfig
