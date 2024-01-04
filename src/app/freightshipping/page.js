"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import ScrollAnimationComponent from '@/components/ScrollAnimationComponent';

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
      <div className="absolute -top-20 left-0 right-0 bottom-0 flex flex-col gap-4 items-center justify-center ">
        <div className="text-center z-40">
          <motion.h1 className="sm:text-9xl mb-4 text-2xl text-white font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Freight <span className="text-blue-600 drop-shadow-2xl">Shipping</span>
          </motion.h1>
        </div>
        <ScrollAnimationComponent />
      </div>
      <div className="h-[500px]"/>    
      <article className="px-10 py-10">
        <p className="sm:text-2xl text-xs text-slate-800 text-justify px-5 sm:px-20">
          We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.
        </p>
      </article>
      
      </div>
  );
};

export default FreightShipping;
