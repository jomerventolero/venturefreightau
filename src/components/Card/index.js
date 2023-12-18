import { motion } from 'framer-motion'


const Card = ({icon, text}) => {
  return (
    <motion.div className="cursor-pointer hover:bg-blue-500 text-gray-600 hover:text-white transition-colors duration-300 ease-in-out border-[1px] border-gray-300 flex flex-col gap-2 justify-center items-center self-center w-52 h-48">
      <span className="self-center align-middle">{icon}</span>
      <span className="font-bold text-center px-1">
        {text}
      </span>
    </motion.div>
  )
}

export default Card