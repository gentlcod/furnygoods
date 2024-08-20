/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const LeftSide = () => {

    const [handleAboutClick, setHandleAboutClick] = useState([])

  return (
    <div className='w-[600px] pl-24 bg-[#2f2f2f] h-[100vh] z-10'>
      {/* Logo */}
      <h4 className='pt-7 my-4 text-[#f6f6f6] '>
        <span className='text-2xl font-bold'>
        FURNY
        </span>
        <span className='text-2xl font-extralight'>
            GOODS
        </span>
      </h4>

      <div className='mt-32 mb-9'>
        <h1 className='text-[#f6f6f6] text-7xl font-bold'>
            Simple & 
            <br />
            Comfort
        </h1>

        <p className='mt-9 text-[#f6f6f6] tracking-normal text-md font-regular'>
        This furniture website let’s visitors 
        <br /> create wish lists for their favorite 
        <br /> items, which help honor.
        </p>
        <br />

        <button 
        onClick={handleAboutClick}
        className='flex items-center bg-[#f6f6f6] py-2 px-6 rounded-2xl text-[#2f2f2f] font-regular'
        >
          About Us <FaArrowRightLong className='ml-2' size={12}/> 
        </button>
      </div>
    </div>
  )
}

export default LeftSide
