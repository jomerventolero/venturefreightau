"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <main>
        <Navbar />
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            
        </motion.section>
        
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            
        </motion.section>
    </main>
  )
}

export default Services