import "./App.css";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./components/Header";
import { motion, useScroll } from "framer-motion";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <GlobalStyle />
      <Header />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <main>
        <Intro />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
