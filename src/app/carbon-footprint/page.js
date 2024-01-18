"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image'

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
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once:true }}
          className="flex flex-col sm:flex-row sm:gap-8 sm:pt-20">
          <motion.p
              className="text-lg leading-7 mb-6 sm:mx-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
          >
              In a world where the environment is facing unprecedented challenges, the role of businesses in adopting sustainable practices cannot be overstated. One significant contributor to environmental degradation is the rapid deforestation driven by the demand for paper. The repercussions of harvesting trees for paper production extend far beyond the visible depletion of forests. The negative impact on wildlife populations and the increased risk of major soil erosion are among the ecological consequences that demand our attention.
              <br/><br/>
              <h1 className="text-2xl font-bold">The Hidden Costs of Paper Production</h1>
              <br/>
              <span>
                The widespread use of paper has led to its designation as a substantial component of municipal solid waste in facilities nationwide. The process of paper production involves not only the harvesting of trees but also extensive energy consumption and the release of pollutants into the air and water. Moreover, the disposal of paper waste poses a considerable challenge, contributing to landfills and further straining our waste management systems.
              </span>
              <br/>
          </motion.p>
          <Image src="/assets/paper-production.png" alt="Paper" width={500} height={300} className="sm:m-10 m-2 rounded-lg drop-shadow-2xl shadow-2xl"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once:true }}
          className="flex flex-col sm:flex-row pt-5 sm:gap-8 sm:pt-20 justify-center"
        >
          <div>
            <h1 className="text-2xl font-bold">The Path to Change: Going Paperless</h1>
            <p className="pt-5 sm:text-start text-justify">Recognizing the urgency of the environmental challenges we face, businesses across the globe are reevaluating their practices to reduce their ecological footprint. One impactful step that forward-thinking companies are taking is committing to going paperless. This shift represents a transformative departure from the traditional cycle of printing, storing, transporting, and eventually disposing of paper.</p>
          </div>
          <Image src="/assets/digitalization.jpg" alt="Digitalization" width={500} height={300} className="sm:m-10 m-2 rounded-lg drop-shadow-2xl shadow-2xl"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once:true }}
          className="flex flex-col sm:flex-row pt-5 sm:gap-8 sm:pt-20 justify-center"
        >
          <Image src="/assets/about-us.jpg" alt="Digitalization" width={600} height={400} className="aspect-auto sm:m-10 m-2 rounded-lg drop-shadow-2xl shadow-2xl hidden sm:block"/>
          <div>
            <h1 className="text-2xl font-bold">Our Commitment to Digitalization and Sustainability</h1>
            <p className="pt-5 sm:text-start text-justify">At Venture Freight Australia, we understand the profound impact our business practices can have on the environment. Through our unwavering commitment to digitalization and sustainability, we have transformed our business processes into an efficient and entirely paperless system. We have bid farewell to the days of excessive printing, cumbersome storage, and the environmental burden of paper disposal.</p>
          </div>
          <Image src="/assets/about-us.jpg" alt="Digitalization" width={500} height={300} className="block sm:hidden sm:m-10 m-2 rounded-lg drop-shadow-2xl shadow-2xl"/>
        </motion.div>

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
