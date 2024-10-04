'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Parallax components with SSR disabled
const ParallaxBanner = dynamic(
  () => import('react-scroll-parallax').then((mod) => mod.ParallaxBanner),
  { ssr: false }
);

const ParallaxBannerLayer = dynamic(
  () => import('react-scroll-parallax').then((mod) => mod.ParallaxBannerLayer),
  { ssr: false }
);

const ParallaxComponent: React.FC = () => {
  const structuredData = useMemo(
    () =>
      JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Service",
        "serviceType": "Automotive Key Services",
        // ... rest of your structured data
      }),
    []
  );

  return (
    <>
      <ParallaxBanner style={{ minHeight: '400px' }}>
        {/* Background Image Layer */}
        <ParallaxBannerLayer image="/images/dooropen.jpeg" speed={-20} />

        {/* Content Layer */}
        <ParallaxBannerLayer>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full sm:w-2/3 lg:w-1/2 bg-white bg-opacity-75 p-6 flex flex-col justify-center items-center shadow-lg text-gray-900">
              <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us</h2>
              <p className="text-lg text-center">
                At <strong>AutoKeyz</strong>, we pride ourselves on delivering exceptional service and reliability. With years of experience and state-of-the-art equipment, we ensure your automotive key needs are met swiftly and efficiently!
              </p>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </>
  );
};

export default ParallaxComponent;
