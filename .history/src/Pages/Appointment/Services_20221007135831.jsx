import React from 'react'

const Services = ({service}) => {
    const {name, slots} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Data</h2>
        <p>
            {slots.length > 0 ? <span>{slots[0]}</span>:<span>Try Another Date</span>}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Services
