"use client"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { VscFeedback } from "react-icons/vsc";

const Testimonials = () => {

  const testimonials = [
    {
      'num': 'item1',
      'customer': 'Food Importer',
      'testimony': 'We are not just a number, personalised service and knowledge in clearing our food products with customs'
    },
    {
      'num': 'item2',
      'customer': 'Smart Freight',
      'testimony': 'After comparing with other freight forwarders, your rates are the most competitive and follow up with my clients shipments are excellent'
    },
    {
      'num': 'item3',
      'customer': 'Grand Laguna',
      'testimony': 'I was able to reduce the pricing of my products due to updated discounts on freight from Venture Freight that led to increased sales for my business!'
    },
    {
      'num': 'item4',
      'customer': 'Furniture Importer',
      'testimony': 'No more penalties and extra charges from the wharf and shipping lines ever since I switched to Venture Freight!'
    },
    {
      'num': 'item5',
      'customer': 'NFP Organization',
      'testimony': 'Our previous transportation company diched us they complained they were not earning enough, fortunately we found Venture Freight who were able to organize our transportation with savings!'
    }
  ]

  const [testimonyNum, setTestDispNum] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonyNum === 4) {
        setTestDispNum(0)
      } else {
        setTestDispNum(testimonyNum + 1)
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonyNum])

  return (
    <container>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full flex flex-col gap-4 justify-center pt-8"
      >
        <h1 className="font-roboto font-semibold text-2xl text-blue-500 self-center flex flex-row gap-2">Testimonials<VscFeedback /></h1>
        <div id="item1"  className="w-3/4 flex flex-col gap-4 justify-center self-center">
          <div className="text-center text-lg">"{testimonials[testimonyNum].testimony}"</div>
          <div className="text-center text-xl font-bold">{testimonials[testimonyNum].customer}</div>
        </div>
      </motion.div>
      <div className="flex justify-center w-full py-5 sm:py-8 gap-2">
        <a onClick={() => {setTestDispNum(0)}} className="btn btn-xs">1</a> 
        <a onClick={() => {setTestDispNum(1)}} className="btn btn-xs">2</a> 
        <a onClick={() => {setTestDispNum(2)}} className="btn btn-xs">3</a> 
        <a onClick={() => {setTestDispNum(3)}} className="btn btn-xs">4</a>
        <a onClick={() => {setTestDispNum(4)}} className="btn btn-xs">5</a>
      </div>
    </container>
  )
}

export default Testimonials