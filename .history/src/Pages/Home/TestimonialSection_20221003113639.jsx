import React from 'react'
import TestimonialCard from './TestimonialCard'
import quote from '../../assets/icons/quote.svg'
import { testimonial } from '../../assets/resourse/Resourse.js'

const TestimonialSection = () => {
  return (
    <div className="testimonial my-[80px]">
      <div className="testimonialWrap">
        <div className="content">
          <div className="header flex items-center justify-between px-20">
            <div className="header_left">
              <div className="shortTitle uppercase text-primary font-bold">
                Testimonial
              </div>
              <div className="text-[36px]">What Our Patients Says</div>
            </div>
            <div className="header_right">
              <img className='w-[192px] h-[156px] lg:hi' src={quote} alt="quote"/>
            </div>
          </div>
          <div className="body lg:flex items-center justify-center gap-10">
            {testimonial.map(({ id, title, image, name, country, desc }) => {
              return (
                <TestimonialCard
                  key={id}
                  title={title}
                  image={image}
                  name={name}
                  country={country}
                  desc={desc}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
