import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants'; // Make sure you have a fadeIn variant defined

const experienceData = [
  {
    number: '3+',
    label: 'Years Experience',
  },
  {
    number: '25+',
    label: 'Completed Projects',
  },
  {
    number: '10+',
    label: 'Technologies Mastered',
  },
];

const Experience = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="w-full text-white font-main flex flex-col items-start gap-6"
    >
      <h3 className="text-2xl font-semibold mb-2 border-b-4 border-yellow-400 pb-2">
        My Experience
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 w-full">
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-box-gradient p-6 rounded-xl flex flex-col items-start sm:items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span className="text-4xl font-bold text-yellow-500 md:xl">{item.number}</span>
            <p className="text-md text-gray-300 mt-2 text-left sm:text-center md:text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;