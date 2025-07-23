import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

// Sample data (replace with your real project images and links)
import Project1 from "../assets/img/project1.jpg";
import Project2 from "../assets/img/project2.jpg";
import Project3 from "../assets/img/project3.jpg";

const projects = [
  {
    image: Project1,
    category: 'Organisation Website',
    name: 'FoundervsFinance Website',
    description: 'Foundervsfinanve provides insights from founders by leveraging their experiences.',
    link: 'https://www.foundervsfinance.com/',
  },
  {
    image: Project2,
    category: 'NGO Website',
    name: 'BALL Africa Website  ',
    description: "Building & Mentoring Africa's new community of Sports professionals and social impact leaders.",
    link: 'https://ballafrica.org/',
  },
  {
    image: Project3,
    category: 'Venture Capital Website',
    description: 'Plumule Advisory is an early-stage investment consulting company that guides and provides entrepreneurs with all they need to be investment ready.',
    name: 'Plumule Advisory Website',
    link: 'http://plumuleadvisory.com/',
  },
];

const MyPortfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-black text-white font-main px-10 lg:px-30 pt-24 pb-20 md:px-20 lg:pt-36 lg:pb-36 tracking-wide w-full">
      <div className="mb-15 text-left gap-4 flex flex-col">
        <hr className="border-t-4 border-yellow-500 w-14" />
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white">
          Portfolio
        </h2>
        <p className="text-gray-300 text-lg font-light">
          A selection of my recent work in design and development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-full group bg-box-gradient rounded-lg shadow-lg transition-transform duration-300 flex flex-col gap-6 p-4"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-slate-300 text-sm font-light">
              {project.category}
            </span>
            <h3 className="text-2xl font-medium">{project.name}</h3>
            <p className="text-slate-300 text-sm font-light">{project.description}</p>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm">
              <button className="text-md cursor-pointer text-white px-4 py-2 rounded-lg transition hover:scale-105 duration-300 flex items-center gap-2 outline-1">
                View Project →
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
