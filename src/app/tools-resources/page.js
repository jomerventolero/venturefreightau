"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaCalculator, FaCalendar, FaPlane, FaShip, FaTruck } from 'react-icons/fa'

const ToolsResources = () => {
  
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
    <container className="flex flex-col gap-4 justify-center">
        <Navbar />
        <Image src="/assets/freightgraph.jpg" width={1500} height={800} alt="resources" className="parallax w-screen h-[30vh] object-cover sm:mt-18"/>
        <div
          className="mx-10 sm:mx-40 flex flex-col gap-4"
        >
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                class="collapse collapse-plus bg-base-200"
                viewport={{ once: true }}
            >
                <input type="radio" name="my-accordion-3" /> 
                <div class="collapse-title sm:text-xl font-medium flex flex-row gap-2 items-center text-xs">
                    <FaTruck className="text-blue-500" size="2rem"/>
                    Equipment Spec
                </div>
                <div class="collapse-content text-xs sm:text-xl"> 
                    <p>
                        <span className="text-slate-600">You can find the container specifications for both air cargo and sea cargo in the links provided below Air freight container</span><br/><br/>
                        <a className="text-blue-500 pl-4 hover:underline duration-300 ease-in-out transition-all" href="/assets/Air-freight-container-specifications.pdf" target='_blank'>Air Freight container specifications</a><br/>
                        <a className="text-blue-500 pl-4 hover:underline duration-300 ease-in-out transition-all" href="/assets/Sea-freight-container-specifications.pdf" target="_blank">Sea Freight container specifications</a>
                    </p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                class="collapse collapse-plus bg-base-200"
            >
                <input type="radio" name="my-accordion-3" /> 
                <div class="collapse-title sm:text-xl font-medium flex flex-row gap-2 items-center text-xs">
                    <FaCalculator className="text-blue-500" size="2rem"/>
                    Calculation Table
                </div>
                <div class="collapse-content flex flex-col gap-2"> 
                    <Image src="/assets/Volume_en.png" width={1500} height={800} alt="resources" className="object-cover w-full sm:w-1/4" />
                    <p className="font-semibold">How airfreight is calculated?</p>
                    <p>The calculation is always based on the following equation regardless of whether you are paying for the weight or the space:</p>
                    <p className="font-semibold">Length (cm) x width (cm) x height (cm) / 6000 (equals the volume weight in kg)</p>
                    <p>That means you either pay for the weight or the space necessary for the transport of your consignment.</p>
                    <h4 className="font-semibold">Type of transport volume calculation</h4>
                    <div class="overflow-x-auto w-[250px] sm:w-1/2">
                        <table class="table table-zebra text-xs sm:text-lg">
                            <tbody>
                                <tr>
                                    <td className="flex flex-row gap-2 items-center"><FaPlane size="1rem" /> Air Freight</td>
                                    <td>1 m<sup>3</sup> = 167 kg</td>
                                </tr>

                                <tr className="border-t-2">
                                    <td className="flex flex-row gap-2 items-center"><FaTruck size="1rem" />Truck</td>
                                    <td>1 m<sup>3</sup> = 333 kg</td>
                                </tr>

                                <tr className="border-t-2">
                                    <td className="flex flex-row gap-2 items-center"><FaShip size="1rem" />Sea Freight</td>
                                    <td>1 m<sup>3</sup> = 1000 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="font-semibold">Below are some commonly measurement exchange tables:</p>
                    <div className="flex sm:flex-row flex-col sm:gap-40 gap-4 justify-start">

                        <table className="table sm:w-[300px] w-[250px] text-xs sm:text-md">
                            <th>Length Measurement</th>
                            <tr>
                                <td>1 inch</td>
                                <td>= 2.540 cm</td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 foot</td>
                                <td>= 0.3048 m</td>
                            </tr>
                            <tr>
                                <td>1 yard</td>
                                <td>= 0.9144 m</td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 mile</td>
                                <td>= 1.6093 km</td>
                            </tr>
                            <tr>
                                <td>1 m</td>
                                <td>= 3.2808 foot</td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 m</td>
                                <td>= 1.0936 yard</td>
                            </tr>
                            <tr>
                                <td>1 km</td>
                                <td>= 0.6214 miles</td>
                            </tr>
                        </table>

                        <table className="table sm:w-[300px] w-[250px] text-xs sm:text-md">
                            <th>Surface Measurement</th>
                            <tr>
                                <td>1 inch<sup>2</sup></td>
                                <td>= 6.452 cm<sup>2</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 foot<sup>2</sup></td>
                                <td>= 0.0929 m<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>1 cm<sup>2</sup></td>
                                <td>= 0.1550 inch<sup>2</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 m<sup>2</sup></td>
                                <td>= 10.7639 foot<sup>2</sup></td>
                            </tr>
                            <tr>
                                <td>1 yard<sup>2</sup></td>
                                <td>= 0.8361 m<sup>2</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 m<sup>2</sup></td>
                                <td>= 1.1960 yard<sup>2</sup></td>
                            </tr>
                        </table>

                    </div>
                    <div className="flex sm:flex-row flex-col sm:gap-40 gap-4 justify-start">

                        <table className="table sm:w-[300px] w-[250px] text-xs sm:text-md">
                            <th>Space Measurement</th>
                            <tr>
                                <td>1 inch<sup>3</sup></td>
                                <td>= 16.387 cm<sup>3</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 foot<sup>3</sup></td>
                                <td>= 0.0283 m<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>1 cm<sup>3</sup></td>
                                <td>= 0.0610 inch<sup>3</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 m<sup>3</sup></td>
                                <td>= 35.3156 foot<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>1 yard<sup>3</sup></td>
                                <td>= 0.7646 m<sup>3</sup></td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 m<sup>3</sup></td>
                                <td>= 1.3079 yard<sup>3</sup></td>
                            </tr>
                            
                        </table>

                        <table className="table sm:w-[300px] w-[250px] text-xs sm:text-md">
                            <th>Weight Measurement</th>
                            <tr>
                                <td>1 Pound</td>
                                <td>= 0.4536 kg</td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 Ounce</td>
                                <td>= 28.3495 g</td>
                            </tr>
                            <tr>
                                <td>1 kg</td>
                                <td>= 2.2046 Pound</td>
                            </tr>
                            <tr className="bg-blue-200">
                                <td>1 gram</td>
                                <td>= 0.0353 Ounces</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                class="collapse collapse-plus bg-base-200 ">
                <input type="radio" name="my-accordion-3" /> 
                <div class="collapse-title sm:text-xl font-medium flex flex-row gap-2 items-center text-xs">
                    <FaCalendar className="text-blue-500" size="2rem"/>
                    Incoterms
                </div>
                <div class="collapse-content"> 
                    <Image src="/assets/incoterms.png" width="1500" height="800" className="self-center w-[800px]" draggable={false}/>
                    <p>
                        <span className="text-slate-600">From 1 January 2011 onwards, revised Incoterms will come into effect worldwide.</span><br/><br/>
                        <span>
                        Instead of 13 clauses, there will only be 11 and divided into two categories. Clauses for all types of transport: EXW, FCA, CPT, CIP, DAT, DAP, DDP Clauses for sea and inland water transport: FAS, FOB, CFR, and CIF The picture above describes the various incoterms and their respective definitions, please <a href="/contactus" className="hover:underline text-blue-500 cursor-pointer">contact us</a> should you require clarification
                        </span>
                    </p>
                </div>
            </motion.div>
        </div>
        <Footer />
    </container>
  )
}

export default ToolsResources