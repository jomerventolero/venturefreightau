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
    <nav className="fixed z-50 top-0 bg-white w-screen h-14 sm:h-16 drop-shadow-xl items-center flex flex-row justify-between px-2 sm:px-5 ">
        <logo className="flex flex-row cursor-pointer" onClick={() => window.location.href = "/"}>
            <Image src="/logo/logo-color.png" alt="logo" width={50} height={50} className="object-contain m-2 self-center align-middle"/>
            <h1 className="font-extralight text-slate-700">Venture Freight Australia</h1>
        </logo>
        <ul className="text-slate-600 font-medium gap-6 sm:flex hidden items-center">
            <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/">Home</a>
            <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="about">About</a>
            <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="services">Services</a>
            <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="cargoinsurance">Cargo Insurance</a>
            <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="toolsandresources">Tools and Resources</a>
            <a className="hover:bg-blue-500 transition-colors duration-300 ease-in-out px-5 py-1 rounded-sm bg-blue-600 text-white " href="/contactus">Contact Us</a>
        </ul>
        <GiHamburgerMenu className={`${!open ? "object-cover" : "hidden"} block sm:hidden`} onClick={handleClick} size="2rem"/>
        <IoCloseSharp className={`${open ? "object-cover" : "hidden"}`} onClick={handleClick} size="2rem"/>
        {open && (
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="sm:hidden absolute justify-center self-center top-16 right-2 bg-white p-2 rounded-lg drop-shadow-xl">
              <ul className="text-slate-600 font-medium gap-4 sm:hidden flex flex-col">
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="/">Home</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="about">About</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="services">Services</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="cargoinsurance">Cargo Insurance</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="toolsandresources">Tools and Resources</a>
                <a className="hover:text-blue-500 transition-colors duration-300 ease-in-out" href="#">Contact</a>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
    </nav>
  )
}

export default Navbar