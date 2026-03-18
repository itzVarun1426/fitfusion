import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Dumbbell, Activity, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/10 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80 z-10" />
        <img
          src="/images/hero2.jpg"
          alt="Muscular athlete with dumbbells"
          className="w-full h-full object-cover object-[70%_5%] opacity-70"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight tracking-tight mb-2">
              Transform Yourself in<br />
              <span className="text-accent">90 DAYS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 border-l-4 border-accent pl-4"
          >
            Transform your fitness journey with expert training, world-class equipment, and a powerful community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* <a href="#contact" className="bg-accent text-primary px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group box-glow-hover">
              Start Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#programs" className="border border-white/30 flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              View Programs
            </a> */}

            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              {/* Primary CTA */}
              <a
                href="#contact"
                className="w-full sm:w-auto bg-accent text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-white hover:text-black box-glow-hover"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#programs"
                className="w-full sm:w-auto border border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10"
              >
                View Programs
              </a>

            </div>

          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-20 space-y-6">
        <FloatingStat icon={<Users className="text-accent h-6 w-6" />} title="Certified" subtitle="Trainers" delay={0.6} />
        <FloatingStat icon={<Dumbbell className="text-accent h-6 w-6" />} title="Personalized" subtitle="Workout Plans" delay={0.8} />
        <FloatingStat icon={<Activity className="text-accent h-6 w-6" />} title="Modern" subtitle="Gym Equipment" delay={1.0} />
        <FloatingStat icon={<ShieldCheck className="text-accent h-6 w-6" />} title="Supportive" subtitle="Community" delay={1.2} />
      </div>

      {/* Brand Logos Footer area of Hero */}
      <div className="absolute bottom-0 w-full z-20 bg-gradient-to-t from-primary to-transparent pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-4 overflow-x-auto text-sm md:text-base font-heading tracking-[0.2em] uppercase">
          <span>Nike</span>
          <span>Puma</span>
          <span>Under Armour</span>
          <span>Adidas</span>
          <span>Reebok</span>
        </div>
      </div>
    </section>
  );
};

const FloatingStat = ({ icon, title, subtitle, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-card/80 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 min-w-[200px] hover:border-accent/50 transition-colors cursor-default"
  >
    <div className="bg-primary/50 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-heading text-lg font-bold">{title}</h4>
      <p className="text-xs text-gray-400 uppercase tracking-widest">{subtitle}</p>
    </div>
  </motion.div>
);

export default Hero;
