import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { Availability, Contact, Footer, Objective } from "./components/Closing";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ResumeSheet } from "./components/ResumeSheet";
import { Differentials, Skills } from "./components/Skills";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Differentials />
          <Objective />
          <Availability />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
      <ResumeSheet />
    </MotionConfig>
  );
}
