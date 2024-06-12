import "./App.css";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const { scrollYProgress } = useScroll();
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <div ref={topRef}></div>
      <Header
        topRef={topRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <main>
        <Intro />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </main>
    </>
  );
}

export default App;
