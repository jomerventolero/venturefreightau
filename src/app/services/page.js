"use client"
import Navbar from "@/components/Navbar"
import ServicesCard from "@/components/ServicesCard"
import Head from "next/head"

const Services = () => {

  return (
    <div>
        <Head>
          <title>Venture Freight - Services</title>
          <meta name="description" content="Venture Freight Australia is an accredited freight forwarding company by Australian Customs Service and Australian Quarantine and Inspection Service (AQIS). Our speciality is making sure that every customs entry is compliant with the various Australian governing bodies and the shipments that we handle are cleared and delivered to the highest service level." />
          <meta name="keywords" content="freight forwarding, customs, quarantine, inspection, australian, customs service" />
        </Head>
        <Navbar />
        <ServicesCard />        
    </div>
  )
}

export default Services