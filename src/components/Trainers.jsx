import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: "Blake Hunter",
      specialty: "Strength & Conditioning",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Liam Crossfit",
      specialty: "Crossfit & Mobility",
      experience: "8 Years",
      image: "https://images.unsplash.com/photo-1583465554959-b903f706e5da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Logan Torque",
      specialty: "Bodybuilding & Nutrition",
      experience: "12 Years",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 transform skew-x-12 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            YOUR FITNESS GOALS, <span className="text-accent">THEIR EXPERTISE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Train with elite professionals who have dedicated their lives to mastering human performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative overflow-hidden bg-card"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-heading font-bold uppercase mb-1">{trainer.name}</h3>
                <p className="text-accent font-bold tracking-widest text-sm uppercase mb-3">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Experience: {trainer.experience}</p>
                
                {/* Socials */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <a href="#" className="bg-white/10 p-3 hover:bg-accent hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 hover:bg-accent hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-white/10 p-3 hover:bg-accent hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
