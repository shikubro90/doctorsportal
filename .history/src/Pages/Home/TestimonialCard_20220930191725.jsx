import React from 'react'

const TestimonialCard = (props) => {
    const {desc,title, image, name, country} = props
  return (
    <div className='card'>
        <div className="CardBody">
            <div className="desc">
                <p>{desc}</p>
            </div>
            <div className="bio">
                <img src={""} alt="" />
                <div className="info">
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
