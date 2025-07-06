import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-600 text-gray-300 mt-10">
      {/* Main Grid Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800">
        {/* Services */}
        <div>
          <h4 className="text-orange-400 text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {['Branding', 'Design', 'Marketing', 'Advertisement'].map((item, i) => (
              <li key={i}><a className="hover:text-white transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-orange-400 text-xl font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {['About us', 'Contact', 'Jobs', 'Press kit'].map((item, i) => (
              <li key={i}><a className="hover:text-white transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-orange-400 text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {['Terms of use', 'Privacy policy', 'Cookie policy'].map((item, i) => (
              <li key={i}><a className="hover:text-white transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-orange-400 text-xl font-semibold mb-4">Subscribe</h4>
          <p className="mb-3 text-sm text-gray-400">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-md bg-gray-800 text-sm border border-gray-700 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer with Flex */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-gray-500">
          <span className="font-semibold text-white">🚀 ACME Industries</span> © 2025. All rights reserved.
        </div>

        <div className="flex gap-5 text-lg">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
