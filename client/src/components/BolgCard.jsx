import React from 'react'

const BolgCard = ({blog}) => {
    const {title, description, category,image,_id}=blog;
  return (
    <div>
      <img src={image} alt="" className='aspect-video'/>
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-promary/20 rounded-full text-primary text-xs'>{category }</span>
      <div>
        <h5>{title}</h5>
        <p></p>
      </div>
    </div>
  )
}

export default BolgCard
