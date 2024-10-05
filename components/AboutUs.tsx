import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Moved structured data to Head for non-blocking rendering */}
      <Head>
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "AutoKeyz",
            "url": "https://www.autokeyz.com/",
            "logo": "https://www.autokeyz.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+4407769017971",
              "contactType": "Customer Service",
              "areaServed": "GB",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.facebook.com/autokeyz",
              "https://twitter.com/autokeyz",
              "https://www.instagram.com/autokeyz"
            ]
          })}
        </script>
      </Head>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About AutoKeyz</h2>
            <h3 className="text-2xl font-semibold text-gray-600 mb-6">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              At <strong>AutoKeyz</strong>, we are dedicated to providing exceptional <strong>automotive key services</strong>. With years of experience in the industry,
              our team of professional locksmiths is committed to ensuring your vehicle's security and your peace of mind. Whether you've lost
              your car keys or need a spare, we've got you covered.
            </p>
            {/* ... rest of your text content ... */}
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/about.jpeg"
              alt="AutoKeyz Team at Work"
              className="rounded-lg shadow-lg w-full h-auto max-w-md"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
