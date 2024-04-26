"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const FreightShipping = () => {
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
    <div className="relative flex flex-col">
      <Navbar />
      <img
        src="/assets/shipaerial.jpg"
        alt="Ship Aerial View"
        className="w-full h-[80vh] object-cover parallax z-40"
        data-speed="0.5"
      />
      <div className="flex flex-col gap-4 items-center justify-center bg-white">
        <div className="text-center z-40">
          <motion.h1 className="sm:text-9xl mb-4 text-2xl text-white font-extrabold drop-shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Freight <span className="text-blue-600 drop-shadow-2xl">Shipping</span>
          </motion.h1>
        </div>
        <motion.p
          id="motion-paragraph"
          className="sm:text-2xl bg-white text-xs text-black px-5 z-40 p-2 rounded-full m-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 1}}
        >
          Our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs.
        </motion.p>
      </div>
      <container className="grid sm:grid-cols-2 grid-cols-1 gap-4 justify-center sm:text-2xl pt-40 bg-white">
        <article className="px-10 pt-4">
          <motion.p className="text-xs sm:text-xl text-slate-800 text-justify px-5 sm:px-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: .2}}
          >
            We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.
            <br/><br/>We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.
            <br/><br/>Venture Freight’s international pricing team negotiates for the best deals on freight shipping across the globe on a daily basis. Therefore you can always rest easy and know that you did it with the best possible deal available out there.
Send an enquiry our way to find out how we can help you reduce your freight bill.
          </motion.p>
        </article>
        <img src="/assets/aerialview.jpg" alt="Ship Aerial View" className="" />
        <article className="px-10 pt-4">
          <motion.p className="text-xs sm:text-xl text-slate-800 text-justify px-5 sm:px-20"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: .3}}
          >
          
          </motion.p>
        </article>
      </container>
      </div>
  );
};

export default FreightShipping;
