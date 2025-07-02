import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdShareLocation } from 'react-icons/md';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Moonlit || Contact</title>
      </Helmet>

      <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-10 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-orange-500 mb-2 text-center">Drop Us a Line</h2>
            <p className="text-center text-gray-500 mb-6">We’d love to hear from you. Send us a message!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <input
                type="text"
                {...register('name')}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                {...register('email')}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                {...register('phone')}
                required
                placeholder="+8801..."
                className="w-full px-4 py-3 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                rows={5}
                {...register('recipe')}
                required
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-orange-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="submit"
                value="Send Message"
                className="w-full py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center bg-white rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">Contact Info</h2>
            <p className="text-center text-gray-600 mb-6">We are here to assist you — reach us anytime!</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope className="text-2xl text-orange-500" />
                <span>moonlitBite@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhone className="text-2xl text-orange-500" />
                <span>+8801644196242</span>
              </div>
              <div className="flex items-start gap-4 text-gray-700">
                <MdShareLocation className="text-3xl text-orange-500 mt-1" />
                <span>22 Baker Street, London, United Kingdom, W1U 3BW</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaClock className="text-2xl text-orange-500" />
                <span>
                  Sun–Wed: <span className="text-orange-500">9:00 AM</span> to{' '}
                  <span className="text-orange-500">5:00 PM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
