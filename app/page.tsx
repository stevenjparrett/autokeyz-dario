"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import OurServices from "../components/OurServices";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";
import AboutUs from "../components/AboutUs";
import OurBrands from "../components/OurBrands";
import Parallax from "@/components/Parallax";
import "../app/globals.css";

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Auto Keyz - Jaguar Land Rover Key Replacements</title>
        <meta
          name="description"
          content="Auto Keyz specializes in Jaguar and Land Rover key replacements, offering reliable and prompt services for key replacements, diagnostics, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Auto Keyz" />
        <meta name="keywords" content="Jaguar key replacement, Land Rover key replacement, car key services, automotive locksmith, emergency key service" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.autokeyz.com/" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "Auto Keyz",
            "description": "Auto Keyz specializes in Jaguar and Land Rover key replacements, offering reliable and prompt services.",
            "url": "https://www.autokeyz.com/",
            "telephone": "+4407769017971",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Eastwell Grange",
              "addressLocality": "Ashford",
              "addressRegion": "Kent",
              "postalCode": "TN25 4QS",
              "addressCountry": "England"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "Your Latitude",
              "longitude": "Your Longitude"
            },
            "sameAs": [
              "https://www.facebook.com/autokeyz",
              "https://twitter.com/autokeyz",
              "https://www.instagram.com/autokeyz"
            ]
          })}
        </script>
      </Head>

      <Layout>
        <div
          className="relative min-h-screen flex flex-col justify-center items-center lg:flex-row p-8 md:p-12 lg:p-16"
          style={{
            backgroundImage: "url('/images/RRS_25MY_STEALTH_040424_02.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="relative flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto z-10">
            {/* Left Column for Text and Buttons */}
            <div className="flex flex-col justify-center items-start w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white transition-all duration-700 ${
                  isVisible
                    ? "transform translate-x-0 skew-x-10"
                    : "transform translate-x-full skew-x-0"
                }`}
                style={{
                  transform: isVisible
                    ? "translateX(0) skewX(-20deg)"
                    : "translateX(100%) skewX(0deg)",
                }}
              >
                Auto Keyz
              </h1>
              <p
                className={`text-gray-200 text-lg md:text-xl lg:text-2xl transition-opacity duration-700 delay-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Professional Jaguar and Land Rover Key Replacement & Diagnostics
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+4407769017971"
                  className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-500 delay-600 shadow-lg text-center ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Call Us
                </a>
                <button
                  onClick={handleScrollToContact}
                  className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-500 delay-500 shadow-lg text-center ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Get A Quote
                </button>
              </div>
            </div>

            {/* Right Column for Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <img
                src="/images/carkey.png"
                alt="Jaguar Land Rover Car Key Replacement"
                className="w-full max-w-xs md:max-w-md h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <section id="about" className="">
          <AboutUs />
        </section>
        <section id="brands" className="py-8">
          <OurBrands />
        </section>
        <section id="parallax" className="">
          <Parallax />
        </section>
        <section id="services" className="py-8">
          <OurServices />
        </section>
        <section id="pricing" className="pt-8">
          <Pricing />
        </section>
        <section id="contact" className="">
          <ContactForm />
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
