/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About'

const LeftSide = () => {  

  return (
    <>
      {/* Contenido del Lado Izquierdo para Pantallas Más Grandes */}
      <div className={`w-[600px] mt-[-1.5rem] pl-24 bg-[#2f2f2f] h-[100vh] z-10 relative hidden xl:block`}>
        {/* Logo */}  
        <h4 
          className='cursor-pointer md:block hidden pt-7 my-4 text-[#f6f6f6] bg-[#2f2f2f] px-2 md:px-0'
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <span className='text-3xl font-bold'>
            FURNY
          </span>
          <span className='text-3xl font-extralight'>
            GOODS
          </span>
        </h4>

        <div className='mt-32 mb-9'>
          <h1 className='text-[#f6f6f6] text-7xl font-bold'>
            Simple y
            <br />
            Cómodo
          </h1>

          <p className='mt-9 text-[#f6f6f6] tracking-normal text-md font-regular'>
            Este sitio web de muebles permite a los visitantes
            <br /> crear listas de deseos para sus artículos favoritos,
            <br /> lo que ayuda a honrar.
          </p>
          <br />

          <About />
        </div>
      </div>
    </>
  );
}

export default LeftSide;
