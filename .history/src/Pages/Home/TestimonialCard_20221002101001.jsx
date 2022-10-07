import React from 'react'

const TestimonialCard = (props) => {
    const {desc,image, name, country} = props
  return (
    <div className='mainCard w-[385px] shadow-lg p-5'>
        <div className="CardBody flex flex-col gap-[38px]">
            <div className="desc">
                <p className='text-black'>{desc}</p>
            </div>
            <div className="bio flex items-center justi">
                <img src={image} alt="" />
                <div className="info">
                    <h4>{name}</h4>
                    <p>{country}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
