"use client"
import { CardStack } from "../ui/card-stack"
import { cn } from "@/utils/cn"
import { motion } from "framer-motion"
import { VscFeedback } from "react-icons/vsc";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center w-full">
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: -50 }}
            transition={{ type: "spring", duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex flex-col gap-4 justify-center z-10"
        >
            <h1 className="font-roboto font-semibold text-2xl text-blue-500 self-center flex flex-row gap-2">Testimonials<VscFeedback /></h1>
        </motion.div>
        <CardStack items={CARDS} />
    </div>
  )
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 ",
        className
      )}
    >
      {children}
    </span>
  )
}

const CARDS = [
  {
    id: 0,
    name: "Food Importer",
    designation: "Client Testimonial",
    content: (
      <p className="text-white">
        We are not just a number, <Highlight>personalised service and knowledge</Highlight> in clearing our food products with customs
      </p>
    )
  },
  {
    id: 1,
    name: "Smart Freight",
    designation: "Client Testimonial",
    content: (
      <p className="text-white">
        After comparing with other freight forwarders, your rates are the <Highlight>most competitive</Highlight> and follow up with my clients shipments are excellent
      </p>
    )
  },
  {
    id: 2,
    name: "Grand Laguna",
    designation: "Client Testimonial",
    content: (
      <p className="text-white">
        I was able to reduce the pricing of my products due to<Highlight> updated discounts on freight</Highlight> from Venture Freight that led to increased sales for my business!
      </p>
    )
  },
  {
    id: 3,
    name: "Furniture Importer",
    designation: "Client Testimonial",
    content: (
      <p className="text-white">
        No more penalties and extra charges from the wharf and shipping lines ever since I switched to <Highlight>Venture Freight</Highlight>!
      </p>
    )
  },
  {
    id: 4,
    name: "NFP Organization",
    designation: "Client Testimonial",
    content: (
      <p className="text-white">
        Our previous transportation company diched us they complained they were not earning enough, fortunately we found Venture Freight who were able to organize our transportation with <Highlight>savings!</Highlight>
      </p>
    )
  }
]
