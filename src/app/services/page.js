"use client"
import Navbar from "@/components/Navbar"
import ServicesCard from "@/components/ServicesCard"
import Head from "next/head"

const Services = () => {

  return (
    <div>
        <Head>
          <title>Venture Freight - Services</title>
          <meta name="description" content="Venture Freight provides comprehensive and economical sea freight services globally, expertly managing shipments of various sizes and types, including documentation, packing, warehousing, and project shipping. With a commitment to customer satisfaction, they ensure clients return for their shipping needs. The international pricing team secures optimal daily deals for ocean freight, offering a reliable and cost-effective solution. In the realm of air freight, Venture Freight prioritizes time-sensitive deliveries, monitoring shipments to prevent additional costs. Their customs brokerage services further enhance global shipping efficiency. Clients are encouraged to inquire about reducing freight bills, emphasizing Venture Freight's commitment to customer success." />
        </Head>
        <Navbar />
        <ServicesCard />        
    </div>
  )
}

export default Services