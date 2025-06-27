import React from 'react'
import  { assets } from '../assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div>
            <p>New:AI feature integrated</p>
            <img src={assets.star_icon} alt="" className='w-2.5'/>
        </div>
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header
