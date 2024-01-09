import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimationComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('motion-paragraph');
      const scrollPosition = window.scrollY + window.innerHeight;

      if (element && element.offsetTop < scrollPosition) {
        element.classList.add('in-view');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.p
      id="motion-paragraph"
      className="absolute  sm:text-2xl text-xs text-black px-5 sm:px-10 z-50"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: 1}}
    >
      Our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs.
    </motion.p>
  );
};

export default ScrollAnimationComponent;
