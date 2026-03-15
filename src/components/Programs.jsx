import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programs = [
    { name: "Barbell Basics", image: "/images/strength.png", delay: 0.1 },
    { name: "Kettlebell Masterclass", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", delay: 0.2 },
    { name: "Cardio Power Boost", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", delay: 0.3 },
    { name: "Hypertrophy", image: "/images/hero.png", delay: 0.4 },
    { name: "Rope Climbing", image: "https://images.unsplash.com/photo-1526506114642-54452145b207?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", delay: 0.5 },
    { name: "TRX Suspension", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", delay: 0.6 },
  ];

  return (
    <section id="programs" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              TRAIN SMARTER, UNLEASH YOUR <span className="text-accent">POTENTIAL</span>
            </motion.h2>
            <p className="text-gray-400">
              Explore our diverse range of specialized training programs designed to push your limits and achieve the extraordinary.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: program.delay, duration: 0.5 }}
              className="group relative h-[400px] overflow-hidden bg-card cursor-pointer"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              <img 
                src={program.image} 
                alt={program.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out filter grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end border-2 border-transparent group-hover:border-accent/80 transition-colors duration-300">
                <h3 className="text-2xl font-heading font-bold uppercase tracking-wide group-hover:text-accent transition-colors duration-300 translate-y-4 group-hover:translate-y-0 relative">
                  {program.name}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
                  <span className="text-sm font-bold uppercase tracking-widest border-b border-accent pb-1">
                    Explore Program
                  </span>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-accent transition-colors duration-300 z-20 m-4" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-accent transition-colors duration-300 z-20 m-4" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
