import React from 'react'
import heroImage from '../../assets/images/chair.png'
import ButtonPrimary from '../../Shared/ButtonPrimary'
import bgImage from "../../assets/images/bg.png"

function Banner() {
  return (
    <div style={{``}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <img
            src={heroImage}
            className="max-w-lg rounded-lg shadow-2xl"
            alt='bannerImage'
          />
          <div className='px-6'>
            <h1 className="text-5xl font-bold uppercase">Your New Smile Starts Here</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ButtonPrimary>{"Get Started"}</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
