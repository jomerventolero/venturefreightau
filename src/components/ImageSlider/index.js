"use client"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image'


const ImageSlider = () => {
  const slides = [
    {
      url: '/assets/pexels1.jpg',
    },
    {
      url: '/assets/pexels2.jpg',
    },
    {
      url: '/assets/pexels3.jpg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    console.log(slides[(currentIndex - 1 + slides.length) % slides.length])
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1800px] h-[580px] sm:w-3/4 w-full transition-all duration-300 m-auto p-0 sm:py-16 relative group place-items-center z-10'>
      <Image src="/assets/headsup.png" className="absolute hidden sm:block left-[15%] top-[35%] z-20" width="800" height="220" draggable={false}/>
      <Image src="/assets/headsup.png" className="absolute sm:hidden z-40 translate-y-52" width="800" height="220" draggable={false}/>
      <div
        style={{ backgroundImage: `url(${slides[(currentIndex - 1 + slides.length) % slides.length].url})` }}
        className='w-1/2 h-1/2 -z-10 blur-sm bg-center bg-cover transition-all duration-500 fade-in absolute -left-[60%] top-[25%]'
      ></div>
      <div
        style={{ backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].url})` }}
        className='w-1/2 h-1/2 -z-10 blur-sm bg-center bg-cover transition-all duration-500 fade-in absolute -right-[60%] top-[25%]'
      ></div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover transition-all duration-500 fade-in hover:scale-125'
      ></div>
      {/* Left Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
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
    </div>
    )
}

export default ImageSlider