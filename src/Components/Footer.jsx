import React, { Component } from 'react';
import Logo from '../assets/img/delis_logo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="bg-black">
        <div className="font-main px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center w-full">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="block">
            <img src={Logo} alt="Delis Tech Logo" className="w-8" />
          </a>

          <p className="text-yellow-500 tracking-wide text-md select-none">
            © Copyright 2025 Delis Tech.
          </p>
        </div>
      </footer>
    );
  }
}
