import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../Components/variants';

import AWS from "../assets/img/aws-logo.png";
import Elementor from "../assets/img/elementor-logo.png";
import Figma from "../assets/img/figma-logo.png";
import Git from "../assets/img/git-logo.png";
import JS from "../assets/img/javascript-logo.png";
import RJS from "../assets/img/react-logo.png";
import Tailwind from "../assets/img/tailwind-logo.png";
import Wordpress from "../assets/img/wordpress-logo.png";

const skillData = [
  { img: AWS, text: 'AWS' },
  { img: Elementor, text: 'Elementor' },
  { img: Figma, text: 'Figma' },
  { img: Git, text: 'Git' },
  { img: JS, text: 'JavaScript' },
  { img: RJS, text: 'React' },
  { img: Tailwind, text: 'Tailwind' },
  { img: Wordpress, text: 'WordPress' },
];

const Skills = () => {
  return (
    <section id='skills' className='font-main px-10 lg:px-30 pt-24 pb-20 md:px-20 lg:pt-36 lg:pb-36 bg-neutral-950 tracking-wide content-center'>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex flex-col gap-6"
          >
            <hr className="border-t-4 border-yellow-500 w-14" />
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl font-light text-gray-300">
              Creative developer and UI/UX designer skilled in Figma, WordPress, React, Tailwind CSS, HTML, CSS, and JavaScript.
            </p>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-10">
              {skillData.map((item, index) => (
                <div className='flex items-center gap-3 bg-box-gradient p-6 rounded-md' key={index}>
                  <img
                    src={item.img}
                    alt={item.text}
                    title={item.text}
                    className="w-6 md:w-8"
                  />
                  <h2 className="font-light text-sm sm:text-base md:text-md text-white">{item.text}</h2>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
