import Image from 'next/image'
import Navbar from "@/components/Navbar"

const about = () => {
  return (
    <container>
      <Navbar />
      <Image src="/assets/B5.jpg" width={500} height={90} alt="about" className="w-screen h-[150px] object-cover mt-[4rem]"/>
    </container>
  )
}

export default about