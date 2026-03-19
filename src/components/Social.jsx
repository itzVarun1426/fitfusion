import React from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const Social = () => {

  const posts = [
    "/images/social1.jpg",
    "/images/social2.jpg",
    "/images/social3.jpg",
    "/images/social4.jpg"
  ];

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            JOIN THE <span className="text-accent italic">COMMUNITY</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real members. Real transformations. Stay inspired every day.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {posts.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <img
                src={img}
                alt="gym post"
                className="w-full h-[220px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center gap-3">

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Heart size={18} /> 120
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={18} /> 18
                  </div>
                </div>

              </div>

              {/* Accent Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent transition duration-500" />

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="flex items-center gap-2 bg-accent text-primary px-6 py-3 font-bold uppercase tracking-wide hover:bg-white transition-all"
          >
            Follow Us <Instagram size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Social;