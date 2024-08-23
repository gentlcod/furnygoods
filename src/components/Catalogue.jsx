/* eslint-disable no-unused-vars */
import React from 'react';
import { ChairCategoryImg, Sofa2CategoryImg, LuxuryChairImg, SofaCategoryImg } from '../../public/assets';

const Catalogue = () => {
  return (
    <div id='catalogue' className='ml-16 mt-[15rem] mb-[7rem] py-7'>
      <h3 className='text-2xl text-[#2f2f2f] font-semibold'>
        Most Popular This Year
      </h3>

      {/* Categories Boxes */}
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg'>
          <img 
          src={SofaCategoryImg}
          className='rounded-xl'
          alt="categories img 1" 
          />
          
        </div>
        <div className='bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg'>
          <img 
          src={ChairCategoryImg} 
          className='rounded-xl'
          alt="categories img 2" 
          />
          
        </div>
        <div className='bg-[#FFFFFF] p-1 w-[230px] rounded-xl shadow-lg'>
          <img 
          src={LuxuryChairImg} 
          className='rounded-xl'
          alt="categories img 3" 
          />
          
        </div>
        <div className='bg-[#FFFFFF] p-1 w-[230px]  rounded-xl shadow-lg'>
          <img 
          src={Sofa2CategoryImg}
          className='rounded-xl'
          alt="categories img 4" 
          />
          
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
