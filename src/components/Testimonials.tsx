import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Olufemi Adefeso",
      role: "Founder",
      company: "BALL Africa",
      content:
        "Joshua is an expert at what he does. He is very calm and pays attention to details. He is a great team player and always willing to go the extra mile to ensure the success of the project. I highly recommend him for any web development project.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEjTSHiZc5-tQ/profile-displayphoto-shrink_400_400/B4DZZnvxThHIAo-/0/1745497299214?e=1775692800&v=beta&t=8qcxznj-vV3RIgrNvo25oJ9BgEP_Do6y2lqWnZiZLfM",
    },
    {
      id: 2,
      name: "Gabriel Ologunwa",
      role: "Founder",
      company: "Plumule Advisory",
      content:
        "Working with Joshua was a breeze. He understood our vision immediately and delivered a product that exceeded our expectations. He communicates clearly.",

      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQFIlJm1pSKZig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707845879871?e=1775692800&v=beta&t=XxRl3-jw9On5fj4HD1jTqZOgtXhiv3_Wx3jAaSFKWHw",
    },
    {
      id: 3,
      name: "Mark Okechukwu",
      role: "Founder/CTO",
      company: "SIT Technologies",
      content:
        "I've worked with many developers, but Joshua stands out for his design sensibility. He doesn't just write code; he crafts experiences.",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFDAvPw3KSSew/profile-displayphoto-scale_400_400/B4EZzJ0nbpIEAk-/0/1772912542404?e=1775692800&v=beta&t=D6WVAXKFQcPBX4ZCJzrmGN9CJUAEAaG_7K7mL-bztWI",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="font-main py-24 relative overflow-hidden bg-card/30">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

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
              Testimonials
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
            Client <span className="text-gradient">Feedback</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-primary/10 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <Quote size={120} />
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] border border-border/50 relative z-10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border-4 border-primary/20 p-1">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-md md:text-lg  leading-relaxed mb-6">
                    {testimonials[currentIndex].content}
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-gradient">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-foreground/60 font-medium">
                      {testimonials[currentIndex].role} at{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
