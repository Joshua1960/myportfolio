import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Joshua from "../image/Joshua.png";
import Experience from './Experience';
import Joshua_CV from '../image/Joshua_CV.pdf'


export default class Banner extends Component {
  render() {
    return (
      <div id='banner' className='bg-stone-900 flex flex-col xl:px-16 px-6 py-16 md:flex-row place-items-center gap-6'>
        {/* My name and the hire me section */}
        <div className='items-start flex flex-col gap-8 md:flex-1'>
            <div className='text-left gap-2 flex flex-col'>
                <div className='text-2xl font-medium text-neutral-400'>Hello, i’m</div>
                <div className='text-5xl font-medium sm:font-semibold sm:text-5xl md:text-6xl text-lime-400'>Joshua Joel</div>
                <div className='text-4xl sm:text-xl md:text-5xl text-neutral-100'>web developer</div>
            </div>
            <div className='text-neutral-200 text-left text-lg tracking-wide'>Focused on building intuitive, visually stunning digital experiences with seamless functionality.</div>
            {/* THe Hire me button and the Download Resume */}
            <div className='sm:flex-row flex flex-col items-center gap-7'>
              <a href="https://wa.link/jyk08s"><button  className="w-44 flex-col items-center px-8 py-4 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-lime-500 rounded-xl hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-lime-500 focus:ring-opacity-80">
              <span className="mx-1">Hire me</span> <FontAwesomeIcon className='w-2' icon={faAngleRight} />
              </button>
              </a>
              <a href={Joshua_CV} download="Joshua_CV"><div className='text-white text-base font-medium'>Download Resume <FontAwesomeIcon className='w-2' icon={faAngleRight} /></div></a>
            </div>
        </div>
        {/* My image Section */}
        <div className='flex flex-col items-center md:flex-1'><img className='w-3/4 md:w-auto' src={Joshua} alt="" /></div>
        {/* My Experience Section */}
        <div className='md:flex-1 sm:items-end sm:w-full'>
          <Experience />
        </div>
      </div>
    )
  }
}
