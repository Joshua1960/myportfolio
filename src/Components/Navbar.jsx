import React from 'react';
import Logo from '../assets/img/delis_logo.png';
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <nav className="font-main bg-black fixed w-full z-50">
      <div className="px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center overflow-x-hidden">
        
        {/* Logo */}
        <div className="w-10 sm:w-14">
          <img src={Logo} alt="logo" className="object-contain w-8 h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-6 xl:gap-10 text-white text-sm lg:text-lg tracking-wide">
          <a href="./" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#portfolio" className="hover:text-yellow-500">Portfolio</a>
          <a href="#skills" className="hover:text-yellow-500">Skills</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
          <a href="https://wa.link/jyk08s">
            <button className="bg-yellow-400 text-md cursor-pointer hover:text-black text-black px-6 py-2 rounded-md transition hover:scale-105 duration-300 flex items-center gap-2">
              Let's talk
            </button>
          </a>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
