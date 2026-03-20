import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage && href.startsWith('/#')) {
      // Allow router to navigate to home first, then scroll
      setTimeout(() => {
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      className={`font-main fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'py-4 bg-background/95 md:glass shadow-lg backdrop-blur-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tighter"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">J</span>oshua<span className="text-primary">.</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {isHomePage ? (
                  <a
                    href={link.href.replace('/', '')}
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center space-x-4 border-l border-border pl-4"
          >
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="https://wa.link/jyk08s" 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Let's Talk <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-card transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: '100vh' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-t border-border/50 shadow-2xl overflow-hidden flex flex-col"
            style={{ height: 'calc(100vh - 70px)' }}
          >
            <div className="flex flex-col px-8 py-12 space-y-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  {isHomePage ? (
                    <a
                      href={link.href.replace('/', '')}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold hover:text-primary hover:translate-x-4 transition-all duration-300 block tracking-tight"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-3xl font-bold hover:text-primary hover:translate-x-4 transition-all duration-300 block tracking-tight"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1, duration: 0.4 }}
                className="pt-8 border-t border-border/50 mt-4"
              >
                <a 
                  href="https://wa.link/jyk08s" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-5 rounded-2xl font-bold text-xl text-center flex items-center justify-center gap-3 w-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Let's Talk <ArrowRight size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
