'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Leadership from '@/components/Leadership';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Leadership />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
