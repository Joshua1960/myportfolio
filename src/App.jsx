import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Lazy load the AllProjects page since it's not needed on initial load
const AllProjects = lazy(() => import('./pages/AllProjects').then(module => ({ default: module.AllProjects })));

const HomePage = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
  </main>
);

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
          <CustomCursor />
          <AppContent />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
