"use client"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'


const ImageSlider = () => {

  const slides = [
    {
      url: '/assets/shipglobal.jpg',
      header: "Smart Logistics: Transforming Shipping Operations with Container Tracking",
      location: "container-tracking",
    },
    {
      url: '/assets/footprint.jpg',
      header: 'Reducing our carbon footprint in our effort for sustainability',
      location: "carbon-footprint",
    },
    {
      url: '/assets/shiprear.jpg',
      header: "Bulk Shipping Excellence: Redefining the Movement of Goods",
      location: "bulk-shipping",
    },
    {
      url: '/assets/freightgraph.jpg',
      header: "Freight Shipping: The Art of Efficient and Cost-effective Shipping",
      location: "",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  })

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className='max-w-[1800px] h-[580px] sm:w-3/4 w-full transition-all duration-300 m-auto p-0 mt-10 sm:py-16 relative group place-items-center z-10 flex flex-col'>
        
      <div
        style={{ backgroundImage: `url(${slides[(currentIndex - 1 + slides.length) % slides.length].url})` }}
        className='w-1/2 h-1/2 -z-10 blur-sm bg-center bg-cover transition-all duration-500 fade-in absolute -left-[60%] top-[25%]'
      >
      </div>

      <div
        style={{ backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].url})` }}
        className='w-1/2 h-1/2 -z-10 blur-sm bg-center bg-cover transition-all duration-500 fade-in absolute -right-[60%] top-[25%]'
      ></div>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover transition-all duration-500 ease-in-out fade-in sm:hover:scale-110 items-center flex justify-center text-2xl hover:text-4xl hover:bg-black opacity-90'
      >
        
      </div>
      <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: .5, type: "fadeIn" }}
            className="flex flex-col content-evenly cursor-pointer absolute z-50 top-80 sm:top-56 text-center pt-10 sm:px-40 text-white drop-shadow-[100px] text-3xl font-bold">{slides[currentIndex].header}
            <br/><br/>
            <a className={`p-2 w-1/4 bg-blue-400 rounded-sm hover:bg-blue-600 mx-auto text-xs sm:text-lg shadow-2xl drop-shadow-2xl z-50  ${slides[currentIndex].header === "" ? "hidden" : "block"} ${slides[currentIndex].location === "" ? "hidden" : "block"}`} href={slides[currentIndex].location} >Learn More</a>
      </motion.div>

      {/* Left Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 sm:-left-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 sm:-right-28 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> 
      {/* Dots 
      <div className='flex top-4 justify-center py-2 '>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      */}
    </div>
    )
}

export default ImageSlider