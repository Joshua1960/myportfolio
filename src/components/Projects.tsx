import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Project1 from "../assets/img/project1.jpg";
import Project2 from "../assets/img/project2.png";
import Project3 from "../assets/img/project3.jpg";
import Project5 from "../assets/img/project5.jpg";

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Business", "SAAS", "Corporate"];

  const projects = [
    {
      id: 1,
      title: "Megawatts Productions Website",
      category: "Business",
      image: Project1,
      description:
        "This is the official website of Megawatts Productions (Megawatts Group), a specialised audio equipment production company.",
      tags: ["Wordpress", "Elementor", "Figma"],
      link: "https://megawattsgroup.com/",
      github: "https://megawattsgroup.com/",
    },
    {
      id: 2,
      title: "CoSpace App",
      category: "SAAS",
      image: Project2,
      description:
        "A collaborative workspace management tool that allows teams to book and manage shared collaborative boards and resources in real-time.",
      tags: ["ReactJS", "WebSockets", "Node.js"],
      link: "https://co-space.vercel.app/",
      github: "https://github.com/co-space",
    },
    {
      id: 3,
      title: "BALL Africa Website",
      category: "Corporate",
      image: Project5,
      description:
        "Corporate Website for BALL Africa, an NGO focused on building & mentoring Africa's new community of Sports professionals",
      tags: ["Wordpress", "Elementor", "Figma"],
      link: "https://ballafrica.org/",
      github: "https://ballafrica.org/",
    },
    {
      id: 4,
      title: "Plumule Advisory",
      category: "Corporate",
      image: Project3,
      description:
        "Plumule Advisory is an early-stage investment consulting company that guides and provides entrepreneurs with all they need to be investment ready.",
      tags: ["Wordpress", "Elementor", "Figma"],
      link: "http://plumuleadvisory.com/",
      github: "http://plumuleadvisory.com/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 relative font-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-lg font-medium text-foreground/80 uppercase tracking-wider">
              Portfolio
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            A selection of my best work. Browse through to see how I solve
            problems and create engaging digital experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 glass p-2 rounded-2xl md:rounded-full border border-border/50 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "hover:bg-card text-foreground/70 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden glass border border-border/50 flex flex-col h-full hover:shadow-md hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-background/40 backdrop-blur-sm">
                    <a
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 rounded-full bg-card text-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-border"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </h3>

                  <p className="text-foreground/70 text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-foreground/60 bg-card px-2 py-1 rounded-md border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 group"
          >
            View All Projects
            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
