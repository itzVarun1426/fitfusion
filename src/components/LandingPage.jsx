// No change needed based on previous analysis but checking just in case.

import Navbar from './Navbar';
import Hero from './Hero';
import Inspire from './Inspire';
import Services from './Services';
import Programs from './Programs';
import Experience from './Experience';
import Trainers from './Trainers';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
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
};

export default LandingPage;
