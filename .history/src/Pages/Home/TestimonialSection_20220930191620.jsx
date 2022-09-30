import React from 'react'
import TestimonialCard from './TestimonialCard'
import quote from '../../assets/icons/quote.svg'
import { testimonial } from '../../assets/resourse.js'

const TestimonialSection = () => {
  return (
    <div className="testimonial">
      <div className="testimonialWrap">
        <div className="content">
          <div className="header flex items-center justify-between">
            <div className="header_left">
              <div className="shortTitle uppercase text-primary font-bold">
                Testimonial
              </div>
              <div className="text-[36px]">What Our Patients Says</div>
            </div>
            <div className="header_right">
              <img src={quote} alt="quote" />
            </div>
          </div>
          <div className="body">
            {testimonial.map(({id,title,image,name,country}) => {
              return <TestimonialCard key={id} title={title} image={image} name={name} country={} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
