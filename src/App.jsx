import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
// Lazy-load non-critical components to reduce initial bundle
const CustomCursor = lazy(() =>
  import("./components/CustomCursor").then((m) => ({
    default: m.CustomCursor,
  })),
);
const Navbar = lazy(() =>
  import("./components/Navbar").then((m) => ({ default: m.Navbar })),
);
const Hero = lazy(() =>
  import("./components/Hero").then((m) => ({ default: m.Hero })),
);
const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("./components/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects })),
);
const Testimonials = lazy(() =>
  import("./components/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer })),
);

// Lazy load the AllProjects page since it's not needed on initial load
const AllProjects = lazy(() =>
  import("./pages/AllProjects").then((module) => ({
    default: module.AllProjects,
  })),
);

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
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
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
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <AppContent />
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
