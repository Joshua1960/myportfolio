import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Joshua from "../image/Joshua.png";
import Experience from './Experience';
import Joshua_CV from '../image/Joshua_CV.pdf'


export default class Banner extends Component {
  render() {
    return (
      <div id='banner' style={{backgroundImage: `url(${Joshua})`}} className='bg-black bg-center bg-no-repeat bg-contain flex p-16 md:p-36 md:flex-row h-screen gap-80'>
        {/* My name and6 the hire me section */}
        <div className='flex flex-col gap-8 flex-3 z-20'>
            <div className='text-left gap-5 flex flex-col'>
                <hr className='border-t-8 border-maincolour w-1/6'/>
                <div className='text-3xl font-title font-light text-neutral-200'>Hello</div>
                <div className='font-title text-7xl text-white sm:font-semibold'>I'm Joshua,<br /> a web developer</div>
            </div>
            <div className='text-white text-left text-lg'>Focused on building intuitive, visually stunning digital experiences <br />with seamless functionality.</div>
            {/* THe Hire me button and the Download Resume */}
            <div className='sm:flex-row flex flex-col items-center gap-7'>
              <a href="https://wa.link/jyk08s"><button  className="w-44 flex-col items-center px-8 py-4 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-lime-500 rounded-xl hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-80">
              <span className="mx-1">Hire me</span> <FontAwesomeIcon className='w-2' icon={faAngleRight} />
              </button>
              </a>
              <a href={Joshua_CV} download="Joshua_CV"><div className='text-white text-base font-medium'>Download Resume <FontAwesomeIcon className='w-2' icon={faAngleRight} /></div></a>
            </div>
        </div>
        {/* My Experience Section */}
        <div className='md:flex-1 flex sm:w-full flex-4'>
          <Experience />
        </div>
      </div>
    )
  }
}
