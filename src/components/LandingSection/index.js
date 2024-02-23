import Image from 'next/image'
import { IoHardwareChip } from 'react-icons/io5'
import { AiOutlineSolution } from 'react-icons/ai'

const LandingSection = () => {
  return (
    <container className="flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center bg-blue-400 w-screen h-3/4 sm:h-[500px] sm:px-20 px-4">
        <Image draggable={false} src="/assets/landingsection.jpg" width="500" height="280" className="self-center align-middle"/>
        <section className="flex flex-col gap-4 justify-center sm:w-1/4 text-slate-600">
          <Image draggable={false} src="/assets/logo-white.png" className="self-center align-middle" width="400" height="90"/>
          <span className="hover:text-white text-xs transition-colors duration-300 ease-in-out cursor-pointer">
              Venture Freight Australia is a leading provider of technology-enabled freight forwarding serving the transportation and logistical needs of our clients. Our dedicated team business model gives each client a team of transportation professionals to be your point of contact for all your shipping needs.
          </span>
          <span className="flex-row flex items-center gap-4 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer text-xs">
              <IoHardwareChip className="hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" size="2rem"/>
              Technology-Enabled Freight Forwarding
          </span>
          <span className="flex-row flex items-center gap-4 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer text-xs">
              <AiOutlineSolution size="2rem" className="hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"/>
              We provide solutions across all major transportation modes 
          </span>
        </section>
    </container>  
  )
}

export default LandingSection