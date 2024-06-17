import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  postCode: string;
  vehicleModel: string;
  vehicleRegistration: string;
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
    vehicleRegistration: '',
    message: '',
    isVehicleLocked: '',
    doesVehicleRunAndDrive: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://162.0.229.131:3001/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData as any)
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          phoneNumber: '',
          email: '',
          postCode: '',
          vehicleModel: '',
          vehicleRegistration: '',
          message: '',
          isVehicleLocked: '',
          doesVehicleRunAndDrive: ''
        });
      } else {
        throw new Error('Failed to send message.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message.');
    });
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
          <button
            onClick={() => window.open('https://wa.me/447769017971', '_blank')}
            className="bg-green-500 flex items-center justify-center space-x-2 py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
          >
            <img src="images/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
            <span>WhatsApp Us</span>
          </button>
          <div className="mt-8">
            <img src="images/getintouch.jpeg" alt="Contact Us" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number *"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900  focus:outline-none text-gray-900"
            />
            <input
              type="text"
              name="postCode"
              placeholder="Postcode *"
              required
              value={formData.postCode}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900  focus:outline-none text-gray-900"
            />
            <input
              type="text"
              name="vehicleModel"
              placeholder="Vehicle Model"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900"
            />
            <input
              type="text"
              name="vehicleRegistration"
              placeholder="Vehicle Registration"
              value={formData.vehicleRegistration}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900  focus:outline-none text-gray-900"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-900 focus:outline-none text-gray-900"
            ></textarea>
            <div className="flex justify-between items-center gap-4">
              <label className="font-bold text-black">Is Vehicle Locked?</label>
              <div className="flex gap-2">
                <button type="button" className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'Yes' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500 transition-colors'}`} onClick={() => setFormData({...formData, isVehicleLocked: 'Yes'})}>Yes</button>
                <button type="button" className={`py-2 px-4 rounded-full ${formData.isVehicleLocked === 'No' ? 'bg-red-500 text-white' : 'bg-gray-300 hover:bg-red-500 transition-colors'}`} onClick={() => setFormData({...formData, isVehicleLocked: 'No'})}>No</button>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <label className="font-bold text-black">Does Vehicle Run And Drive?</label>
              <div className="flex gap-2">
                <button type="button" className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'Yes' ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-green-500 transition-colors'}`} onClick={() => setFormData({...formData, doesVehicleRunAndDrive: 'Yes'})}>Yes</button>
                <button type="button" className={`py-2 px-4 rounded-full ${formData.doesVehicleRunAndDrive === 'No' ? 'bg-red-500 text-white' : 'bg-gray-300 hover:bg-red-500 transition-colors'}`} onClick={() => setFormData({...formData, doesVehicleRunAndDrive: 'No'})}>No</button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
