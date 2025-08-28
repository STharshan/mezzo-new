import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="bg-pink-200 py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Left section with Instagram icon */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-blue-800" />
          </a>
          <div className="text-lg font-semibold text-blue-800">Mezzo</div>
        </div>

        {/* Navigation Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-blue-800">About</a>
          <a href="#menu" className="text-blue-800">Menu</a>
          <a href="#catering" className="text-blue-800">Catering</a>
          <a href="#locations" className="text-blue-800">Locations</a>
          <a href="#loyalty" className="text-blue-800">Loyalty</a>
        </div>

        {/* Right section with buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-blue-800 px-6 py-2 rounded-lg border border-blue-800 hover:bg-blue-100">
            Click+Collect
          </button>
          <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Delivery
          </button>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <GiHamburgerMenu className="w-6 h-6 text-blue-800" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
