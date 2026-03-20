import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Joshua from "../assets/img/Joshua.png";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // GSAP text reveal animation
    if (textRef.current) {
      const chars = textRef.current.innerText.split("");
      textRef.current.innerText = "";

      chars.forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        textRef.current?.appendChild(span);
      });

      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

      {/* Animated shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col gap-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-lg md:text-xl font-medium text-foreground/80 font-main">
                Hello, I'm
              </p>
            </motion.div>

            <h1
              ref={textRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight font-main"
            >
              Joshua Joel
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-sm md:text-lg max-w-xl font-main"
            >
              I help organizations and individuals build their online presence
              through the language of beautiful, performant websites.<br></br>{" "}
              I'm an expert No-code, Coded Website Developer and AWS Solutions
              Architect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap items-center gap-4 mt-4 font-main"
            >
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
              >
                Hire Me <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                className="glass border border-border px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-card/80 transition-all hover:scale-105 active:scale-95"
              >
                Download CV <Download size={18} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-6 mt-8"
            >
              <a
                href="https://github.com/Joshua1960"
                className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:h-[600px] flex justify-center items-end"
          >
            <div className="relative w-full max-w-lg flex justify-center items-end">
              <div className="absolute bottom-0 w-[90%] h-[70%] bg-gradient-to-t from-primary/20 to-transparent rounded-[2rem] -z-10 blur-xl mix-blend-overlay"></div>
              <img
                src={Joshua}
                alt="Joshua Joel"
                className="w-full h-auto object-contain max-h-[600px] filter drop-shadow-2xl"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 -left-6 md:left-0 glass px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 z-20 border border-border/50"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">Available for work</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 -right-6 md:right-0 glass px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 z-20 border border-border/50"
              >
                <div className="font-bold text-2xl text-primary">3+</div>
                <span className="font-medium text-sm leading-tight">
                  Years
                  <br />
                  Experience
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
