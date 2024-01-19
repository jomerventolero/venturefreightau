"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

import useParallax  from '@/utils/parallax'

const BulkShipping = () => {

    useEffect(() => {
        useParallax();
    }, []);

  return (
    <div className="flex flex-col gap-2">
        <Navbar />
        <Image src="/assets/shiprear.jpg" alt="shiprear" width={1500} height={800}
            className='parallax object-cover w-full h-[30vh] sm:h-[40vh] object-top'
            data-speed="0.5"
        />
        <article className="flex flex-col gap-2 sm:gap-4 content-center text-justify">
            <h1 className="text-center text-lg sm:text-2xl font-bold py-2 px-2"><span className="text-blue-500">Bulk Shipping Excellence: </span>Redefining the movement of Goods</h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                For businesses involved in the movement of goods, efficient inventory management is paramount. Container tracking solutions contribute to this by offering insights into the status and condition of cargo in real time. This enables better planning, reduces the chances of stockouts, and allows for proactive decision-making in response to unexpected events.
            </motion.p>
            <h1 className="text-center text-blue-500 text-lg sm:text-2xl font-bold py-2 px-2">Efficiency at Scale</h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                At the heart of Bulk Shipping Excellence lies a commitment to operational efficiency. Handling large quantities of goods demands precision in logistics, from optimized loading and unloading processes to strategically planned routes. This efficiency not only reduces transit times but also minimizes operational costs, creating a more competitive edge in the global market.
            </motion.p>
            <h1 className="text-center text-blue-500 text-lg sm:text-2xl font-bold py-2 px-2">Technological Integration</h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                The advent of advanced technologies has played a pivotal role in elevating bulk shipping to new heights. Smart containerization, real-time tracking systems, and data analytics contribute to enhanced visibility and control over cargo movements. These technological integrations not only streamline operations but also provide valuable insights for informed decision-making, ultimately leading to a more agile and responsive supply chain.
            </motion.p>
            <h1 className="text-center text-blue-500 text-lg sm:text-2xl font-bold py-2 px-2">Sustainability in Focus</h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg leading-7 p-5 sm:mx-20"
            >
                Bulk shipping excellence is inseparable from a commitment to sustainability. As environmental concerns take center stage, the shipping industry acknowledges its role in contributing to a greener planet. Innovations in eco-friendly vessel designs, alternative fuels, and emission reduction strategies are becoming integral to bulk shipping practices. This sustainable approach not only aligns with global environmental goals but also caters to the growing demand for eco-conscious supply chains.
            </motion.p>
        </article>
        <Footer />
    </div>
  )
}

export default BulkShipping