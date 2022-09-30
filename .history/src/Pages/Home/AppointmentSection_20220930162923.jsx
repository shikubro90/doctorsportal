import React from 'react'
import AppointmentCard from './AppointmentCard'

import {appointment} from '../../assets/resourse/Resourse'

const AppointmentSection = () => {
  return (
    <div>
        {appointment}
      <AppointmentCard/>
    </div>
  )
}

export default AppointmentSection
