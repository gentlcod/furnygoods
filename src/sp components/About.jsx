/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAboutClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className='relative'>
        <button 
          onClick={handleAboutClick}
          className='flex items-center bg-[#f6f6f6] py-2 px-6 rounded-2xl text-[#2f2f2f] font-regular'
        >
          Sobre Nosotros {isExpanded ? <FaArrowLeftLong className='ml-2' size={12}/> : <FaArrowRightLong className='ml-2' size={12}/>}
        </button>

        {/* Expanding section */}
        <div className={`fixed bg-[#2f2f2f] text-[#f6f6f6] transition-all duration-500 ease-in-out ${isExpanded ? 'left-[37.5rem] top-0 w-[calc(100vw-600px)] h-[100vh] z-10' : 'transform translate-x-[-600px]'}`}>
          {isExpanded && (
            <p className='text-md font-regular ml-48 mt-36 tracking-wide'>
              Bienvenido a <span>FURNYGOODS.</span>
              <br /><br />
              Tu destino definitivo para muebles elegantes
              <br /> y funcionales. Nos especializamos en ofrecer
              <br /> una selección curada de sillas, mesas y
              <br /> muebles para el hogar que combinan
              <br /> comodidad con diseño. Ya sea que estés
              <br /> buscando mejorar tu espacio vital o agregar
              <br /> un toque de elegancia a tu oficina, FurnyGoods
              <br /> tiene algo para cada gusto. Descubre
              <br /> la artesanía de calidad y la estética moderna
              <br /> con nosotros. Transformar tu espacio,
              <br /> una pieza a la vez.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;