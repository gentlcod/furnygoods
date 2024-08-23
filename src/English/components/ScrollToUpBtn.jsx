/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToUpBtn = () => {
  return (
    <div>
        <div className='absolute left-60 mt-4'>
        <a href="/#home">
        <div className='flex items-center justify-center bg-[#2f2f2f] rounded-full w-[50px] h-[50px]'>
          <MdOutlineKeyboardDoubleArrowUp size='35' className='text-[#f6f6f6]'/>
        </div>
        </a>
        </div>
    </div>
  )
}

export default ScrollToUpBtn
