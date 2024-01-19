"use client"

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Footer from '@/components/Footer'

import { motion } from 'framer-motion'
import { useEffect } from 'react'




const ContainerTracking = () => {

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
    <div className="flex flex-col gap-4 justify-center content-center  sm:px-5 pt-16 sm:pt-20">
        <Navbar />
        
        {
            // Article content 
        }

        <motion.article
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
        >

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">Smart Logistics: </span><br/>Transforming Shipping Operations with Container Tracking</h1>
            <Image src="/assets/shipglobal.jpg" alt="Container Tracking" className="parallax w-screen h-[30vh] object-cover" data-speed="0.5" width={1500} height={800}/>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                In the rapidly evolving landscape of global trade and logistics, the integration of smart technologies has become a game-changer, revolutionizing traditional shipping operations. One such innovation that stands at the forefront is "Container Tracking." This transformative technology not only enhances the efficiency of shipping operations but also brings a new level of transparency and control to the entire supply chain.
            </motion.p>

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">The Essence of Container Tracking</span></h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                At its core, container tracking involves the use of advanced technologies, such as IoT (Internet of Things), GPS (Global Positioning System), and RFID (Radio-Frequency Identification), to monitor the real-time location, status, and condition of shipping containers throughout their journey.
            </motion.p>

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">Enhancing Security and Safety</span></h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                Container tracking goes beyond location monitoring; it also plays a crucial role in enhancing the security and safety of cargo. By leveraging IoT sensors, container tracking systems can detect unauthorized access, tampering, or any deviations from predefined conditions. This ensures that the integrity of the cargo is maintained throughout the shipping process, reducing the risk of theft or damage.
            </motion.p>
        </motion.article>
        <Footer />
    </div>
  )
}

export default ContainerTracking