import format from 'date-fns/format'
import { useState } from 'react'
import serviceData from '../../FakeData/Services.json'

const AvailableAppointment = ({date}) => {
  const [serviceData, setServiceData] = useState([])
  useE
  return (
    <div className='my-10'>
      <h3 className='my-12 text-xl text-secondary text-center'>Available Appointment {format(date, "PP")} </h3>
    </div>
  )
}

export default AvailableAppointment
