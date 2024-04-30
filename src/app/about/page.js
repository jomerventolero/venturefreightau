"use client"
import Navbar from "@/components/Navbar"
import { IoHardwareChip } from "react-icons/io5"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Image from "next/image"
import Head from "next/head"

const about = () => { 
  return (
    <container className="flex flex-col justify-center items-center bg-white">
      <Head>
        <title>Why Choose Us?</title>
        <meta name="description" content="When choosing a freight forwarder to help ship your goods it is important to choose the right partner. Venture Freight is an Australian freight forwarding company that utilises internet-based technology to provide stellar freight forwarding services with a commitment to reliability, proper time delivery and long-term relationships."/>
        <meta name="keywords" content="freight forwarding, freight forwarder, customs, quarantine, inspection, australian, customs service"/>
      </Head>
      <Navbar />
      <Image src="/assets/aerialview.jpg" width={1500} height={800} alt="about" className="w-screen h-[150px] object-cover mt-[3rem] sm:mt-[4rem]"/>
      <motion.span
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="absolute z-40 top-28 font-bold text-white text-2xl sm:text-4xl drop-shadow-2xl">Why Choose Us?</motion.span>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="w-full place-items-center flex flex-row justify-center self-center items-center gap-2 px-4"
      >
      <Image 
        
        src="/assets/about-us.jpg" width={1400} height={800} alt="about" className="sm:w-3/4 h-full object-cover py-4 px-4"/>
      </motion.div>
      <motion.section 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="flex flex-row justify-center self-center items-center gap-2 px-4">
        <IoHardwareChip size="2rem" className="text-blue-500"/>
        <h1 className="font-semibold text-slate-800">Technology-enabled freight forwarding at its best</h1>
      </motion.section>
      <h1 className="text-3xl sm:text-5xl sm:py-8 font-bold text-blue-500">ABOUT US</h1>
      <article className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-40 gap-8 pt-8 text-justify">
        <motion.span
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}  
          viewport={{ once: true }}
        >
          When choosing a freight forwarder to help ship your goods it is important to choose the right partner. Venture Freight is an Australian freight forwarding company that utilises internet-based technology to provide stellar freight forwarding services with a commitment to reliability, proper time delivery and long-term relationships.
        </motion.span>
        <motion.span
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
        >
          As a Venture Freight client, you will receive access into your personalised web portal. Here you be able to track your every shipment and retrieve detailed information of your goods such as departure/arrival dates, supplier/customer information and transport costs. These features provide you with enhanced visibility, business intelligence and control of your freight expenditures.
        </motion.span>
      </article>
      <motion.div className="bg-slate-200 p-4 m-6 sm:mx-40">
        <span className="">
          Our pricing department that is headed by ex-airline personnel negotiates the most competitive freight deals with air,sea and domestic carriers on a daily basis this is another reason why our clients constantly assign their freight for us to handle.
        </span>
        <br/>
        <br/>
        <span>
          Contact us today to find out how we can help you reduce the time and money you currently spend on importing and exporting your goods.
        </span>
        <br/>
        <br/>
        <h1 className="font-bold text-3xl">Our Services include</h1>
        <ul className="pl-4 pt-4">
          <li className="text-slate-600">International Sea Freight forwarding</li>
          <li className="text-slate-600">International Air Freight forwarding</li>
          <br/>
          <li className="text-slate-600">Project Cargo Management</li>
          <li className="text-slate-600">Customs Clearance Services</li>
          <li className="text-slate-600">Import and export consultancy matters</li>
          <li className="text-slate-600">Warehousing & Transport</li>
        </ul>
      </motion.div>
      <Footer />
    </container>
  )
}

export default about