import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Project1 from "../image/project1.png";
import Project2 from "../image/project2.png";
import Project3 from "../image/project3.png";
import Project4 from "../image/project4.png";
import Interface1 from "../image/Interface1.jpg";
import Interface2 from "../image/Interface2.jpg";
// Motion
import {motion} from 'framer-motion';
// Variants
import {fadeIn} from "./variants";


export default class MyPortfolio extends Component {
  render() {
    return (
      <div id='portfolio' className='bg-stone-900 flex flex-col xl:px-16 px-6 py-16 place-items-center gap-6'>
        <div>
            <h3 className='text-neutral-300 text-lg font-normal tracking-wider'>Latest Works</h3>
            <p className='text-neutral-200 font-semibold text-2xl md:text-5xl'>Explore My Popular Projects</p>
        </div>
        <div className='flex flex-col gap-10 sm:gap-0'>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className='sm:w-1/2 outline outline-white' src={Project1} alt="" />
                <motion.div 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='text-start w-full gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Website Devlopment</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>Plumule Advisory Website</p>
                    <p className='text-neutral-300 sm:text-lg'>Click here to see the full website page...</p>
                    <a href="https://plumuleadvisory.com/" target="_blank" rel="noopener noreferrer"><div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div></a>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='sm:w-1/2 outline outline-white' src={Project2} alt="" />
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}} 
                    className='text-start w-full gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>Website Development</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>FounderVsFinance Website</p>
                    <p className='text-neutral-300 sm:text-lg'>Click here to see the full website page...</p>
                    <a href="https://www.foundervsfinance.com/" target="_blank" rel="noopener noreferrer"><div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div></a>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img 
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false}}
                className='sm:w-1/2 outline outline-white' src={Project3} alt="" />
                <motion.div 
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>User Interface Design</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>NewTomorrow Website Redesign</p>
                    <p className='text-neutral-300 sm:text-lg'>Click here to download the full website interface design...</p>
                    <a href={Interface1} download="Interface1"><div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div></a>
                </motion.div>
            </div>
            {/* Each project */}
            <div className='flex flex-col sm:flex-row-reverse items-center gap-5 sm:gap-14 sm:m-8'>
                <motion.img
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='sm:w-1/2 outline outline-white' src={Project4} alt="" />
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}} 
                    className='text-start gap-4 flex flex-col sm:gap-6'>
                    <p className='text-lime-400 text-lg'>User Interface Design</p>
                    <p className='text-white font-medium text-2xl sl:text-4xl sm:text-5xl'>Lingscar Website Redesign</p>
                    <p className='text-neutral-300 sm:text-lg'>Click here to download the full website interface design...</p>
                    <a href={Interface2} download="Interface2"><div><FontAwesomeIcon className='rotate-45 bg-black p-4 rounded-full outline outline-1 outline-slate-600 hover:outline-lime-500' icon={faArrowUp} style={{color: "#C9F31D",}} /></div></a>
                </motion.div>
            </div>
        </div>
      </div>
    )
  }
}
