import React from 'react'
import { assets } from './../assets/assets';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32  ' >
       <img src= {assets.logo} alt="Logo" className='w-32 sm:w-44' />
       <button>Login
        <img src={assets.arrow} alt=" " className='w-6 h-6' />
       </button>
    </div>
  )
}

export default Navbar
