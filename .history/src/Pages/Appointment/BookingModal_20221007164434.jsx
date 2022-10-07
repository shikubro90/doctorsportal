import React from 'react'

const BookingModal = ({ date, treatment }) => {
  const { _id, name, slots } = treatment

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="modalContainer flex flex-col items-center justify-center gap-8">
            <h3 className="text-xl font-bold text-secondary">
              <span className="font-normal">Booking For</span> {name}
            </h3>

            <form
              action=""
              className="grid grid-cols-1 justify-items-start gap-3"
            >
              <input
                type="text"
                className="input input-bordered w-full"
                value={date}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                value={slots[0]}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder='Full'
              />
              <input
                type="text"
                className="input input-bordered w-full"
                value={slots[0]}
              />
              <input
                type="text"
                className="input input-bordered w-full"
                value={slots[0]}
              />
              <button className="btn w-full font-normal">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
