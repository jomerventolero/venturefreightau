"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Head from 'next/head'
import useParallax from '@/utils/parallax'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomsBrokerage = () => {

  useEffect(() => {
    useParallax();
  }, []);

  return (
    <div className="pt-18 ">
        <Head>
        <title>Venture Freight - Customs Brokerage</title>
        <meta name="description" content="The most economical way to fulfil your promises across the globe would be sending your freight by sea. We have the expertise to organize your shipment ranging from single pallet loads and container loads to automobiles, boats and large equipment that might not fit a container, our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs. We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.<br />
            Venture Freight’s international pricing team negotiates for the best deals on ocean freight shipping across the globe on a daily basis. Therefore you can always rest easy and know that you did it with the best possible deal available out there.<br/>
            Send an enquiry our way to find out how we can help you reduce your freight bill." />
        </Head>
        <Navbar />
        <Image src="/assets/aerialview.jpg" alt="Customs Brokerage" data-speed="0.5" width={1500} height={900} className="parallax w-screen h-[30vh] object-cover"/>
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.5,
            delay: 0.2
            }}
            id="customs"
            className="bg-white z-40"
        >
            <h1 className="px-5 sm:px-40 text-2xl font-semibold">Customs Brokerage</h1>
            <section className="px-5 sm:px-40">
            The most economical way to fulfil your promises across the globe would be sending your freight by sea. We have the expertise to organize your shipment ranging from single pallet loads and container loads to automobiles, boats and large equipment that might not fit a container, our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs. We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.<br />
            Venture Freight’s international pricing team negotiates for the best deals on ocean freight shipping across the globe on a daily basis. Therefore you can always rest easy and know that you did it with the best possible deal available out there.<br/>
            Send an enquiry our way to find out how we can help you reduce your freight bill.
            </section>
            <div className="bg-slate-100 sm:mx-36 mx-5 my-4">
            <div className="collapse bg-base-200 w-full sm:w-3/4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Q: Why should I consider Venture Freight as my customs broker?
                </div>
                <div className="collapse-content"> 
                <p>
                1. Experience – Our team of customs brokers have been in the industry for 20 years. This amount of experience is sufficient enough to know the various regulations and conditions that are required to clear all sorts of goods that enter or exit Australia.
                <br/>
                2. Integrity – We are vigilant in keeping current on all import and export regulations that are set by the various governing bodies. This enables us to ensure that our customer’s goods are customs cleared in the most effective and competitive manner.</p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full sm:w-3/4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Q: What is a customs broker?
                </div>
                <div className="collapse-content"> 
                <p>
                A: A customs broker is a highly trained professional who holds a license to act on behalf of the owners of imported goods. They must possess the knowledge of tariff schedules and customs regulations and keep abreast with amendments made through constant changes in the law and administrative regulations.
                </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full sm:w-3/4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Q. Clearance of my merchandise: What do I need?
                </div>
                <div className="collapse-content"> 
                <p className="">
                A: Your customs broker requires the following, at a minimum, in order to prepare an entry:
                <br/><br/>
                1. Commercial Invoice – Preferably in English, which describes the product (must be in English), terms of sale and the purchase price. Must be on supplier’s letterhead
                <br/><br/>
                2. Bill of lading or Air Waybill – This is the transport document that covered the movement from origin to the destination.
                <br/><br/>
                3. Packing list – This is also used by the customs broker to apply certain types of duty as this document depicts the weight, dimensions and packaging used for your product. Therefore, it is a required document for customs clearance. Must be on supplier’s letter head
                <br/><br/>
                4. Packing declaration – This document indicates to Australian Quarantine if there is any quarantine risk materials used in the packaging of the product and if timber is used, whether it has been treated and marked in compliance with ISPM 15. This is also a mandatory document when importing into Australia. Must be on supplier’s letterhead
                <br/><br/>
                5. Other documents – Depending on the nature of the imported product, other documents from the respective authorities are required such as certificate of origin, fumigation /phytosanitary certificates or import permits.
                </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full sm:w-3/4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Q: What is a customs broker?
                </div>
                <div className="collapse-content"> 
                <p>
                A: A customs broker is a highly trained professional who holds a license to act on behalf of the owners of imported goods. They must possess the knowledge of tariff schedules and customs regulations and keep abreast with amendments made through constant changes in the law and administrative regulations.
                </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full sm:w-3/4">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Q: When is the best time to talk to your Customs Broker?
                </div>
                <div className="collapse-content"> 
                <p>
                A: Before you place an order for the goods you intend to import.
                </p>
                </div>
            </div>
            </div>
        </motion.div>
        <Footer />
    </div>
  )
}

export default CustomsBrokerage