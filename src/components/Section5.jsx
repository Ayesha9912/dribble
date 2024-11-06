<<<<<<< HEAD
import React, {useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineWindPower } from "react-icons/md";
import { RiWirelessChargingFill } from "react-icons/ri";
import img1 from '../img/photovoltaic-system-2742302_1920.jpg'
import img2 from '../img/house-699978_1920.jpg'
import img3 from '../img/solar-system-2939551_1280.jpg'
function Section5(){
    //Ayesha Mehmood
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
      };
    const caseStudies = [
      {
        image: img1,
        company: 'Medtronic',
        text: `"Switching to solar with SolarTech Innovations was one of the best decisions we've made. The team was professional, the installation was seamless, and we've seen a significant reduction in our energy bills. Their commitment to customer satisfaction is truly impressive!"`,
        name: 'Jeniffer Kolobaly',
        title: 'CTO EV Medtronic',
        icon:<MdOutlineWbSunny size={25}/>,
        iconText: "Charging"
      },
      {
        image: img2,
        company: 'SunVolt Energy',
        text: `"SunVolt Energy delivered on all fronts—quality, reliability, and affordability. Our solar system has been running smoothly, and we're thrilled with the results. It's clear they truly care about their clients and sustainable energy."`,
        name: 'John Doe',
        title: 'CEO, Company 2',
        icon:<MdOutlineWindPower size={25}/>,
        iconText: "Electric Station"
      },
      {
        image: img3,
        company: 'BrightSolar',
        text: `"Working with BrightSolar Solutions was a pleasure. They provided a detailed, personalized solar plan that fit our needs perfectly. We now produce clean energy for our operations and have drastically reduced our carbon footprint."`,
        name: 'Jane Smith',
        title: 'Director, Company 3',
        icon:<RiWirelessChargingFill size={25}/>,
        iconText: "Wind Mills"
      }
    ];
    return(
      <div className='w-full items-center  flex flex-col py-10 md:py-36'>
        <h1  className='text-3xl lg:text-5xl font-semibold w-[100%] lg:w-[45%] text-center mb-10'>See How we Show The Problems , <span className='font-normal text-slate-600'>Right on the Target</span></h1>
      <div className="w-[80%] align-middle">
        <Slider {...settings}>
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className=" rounded-xl bg-slate-100 p-2 lg:p-8">
              <div className='lg:flex w-full'>
              <div className="w-[100%] lg:w-[50%] items-start justify-center flex flex-col gap-y-8 px-1 md:px-9">
                <h2 className="text-3xl font-bold mb-4">{caseStudy.company}</h2>
                <p className=" text-lg md:text-2xl mb-4">{caseStudy.text}</p>
                <button className="px-6 py-4 bg-green-500 text-white text-xl rounded-[30px] hover:bg-green-600 transition">
                  View case study
                </button>
                <h5 className="mt-4 font-semibold text-gray-600">
                  {caseStudy.name} – {caseStudy.title}
                </h5>
              </div>

              <div className=' w-[100%] lg:w-[50%]'>
              <img
                  className='rounded-2xl shadow-lg mt-10 md:mt-0'
                  src={caseStudy.image}
                  alt={caseStudy.company}
                />
              </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-3 mt-6">
          {caseStudies.map((item, index) => (
            <div>
            <div
              key={index}
              className={`w-20 md:w-40 mt-[20px] h-[5px] rounded-2xl ${
                currentSlide === index ? 'bg-green-500' : 'bg-gray-300'
              } transition-colors duration-300`}
            />
            <div className='md:flex gap-x-3 mt-5 items-center '>
              <p>{item.icon}</p>
              <h1 className='text-md md:text-xl'>{item.iconText}</h1>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
=======
import React from 'react'

function Section5(){
    //Ayesha Mehmood Section
  return (
    <div>
        
    </div>
  )
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
}

export default Section5