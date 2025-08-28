import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-pink-400 text-black px-6 py-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-5">MEZZO</h2>
          <p className="text-md font-semibold text-black mb-4">
            Bringing the authentic taste of Dhaka’s street food to your table with love and tradition.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="https://www.instagram.com/samochaihouse/"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md text-black font-semibold">
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md text-black font-semibold">
            <li><a href="#">Entrees</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-2 text-md text-black font-semibold">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 text-gray-800" />
              Unit 19 Victoria Way Pride Park Derby DE24 8AN
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-gray-800"/> 01332 318181
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gray-800" /> mezzo.derby@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md text-black font-semibold">
        © 2025 MEZZO. All rights reserved. Made with <span className="text-gray-800">❤️</span> for authentic food lovers.
      </div>
    </footer>
  );
};

export default Footer;
