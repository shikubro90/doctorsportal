import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className="testimonial">
      <div className="testimonialWrap">
        <div className="content">
          <div className="header">
            <div className="header_left">
              <div className="shortTitle uppercase text-primary font-bold">
                Testimonial
              </div>
              <div className={`title font-bold text-[48px] >{title}</div>
            </div>
            <div className="header_right"></div>
          </div>
          <div className="body">
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection