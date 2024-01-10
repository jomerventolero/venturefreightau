"use client"
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-blue-500"
      >
        Thank You for Contacting Us!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-600 mb-8 text-center"
      >
        We have received your message and will get back to you as soon as possible.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="/"
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
       Go back Home
      </motion.a>
    </div>
  );
};

export default Thanks;
