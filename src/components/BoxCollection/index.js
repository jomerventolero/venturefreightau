import React from 'react'
import Box from '../Box'

const description = [
  "Venture Freight provides comprehensive shipping services, negotiating the best global deals daily, ensuring cost-effective solutions for clients, and invites inquiries for potential freight bill reduction.",
  "We excel in handling bulk cargo, offering expertise in every aspect from booking vessels to specialized equipment, providing tailored solutions for over-dimensional projects with meticulous planning, budgeting, and reliable sub-contractors.",
  "Customs brokerage involves the facilitation of customs clearance for imported and exported goods, ensuring compliance with regulations and smooth passage through customs procedures."
]

const BoxCollection = () => {
  return (
    <div className="flex flex-col py-10 px-10 sm:flex sm:flex-row gap-8 items-center self-center align-middle place-content-center justify-center">
        <Box title="Freight Shipping" description={description[0]} href="/freightshipping"/>
        <Box title="Overdimensional Cargo" description={description[1]} href="/overdimensionalcargo"/>
        <Box title="Customs Brokerage" description={description[2]} href="/customsbrokerage"/>
    </div>
  )
}

export default BoxCollection