import React from 'react'

const TestimonialCard = (props) => {
    const {desc,image, name, country} = props
  return (
    <div className='mainCard w-[385px] shadow-lg p-5'>
        <div className="CardBody flex flex-col gap-[38px]">
            <div className="desc">
                <p className='text-black'>{desc}</p>
            </div>
            <div className="bio flex items-center gap-5">
                <img className='rounded-full border-4 border-secondary' src={image} alt="" />
                <div className="info">
                    <h4 className='font-bold text-accent text-lg'>{name}</h4>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
