"use client";
import { FaGlobeAsia } from "react-icons/fa";
import ReCAPTCHA from 'react-google-recaptcha';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "@/components/Navbar";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Image from "next/image"
import Head from "next/head"

const ContactUs = () => {
  const [verified, setVerified] = useState(false);

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const emailjs_templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailjs_serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN;
  const handleVerify = () => {
    setVerified(true);
  };

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    subject: '',
    message: '',
    services: '',
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();


    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      phone_number: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      services: e.target.services.value,
    };

    try {
      const result = await emailjs.send(
        emailjs_serviceID,
        emailjs_templateID,
        templateParams,
        publicKey
      );

      console.log(result.text);
      window.location.href = "/contactus/thanks";
    } catch (error) {
      console.error(error.text);
    }
  };

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
    <container className="flex flex-col gap-2 justify-center items-center py-10">
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Feel free to contact us anytime. We will get back to you as soon as we can."/>
      </Head>
      <Navbar />
      <Image 
        src="/assets/shipaerial.jpg"
        alt="Ship Aerial View"
        width={1300}
        height={500}
        className="w-full h-[40vh] object-cover parallax z-10"
        data-speed="0.5"
      />
      <section className="grid sm:grid-cols-2 gap-2 p-4 z-30 bg-white">
        <container className="px-0">
          <section className="flex flex-row gap-4 justify-center items-center self-center text-center">
            <FaGlobeAsia size="3rem" className="text-blue-400 self-center" />
            <h1 className="text-2xl sm:text-5xl font-bold font-mono">Request Quote</h1>
          </section>
          <p className="translate-x-4 py-2 text-center self-center align-middle text-slate-600">
            Feel free to contact us anytime. <br />We will get back to you as soon as we can.
          </p>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-4 justify-center items-center text-lg py-10"
          >
            <section className="flex flex-col gap-4 justify-center items-center text-lg">
              <div className="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
              <input
                type="text"
                className=" peer block min-h-[auto] w-full sm:w-80 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
                <label
                    htmlFor="email"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData.email ? 'hidden' : ''}`}
                >
                Email address
                </label>
              </div>
              <div className="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full sm:w-80 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="name"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData.email ? 'hidden' : ''}`}
                >
                    Name
                </label>
                </div>

                <div className="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full sm:w-80 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="phone"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="phone"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData.phone ? 'hidden' : ''}`}
                >
                    Phone Number
                </label>
                </div>

                <div className="relative drop-shadow-2xl shadow-lg" data-te-input-wrapper-init>
                <input
                    type="text"
                    className="peer block min-h-[auto] w-full sm:w-80 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="subject"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="subject"
                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ${formData.subject ? 'hidden' : ''}`}
                >
                    Subject
                </label>
                </div>

                <textarea
                type="text"
                name="message"
                placeholder="Message"
                className="shadow rounded-xl w-full sm:w-80 h-40 p-2 hover:shadow-blue-300 transition-colors duration-300 ease-in-out"
                />

                <select id="services" className="w-full rounded-xl p-2 drop-shadow font-sans font-semibold text-slate-600" name="services">
                <option id="air">Air</option>
                <option id="sea">Ocean</option>
                <option id="land">Road</option>
                <option id="rail">Rail</option>
                <option id="warehousing">Warehousing</option>
                <option id="others">Others (Specify below) </option>
                </select>

              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={handleVerify}
                className="py-4"
              />
              <button
                type="submit"
                className={`bg-white drop-shadow-2xl rounded-xl m-4 px-4 py-2 `}
                disabled={!verified}
              >
                Submit
              </button>
            </section>
          </form>
        </container>
        <info className="sm:px-10 px-10">
          <ContactInfo />
        </info>
      </section>
      <Footer />
    </container>
  );
};

export default ContactUs;