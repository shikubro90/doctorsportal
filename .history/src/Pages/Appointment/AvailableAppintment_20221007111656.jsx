import React from 'react'
import format from 'date-fns/format'

const AvailableAppintment = ({date}) => {
  return (
    <div className='my-10'>
      <h3 className='my-'>Available Appointment {format(date, "PP")} </h3>
    </div>
  )
}

export default AvailableAppintment