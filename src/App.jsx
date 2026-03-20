import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inspire from './components/Inspire';
import Services from './components/Services';
import Programs from './components/Programs';
import Experience from './components/Experience';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white font-body selection:bg-accent selection:text-primary scroll-smooth">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Inspire />
        <Services />
        <Programs />
        <Experience />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
