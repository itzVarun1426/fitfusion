// import React from "react";
// import { motion } from "framer-motion";

// const Pricing = () => {
//   const scrollToContact = () => {
//     const section = document.getElementById("contact");
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const plans = [
//     { name: "1 Month", price: "₹1000", highlighted: false },
//     { name: "6 Months", price: "₹5000", highlighted: true },
//     { name: "12 Months", price: "₹10000", highlighted: false },
//   ];

//   const features = [
//     "Access to All Equipment",
//     "Personal Trainer Guidance",
//     "Workout Plans",
//     "Locker Facility",
//     "Diet Suggestions",
//   ];

//   return (
//     <section id="pricing" className="bg-[#0a0a0a] text-white py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider"
//         >
//           Perfect Plan For Your Fitness Goals
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-gray-400 mt-4 max-w-xl mx-auto"
//         >
//           Choose the perfect duration and start your fitness journey today
//         </motion.p>

//         {/* Cards */}
//         <div className="mt-16">
//           <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible pb-6 scrollbar-hide snap-x snap-mandatory">

//             {plans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//                 className={`relative min-w-[85%] sm:min-w-[300px] md:min-w-0 flex-shrink-0 snap-center rounded-3xl p-8 border h-full flex flex-col justify-between transition-all duration-300 ${
//                   plan.highlighted
//                     ? "bg-lime-300 text-black border-transparent shadow-[0_0_60px_rgba(163,230,53,0.6)]"
//                     : "bg-[#111] border-lime-300/20 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
//                 }`}
//               >

//                 {/* MOST POPULAR BADGE */}
//                 {plan.highlighted && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
//                     <span className="bg-black text-lime-400 text-xs px-4 py-1 rounded-full font-semibold shadow-md">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-lg font-bold uppercase tracking-wide opacity-80">
//                     {plan.name}
//                   </h3>

//                   <p className="text-3xl font-extrabold mt-4">
//                     {plan.price}
//                     <span className="text-sm font-medium"> /plan</span>
//                   </p>

//                   <ul className="mt-6 space-y-3 text-sm">
//                     {features.map((feature, i) => (
//                       <li key={i} className="flex items-center gap-2">
//                         <span className="text-lime-400">〃</span>
//                         <span className="opacity-90">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Button */}
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={scrollToContact}
//                   className={`mt-8 w-full py-3 rounded-full font-semibold transition-all duration-300 ${
//                     plan.highlighted
//                       ? "bg-black text-white hover:bg-zinc-800 shadow-lg"
//                       : "bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]"
//                   }`}
//                 >
//                   Join Now
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { conf, databases } from '../appwrite/config';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Fetch from Appwrite
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await databases.listDocuments(
          conf.databaseId,
          conf.pricingCollectionId
        );
        
        setPlans(res.documents);

      } catch (err) {
        console.error("Error fetching pricing:", err);
      }
    };

    fetchPlans();
  }, []);


  return (
    <section id="pricing" className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider"
        >
          Perfect Plan For Your Fitness Goals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-4 max-w-xl mx-auto"
        >
          Choose the perfect duration and start your fitness journey today
        </motion.p>

        {/* Cards */}
        <div className="mt-16">
          <div className="flex flex-nowrap md:grid md:grid-cols-3 gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible pb-6 scrollbar-hide snap-x snap-mandatory">

            {plans.map((plan, index) => (
              <motion.div
                key={plan.$id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`relative min-w-[85%] sm:min-w-[300px] md:min-w-0 flex-shrink-0 snap-center rounded-3xl p-8 border h-full flex flex-col justify-between transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-lime-300 text-black border-transparent shadow-[0_0_60px_rgba(163,230,53,0.6)]"
                    : "bg-[#111] border-lime-300/20 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
                }`}
              >

                {/* MOST POPULAR */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-black text-lime-400 text-xs px-4 py-1 rounded-full font-semibold shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wide opacity-80">
                    {plan.planname || plan.name}
                  </h3>


                  <p className="text-3xl font-extrabold mt-4">
                    {plan.price}
                    <span className="text-sm font-medium"> /plan</span>
                  </p>

                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features?.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-lime-400">〃</span>
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className={`mt-8 w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-black text-white hover:bg-zinc-800 shadow-lg"
                      : "bg-lime-400 text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]"
                  }`}
                >
                  Join Now
                </motion.button>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;