import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className="testimonial">
      <div className="testimonialWrap">
        <div className="content">
        <div className="shortTitle uppercase text-primary font-bold">{shortTitle}</div>
          <TestimonialCard />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
