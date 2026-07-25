import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

import Experience from "../components/Experience/Experience";

import Education from "../components/Education/Education";

import Certificates from "../components/Certificates/Certificates";

import Contact from "../components/Contact/Contact";

import Footer from "../components/Footer/Footer";

import PageTransition from "../components/PageTransition/PageTransition";

import SEO from "../components/SEO/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Kishan Kumar | Full Stack MERN Developer"
        description="Portfolio of Kishan Kumar showcasing MERN Stack projects, React applications, backend development, Java, and Data Structures & Algorithms."
        keywords="Kishan Kumar, MERN Developer, React Developer, Node.js, MongoDB, Java, Portfolio"
      />

      <PageTransition>
        <ScrollProgress />

        <AnimatedBackground />

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Education />

        <Certificates />

        <Projects />

        <Contact />

        <Footer />

        <ThemeToggle />

        <ScrollTop />
      </PageTransition>
    </>
  );
}

export default Home;
