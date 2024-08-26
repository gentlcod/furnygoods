/* eslint-disable no-unused-vars */
import React from 'react'
import { phoneImg } from '../../public/assets'
import { FaLinkedin, FaPhoneAlt, FaClock } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";







const Contact = () => {
  return (
    <>
    <div id='contact' className='ml-16 mt-[15rem] mb-[7rem] py-7'>
      <div className='flex items-center'>
        <div>
        <img 
          src={phoneImg} 
          width={310}
          className='ml-[-1.9rem]'
          alt="Phone Mockup Contact" 
        />
        {/* socials contact */}
        <div className='lg:ml-[2.19rem] lg:mt-[-25.5rem]'>

        <h3 className='text-[#2f2f2f]  text-xl'>
          <span className='font-bold'>
          FURNY
          </span>
          <span className='font-regular'>
            GOODS
          </span>
        </h3>

        <div className='mt-4 ml-[-.1rem]'>
        <div className='flex items-center ml-[.09rem] mb-2'>
          <FaLinkedin size={19} className='mr-2'/> <p className='text-xs'>LinkedIn Account</p>
        </div>

        <div className='flex items-center mb-2'>
          <AiFillInstagram size={22} className='mr-2'/> <p className='text-xs'>Instagram Account</p>
        </div>

        <div className='flex items-center ml-[.09rem] mb-2'>
          <FaSquareXTwitter size={19} className='mr-2'/> <p className='text-xs'>Twitter/x Account</p>
        </div>

        <div className='flex items-center mb-2'>
          <IoLogoFacebook size={22} className='mr-2'/> <p className='text-xs'>Facebook Account</p>
        </div>

        <div className='flex items-center ml-[.175rem] mb-2'>
          <FaPhoneAlt size={17} className='mr-2'/> <p className='text-xs'>00 000 000</p>
        </div>

        <div className='flex items-center mb-2'>
          <IoLocationSharp size={22} className='mr-2'/><p className='text-xs'>Location - Adress
          <br /> No - Building</p>
        </div>
        <div className='flex items-center mt-[-6rem]'>
        <FaClock size={22} className='mr-2'/> 
<p className='mt-[6rem] text-xs'>
    Mon | 9.00 - 17.00 
    <br /> Tue &nbsp; | 9.00 - 17.00 
    <br /> Wed   | 9.00 - 17.00 
    <br /> Thur  | 9.00 - 17.00 
    <br /> Fri   &nbsp;&nbsp;&nbsp; | 9.00 - 17.00 
    <br /> Sat  &nbsp; | 9.00 - 13.00 
    <br /> Sun &nbsp; | closed
</p>

        </div>
        </div>
        </div>


        </div>

        {/* message form */}
        <div className='flex flex-col ml-20 w-[250px]'>
          <h3 className='my-4 text-center text-[#2f2f2f] font-semibold text-2xl'>
            Ask anything
          </h3>
          <form 
            action="https://formsubmit.co/your@email.com" 
            method="POST" 
            className='flex flex-col gap-4'
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              required 
              className="text-[#9E9E9E] p-2 shadow-md  rounded-2xl"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="text-[#9E9E9E] p-2 shadow-md  rounded-2xl"
            />
             <input 
              type="text" 
              name="email" 
              placeholder="Title" 
              required 
              className="text-[#9E9E9E] p-2 shadow-md  rounded-2xl"
            />
      
            <textarea rows={5} id="query" placeholder='Your Query' className='text-[#9E9E9E] rounded-2xl shadow-md p-2' />
      
            
            <button 
              type="submit" 
              className="p-2 mt-3 bg-[#2f2f2f] text-center text-[#F6F6F6] rounded-2xl"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
    {/* copyright */}
    <p className='text-[#2f2f2f] text-center mb-4'>
      &copy; 2024 All Rights Reserved By Furnygoods
    </p>
    </>
  )
}

export default Contact
