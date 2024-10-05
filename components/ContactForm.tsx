// components/ContactForm.tsx

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  postCode: string;
  vehicleModel: string;
  vehicleYear: string; // Changed from vehicleRegistration to vehicleYear
  message: string;
  isVehicleLocked: string;
  doesVehicleRunAndDrive: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    postCode: '',
    vehicleModel: '',
    vehicleYear: '', // Updated field
    message: '',
    isVehicleLocked: '',
    doesVehicleRunAndDrive: ''
  });

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // Update currentYear each January 1st
  useEffect(() => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const januaryFirst = new Date(nextYear, 0, 1);
    const timeUntilNextYear = januaryFirst.getTime() - now.getTime();

    const timer = setTimeout(() => {
      setCurrentYear(nextYear);
    }, timeUntilNextYear);

    return () => clearTimeout(timer);
  }, [currentYear]);

  // Generate vehicle years from 2007 to currentYear
  const generateVehicleYears = () => {
    const years = [];
    for (let year = 2007; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  // Handler to update form data
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handler to submit the form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submission initiated');
    setSubmitStatus(null); // Reset status on new submission
    setIsSubmitting(true); // Indicate form submission in progress
    try {
      console.log('Sending fetch request to /api/contact');
      const response = await fetch('/api/contact', { // Use relative path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      console.log('Fetch response received:', response);
      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully:', result);
        setSubmitStatus('Message sent successfully!');
        // Reset the form after successful submission
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          postCode: '',
          vehicleModel: '',
          vehicleYear: '',
          message: '',
          isVehicleLocked: '',
          doesVehicleRunAndDrive: ''
        });
      } else {
        const errorData = await response.json();
        console.log('Error response from server:', errorData);
        setSubmitStatus(`Error: ${errorData.error || 'Failed to send message.'}`);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setSubmitStatus('Error sending message.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <section id="contact" className="py-12 px-4 bg-white text-gray-900">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        {/* Description Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <p className="text-lg mb-6">
            You can also reach out to us via WhatsApp for quick assistance.
          </p>
          {/* WhatsApp button optimized with direct link */}
          <a
            href="https://wa.me/447769017971"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 flex items-center justify-center space-x-2 py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
          >
            <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
            <span>WhatsApp Us</span>
          </a>
          {/* Lazy loading the image for performance */}
          <div className="mt-8">
            <Image
              src="/images/getintouch.jpeg"
              alt="Contact Us"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
              loading="lazy"
            />
          </div>
        </div>
        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number *"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <input
              type="text"
              name="postCode"
              placeholder="Postcode *"
              required
              value={formData.postCode}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            <input
              type="text"
              name="vehicleModel"
              placeholder="Vehicle Model *"
              required
              value={formData.vehicleModel}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            />
            {/* Vehicle Year Dropdown */}
            <select
              name="vehicleYear"
              value={formData.vehicleYear}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 bg-white"
            >
              <option value="" disabled className="text-gray-500">Vehicle Year *</option>
              {generateVehicleYears().map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900 placeholder-gray-500"
            ></textarea>
            {/* Boolean Buttons */}
            <div className="flex justify-between items-center gap-4">
              <label className="font-bold text-black">Is Vehicle Locked? *</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'Yes' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500 transition-colors'}`}
                  onClick={() => setFormData({ ...formData, isVehicleLocked: 'Yes' })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'No' ? 'bg-red-500 text-white' : 'bg-gray-300 hover:bg-red-500 transition-colors'}`}
                  onClick={() => setFormData({ ...formData, isVehicleLocked: 'No' })}
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <label className="font-bold text-black">Does Vehicle Run And Drive? *</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'Yes' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500 transition-colors'}`}
                  onClick={() => setFormData({ ...formData, doesVehicleRunAndDrive: 'Yes' })}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'No' ? 'bg-red-500 text-white' : 'bg-gray-300 hover:bg-red-500 transition-colors'}`}
                  onClick={() => setFormData({ ...formData, doesVehicleRunAndDrive: 'No' })}
                >
                  No
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {submitStatus && (
            <div className={`mt-4 p-4 rounded-lg ${submitStatus.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
