import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 gap-10 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About AutoKeyz</h2>
          <h3 className="text-2xl font-semibold text-gray-600 mb-6">Who We Are</h3>
          <p className="text-gray-700 mb-4">
            At <strong>AutoKeyz</strong>, we are dedicated to providing exceptional <strong>automotive key services</strong>. With years of experience in the industry,
            our team of professional locksmiths is committed to ensuring your vehicle's security and your peace of mind. Whether you've lost
            your car keys or need a spare, we've got you covered.
          </p>
          <p className="text-gray-700 mb-4">
            We pride ourselves on our prompt and reliable service, utilizing the latest technology and equipment to handle all types of automotive
            key issues. Our services include <strong>key replacement</strong>, <strong>keyless entry system installation</strong>, and <strong>emergency lockout assistance</strong>. Our mission
            is to deliver high-quality solutions quickly and efficiently.
          </p>
          <h3 className="text-2xl font-semibold text-gray-600 mb-6">Our Commitment</h3>
          <p className="text-gray-700 mb-4">
            Customer satisfaction is our top priority. We understand the inconvenience of being locked out of your vehicle or losing your keys,
            which is why we strive to provide fast, friendly, and effective service. Our team is available around the clock to assist you in any
            emergency situation.
          </p>
          <p className="text-gray-700">
            Trust <strong>AutoKeyz</strong> for all your <strong>automotive key needs</strong>. We are here to ensure your vehicle's security and get you back on the road
            as quickly as possible. <a href="#contact" className="text-blue-600 underline">Contact us today</a> to learn more about our services or to schedule an appointment.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src="images/about.jpeg" alt="AutoKeyz Team at Work" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
      {/* Structured Data */}
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
    </section>
  );
};

export default AboutUs;
