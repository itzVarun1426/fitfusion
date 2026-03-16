import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Experience = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            EXPERIENCE FITNESS LIKE <span className="text-accent italic">NEVER BEFORE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Endurance Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="group relative h-[500px] sm:h-[600px] overflow-hidden bg-primary group"
          >
            <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-all duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Endurance Runner" 
              className="w-full h-full object-cover filter grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-primary via-primary/60 to-transparent">
              <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Pro Series</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                ENDURANCE <br/> EVOLUTION
              </h3>
              <p className="text-gray-300 max-w-md mb-8">
                Designed for stamina and performance. Push past your limits with our high-altitude simulation protocols and metabolic conditioning.
              </p>

            </div>
            {/* Neon Border Line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />
          </motion.div>

          {/* Speed Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative h-[500px] sm:h-[600px] overflow-hidden bg-primary"
          >
            <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-all duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1552674605-171b1ea0807b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Speed Sprinter" 
              className="w-full h-full object-cover filter grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-primary via-primary/60 to-transparent">
              <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Elite Series</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                SPEED <br/> SURGE
              </h3>
              <p className="text-gray-300 max-w-md mb-8">
                Athletic performance and explosive training for competitors. Enhance your agility, reaction time, and raw power.
              </p>

            </div>
            {/* Neon Border Line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
