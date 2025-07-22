import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEnvelope, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from "../Components/variants";

export default class About extends Component {
  render() {
    return (
      <section
        id="about"
        className="w-full px-10 lg:px-30 tracking-wide font-main bg-black flex flex-col md:flex-row gap-10 items-center pt-24 pb-20 md:px-20 lg:pt-36 lg:pb-36"
      >
        {/* Left text content */}
        <div className="flex-1 flex flex-col justify-between max-w-3xl">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
          >
            <hr className="border-t-4 border-yellow-500 w-14"/>
            <p className="text-lg sm:text-xl font-light text-gray-300 mt-4">About me</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Providing digital solutions
            </h1>
            <p className="text-lg sm:text-xl font-light text-gray-300 mt-4">
              I am a <b>Web Developer</b>, dedicated to crafting visually stunning, intuitive digital experiences
              that combine seamless functionality with cutting-edge design.
              I am also committed to pushing boundaries and delivering impactful solutions
              that leave a lasting impression on users.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid sm:grid-cols-2 gap-8 mt-12"
          >
            {[
              "Wordpress Website",
              "Fullstack Website",
              "UI/UX Design",
              "SEO Optimization",
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-box-gradient p-4 rounded-xl">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#E9AF08" }} 
                  className="flex-shrink-0"
                />
                <h6 className="text-white ml-4 text-xl flex-1 font-light">{item}</h6>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="font-light gap-10 px-6 py-4 sm:flex-row shadow-md flex flex-col bg-box-gradient my-8 outline-1 outline-slate-600 rounded-lg"
          >
            <div className="flex items-center gap-6">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#E9AF08" }}
                className="border-2 p-3 rounded-full border-blue-gradient"
              />
              <div className="text-white text-lg">joeljoshua250@gmail.com </div>
            </div>
            <div className="flex items-center gap-6">
              <FontAwesomeIcon
                icon={faPhoneFlip}
                style={{ color: "#E9AF08" }}
                className="border-2 p-3 rounded-full border-blue-gradient"
              />
              <div className="text-white text-lg">+234 8159268174</div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
}
