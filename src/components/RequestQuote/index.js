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
                    <div class="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email"
                        placeholder="Email address" />
                        <label
                        for="email"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Email address
                        </label>
                    </div>
                    <div class="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="name"
                        placeholder="Name" />
                        <label
                        for="name"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Name
                        </label>
                    </div>
                    <div class="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="name"
                        placeholder="Phone Number" />
                        <label
                        for="name"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Phone Number
                        </label>
                    </div>
                    <div class="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="name"
                        placeholder="Subject" />
                        <label
                        for="name"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        >Subject
                        </label>
                    </div>
                    
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
        <Image draggable={false} src="/assets/container-operations.jpg" width="800" height="250" className="hidden sm:block rounded-tl-[25%] rounded-br-[25%] rounded-md"/>
    </container>
  )
}

export default RequestQuote