import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";

const InspireSocial = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/instagram")
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setPosts(data.data.slice(0, 4)); // limit to 4
        }
      })
      .catch(() => console.log("Error fetching posts"));
  }, []);

  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full" />

      <div className="grid grid-cols-2 gap-4 relative z-10">

        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden cursor-pointer"
          >

            <img
              src={post.media_url}
              alt="insta"
              className="w-full h-[180px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

              <div className="flex items-center gap-1 text-white text-sm">
                <Heart size={16} /> {post.like_count || 0}
              </div>

              <div className="flex items-center gap-1 text-white text-sm">
                <MessageCircle size={16} /> {post.comments_count || 0}
              </div>

            </div>

            {/* Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-accent transition" />

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default InspireSocial;