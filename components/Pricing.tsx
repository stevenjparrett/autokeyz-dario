'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { FaKey, FaLockOpen, FaCar, FaClock } from 'react-icons/fa';

// Dynamically import Parallax components with SSR disabled
const ParallaxBanner = dynamic(
  () => import('react-scroll-parallax').then((mod) => mod.ParallaxBanner),
  { ssr: false }
);

const ParallaxBannerLayer = dynamic(
  () => import('react-scroll-parallax').then((mod) => mod.ParallaxBannerLayer),
  { ssr: false }
);

const Pricing = React.memo(() => {
  const pricingDetails = useMemo(() => [
    {
      title: 'Spare Keys',
      price: 'From £190',
      details:
        'Includes spare car key, mobile visit, key supplied and programmed, and a 12-month guarantee.',
      icon: <FaKey />,
      extraInfo: 'Perfect for those who need an extra set of keys for peace of mind.',
      keywords:
        'spare keys, car key programming, mobile car key service, 12-month guarantee',
    },
    {
      title: 'All Keys Lost',
      price: 'From £350',
      details:
        'Includes call out, vehicle opening, new key supplied and programmed, and a 12-month guarantee.',
      icon: <FaLockOpen />,
      extraInfo:
        'Ideal for situations where all keys are lost and immediate assistance is needed.',
      keywords:
        'all keys lost, emergency car key replacement, vehicle opening, 12-month guarantee',
    },
    {
      title: 'Keyless Vehicle Module',
      price: 'From £350',
      details:
        'Includes supply and replacement of KVM, and new keys supplied and programmed.',
      icon: <FaCar />,
      extraInfo:
        'Great for modern vehicles requiring a keyless entry system replacement.',
      keywords:
        'keyless vehicle module, KVM replacement, car key programming, keyless entry system',
    },
    {
      title: 'Emergency Call Out',
      price: 'From £425',
      details:
        'Includes emergency call out service, vehicle opening, and new car keys supplied and programmed.',
      icon: <FaClock />,
      extraInfo:
        'Designed for emergency situations where quick access to your vehicle is crucial.',
      keywords:
        'emergency call out, car lockout service, emergency car key replacement, vehicle opening',
    },
  ], []);

  const structuredData = useMemo(
    () =>
      JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Service',
        serviceType: 'Automotive Key Services Pricing',
        provider: {
          '@type': 'Organization',
          name: 'AutoKeyz',
          url: 'https://www.autokeyz.com/',
          logo: 'https://www.autokeyz.com/images/logo.png',
          sameAs: [
            'https://www.facebook.com/autokeyz',
            'https://twitter.com/autokeyz',
            'https://www.instagram.com/autokeyz',
          ],
        },
        areaServed: {
          '@type': 'Place',
          name: 'Ashford, Kent',
        },
        service: pricingDetails.map((pricing) => ({
          '@type': 'Offer',
          name: pricing.title,
          description: pricing.details,
          priceCurrency: 'GBP',
          price: pricing.price.replace(/[^0-9.]/g, ''),
          additionalType: pricing.extraInfo,
          keywords: pricing.keywords,
        })),
      }),
    [pricingDetails]
  );

  return (
    <>
      <ParallaxBanner style={{ minHeight: '500px' }}>
        {/* Background Image Layer */}
        <ParallaxBannerLayer image="/images/parallax.jpeg" speed={-20} />

        {/* Content Layer */}
        <ParallaxBannerLayer>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl mx-auto p-8 my-10 rounded-lg bg-black bg-opacity-50">
              <h2 className="text-4xl font-bold mb-8 text-center md:text-left text-white">
                Pricing
              </h2>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {pricingDetails.map((pricing) => (
                  <div
                    key={pricing.title}
                    className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-xl transform transition-transform duration-300 md:hover:scale-105 text-white"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{pricing.icon}</span>
                      <h3 className="font-bold text-2xl">{pricing.title}</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2">{pricing.price}</p>
                    <p className="text-gray-300 mb-4">{pricing.details}</p>
                    <p className="text-gray-400 italic">{pricing.extraInfo}</p>
                  </div>
                ))}
              </div>
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
});

export default Pricing;
