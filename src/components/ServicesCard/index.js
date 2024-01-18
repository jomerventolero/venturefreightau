"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from '../Footer'


const ServicesCard = () => {

  const [domestic, setdomestic] = useState(true)
  const [warehousing, setwarehousing] = useState(false)
  const [project, setproject] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <container className="flex flex-col gap-4 justify-center text-slate-600">
      
      <Image src="/assets/sea-freight.jpg" alt="Sea Freight" width={1500} height={900} className="parallax w-screen h-[30vh] object-cover" data-speed="0.5"/>
      <div className="bg-white z-40 py-8">
        <h1 className="px-5 sm:px-40 text-2xl font-semibold">Sea Freight</h1>
        <motion.section className="px-5 sm:px-40 ">
        The most economical way to fulfil your promises across the globe would be sending your freight by sea. We have the expertise to organize your shipment ranging from single pallet loads and container loads to automobiles, boats and large equipment that might not fit a container, our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs. We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination.<br />
        Venture Freight’s international pricing team negotiates for the best deals on ocean freight shipping across the globe on a daily basis. Therefore you can always rest easy and know that you did it with the best possible deal available out there.<br/>
        Send an enquiry our way to find out how we can help you reduce your freight bill.
        </motion.section>
      </div>
      <Image src="/assets/air-freight.jpg" alt="Sea Freight" width={1500} height={900} className="parallax w-screen h-[100vh] sm:h-[30vh] object-cover -z-10" data-speed="0.2"/>
      <div className="bg-white z-40 pb-52 py-8">
        <h1 className="px-5 sm:px-40 text-2xl font-semibold">Air Freight</h1>
        <motion.section className="px-5 sm:px-40 ">
        During today’s fast-paced community everyone needs every little thing the previous day. We at Venture Freight know that air freight services are crucial to a variety of different businesses. Therefore, we organise all deliveries with the utmost priority especially when it is time to deliver your air cargo to you. <br/>
        In addition to this, we monitor every shipment with great scrutiny making sure that your air cargo does not incur any additional costs such as storage charges or waiting time at the airport in Australia. This is why our clients repeatedly trust us with their time sensitive cargo.<br/>
        Due to our daily dealings with the airlines, Venture Freight’s international pricing team have access to the best industry international air freight rates available. <br/>
        Find out more by dropping us an enquiry today.
        </motion.section>
      </div>
      <Image src="/assets/aerialview.jpg" alt="Customs Brokerage" width={1500} height={900} className="w-screen h-[30vh] object-cover"/>
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
        <div className="bg-slate-100 mx-5 sm:mx-36 my-4">
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
          <div className="collapse bg-base-200 w-3/4">
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
          <div className="collapse bg-base-200 w-3/4">
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
          <div className="collapse bg-base-200 w-3/4">
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
          <div className="collapse bg-base-200 w-3/4">
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
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2
        }}
        className="bg-white flex flex-row justify-center items-center align-middle"
      >
        <div className={`${domestic ? "bg-slate-300" : ""} cursor-pointer flex flex-col sm:w-80 sm:h-40 w-20 h-20 p-5 m-2 border-[1px] border-slate-400 items-center `} onClick={() => {setdomestic(!domestic), setwarehousing(false), setproject(false)}}>
          <Image src="/icons/domestic-transportation.png" alt="domestic-transportation" width={59} height={34} className="self-center"/>
          <h1 className={`text-2xl font-bold ${domestic ? "underline" : ""} hidden sm:block`}>Domestic Transportation</h1>
        </div>
        <div className={`${warehousing ? "bg-slate-300" : ""} cursor-pointer flex flex-col sm:w-80 sm:h-40 w-20 h-20 p-5 m-2 border-[1px] border-slate-400 items-center ${warehousing ? "border-blue-500" : ""}`} onClick={() => {setwarehousing(!warehousing), setdomestic(false), setproject(false)}}>
          <Image src="/icons/warehousing-services.png" alt="warehousing-services" width={72} height={38} className="self-center"/>
          <h1 className={`text-2xl font-bold ${warehousing ? "underline" : ""} hidden sm:block`}>Warehousing Services</h1>
        </div>
        <div className={`${project ? "bg-slate-300" : ""} cursor-pointer flex flex-col sm:w-80 sm:h-40 w-20 h-20 p-5 m-2 border-[1px] border-slate-400 items-center ${project ? "border-blue-500" : ""}`} onClick={() => {setproject(!project), setdomestic(false), setwarehousing(false)}}>
          <Image src="/icons/project-logistics.png" alt="project-logistics" width={41} height={38} className="self-center"/>
          <h1 className={`text-2xl font-bold ${project ? "underline" : ""} hidden sm:block`}>Project Logistics</h1>
        </div>
      </motion.div>
      <motion.div className="sm:px-40 px-5">
        <div className={warehousing && project ? "hidden" : "block"}>
          {
            domestic ? <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
            >
              <p className="sm:hidden block">Domestic Transport</p>
              Transporting a container, a couple of pallets, loose items or bulky loads such as vehicles, boats or machinery are just some of the many different freight transportation options that we provide. We focus on metropolitan Melbourne and regional Victoria and add to that an extensive carrier network that covers all of Australia including Tasmania. You might say we have always an extra forward in our wings to call the plays necessary to score a goal for our customers when they need it most. Send an enquiry down our way to find out more about our transportation and distribution solutions.</motion.p> : null
          }
        </div>
        <div className={domestic && project ? "hidden" : "block"}>
          {
            warehousing ? <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}
            >
              <p className="sm:hidden block">Warehousing Services</p>
              Running a business can involve in taking care of many aspects, one of the most compelling reasons to use a contract warehouse is that it gives you more flexibility on excelling in your core competencies. Companies rely on us to ensure that their goods are stored safely and orderly. Stock levels are automatically reported to them as soon as there is movement in their inventory and regular stock counts are performed to make sure the numbers are accurate.<br/><br/>The following add–on services are carried out with great care and efficiency this includes container unpacks, palletizing and storage, variable storage charges, unlimited capacity, fast order turnaround, pallet, carton or inner item picking (pick pack), kitting, assembly, multi carrier despatch, cycle counting, full inventory traceability and many others. Find out how we can solve your storage issues by making an enquiry today.</motion.p> : null
          }
        </div>
        <div className={domestic && warehousing ? "hidden" : "block"}>
          {
            project ? <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
            >
              <p className="sm:hidden block">Project Logistics</p>
              With more than 10 years of experience in shipping and heavy transport, we know how to do a job safely, efficiently and effectively. Project freight is always different and requires a tailored approach. Whether it is to relocate an entire manufacturing plant to china or move a sensitive transformer to a remote location, our project cargo team assist its clients from the initial planning and budget phase to the eventual delivery and installation. Our handful of sub-contractors that we use to aid us in completing our projects are carefully selected and scrutinized as we know how important it is to make the job as error free as possible.
            <br/><br/>
            <span className="">
              Services for oil and gas include
              <li>Large scale heavy lifts projects.</li>
              <li>Logistical feasibility study</li>
              <li>Analysis of the transport process</li>
              <li>Project planning</li>
              <li>Project freight forwarding services including full and part charter for air and ocean freight</li>
              <li>Project logistics and distribution</li>
              <li>Customs clearance</li>
              <li>Expediting services to ensure the quality and timely delivery of your equipment</li>
              <li>Arranging freight insurance</li>
              <li>Arranging special transport permits (i.e. for heavy or over-dimensional loads)</li>
              <li>Advanced IT solutions including tracking and customised status reporting</li>
              <li>Warehousing of cargo</li>
              <li>Heavy-lift transport engineering</li>
            </span>
            </motion.p> : null
          }
        </div>
      </motion.div>
      <Footer />
    </container>
  )
}

export default ServicesCard