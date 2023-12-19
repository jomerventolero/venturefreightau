"use client"
import React from 'react'
import Card from '../Card'
import { FaCartArrowDown, FaCheck, FaDollarSign, FaGlobeAsia, FaLightbulb, FaSuitcase } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import style from "../../utils/style"
import { GiCargoCrate } from 'react-icons/gi';

const CardCollection = () => {
  return (
      <container className="grid grid-cols-2 gap-2 pt-2 sm:gap-0 sm:pt-0 sm:grid-cols-4 sm:px-40 h-[500px] w-screen items-center justify-items-center">
        <Card icon={<FaSuitcase size="3rem" className={`${style.card}`}/>} text="30+ Years of Experience"/>
        <Card icon={<FaLightbulb size="3rem" className={`${style.card}`}/>} text="Experts in FCL, LCL, AIR and Warehousing"/>
        <Card icon={<FaGlobeAsia size="3rem" className={`${style.card}`}/>} text="Representation in all major ports Worldwide"/>
        <Card icon={<FaCartArrowDown size="3rem" className={`${style.card}`}/> } text="One Stop Shop Full Service"/>
        <Card icon={<FaDollarSign size="3rem" className={`${style.card}`}/>} text="Competitive Rates"/>
        <Card icon={<IoIosPeople size="3rem" className={`${style.card}`}/>} text="Great Customer Service - Friendly Staff"/>
        <Card icon={<FaCheck size="3rem" className={`${style.card}`}/>} text="Licensed by Australian Customs"/>
        <Card icon={<GiCargoCrate size="3rem" className={`${style.card}`}/>} text="Project Cargo Specialists"/>
      </container>
  )
}

export default CardCollection