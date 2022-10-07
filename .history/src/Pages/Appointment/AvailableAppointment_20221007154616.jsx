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

  return (
    <div className="w-full my-10 flex flex-col items-center justify-center">
      <h3 className="my-12 text-xl text-secondary text-center">
        Available Appointment {format(date, 'PP')}{' '}
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {serviceData.map((service) => {
          return (
            <div key={service._id} className="div">
              <Services services={service}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AvailableAppointment
