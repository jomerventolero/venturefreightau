"use client"
import { motion } from "framer-motion";

const ContactInfo = () => {

  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-blue-500">Venture Freight Australia Pty Ltd</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white duration-300 transition-colors ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Melbourne Head Office</h2>
          <p>9 View Road, Epping, VIC 3076</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white duration-300 transition-colors ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Sydney Branch Office</h2>
          <p>1-5 Railway Street Chatswood NSW 2067</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white duration-300 transition-colors ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Brisbane Branch Office</h2>
          <p>40 Orana Street, Carina, QLD 4152</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white duration-300 transition-colors ease-in-out">
          <h2 className="text-xl font-semibold mb-4">Western Australia Branch Office</h2>
          <p>2/10 Ashby Close Forrestfield WA 6058</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-8 "
      >
        <p className="text-lg">
          Mailing Address: PO BOX 703, Tullamarine, VIC 3043 Australia
        </p>
        <p className="text-lg mt-2">
          Contact us on 1300 055 777 or for overseas +61 3 9422 8017, and we will
          endeavor to answer your enquiries.
        </p>
      </motion.div>

      
    </div>
  );
};

export default ContactInfo;
