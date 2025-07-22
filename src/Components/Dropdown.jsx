import React, { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block md:hidden" ref={dropdownRef}>
      {/* Toggle button */}
      <button
        onClick={toggleDropdown}
        className="p-2 text-white rounded-md"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-40 mt-2 w-60 bg-black/60 backdrop-blur-md rounded-md shadow-lg py-4 transition-all duration-300 origin-top-right">
          {[
            { href: './', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#portfolio', label: 'Portfolio' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a key={label} href={href} onClick={closeDropdown}>
              <div className="block px-6 py-3 text-2xl text-white hover:bg-white/10 transform transition duration-300 hover:translate-x-2">
                {label}
              </div>
            </a>
          ))}

          <div className="px-6 mt-4">
            <button
              className="w-full bg-yellow-gradient text-black py-2 px-4 rounded-xl text-base transition-all duration-300"
              onClick={closeDropdown}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
