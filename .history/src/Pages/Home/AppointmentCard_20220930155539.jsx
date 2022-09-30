import React from 'react'

const AppointmentCard = (props) => {
    const {image, title, desc, style} = props
  return (
    <section>
        <div className="wrapper">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="details">

            </div>
        </div>
    </section>
  )
}

export default AppointmentCard
