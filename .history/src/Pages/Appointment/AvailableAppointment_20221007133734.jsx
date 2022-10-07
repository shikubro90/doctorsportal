import format from 'date-fns/format'
import { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

const AvailableAppointment = ({ date }) => {
  const [serviceData, setServiceData] = useState([])

  useEffect(() => {
    fetch('Services.json')
      .then((res)=>{
        res json()
      }).then((data)=>{
        setServiceData(data)
      })
  },[])

  console.log(serviceData)

  return (
    <div className="my-10">
      <h3 className="my-12 text-xl text-secondary text-center">
        Available Appointment {format(date, 'PP')}{' '}
      </h3>
    </div>
  )
}

export default AvailableAppointment
