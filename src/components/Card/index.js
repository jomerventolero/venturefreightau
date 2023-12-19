import { motion } from 'framer-motion'


const Card = ({icon, text}) => {
  return (
    <motion.div className="cursor-pointer hover:bg-blue-500 text-gray-600 hover:text-white group transition-colors duration-300 ease-in-out border-[1px] border-gray-300 flex flex-col gap-2 justify-center items-center self-center w-28 h-32 sm:w-52 sm:h-48 ">
      <span className="self-center align-middle p-1">{icon}</span>
      <span className="font-bold text-center px-1 text-xs sm:text-xl">
        {text}
      </span>
    </motion.div>
  )
}

export default Card