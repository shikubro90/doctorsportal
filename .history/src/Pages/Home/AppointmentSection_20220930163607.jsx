import React from 'react'
import AppointmentCard from './AppointmentCard'

import { appointment } from '../../assets/resourse/Resourse.js'

const AppointmentSection = () => {
  return (
    <div>
      {appointment.map(({id,image,title,desc,style,button_text,shortTitle}) => {
        return <AppointmentCard id={id} image={image} title={title} desc={desc} style={style} button_text={button_text}/>
      })}
    </div>
  )
}

export default AppointmentSection
