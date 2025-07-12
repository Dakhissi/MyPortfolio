/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features for better static file handling
  experimental: {
    // This helps with static file access during build
    serverComponentsExternalPackages: ['fs']
  },
  
  // Ensure translation files are available
  async rewrites() {
    return [
      {
        source: '/translations/:path*',
        destination: '/translations/:path*',
      },
    ];
  },
  
  // Handle build-time file access
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
  
  // Ensure public files are properly served
  async headers() {
    return [
      {
        source: '/translations/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
