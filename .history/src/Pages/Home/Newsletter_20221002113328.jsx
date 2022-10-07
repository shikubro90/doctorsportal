import React from 'react'
import ButtonPrimary from '../../Shared/ButtonPrimary'

const Newsletter = () => {
  return (
    <div className='main'>
        <div className="container flex items-center ju">
            <div className="headingPart">
                <h4>Contact Us</h4>
                <h2>Stay connected with us</h2>
            </div>
            <div className="bodyPart">
                <form action="">
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='subject' />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <ButtonPrimary>{"Submit"}</ButtonPrimary>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter