import './App.css';
import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Banner from './Components/Banner.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import MyPortfolio from './Components/MyPortfolio.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import TestimonialSection from './Components/TestimonialSection.jsx';
// import Services from './Components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Skills />
      <MyPortfolio />
      <TestimonialSection/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
