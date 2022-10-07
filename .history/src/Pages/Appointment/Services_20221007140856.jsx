import React from 'react'

const Services = ({ services }) => {
  const { name, slots } = services
  console.log(name)
  return (
    <div className="card lg:max-w-lg bg-base-100 text-primary-content shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-xl font-bold text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span>Try Another Date</span>
          )}
        </p>
        <p>
            {slots.}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Services
