/* eslint-disable no-unused-vars */
import React from 'react';
import { ChairCategoryImg, Sofa2CategoryImg, LuxuryChairImg, SofaCategoryImg } from '../../public/assets';

const Catalogue = () => {
  return (
    <div id='catalogue' className='lg:ml-12 sm:ml-16 ml-12 mt-[15rem] mb-[7rem] py-7'>
      <h3 className='xl:ml-[-31.7rem] lg:ml-[-43.3rem] md:ml-[-7.5rem] sm:text-center text-2xl text-[#2f2f2f] font-semibold'>
        Most Popular This Year
      </h3>

     {/* Categories Boxes */}
     <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
  {/* Category 1 */}
  <div className='relative bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg group'>
    <img 
      src={SofaCategoryImg}
      className='rounded-xl w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-md'
      alt="categories img 1" 
    />
    <div className='absolute inset-0 flex items-center justify-center text-transparent group-hover:text-[#F6F6F6] transition duration-500 ease-in-out'>
      <p className='text-2xl font-bold group-hover:text-shadow-md'>
        Serene Sofa
      </p>
    </div>
  </div>
  
  {/* Category 2 */}
  <div className='relative bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg group'>
    <img 
      src={ChairCategoryImg} 
      className='rounded-xl w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-md'
      alt="categories img 2" 
    />
    <div className='absolute inset-0 flex items-center justify-center text-transparent group-hover:text-[#F6F6F6] transition duration-500 ease-in-out'>
      <p className='text-2xl text-center font-bold group-hover:text-shadow-3xl'>
        Breeze <br /> Sectional
      </p>
    </div>
  </div>
  
  {/* Category 3 */}
  <div className='relative bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg group'>
    <img 
      src={LuxuryChairImg} 
      className='rounded-xl w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-md'
      alt="categories img 3" 
    />
    <div className='absolute inset-0 flex items-center justify-center text-transparent group-hover:text-[#F6F6F6] transition duration-500 ease-in-out'>
      <p className='text-2xl font-bold group-hover:text-shadow-md'>
        Luxe Lounger
      </p>
    </div>
  </div>
  
  {/* Category 4 */}
  <div className='relative bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg group'>
    <img 
      src={Sofa2CategoryImg}
      className='rounded-xl w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-md'
      alt="categories img 4" 
    />
    <div className='absolute inset-0 flex items-center justify-center text-transparent group-hover:text-[#F6F6F6] transition duration-500 ease-in-out'>
      <p className='text-2xl font-bold group-hover:text-shadow-md'>
        Timber Couch
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Catalogue;
