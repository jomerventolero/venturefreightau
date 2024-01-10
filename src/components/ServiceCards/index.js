import React from 'react';
import { motion } from 'framer-motion';
import { FaShip, FaPlane, FaClipboardCheck } from 'react-icons/fa';

const ServiceCards = () => {
  const services = [
    {
      icon: <FaShip size={40} />,
      title: 'Sea Freight',
      description:
        'The most economical way to fulfil your promises across the globe would be sending your freight by sea. We have the expertise to organize your shipment ranging from single pallet loads and container loads to automobiles, boats and large equipment that might not fit a container, our professional and efficient services ensure that our satisfied customers return to Venture Freight all the time for their shipping needs. We provide documentation advice, packing services, warehousing and storage, project shipping and much more. We cater to the shipping needs of most industries and will work tirelessly to work out the most cost effective method to get your freight to its destination. Venture Freight’s international pricing team negotiates for the best deals on ocean freight shipping across the globe on a daily basis. Therefore you can always rest easy and know that you did it with the best possible deal available out there. Send an enquiry our way to find out how we can help you reduce your freight bill.',
    },
    {
      icon: <FaPlane size={40} />,
      title: 'Air Freight',
      description:
        'During today’s fast-paced community everyone needs every little thing the previous day. We at Venture Freight know that air freight services are crucial to a variety of different businesses. Therefore, we organise all deliveries with the utmost priority especially when it is time to deliver your air cargo to you. In addition to this, we monitor every shipment with great scrutiny making sure that your air cargo does not incur any additional costs such as storage charges or waiting time at the airport in Australia. This is why our clients repeatedly trust us with their time sensitive cargo.<br/> Due to our daily dealings with the airlines, Venture Freight’s international pricing team have access to the best industry international air freight rates available.<br/> Find out more by dropping us an enquiry today.',
    },
    {
      icon: <FaClipboardCheck size={40} />,
      title: 'Customs Brokerage',
      description:
        'Q: Why should I consider Venture Freight as my customs broker? 1. Experience – Our team of customs brokers have been in the industry for 20 years...',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-40">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
        >
          <div className="flex justify-center mb-4">{service.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
          <motion.p className="text-gray-600" whileHover={{ color: '#3182ce' }}>
            {service.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
