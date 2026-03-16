import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus R.",
      role: "Pro Athlete",
      image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "FitFusion changed my life. The trainers are incredibly supportive and the workouts are next level. I've broken all my personal records since joining."
    },
    {
      name: "Sarah Jenkins",
      role: "Marathon Runner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "The endurance programs here are unmatched. The facility has everything you need to push your limits, and the community keeps you accountable."
    },
    {
      name: "David Chen",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      text: "Premium aesthetic, top-tier equipment, and trainers who actually care about your progress. Best gym I've ever been a part of."
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
            YOUR SUCCESS STORIES, <span className="text-accent underline decoration-accent underline-offset-8">OUR INSPIRATION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card p-8 border border-white/5 hover:border-accent/30 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16" />
              
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-lg">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent p-0.5"
                />
                <div>
                  <h4 className="font-heading font-bold text-xl uppercase">{review.name}</h4>
                  <p className="text-accent text-sm tracking-widest uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
