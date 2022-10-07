import { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppintment from './AvailableAppointment'

const Appointment = () => {

  const [date, setDate] = useState(new Date())
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}/>
      <AvailableAppintment date={date}/>
    </div>
  )
}

export default Appointment