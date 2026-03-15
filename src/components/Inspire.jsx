import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, HeartPulse, Trophy, Users, Zap } from 'lucide-react';

const Inspire = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemOffset = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const features = [
    { text: "Nutrition Guidance", icon: <HeartPulse className="text-accent h-5 w-5" /> },
    { text: "Expert Trainers", icon: <Trophy className="text-accent h-5 w-5" /> },
    { text: "Progress Tracking", icon: <TrendingUp className="text-accent h-5 w-5" /> },
    { text: "Premium Memberships", icon: <CheckCircle2 className="text-accent h-5 w-5" /> },
    { text: "Community Support", icon: <Users className="text-accent h-5 w-5" /> },
    { text: "Next-Level Fitness", icon: <Zap className="text-accent h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              INSPIRED TO INSPIRE YOUR <span className="text-accent">BEST SELF</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Discover powerful programs designed to unlock your potential. We provide the tools, the expertise, and the environment. You bring the dedication.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemOffset}
                  className="flex items-center gap-4 bg-card p-4 hover:border hover:border-accent transition-all duration-300 group cursor-default"
                >
                  <div className="bg-primary p-2 group-hover:box-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="font-medium tracking-wide">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] rounded-full z-0 pointer-events-none" />

            <div className="relative z-10 p-2 bg-gradient-to-br from-accent/50 to-transparent">
              <img
                src="/images/inspire.png"
                alt="Gym athlete pose"
                className="w-full h-auto object-cover border border-white/10 filter contrast-125 "
              />
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Inspire;
