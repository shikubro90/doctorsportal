import React from 'react'
import AppointmentCard from './AppointmentCard'

import { appointment } from '../../assets/resourse/Resourse.js'

const AppointmentSection = () => {
  return (
    <div>
      {appointment.map(({id,image,title,desc,style}) => {
        return <AppointmentCard id={id} image={image} title={title} desc={desc} style={style}/>
      })}
    </div>
  )
}

export default AppointmentSection
