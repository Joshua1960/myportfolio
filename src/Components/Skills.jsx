import React, { Component } from 'react'
import Figma from "../image/figma.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import ReactLogo from "../image/react.png";
import Jscript from "../image/javascr.png";
import Twind from "../image/tailwind.png";
import Wordpress from "../image/wordpress.png";
// Motion
import {motion} from 'framer-motion'
// Variants
import {fadeIn} from "../Components/variants";


export default class Skills extends Component {
  render() {
    return (
      <div id='skills' className='xl:px-16 px-6 py-8 bg-neutral-950'>
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}
              className="max-w-lg text-center lg:mx-0 gap-10 flex flex-col">
              <h2 className="font-medium sm:text-5xl text-white text-2xl text-start">Skills & Experience</h2>
                <p className="mt-4 text-neutral-400 text-start text-lg">
                Creative developer and UI/UX designer skilled in Figma, WordPress, React, Tailwind CSS, HTML, CSS, and JavaScript.
                </p>
                {/* <button className="w-44 flex items-center px-8 py-4 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-lime-500 rounded-xl hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-80">
                  <span className="mx-1">Learn more</span> <FontAwesomeIcon className='w-2' icon={faAngleRight} />
                </button> */}
            </motion.div>      
            <motion.div 
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}}
              className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {/* Box */}
              <a className="hover:bg-neutral-950 bg-neutral-900 flex gap-4 flex-col items-center w-35 sm:w-40 sm:h-50 rounded-xl border border-gray-700 pt-6 px-4 shadow-sm  hover:ring-1 hover:ring-lime-500 focus:outline-none focus:ring" href="www.google.com">
                <img className='h-14' src={Figma} alt="" />
                <h2 className="text-lg tracking-wide text-white">Figma</h2>
                <div className='w-4/5'>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500"></span>
                    <span className="px-2 py-1 bg-teal-50 rounded-lg text-xs text-neutral-800 font-medium text-center">80%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 mb-6 mt-2 rounded-lg">
                    <div className="bg-lime-400 h-2 rounded-lg w-4/5"></div>
                  </div>
                </div>
              </a>
              {/* Box */}
              <a className="hover:bg-neutral-950 bg-neutral-900 flex gap-2 flex-col items-center w-35 sm:w-40 sm:h-50 rounded-xl border border-gray-700 pt-6 px-4 shadow-sm  hover:ring-1 hover:ring-lime-500 focus:outline-none focus:ring" href="www.google.com">
                <img className='h-14' src={ReactLogo} alt="" />
                <h2 className="text-lg tracking-wide text-white">React</h2>
                <div className='w-4/5'>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500"></span>
                    <span className="px-2 py-1 bg-teal-50 rounded-lg text-xs text-neutral-800 font-medium text-center">80%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 mb-6 mt-2 rounded-lg">
                    <div className="bg-lime-400 h-2 rounded-lg w-4/5"></div>
                  </div>
                </div>
              </a>      
              {/* Box */}
              <a className="hover:bg-neutral-950 bg-neutral-900 flex gap-2 flex-col items-center w-35 sm:w-40 sm:h-50 rounded-xl border border-gray-700 pt-6 px-4 shadow-sm  hover:ring-1 hover:ring-lime-500 focus:outline-none focus:ring" href="www.google.com">
                <img className='h-14' src={Jscript} alt="" />
                <h2 className="text-lg tracking-wide text-white">Javascript</h2>
                <div className='w-4/5'>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500"></span>
                    <span className="px-2 py-1 bg-teal-50 rounded-lg text-xs text-neutral-800 font-medium text-center">80%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 mb-6 mt-2 rounded-lg">
                    <div className="bg-lime-400 h-2 rounded-lg w-4/5"></div>
                  </div>
                </div>
              </a>              
              {/* Box */}
              <a className="hover:bg-neutral-950 bg-neutral-900 flex gap-2 flex-col items-center w-35 sm:w-40 sm:h-50 rounded-xl border border-gray-700 pt-6 px-4 shadow-sm  hover:ring-1 hover:ring-lime-500 focus:outline-none focus:ring" href="www.google.com">
                <img className='h-14' src={Twind} alt="" />
                <h2 className="text-lg tracking-wide text-white">Tailwind</h2>
                <div className='w-4/5'>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500"></span>
                    <span className="px-2 py-1 bg-teal-50 rounded-lg text-xs text-neutral-800 font-medium text-center">80%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 mb-6 mt-2 rounded-lg">
                    <div className="bg-lime-400 h-2 rounded-lg w-4/5"></div>
                  </div>
                </div>
              </a>
              {/* Box */}
              <a className="hover:bg-neutral-950 bg-neutral-900 flex gap-2 flex-col items-center w-35 sm:w-40 sm:h-50 rounded-xl border border-gray-700 pt-6 px-4 shadow-sm  hover:ring-1 hover:ring-lime-500 focus:outline-none focus:ring" href="www.google.com">
                <img className='h-14' src={Wordpress} alt="" />
                <h2 className="text-lg tracking-wide text-white">Wordpress</h2>
                <div className='w-4/5'>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500"></span>
                    <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-neutral-800 font-medium text-center">80%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 mb-6 mt-2 rounded-lg">
                    <div className="bg-lime-400 h-2 rounded-lg w-4/5"></div>
                  </div>
                </div>
              </a>
              {/* Box */}
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
}
