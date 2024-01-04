"use client"
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

const FreightShipping = () => {
  return (
    <>
      <Navbar />
      <container className="flex flex-col justify-center ">
        <h1 className="sm:text-7xl absolute font-extrabold text-slate-200 drop-shadow-2xl pt-20 px-20">Freight <span className="text-blue-500">Shippping</span></h1>
        <section className="h-1/4 bg-shipaerial bg-cover">
          <motion.img src="/assets/shipaerial.jpg" className="self-start h-1/4 min-h-1/4 max-h-1/4 object-contain w-full " initial={{ x:-100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}/>
        </section>
      </container>
    </>
  )
}

export default FreightShipping