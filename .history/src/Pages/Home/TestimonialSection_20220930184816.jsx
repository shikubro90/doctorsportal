import React from 'react'
import TestimonialCard from './TestimonialCard'
import quote.svg

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
              <div className="text-[36px]">What Our Patients Says</div>
            </div>
            <div className="header_right">
                <img src="" alt="" />
            </div>
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
