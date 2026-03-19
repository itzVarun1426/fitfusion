import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MainCard = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[450px] md:h-[550px] overflow-hidden group cursor-pointer"
    >

      {/* 🎥 VIDEO PARALLAX */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[120%] object-cover"
        preload="none"
      >
        <source src="../../videos/gym1.mp4" type="video/mp4" />
      </motion.video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

      {/* 💎 CONTENT */}
      <div className="absolute bottom-10 left-10 z-20 max-w-lg">

        <span className="text-accent uppercase tracking-widest font-semibold">
          Elite Transformation
        </span>

        <h2 className="text-5xl font-heading font-bold leading-tight mt-2">
          FROM BEGINNER <br /> TO BEAST MODE
        </h2>

        <p className="text-gray-300 mt-4">
          Train with purpose. Transform your body and mindset with programs built for real results.
        </p>

        <button className="mt-6 flex items-center gap-2 text-accent font-semibold group-hover:translate-x-2 transition">
          Start Journey <ArrowUpRight size={18} />
        </button>
      </div>

      {/* 📊 FLOATING STATS */}
      <div className="absolute top-6 right-6 bg-black/60 backdrop-blur px-4 py-3 text-sm border border-white/10 z-20">
        <p>+12kg Muscle</p>
        <p>-8% Body Fat</p>
        <p>90 Days</p>
      </div>

      {/* ✨ GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_100px_rgba(182,255,0,0.2)] z-10" />

    </motion.div>
  );
};

export default MainCard;