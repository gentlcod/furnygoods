/* eslint-disable no-unused-vars */
import React from 'react'
import { phoneImg } from '../../public/assets'

const Contact = () => {
  return (
    <div id='contact' className='ml-16 mt-[15rem] mb-[7rem] py-7'>
      <div className='flex items-center'>
        <div>
        <img 
          src={phoneImg} 
          width={310}
          className='ml-[-1.9rem]'
          alt="Phone Mockup Contact" 
        />
        {/* socials */}
        </div>

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
  )
}

export default Contact
