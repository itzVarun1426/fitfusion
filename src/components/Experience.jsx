// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// const Experience = () => {
//   return (
//     <section className="py-24 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-bold">
//             EXPERIENCE FITNESS LIKE <span className="text-accent italic">NEVER BEFORE</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* Endurance Card */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6 }}
//             className="group relative h-[500px] sm:h-[600px] overflow-hidden bg-primary group"
//           >
//             <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-all duration-500" />
//             <img
//               src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//               alt="Endurance Runner"
//               loading='lazy'
//               className="w-full h-full object-cover filter grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
//             />

//             <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-primary via-primary/60 to-transparent">
//               <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Pro Series</span>
//               <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">
//                 ENDURANCE <br /> EVOLUTION
//               </h3>
//               <p className="text-gray-300 max-w-md mb-8">
//                 Designed for stamina and performance. Push past your limits with our high-altitude simulation protocols and metabolic conditioning.
//               </p>

//             </div>
//             {/* Neon Border Line */}
//             <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />
//           </motion.div>

//           {/* Speed Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="group relative h-[500px] sm:h-[600px] overflow-hidden bg-primary"
//           >
//             <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-all duration-500" />
//             <img
//               src="https://images.unsplash.com/photo-1552674605-171b1ea0807b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//               alt="Speed Sprinter"
//               loading="lazy"
//               className="w-full h-full object-cover filter grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
//             />

//             <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-primary via-primary/60 to-transparent">
//               <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Elite Series</span>
//               <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">
//                 SPEED <br /> SURGE
//               </h3>
//               <p className="text-gray-300 max-w-md mb-8">
//                 Athletic performance and explosive training for competitors. Enhance your agility, reaction time, and raw power.
//               </p>

//             </div>
//             {/* Neon Border Line */}
//             <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-20" />
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experience;





// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const Experience = () => {
//   return (
//     <section className="py-24 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-bold">
//             TRAIN DIFFERENT.{" "}
//             <span className="text-accent italic">BECOME UNSTOPPABLE</span>
//           </h2>
//           <p className="text-gray-400 mt-4">
//             Real transformation. Real results. Built for serious athletes.
//           </p>
//         </motion.div>

//         {/* Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* 🔥 BIG CARD */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 relative h-[550px] overflow-hidden group cursor-pointer"
//           >

//             {/* Image */}
//             <img
//               src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
//               alt="Transformation"
//               className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//             {/* Content */}
//             <div className="absolute bottom-10 left-10 z-10 max-w-lg">

//               <span className="text-accent uppercase tracking-widest font-semibold">
//                 Elite Transformation
//               </span>

//               <h2 className="text-5xl font-heading font-bold leading-tight mt-2">
//                 FROM BEGINNER <br /> TO BEAST MODE
//               </h2>

//               <p className="text-gray-300 mt-4">
//                 Transform your body and mindset with structured programs
//                 designed for real results.
//               </p>

//               <button className="mt-6 flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition">
//                 Start Journey <ArrowUpRight size={18} />
//               </button>
//             </div>

//             {/* Floating Stats */}
//             <div className="absolute top-6 right-6 bg-black/60 backdrop-blur px-4 py-3 text-sm border border-white/10">
//               <p>+12kg Muscle</p>
//               <p>-8% Body Fat</p>
//               <p>90 Days</p>
//             </div>

//             {/* Neon Glow */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_80px_rgba(182,255,0,0.15)]" />

//           </motion.div>

//           {/* RIGHT SIDE CARDS */}
//           <div className="flex flex-col gap-6">

//             {/* ⚡ CARD 1 */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative h-[260px] overflow-hidden group cursor-pointer"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
//                 alt="Strength"
//                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//               <div className="absolute bottom-6 left-6 z-10">
//                 <span className="text-accent text-xs uppercase tracking-widest">
//                   Strength
//                 </span>
//                 <h3 className="text-2xl font-bold mt-1">
//                   BUILD RAW POWER
//                 </h3>
//               </div>

//               <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition origin-bottom" />

//             </motion.div>

//             {/* ⚡ CARD 2 */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative h-[260px] overflow-hidden group cursor-pointer"
//             >

//               <img
//                 src="https://images.unsplash.com/photo-1552674605-171b1ea0807b?auto=format&fit=crop&w=800&q=80"
//                 alt="Speed"
//                 className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//               <div className="absolute bottom-6 left-6 z-10">
//                 <span className="text-accent text-xs uppercase tracking-widest">
//                   Performance
//                 </span>
//                 <h3 className="text-2xl font-bold mt-1">
//                   MOVE FASTER. REACT SHARPER.
//                 </h3>
//               </div>

//               <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition origin-bottom" />

//             </motion.div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;





import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MainCard from "./MainCard";

const Experience = () => {

  // 🔥 Parallax setup
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            TRAIN DIFFERENT.{" "}
            <span className="text-accent italic">BECOME UNSTOPPABLE</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real transformation. Real results. Built for serious athletes.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

         
          <div className="lg:col-span-2">
            <MainCard />
          </div>
          

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[260px] overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                alt="Strength"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-accent text-xs uppercase tracking-widest">
                  Strength
                </span>
                <h3 className="text-2xl font-bold mt-1">
                  BUILD RAW POWER
                </h3>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition origin-bottom" />
            </motion.div>

          
        
            
              


            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[260px] overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1552674605-171b1ea0807b?auto=format&fit=crop&w=800&q=80"
                alt="Speed"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-accent text-xs uppercase tracking-widest">
                  Performance
                </span>
                <h3 className="text-2xl font-bold mt-1">
                  MOVE FASTER. REACT SHARPER.
                </h3>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition origin-bottom" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;