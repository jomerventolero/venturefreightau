"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Footer from '@/components/Footer'
import  useParallax  from '@/utils/parallax'

import { motion } from 'framer-motion'
import { useEffect } from 'react'


const ContainerTracking = () => {

    useEffect(() => {
        useParallax();
      }, []);

  return (
    <div className="flex flex-col gap-4 justify-center content-center  pt-16 sm:pt-20">
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
            <Image src="/assets/shipglobal.jpg" alt="Container Tracking" className="parallax w-screen h-[30vh] sm:h-[40vh] object-cover" data-speed="0.5" width={1500} height={800}/>
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

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">Optimizing Inventory Management</span></h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                For businesses involved in the movement of goods, efficient inventory management is paramount. Container tracking solutions contribute to this by offering insights into the status and condition of cargo in real time. This enables better planning, reduces the chances of stockouts, and allows for proactive decision-making in response to unexpected events.
            </motion.p>

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">Streamlining Documentation Processes</span></h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                Container tracking also streamlines the documentation processes associated with shipping. Automated data collection and reporting functionalities reduce the reliance on manual paperwork, minimizing the risk of errors and expediting customs clearance procedures. This not only saves time but also contributes to a more sustainable and eco-friendly approach by reducing paper usage.
            </motion.p>

            <h1 className="text-center text-sm sm:text-2xl font-bold py-2"><span className="text-blue-500">Improving Customer Experience</span></h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                In an era where customer expectations are continually rising, the ability to provide accurate and timely information is a competitive advantage. Container tracking empowers businesses to offer real-time updates to customers regarding the status and estimated delivery time of their shipments. This transparency not only enhances customer satisfaction but also builds trust and loyalty.
            </motion.p>
        </motion.article>
        <Footer />
    </div>
  )
}

export default ContainerTracking