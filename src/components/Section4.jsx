<<<<<<< HEAD
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import img1 from '../img/pexels-trinh-tr-n-191284110-14613939.jpg';
function Section4(){
    let array = [
        {id: 1 ,text: "Solar panel for home"},
        {id: 2 ,text: "Solar panel for charging"},
        {id: 3 ,text: "Solar panel for vehicles"},
        {id: 4 ,text: "Solar panel for doors"},
    ]
    // Ayesha Mehmood Section
  return(
    <div className='w-[full] pt-28 flex justify-center items-center'>
    <div className='w-[80%] min-h-[500px] grid grid-cols-1 lg:grid-cols-2'>
        <div className='min-h-[500px]'>
            <h1 className='text-3xl md:text-5xl font-normal text-slate-800'>Trusted services , <span className='font-semibold text-slate-600'>for your various needs</span></h1>
            <button className='bg-green-500 mt-8 py-4 px-7 rounded-[30px] flex gap-x-2 items-center font-semibold text-white'>Get in Touch <GoArrowUpRight fontWeight={500} size={20} /></button>
            <div className='grid grid-cols-1 mt-20 md:grid-cols-2 grid-rows-4 md:grid-rows-2  gap-x-4 gap-y-4'>
                {array.map((item, index) => (
                <div key={index} className='border-2 h-[250px] rounded-[30px] px-8 flex flex-col justify-evenly items-start'>
                    <h1 className='text-4xl text-slate-500'>0{item.id}</h1>
                    <h1 className='text-4xl font-[500] text-slate-700'>{item.text}</h1>
                    <button className='underline text-slate-700 text-xl '>View Deatils</button>
                </div>
                ))}
            </div>
        </div>
        <div className=' xl:px-20  pt-10  min-h-[500px]'>
            <img className='rounded-[20px]' src={img1} alt="image 1"/>
        </div>
    </div>
    </div>
  )
}
export default Section4;
=======
import React from 'react'

function Section4(){

    // Ayesha Mehmood Section
  return (
    <div>Section4</div>
  )
}

export default Section4
>>>>>>> a86adcb171c94eadcf933f64ac450cc0e814a574
