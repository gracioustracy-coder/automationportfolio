import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Approach from '@/components/Approach';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Approach />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
