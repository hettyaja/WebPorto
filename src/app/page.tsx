import Aboutme from "../../components/Aboutme";
import Hero from "../../components/Hero";
import Project from "../../components/Project";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="project">
        <Project />
      </section>
      <section>  <Footer/> </section>



     
    </>
  );
}
