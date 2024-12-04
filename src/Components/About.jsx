import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import Aboutme from "../image/aboutme.png";
// Motion
import {motion} from 'framer-motion'
// Variants
import {fadeIn} from "../Components/variants";


export default class About extends Component {
  render() {
    return (
        <div id='about' className="overflow-hidden bg-black flex-col flex gap-16 items-center xl:px-16 px-6 py-4 sm:flex-row sl:w-full">
          <div className="xl:col-span-2 flex-1 overflow-hidden">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
            >
              <h2 className="text-neutral-200 text-lg font-normal tracking-wider text-start">About me</h2>
              <p className="flex flex-col text-white text-3xl sl:text-4xl md:text-4xl lg:text-5xl font-medium text-start gap-1">Professional <span className='text-lime-500'>Problem solution</span> for digital product</p>
              <p className="text-gray-300 mt-6 text-start leading-7 tracking-wide">Dedicated to crafting visually stunning, intuitive digital experiences that combine seamless functionality with cutting-edge design. Committed to pushing boundaries and delivering impactful solutions that leave a lasting impression on users.</p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}} 
              className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center">
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#84CC16",}} />
                <h6 className="text-white text-base font-semibold ml-4">Wordpress Website</h6>
              </div>
              <div className="flex items-center">
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#84CC16",}} />
                <h6 className="text-white text-base font-semibold ml-4">Fullstack Website</h6>
              </div>
              <div className="flex items-center">
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#84CC16",}} />
                <h6 className="text-white text-base font-semibold ml-4">UI/UX Design</h6>
              </div>
              <div className="flex items-center">
              <FontAwesomeIcon icon={faCircleCheck} style={{color: "#84CC16",}} />
                <h6 className="text-white text-base font-semibold ml-4">SEO Optimization</h6>
              </div> 
            </motion.div>
            <motion.div 
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className="gap-4 px-6 py-3 rounded-3xl sm:flex-row shadow-md flex flex-col bg-neutral-800 my-8 outline outline-1 outline-slate-600">
              <div className='flex items-center gap-6'>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#84CC16",}} className='border-2 p-3 rounded-full border-lime-500' />
                <div className='text-lime-500 flex flex-col text-sm text-left tracking-wider py-2'>Email me<span className='font-normal tracking-wide text-white text-lg'>joeljoshua250@gmail.com</span></div>
              </div>
              <div className='flex items-center gap-6'>
                <FontAwesomeIcon icon={faPhoneFlip} style={{color: "#84CC16",}} className='border-2 p-3 rounded-full border-lime-500' />
                <div className='text-lime-500 flex flex-col text-sm text-left tracking-wider py-2'>Call me<span className='font-normal tracking-wide text-white text-lg'>+234 8159268174</span></div>
              </div>                
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
            className='hidden sm:flex flex-1'>
            <img src={Aboutme} alt='e' className="w-6/7 md:w-full" />
          </motion.div>
        </div>
    )
  }
}
