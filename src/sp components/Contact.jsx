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
      <div id='contact' className=' ml-4 mt-[5rem] mb-[7rem] py-7'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          {/* Image and Socials Section */}
          <div className='flex flex-col items-center lg:items-start'>
            <img 
              src={phoneImg} 
              width={310}
              className='mb-10 lg:mb-0 lg:mr-0 md:mr-0 sm:mr-0 mr-20'
              alt="Maqueta de Teléfono Contacto" 
            />
            {/* Socials Contact */}
            <div className='lg:ml-[5rem] sm:ml-[-.1rem] ml-[-5.3rem] lg:mt-[-28rem] mt-[-31rem]'>
              <h3 className='text-[#2f2f2f] text-xl'>
                <span className='font-bold'>FURNY</span>
                <span className='font-regular'> GOODS</span>
              </h3>

              <div className='mt-4'>
                <div className='flex items-center mb-2'>
                  <FaLinkedin size={19} className='mr-2'/> 
                  <p className='text-xs'>Cuenta de LinkedIn</p>
                </div>

                <div className='flex items-center mb-2'>
                  <AiFillInstagram size={22} className='mr-2'/> 
                  <p className='text-xs'>Cuenta de Instagram</p>
                </div>

                <div className='flex items-center mb-2'>
                  <FaSquareXTwitter size={19} className='mr-2'/> 
                  <p className='text-xs'>Cuenta de Twitter/x</p>
                </div>

                <div className='flex items-center mb-2'>
                  <IoLogoFacebook size={22} className='mr-2'/> 
                  <p className='text-xs'>Cuenta de Facebook</p>
                </div>

                <div className='flex items-center mb-2'>
                  <FaPhoneAlt size={17} className='mr-2'/> 
                  <p className='text-xs'>00 000 000</p>
                </div>

                <div className='flex items-center mb-2'>
                  <IoLocationSharp size={22} className='mr-2'/> 
                  <p className='text-xs'>
                    Ubicación - Dirección <br /> No - Edificio
                  </p>
                </div>

                <div className='flex items-center'>
                  <FaClock size={22} className='mr-2 mt-[-5.5rem]'/> 
                  <p className='text-xs'>
                    Lun | 9.00 - 17.00 
                    <br /> Mar | 9.00 - 17.00 
                    <br /> Mié | 9.00 - 17.00 
                    <br /> Jue | 9.00 - 17.00 
                    <br /> Vie | 9.00 - 17.00 
                    <br /> Sáb | 9.00 - 13.00 
                    <br /> Dom | cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className='flex flex-col mt-32 lg:mt-0 lg:ml-20 w-full max-w-xs'>
            <h3 className='my-4 lg:text-center sm:text-center text-[#2f2f2f] font-semibold text-2xl'>
              Pregunta lo que desees
            </h3>
            <form 
              action="https://formsubmit.co/your@email.com" 
              method="POST" 
              className='relative z-10 flex flex-col gap-4'
            >
              <input 
                type="text" 
                name="name" 
                placeholder="Nombre Completo" 
                required 
                className="text-[#4F4F4F] placeholder-[#9E9E9E] p-2 shadow-md rounded-2xl"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Correo Electrónico" 
                required 
                className="text-[#4F4F4F] placeholder-[#9E9E9E] p-2 shadow-md rounded-2xl"
              />
              <input 
                type="text" 
                name="title" 
                placeholder="Asunto" 
                required 
                className="text-[#4F4F4F] placeholder-[#9E9E9E] p-2 shadow-md rounded-2xl"
              />
              <textarea 
                rows={5} 
                id="query" 
                placeholder='Tu Consulta' 
                className='text-[#4F4F4F] placeholder-[#9E9E9E] rounded-2xl shadow-md p-2' 
              />
              <button 
                type="submit" 
                className="p-2 mt-3 bg-[#2f2f2f] text-center text-[#F6F6F6] rounded-2xl"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className='text-[#2f2f2f] text-center mb-4'>
        &copy; 2024 Todos los Derechos Reservados por Furnygoods
      </p>
    </>
  )
}

export default Contact
