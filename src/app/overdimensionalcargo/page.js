"use client"
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const OverDimensionalCargo = () => {

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <container >
        <Navbar />
        <img
          src="/assets/pexels2.jpg"
          alt="Pexels2"
          className="w-full h-[40vh] object-cover parallax z-40"
          data-speed="0.5"
        />
        <article className="sm:px-40 py-20 flex flex-col gap-4">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-start text-lg sm:text-2xl text-slate-600 font-bold px-5"
            >
              Over Dimensional Cargo
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-start text-md sm:text-lg text-slate-600 font-medium px-5"
            >
               From booking the shipping vessel to organizing the appropriate equipment to move your cargo.
               We have the know how to move your bulk cargo safely, efficiently and effectively. 
               Over dimensional cargo is always different and requires a tailored approach. 
               Whether it is to relocate an entire manufacturing plant to china or move a sensitive 
               transformer to a remote location, our project cargo team assist its clients from the 
               initial planning and budget phase to the eventual delivery and installation.
            </motion.section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-start text-md sm:text-lg text-slate-600 font-medium px-5"
            >
              Our handful of sub-contractors that we use to aid us in completing our projects are carefully selected and scrutinized as we know how important it is to make the job as error free as possible.
            </motion.section>
            <section className="text-start text-md sm:text-lg text-slate-600 font-medium px-5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-start text-md sm:text-lg text-slate-600 font-medium"
              >
                <div class="collapse bg-base-200" onClick={() => setShowForm(!showForm)}>
                  <input type="checkbox" /> 
                  <div class="collapse-title text-xl font-medium">
                    Our Services for Project cargo include {showForm ? '⬆️' : '⬇️'}
                  </div>
                  <div class="collapse-content px-5 mx-5"> 
                    <li>Large scale heavy lifts projects</li>
                    <li>Logistical feasibility study</li>
                    <li>Analysis of the transport process</li>
                    <li>Project planning</li>
                    <li>Project freight forwarding services including full and part charter for air and ocean freight</li>
                    <li>Project logistics and distribution</li>
                    <li>customs Clearance</li>
                    <li>Expediting services to ensure the quality and timely delivery of your equipment</li>
                    <li>Arranging freight insurance</li>
                    <li>Arranging special transport permits (i.e. for heavy or over-dimensional loads</li>
                    <li>Advanced IT solutions including tracking and customised status reporting</li>
                    <li>Warehousing of cargo</li>
                    <li>Heavy-lift transport engineering</li>
                  </div>
                </div>            
              </motion.div>
            </section>
        </article>
    </container>
  )
}

export default OverDimensionalCargo