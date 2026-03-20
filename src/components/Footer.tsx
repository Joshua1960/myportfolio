import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="font-main bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-border/50 pb-12">
          <div className="md:col-span-2">
            <a
              href="#home"
              className="text-3xl font-bold tracking-tighter mb-6 inline-block"
            >
              <span className="text-primary">J</span>oshua
              <span className="text-primary">.</span>
            </a>
            <p className="text-foreground/70 max-w-md font-light leading-relaxed">
              A passionate web developer focused on crafting visually stunning
              and highly functional digital experiences. Let's build something
              amazing together.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-colors relative group inline-block"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Joshua Joel. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Huge background text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        JOSHUA
      </div>
    </footer>
  );
};
