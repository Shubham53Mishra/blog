import React from 'react'
import { blogCategories } from '../assets/assets'

const BlogList = () => {
  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
         {blogCategories.map((item) => (
         <div key={item}className='relative'></div>
         ))}
         
      </div>
      <div> 
          ----blog cards will be here----
      </div>
   
    </div>
  )
}

export default BlogList
