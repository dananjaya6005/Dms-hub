import React from 'react';
import DmgLogo from '../assets/logo.png';

export default function Header() {
  return (
    <>
    <div className=' bg-[#f05438] py-1'>
       <div className='flex justify-between items-center  ' >
        <img src={DmgLogo} alt='DMG Logo' className='w-20 ml-5 '/>
        <button className='text-white font-semibold mr-5 border-2 border-white rounded-full  px-4 py-1'>Sign out</button>
       </div>
    </div>
    </>
  )
}
