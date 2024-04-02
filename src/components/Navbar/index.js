"use client"
import Image from 'next/image'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <nav className="fixed z-50 top-0 bg-white w-screen h-14 sm:h-16 items-center flex flex-row justify-between px-2 sm:px-5 ">
        <logo className="flex flex-row cursor-pointer" onClick={() => window.location.href = "/"}>
            <Image src="/assets/headsup.png" alt="logo" width={350} height={250} className="object-contain m-2 self-center align-middle "/>
        </logo>
        <div className="text-slate-600 font-bold sm:flex hidden items-center">
            <a className="hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out p-5" href="/">Home</a>
            <a className="hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out p-5" href="about">About</a>
            <a className="hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out p-5" href="services">Services</a>
            <a className="hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out p-5" href="cargoinsurance">Cargo Insurance</a>
            <a className="hover:bg-slate-700 hover:text-white transition-colors duration-300 ease-in-out p-5" href="tools-resources">Tools and Resources</a>
            <a className="hover:bg-blue-500 transition-colors duration-300 ease-in-out px-5 mx-1 py-1 rounded-sm bg-blue-600 text-white " href="/contactus">Contact Us</a>
        </div>
        <GiHamburgerMenu className={`${!open ? "object-cover" : "hidden"} block sm:hidden`} onClick={handleClick} size="2rem"/>
        <IoCloseSharp className={`${open ? "object-cover" : "hidden"}`} onClick={handleClick} size="2rem"/>
        {open && (
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:hidden grid grid-cols-1 gap-4 absolute justify-center self-center top-16 right-2 p-2 rounded-lg drop-shadow-xl">
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