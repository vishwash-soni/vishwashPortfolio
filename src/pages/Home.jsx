import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Home page — assembles every section in order.
// This is the only place section order needs to change.
function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
