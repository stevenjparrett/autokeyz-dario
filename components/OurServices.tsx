import React from 'react';
import { FaKey, FaLockOpen, FaCar, FaClock } from 'react-icons/fa';

const OurServices: React.FC = () => {
  const services = [
    {
      name: "Spare Keys",
      description: "Including mobile visit, spare car key supplied and programmed, with a 12-month guarantee.",
      icon: <FaKey />,
      keywords: "spare keys, car key programming, mobile car key service, 12-month guarantee",
    },
    {
      name: "All Keys Lost",
      description: "Call out service, vehicle opening, new car key supplied and programmed, with a 12-month guarantee.",
      icon: <FaLockOpen />,
      keywords: "all keys lost, emergency car key replacement, vehicle opening, 12-month guarantee",
    },
    {
      name: "Keyless Vehicle Module",
      description: "Supply and replacement of KVM, including new keys supplied and programmed.",
      icon: <FaCar />,
      keywords: "keyless vehicle module, KVM replacement, car key programming, keyless entry system",
    },
    {
      name: "Emergency Call Out",
      description: "Emergency service for vehicle opening and new car keys supplied and programmed.",
      icon: <FaClock />,
      keywords: "emergency call out, car lockout service, emergency car key replacement, vehicle opening",
    },
  ];

  return (
    <section className="bg-gray-900 p-6 my-6 rounded-lg text-white text-center md:text-left" aria-label="Our Car Key Services">
      <h2 className="text-3xl font-bold mb-8">Our Car Key Services</h2>
      <p className="text-gray-400 mb-6">
        At AutoKeyz, we offer a range of professional automotive key services to meet all your needs. Our experienced team uses the latest technology to ensure fast and reliable service.
      </p>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.name} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 mb-4 flex justify-center items-center bg-gray-700 rounded-full text-3xl">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-400">{service.description}</p>
            <meta name="keywords" content={service.keywords} />
          </div>
        ))}
      </div>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Service",
          "serviceType": "Automotive Key Services",
          "provider": {
            "@type": "Organization",
            "name": "AutoKeyz",
            "url": "https://www.autokeyz.com/",
            "logo": "https://www.autokeyz.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/autokeyz",
              "https://twitter.com/autokeyz",
              "https://www.instagram.com/autokeyz"
            ]
          },
          "areaServed": {
            "@type": "Place",
            "name": "Ashford, Kent"
          },
          "service": services.map(service => ({
            "@type": "Offer",
            "name": service.name,
            "description": service.description,
            "keywords": service.keywords,
            "image": `https://www.autokeyz.com/${service.icon}`
          }))
        })}
      </script>
    </section>
  );
};

export default OurServices;
