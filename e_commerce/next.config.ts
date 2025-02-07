// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images : {
//     domains : ['cdn.sanity.io'],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
