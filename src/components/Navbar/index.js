"use client"
import Image from 'next/image'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import { FaMailBulk, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

 

  return (
    <nav className="fixed z-50 top-0 bg-white w-screen h-14 sm:h-32 flex flex-row  justify-between px-2 sm:px-5 ">
        <div className="absolute bg-blue-500 w-screen h-16 top-[50%] -skew-x-45 left-[25%] -z-10 hidden sm:block"/>
        <div className="absolute bg-blue-500 w-screen h-8 top-[75%] left-0 -z-30 hidden sm:block"/>
        <div className="absolute top-6 left-[70%] hidden sm:flex flex-row gap-2 text-blue-400">
          <FaMailBulk size="1.5rem"/>
          <a href="mailto:info@venturefreight.com.au">info@venturefreight.com.au</a>
        </div>
        <div className="absolute top-6 left-[85%] hidden sm:flex flex-row gap-2 text-blue-400">
          <FaPhone size="1rem" className="self-center"/>
          <a href="tel:+61 3 9422 8017">+61 3 9422 8017</a>
        </div>
        <logo className="flex flex-row cursor-pointer items-start" onClick={() => window.location.href = "/"}>
            <Image src="/assets/headsup.png" alt="logo" width={350} height={250} className="object-contain m-2 self-start h-10 sm:h-24"/>
        </logo>
        <div className={` font-bold sm:flex hidden items-end text-white`} >
            <a className="hover:underline underline-offset-8 decoration-2 transition-all duration-300 ease-in-out p-5" href="/">Home</a>
            <a className="hover:underline underline-offset-8 decoration-2 transition-all duration-300 ease-in-out p-5" href="about">About Us</a>
            <a className="hover:underline underline-offset-8 decoration-2 transition-all duration-300 ease-in-out p-5" href="services">Services</a>
            <a className="hover:underline underline-offset-8 decoration-2 transition-all duration-300 ease-in-out p-5" href="cargoinsurance">Cargo Insurance</a>
            <a className="hover:underline underline-offset-8 decoration-2 transition-all duration-300 ease-in-out p-5" href="tools-resources">Tools and Resources</a>
            <a className="hover:text-green-500 transition-colors duration-300 ease-in-out mb-4 px-5 mx-1 py-1 rounded-sm bg-white text-slate-800" href="/contactus">Contact Us</a>
        </div>
        
        <GiHamburgerMenu className={`${!open ? "object-cover" : "hidden"} block sm:hidden self-center`} onClick={handleClick} size="2rem"/>
        <IoCloseSharp className={`${open ? "object-cover" : "hidden"}`} onClick={handleClick} size="2rem"/>
        {open && (
          <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="sm:hidden grid grid-cols-1 gap-4 absolute justify-center self-center top-16 right-2 p-5 rounded-lg drop-shadow-xl bg-white">
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/">Home</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/about">About</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/services">Services</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/cargoinsurance">Cargo Insurance</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2, delay: 0.8 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/tools-resources">Tools and Resources</a>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.2, delay: 1 }}
                  className="bg-white w-[150px] rounded-sm p-4 glassmorphism">
                  <a href="/contactus">Contact Us</a>
                </motion.div>
              {/*
              <ul className="text-slate-600 font-medium gap-4 sm:hidden flex flex-col">
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/">Home</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/about">About</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/services">Services</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/cargoinsurance">Cargo Insurance</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/tools-resources">Tools and Resources</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/contactus">Contact</a>
              </ul>
              */}
            </motion.div>
          </AnimatePresence>
        )}
    </nav>
  )
}


export default Navbar