import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 90 },
    { name: "JavaScript / ES6+", level: 85 },
    { name: "React.js", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "WordPress", level: 90 },
    { name: "Figma", level: 80 },
    { name: "GSAP / Framer Motion", level: 75 },
    { name: "AWS Cloud", level: 75 },
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/30 font-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-lg font-medium text-foreground/80 uppercase tracking-wider">
              My Expertise
            </p>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            A comprehensive overview of my technical capabilities and the tools
            I use to bring digital experiences to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-border rounded-full overflow-hidden glass">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-primary to-orange-500 rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px] -skew-x-12 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
