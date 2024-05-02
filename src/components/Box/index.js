"use client"
import { motion } from 'framer-motion'

const Box = ({title, description, href }) => {
  return (
    <motion.a href={href} className="w-72 h-44 hover:scale-125 hover:z-40 transition-all duration-500 ease-in-out bg-white drop-shadow-2xl shadow-slate-800 flex flex-col justify-center items-center cursor-pointer">
        <div className="sm:text-lg text-slate-800 font-semi-bold align-middle text-xs my-auto">
          {title}
        </div>
        <div className="border-[1px] border-slate-400 w-3/4 "/>
        <p className="p-2 self-center align-middle text-center my-auto text-[10px] sm:text-xs hover:text-blue-400 duration-300 transition-colors">
          {description}
        </p>
    </motion.a>
  )
}

export default Box