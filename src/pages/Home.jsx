import { lazy, Suspense } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// Lazy-loaded components
const Achievements = lazy(() => import("../components/Achievements"));
const Projects = lazy(() => import("../components/Projects"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));

function SectionLoader() {
  return (
    <div className="flex justify-center py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />
    </div>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        {/* Above-the-fold content */}
        <Hero />

        {/* Below-the-fold content */}
        <Suspense fallback={<SectionLoader />}>
          <Achievements />
          <Projects />
          <Certificates />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default Home;