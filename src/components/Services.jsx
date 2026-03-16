import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Dumbbell, Flame, Timer, ArrowRight } from 'lucide-react';

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemOffset = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: "Cardio Training",
      desc: "Improve endurance, boost heart health, and burn calories efficiently.",
      icon: <Activity className="w-10 h-10 text-primary" />,
      num: "01"
    },
    {
      title: "Strength Build",
      desc: "Build muscle, increase power, and sculpt your physique with expert programs.",
      icon: <Dumbbell className="w-10 h-10 text-primary" />,
      num: "02"
    },
    {
      title: "Fat Loss",
      desc: "Targeted fat loss programs with customized nutrition and workout plans.",
      icon: <Flame className="w-10 h-10 text-primary" />,
      num: "03"
    },
    {
      title: "HIIT Workouts",
      desc: "High-intensity interval training for maximum results in minimal time.",
      icon: <Timer className="w-10 h-10 text-primary" />,
      num: "04"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            DISCOVER WHAT <span className="text-accent border-b-4 border-accent pb-1">SETS US APART</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            World-class facilities, elite trainers, and science-backed programs designed exclusively for your success.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemOffset}
              className="bg-primary p-8 relative group overflow-hidden border border-white/5 hover:border-accent/50 transition-colors duration-500"
            >
              {/* Background Number */}
              <div className="absolute -right-4 -top-6 text-9xl font-heading font-black text-white/5 group-hover:text-accent/10 transition-colors duration-500 pointer-events-none">
                {service.num}
              </div>

              <div className="bg-accent w-16 h-16 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500 box-glow">
                {service.icon}
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4 relative z-10 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-8 relative z-10">
                {service.desc}
              </p>


              {/* Hover effect bottom border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
