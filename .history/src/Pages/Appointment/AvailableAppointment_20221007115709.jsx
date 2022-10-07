import format from 'date-fns/format'
import serviceData from '../../'

const AvailableAppointment = ({date}) => {
  return (
    <div className='my-10'>
      <h3 className='my-12 text-xl text-secondary text-center'>Available Appointment {format(date, "PP")} </h3>
    </div>
  )
}

export default AvailableAppointment
