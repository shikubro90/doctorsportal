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

          <div className="modalContainer flex flex-col items-center justify-center">
            <h3 className="text-lg font-bold">
              <span className="font-normal">Booking For</span> {name}
            </h3>

            <form
              action=""
              className="grid grid-cols-1 justify-items-start gap-3"
            >
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                value={date}
              />
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                value={slots[]}
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
