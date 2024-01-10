"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaShip, FaPlane, FaTruck } from "react-icons/fa";

const CargoInsurance = () => {
  return (
    <div className="container mx-auto p-8">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 pt-10"
      >
        <h1 className="text-4xl font-bold text-blue-500">
          Technology-enabled Freight Forwarding at its Best
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaShip className="text-5xl mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-4">Sea Freight</h2>
          <p>Coverage for goods transported by sea.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaPlane className="text-5xl mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-4">Air Freight</h2>
          <p>Coverage for goods transported by air.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaTruck className="text-5xl mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-4">Land Freight</h2>
          <p>Coverage for goods transported by land.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-8"
      >
        <p className="text-lg">
          Venture Freight Australia’s innovative cargo insurance and loss
          prevention solutions not only insure your goods during transit, it
          helps you safely navigate the rough waters of today’s global shipping
          industry, from port to port, from warehouse to warehouse or from door
          to door.
        </p>

        <p className="text-lg mt-4">
          Cargo insurance covers the loss and/or damage of the product during
          the movement of cargo from one point to another. Transportation modes
          by sea, air, land can be covered accordingly. Policies can be tailored
          to suit the shipper’s specific need.
        </p>

        <p className="text-lg mt-4">
          In the unfortunate occurrence of a loss or damage and as long as you
          have insured your goods, you can rely on the claims handling
          department of Venture Freight Australia to assist in processing your
          claim.
        </p>

        <p className="text-lg mt-4">
          To apply for coverage download the Cargo insurance application form,
          fill in the appropriate information and return it via email or fax.
          Details on <a href="contactus" className="text-blue-500 cursor-pointer">Contact us</a>.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CargoInsurance;
