import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import Services from './Services'

const AvailableAppointment = ({ date }) => {
  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    fetch('Services.json')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setServiceData(data)
      })
  }, [])

  console.log(serviceData)

  return (
    <div className="my-10">
      <h3 className="my-12 text-xl text-secondary text-center">
        Available Appointment {format(date, 'PP')}{' '}
      </h3>
      <div className="grid grid-cols-1 md:grid-col">
        <Services />
      </div>
    </div>
  )
}

export default AvailableAppointment
