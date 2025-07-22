import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "Olufemi Adefeso",
    role: "Founder, BALL Africa",
    text: "Working with Joshua was a game changer for our brand. He didn't just build a website",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEjTSHiZc5-tQ/profile-displayphoto-shrink_400_400/B4DZZnvxThHIAo-/0/1745497299214?e=1756339200&v=beta&t=M-wuQ-WmAsZyzhfssRCO8Ja26HLpdvq3d4B8cgga0KU",
  },
  {
    name: "Gabriel Ologunwa",
    role: "Founder, Plumule Advisory",
    text: "Joshua is an absolute pro. He communicates clearly, meets every deadline, and always delivers more than expected.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFIlJm1pSKZig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707845879871?e=1756339200&v=beta&t=pC1cL3SdArFdPt2IwG16XrLA0fRpXPThAghsNoqlZJg",
  },
  {
    name: "Mark Okechukwu",
    role: "Founder, SIT",
    text: "I’ve collaborated with many developers, but none have matched Joshua’s attention to detail and genuine care for business goals.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQGhO-PGPv6Btg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699584162805?e=1756339200&v=beta&t=ko0JAu5sPl6aGbKuyV3RjGwXKj2SjEXWFYf6YPzcy5k",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <div className="bg-slate-950 px-10 lg:px-30 pt-24 pb-20 md:px-20 lg:pt-36 lg:pb-36 font-main w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-10">
          Testimonials
        </h2>

        <div className="relative mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-box-gradient shadow-lg rounded-xl px-8 py-10 md:px-12 md:py-14 mx-auto max-w-2xl"
            >
              <p className="text-white font-light text-lg mb-4">“{testimonial.text}”</p>
              <p className="text-white">
                – {testimonial.name} <span className="text-sm text-yellow-400">({testimonial.role})</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-14 h-14 rounded-full border-2 transition-all duration-300 
                ${activeIndex === index ? 'border-yellow-400' : 'border-transparent'} 
                hover:border-yellow-400`}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
