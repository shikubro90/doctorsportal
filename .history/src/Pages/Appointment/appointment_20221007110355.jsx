import { useState } from 'react'
import FooterSection from '../Home/FooterSection'
import AppointmentBanner from './AppointmentBanner'

const Appointment = () => {

  const [date, setDate] = useState(new Date())
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}/>
      <FooterSection />
    </div>
  )
}

export default Appointment