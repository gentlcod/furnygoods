/* eslint-disable no-unused-vars */
import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { 
  RatingPerson1Img, 
  RatingPerson2Img, 
  RatingPerson3Img, 
  RatingPerson4Img 
} from '../../public/assets'

const Rating = () => {
  return (
    <div id='rating' className='xl:ml-12 lg:ml-12 md:ml-32 sm:ml-32 ml-12 mt-[15rem] mb-[7rem] py-7'>
      <h3 className='lg:ml-[3px] md:ml-[10rem] sm:ml-[8.5rem] text-2xl text-[#2f2f2f] font-semibold'>
        Popular Rates
      </h3>

      {/* Rating Boxes */}
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
       

        <div className=' p-1 w-[145px] rounded-xl'>
          <img 
          src={RatingPerson1Img}
          className='border-[5px] border-[#ffffff] rounded-xl shadow-lg'
          alt="rating person img Joe Adams" 
          />
          <h3 className='text-[#2f2f2f] font-bold text-xl mt-2 text-center'>
          Joe Adams
        </h3> 

        <p className='text-xs font-regular text-[#2f2f2f] mt-2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 

          </p> 

          <div className='mt-2 flex items-center text-[#2f2f2f]'>
            <FaStar size={35}/>            <FaStar size={35}/>            <FaStar size={35}/>            <FaStar size={35}/>            <FaStar size={35}/>
            </div>
        </div>
        
        
        <div className='p-1 w-[145px] rounded-xl'>
          <img 
          src={RatingPerson2Img} 
          className='border-[5px] border-[#ffffff] rounded-xl shadow-lg'
          alt="rating person img Vlada Petrov" 
          />
           <h3 className='text-[#2f2f2f] font-bold text-xl mt-2 text-center'>
          Vlada Petrov
        </h3>

        <p className='text-xs font-regular text-[#2f2f2f] mt-2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 

        </p>

        <div className='mt-2 flex items-center text-[#2f2f2f]'>
          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStarHalfAlt size={35}/>
        </div>
        </div>
        
       
        <div className='p-1 w-[145px] rounded-xl'>
          <img 
          src={RatingPerson3Img} 
          className='border-[5px] border-[#ffffff] rounded-xl shadow-lg'
          alt="rating person img Sarah Amary" 
          />
             <h3 className='text-[#2f2f2f] font-bold text-xl mt-2 text-center'>
          Sarah Amary
        </h3>

        <p className='text-xs font-regular text-[#2f2f2f] mt-2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
        </p>

        <div className='mt-2 flex items-center text-[#2f2f2f]'>
          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>
        </div>
        </div>
        
     
        <div className='p-1 w-[145px] rounded-xl'>
          <img 
          src={RatingPerson4Img}
          className='border-[5px] border-[#ffffff] rounded-xl shadow-lg'
          alt="Taim Hosni" 
          />
        <h3 className='text-[#2f2f2f] font-bold text-xl mt-2 text-center'>
          Taim Hosni
        </h3>

        <p className='text-xs font-regular text-[#2f2f2f] mt-2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
         
        </p>

        <div className='mt-2 flex items-center text-[#2f2f2f]'>
          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStar size={35}/>          <FaStarHalfAlt size={35}/>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Rating;