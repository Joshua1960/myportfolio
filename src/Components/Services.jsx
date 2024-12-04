import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from "../Components/variants";


export default function Services() {
  return (
    <div id='services' className='bg-stone-900 xl:px-16 px-6 py-8 flex flex-col gap-10'>
        <div className='flex flex-col items-center gap-2'>
            <p className='text-neutral-200 text-lg font-normal tracking-wider'>Services</p>
            <div className='sm:w-2/3 flex flex-col h-2/3 text-lime-500 font-semibold text-2xl md:text-5xl gap-1 sm:text-center'>My Special Service For your Business Development</div>
        </div>
        {/* Boxes */}
        <section className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {/* Box 1 */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}} 
              className="justify-between w-full text-white tracking-wide text-start gap-8 p-8 rounded-3xl sm:flex-row shadow-md flex flex-col bg-neutral-800 my-4 outline outline-1 outline-slate-600 hover:duration-300 hover:outline-lime-500">
              <div className='text-2xl'>01</div>
              <div className='font-medium text-xl'>Brand Identity Design <br /><span className='font-light text-base'>Dignissimos ducimus blanditiis praesen</span></div>
              <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>                
            </motion.div>
          {/* Box 2 */}
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}} 
              className="justify-between w-full text-white tracking-wide text-start gap-8 p-8 rounded-3xl sm:flex-row shadow-md flex flex-col bg-neutral-800 my-4 outline outline-1 outline-slate-600 hover:duration-300 hover:outline-lime-500">
              <div className='text-2xl'>02</div>
              <div className='font-medium text-xl'>Brand Identity Design <br /><span className='font-light text-base'>Dignissimos ducimus blanditiis praesen</span></div>
              <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>                
            </motion.div>
          {/* Box 3 */}
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}} 
              className="justify-between w-full text-white tracking-wide text-start gap-8 p-8 rounded-3xl sm:flex-row shadow-md flex flex-col bg-neutral-800 my-4 outline outline-1 outline-slate-600 hover:duration-300 hover:outline-lime-500">
              <div className='text-2xl'>03</div>
              <div className='font-medium text-xl'>Brand Identity Design <br /><span className='font-light text-base'>Dignissimos ducimus blanditiis praesen</span></div>
              <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>                
            </motion.div>
          {/* Box 4 */}
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false}} 
              className="justify-between w-full text-white tracking-wide text-start gap-8 p-8 rounded-3xl sm:flex-row shadow-md flex flex-col bg-neutral-800 my-4 outline outline-1 outline-slate-600 hover:duration-300 hover:outline-lime-500">
              <div className='text-2xl'>04</div>
              <div className='font-medium text-xl'>Brand Identity Design <br /><span className='font-light text-base'>Dignissimos ducimus blanditiis praesen</span></div>
              <div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600' icon={faArrowUp} style={{color: "#C9F31D",}} /></div>                
            </motion.div>
          {/* Boxes */}
          </section>
      </div>
  )
}
