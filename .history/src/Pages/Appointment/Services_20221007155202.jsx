import React from 'react'

const Services = ({ services }) => {
  const { name, slots } = services
  console.log(name)
  return (
    <div className="card md:max-w-2xl bg-base-100 text-primary-content shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className='text-orange-600'>Try Another Date</span>
          )}
        </p>
        <p>
            <span className='font-bold'>{slots.length}</span> {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-secon">Book Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default Services
