import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { conf, storage, databases } from '../appwrite/config';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch trainers
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await databases.listDocuments(
          conf.databaseId,
          conf.trainersCollectionId
        );
        console.log("Trainers data:", res.documents);

        const sorted = res.documents.sort((a, b) => (a.order || 0) - (b.order || 0));

        setTrainers(sorted);
      } catch (err) {
        console.error("Error fetching trainers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  // ✅ Image helper
  const getImageUrl = (fileId) => {
    if (!fileId) return "/images/default-trainer.jpg";
    return `${import.meta.env.VITE_APPWRITE_ENDPOINT}/storage/buckets/${conf.bucketId}/files/${fileId}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}&mode=admin`;
  };



  return (
    <section id="trainers" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 transform skew-x-12 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            <span className="text-accent">TRAINERS</span>
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Train with elite professionals who have dedicated their lives to mastering human performance.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-400">Loading trainers...</p>
        ) : trainers.length === 0 ? (
          <p className="text-center text-gray-400">No trainers available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, idx) => (
              <motion.div
                key={trainer.$id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative overflow-hidden bg-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={getImageUrl(trainer.imageId)}
                    onError={(e) => { e.target.onerror = null; e.target.src = "/images/default-trainer.jpg"; }}

                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-heading font-bold uppercase mb-1">{trainer.name}</h3>
                  <p className="text-accent font-bold tracking-widest text-sm uppercase mb-3">{trainer.specialty}</p>
                  <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">
                    Experience: {trainer.experience}
                  </p>

                  {/* Socials */}
                  <div className="flex gap-4">
                    {trainer.instagram && (
                      <a href={trainer.instagram} target="_blank" className="bg-white/10 p-3 hover:bg-accent hover:text-primary">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {trainer.twitter && (
                      <a href={trainer.twitter} target="_blank" className="bg-white/10 p-3 hover:bg-accent hover:text-primary">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {trainer.linkedin && (
                      <a href={trainer.linkedin} target="_blank" className="bg-white/10 p-3 hover:bg-accent hover:text-primary">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Trainers;