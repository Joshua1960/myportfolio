import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Joshua from "../assets/img/Joshua.png";
import Experience from './Experience';
import Joshua_CV from '../assets/img/Joshua_CV.pdf';

export default class Banner extends Component {
  render() {
    return (
      <div
        id="banner"
        className="w-full bg-black relative text-white font-main overflow-hidden content-center"
      >
        {/* Background image */}
        <img
          src={Joshua}
          alt="Joshua"
          className={`
            absolute bottom-0
            left-1/2 transform -translate-x-1/2
            h-5/6 
            object-contain
            opacity-80 md:opacity-100
            pointer-events-none
          `}
          style={{ maxHeight: '85vh' }}
        />
        {/* Content wrapper */}
        <div className="relative px-10 lg:px-30 pt-40 pb-20 lg:pb-36 flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-20">
          {/* Left section: Text + Buttons */}
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <div className="flex flex-col gap-4 text-left">
              <hr className="border-t-4 border-yellow-500 w-14" />
              <p className="text-lg sm:text-xl text-gray-300 w-3/4">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white">
                Joshua Joel
              </h1>
              <p className="text-lg sm:text-xl font-light text-gray-300 w-3/4">
                I am web developer focused on building intuitive, visually stunning digital experiences with seamless functionality.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
              <a href="https://wa.link/jyk08s">
                <button className="bg-yellow-500 cursor-pointer text-black white px-8 py-3 rounded-md transition hover:scale-105 duration-300 flex items-center gap-2">
                  Hire me <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </a>
              <a href={Joshua_CV} download="Joshua_CV">
                <button className="hover:bg-white cursor-pointer hover:text-black border border-white text-white px-6 py-3 rounded-md transition duration-300 flex items-center gap-2">
                  Download Resume <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </a>
            </div>
          </div>

          {/* Right section: Experience */}
          <div className="w-full md:w-2/3">
            <Experience />
            {/* gradient start */}
            <div className="fixed z-[0] w-[20%] h-[20%] top-0 rounded-full white__gradient bottom-40" />
            <div className="fixed z-[0] w-[25%] h-[25%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </div>
      </div>
    );
  }
}
