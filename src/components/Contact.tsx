import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden font-main">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

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
              Get In Touch
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
            Let's Work <span className="text-gradient">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 text-lg"
          >
            Have a project in mind or want to discuss opportunities? I'm always
            open to talking about new ideas and collaborations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-4xl border border-border/50 h-full flex flex-col justify-center gap-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-foreground/70 mb-4">
                Fill out the form and I will get back to you within 24 hours.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full glass border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      Phone
                    </p>
                    <a
                      href="tel:+2348159268174"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      +234 8159268174
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full glass border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:joeljoshua250@gmail.com"
                      className="text-lg font-semibold hover:text-primary transition-colors break-all"
                    >
                      joeljoshua250@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full glass border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-medium">
                      Location
                    </p>
                    <p className="text-lg font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm font-medium mb-4">Connect with me:</p>
                <div className="flex gap-4">
                  {[
                    {
                      name: "Twitter",
                      icon: <Twitter size={18} />,
                      link: "https://x.com/OgahJosh",
                    },
                    {
                      name: "LinkedIn",
                      icon: <Linkedin size={18} />,
                      link: "https://www.linkedin.com/in/joshua-joel-0960b4238/",
                    },
                    {
                      name: "Gmail",
                      icon: <Mail size={18} />,
                      link: "mailto:joeljoshua250@gmail.com",
                    },
                    {
                      name: "Discord",
                      icon: <MessageCircle size={18} />,
                      link: "https://discord.com/users/joshua1960",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      aria-label={social.name}
                      target={social.name === "Gmail" ? "_self" : "_blank"}
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 text-sm font-medium shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              className="glass p-8 md:p-10 rounded-4xl border border-border/50 shadow-xl flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium pl-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-foreground/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium pl-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium pl-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-foreground/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium pl-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none placeholder:text-foreground/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg mt-2 flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
