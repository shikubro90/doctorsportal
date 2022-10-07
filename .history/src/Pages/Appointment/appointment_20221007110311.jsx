import React from 'react'
import FooterSection from '../Home/FooterSection'
import AppointmentBanner from './AppointmentBanner'

const Appointment = () => {
  
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <AppointmentBanner/>
      <FooterSection/>
    </div>
  )
}

export default Appointment