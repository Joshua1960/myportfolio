import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone } from "lucide-react";

export const About = () => {
  const services = [
    "Wordpress Website",
    "Fullstack Website",
    "UI/UX Design",
    "AWS Cloud Solutions",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden font-main">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <p className="text-lg font-medium text-foreground/80 uppercase tracking-wider">
                  About Me
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Providing{" "}
                <span className="text-gradient">digital solutions</span>
              </h2>

              <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
                I am not just a{" "}
                <strong className="text-foreground font-medium">
                  Web Developer
                </strong>
                , I understand the language of the internet. And I use it to the
                advantage of my clients. You define the project, I build it. I
                am a problem solver, and I am here to solve problems and get
                result.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass p-4 rounded-xl flex items-center gap-3 hover:bg-card/80 transition-colors border border-border/50 group"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-6 glass p-6 rounded-2xl border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <a
                    href="mailto:joeljoshua250@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    joeljoshua250@gmail.com
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px bg-border"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Phone</p>
                  <a
                    href="tel:+2348159268174"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +234 8159268174
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Abstract visual or stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden glass border border-border/50 p-8 flex flex-col justify-center"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-2 gap-6">
              {[
                { label: "Projects Completed", value: "20+" },
                { label: "Happy Clients", value: "10+" },
                { label: "Years Experience", value: "3+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-2xl border border-border/30 text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <h3 className="text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-foreground/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
