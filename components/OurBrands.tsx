import React, { useState, useCallback, useMemo } from 'react';

const OurBrands = () => {
  const brands = useMemo(() => [
    { src: 'images/landrover-logo.png', alt: 'Land Rover', name: 'Land Rover' },
    { src: 'images/rangerover-logo.png', alt: 'Range Rover', name: 'Range Rover' },
    { src: 'images/jaguar-logo.png', alt: 'Jaguar', name: 'Jaguar' },
    { src: 'images/porsche-logo.png', alt: 'Porsche', name: 'Porsche' }
  ], []);

  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
  }, [brands.length]);
  
  const handlePrev = useCallback(() => {
    setCurrentBrandIndex((prevIndex) => (prevIndex - 1 + brands.length) % brands.length);
  }, [brands.length]);

  const structuredData = useMemo(() => ({
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "AutoKeyz",
    "url": "https://www.autokeyz.com/",
    "logo": "https://www.autokeyz.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/autokeyz",
      "https://twitter.com/autokeyz",
      "https://www.instagram.com/autokeyz"
    ],
    "brand": brands.map(brand => ({
      "@type": "Brand",
      "name": brand.name,
      "logo": `https://www.autokeyz.com/${brand.src}`
    }))
  }), [brands]);

  return (
    <section className="bg-gray-900 p-6 my-6 rounded-lg text-white text-center md:text-left">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Partnered Brands</h2>
        <p className="text-gray-400 mb-6">We are proud to work with some of the most renowned automotive brands. Here are a few of our trusted partners:</p>
        <div className="relative flex items-center justify-center md:space-x-6">
          <button onClick={handlePrev} aria-label="Previous brand" className="absolute left-0 md:relative md:-ml-10 text-4xl px-4 py-2 hover:text-gray-400 transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <img src={brands[currentBrandIndex].src} alt={brands[currentBrandIndex].alt} className="w-32 h-32 md:w-48 md:h-48 object-contain transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <span className="text-lg mt-4">{brands[currentBrandIndex].name}</span>
          </div>
          <button onClick={handleNext} aria-label="Next brand" className="absolute right-0 md:relative md:-mr-10 text-4xl px-4 py-2 hover:text-gray-400 transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </section>
  );
};

export default OurBrands;
