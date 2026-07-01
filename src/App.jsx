import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Project from "./sections/Projects/Projects.jsx";
import Journey from "./sections/Journey/Journey.jsx"
import Education from "./sections/Education/Education.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills/>

      <Project/>

      <Journey/>

      <Education/>

      <Contact/>

      <Footer/>
    </>
  );
}

export default App;