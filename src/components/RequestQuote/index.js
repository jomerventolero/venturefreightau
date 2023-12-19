"use client"
import Image from "next/image"
import { FaGlobeAsia } from "react-icons/fa"
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'


const RequestQuote = () => {
  const [verified, setVerified] = useState(false)
  const handleVerify = () => {
    setVerified(true)
  }
  return (
    <container className="flex flex-row gap-4 justify-center items-center py-20">
        <section className="px-10">
            <section className="flex flex-row gap-4 items-center">
                <FaGlobeAsia size="3rem" className="text-blue-400" />
                <h1 className="text-2xl sm:text-5xl font-bold font-mono">Request Quote</h1>
            </section>
            <p className="translate-x-4 py-2 self-center align-middle text-slate-600">Feel free to contact us anytime. <br/>We will get back to you as soon as we can.</p>
            <form className="flex flex-col gap-4 justify-center items-center text-lg py-10">
                <section className="flex flex-col gap-4 justify-center items-center text-lg">
                    <input type="text" name="name" placeholder="Your Name" className="shadow rounded-xl p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"/>
                    <input type="text" name="email" placeholder="Your Email" className="shadow rounded-xl p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"/>
                    <input type="text" name="phone" placeholder="Your Phone Number" className="shadow rounded-xl p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"/>
                    <input type="text" name="subject" placeholder="Subject" className="shadow rounded-xl p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"/>
                    <textarea type="text" name="message" placeholder="Message" className="shadow rounded-xl p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"/>
                    <select id="services" className="w-full rounded-xl p-2 drop-shadow font-sans font-semibold text-slate-600">
                        <option id="air">Air</option>
                        <option id="sea">Ocean</option>
                        <option id="land">Road</option>
                        <option id="rail">Rail</option>
                        <option id="warehousing">Warehousing</option>
                        <option id="others">Others (Specify below) </option>
                    </select>
                </section>
                <ReCAPTCHA 
                    sitekey="6Le27oskAAAAAND76UXYkHTF4x5R-EkJqFjpO0mY"
                    onChange={ handleVerify }
                    className="py-4"
                />
                <button className={`bg-white drop-shadow-2xl rounded-xl m-4 px-4 py-2 `} disabled={!verified}>Submit</button>
            </form>
        </section>
        <Image draggable={false} src="/assets/container-operations.jpg" width="800" height="250" className="hidden sm:block rounded-tl-3xl rounded-br-3xl rounded-md"/>
    </container>
  )
}

export default RequestQuote