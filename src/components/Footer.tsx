import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white py-16 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-padding">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Left: Company Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Invictus Data & AI</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              Empowering businesses with data-driven intelligence. From cloud migration to AI integration—delivered by industry experts across Chennai, San Francisco, Bangalore, and Hyderabad.
            </p>
          </div>

          {/* Center: Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-200 text-lg">Data & Analytics</span></li>
              <li><span className="text-gray-200 text-lg">AI/ML & Emerging Tech</span></li>
              <li><span className="text-gray-200 text-lg">Cloud Infrastructure</span></li>
              <li><span className="text-gray-200 text-lg">E-commerce Solutions</span></li>
            </ul>
          </div>

          {/* Right: Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><span className="text-gray-200 text-lg">About Us</span></li>
              <li><span className="text-gray-200 text-lg">Leadership Team</span></li>
              <li><span className="text-gray-200 text-lg">Global Offices</span></li>
              <li><span className="text-gray-200 text-lg">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222] mt-12 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 text-base gap-4 md:gap-0">
          <div className="flex-1 text-left">
            <span>© 2025 Invictus Data & AI. All rights reserved.</span>
            <span className="ml-4">HQ: Chennai, India | Global Offices: San Francisco, Bangalore, Hyderabad</span>
          </div>
          <div className="flex space-x-8 md:space-x-10 justify-center md:justify-end">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;