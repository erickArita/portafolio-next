import AboutMe from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";
import Skills from "../components/skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe/>
      <Skills />
      <Proyectos/>
      <Contact/>
    </>
  )
}
