"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const CarbonFootprint = () => {
  return (
    <div className="">
      <Navbar />
      <article className="pt-16 sm:pt-20 px-5 sm:px-20">
        <motion.h1
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Embracing Sustainability: The Environmental Impact of Going Paperless
        </motion.h1>

        <motion.p
            className="text-lg leading-7 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            In a world where the environment is facing unprecedented challenges, the role of businesses in adopting sustainable practices cannot be overstated. One significant contributor to environmental degradation is the rapid deforestation driven by the demand for paper. The repercussions of harvesting trees for paper production extend far beyond the visible depletion of forests. The negative impact on wildlife populations and the increased risk of major soil erosion are among the ecological consequences that demand our attention.
        </motion.p>

        {/* Add more motion-animated content here */}

        <motion.p
            className="text-lg leading-7"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            Join us on this journey towards environmental stewardship. Together, let's embrace a paperless future for the well-being of our planet and future generations.
        </motion.p>
      </article>
      <Footer />
    </div>
  );
};

export default CarbonFootprint;
