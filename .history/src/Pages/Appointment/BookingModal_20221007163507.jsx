import React from 'react'

const BookingModal = ({ date, treatment }) => {

  const {n}

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
              Congratulations random Internet user!
            </h3>

            <form action="" className="flex flex-col">
              <input
                type="text"
                className="input input-bordered w-full max-w-md"
                value={date}
              />
              <input type="text" className="input input-bordered w-full max-w-md" />
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
