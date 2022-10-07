import React from 'react'

const BookingModal = ({date, treatment}) => {

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
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>

          <form action="" className='flex flex-col bg'>
            <input type="text" />
            <input type="text" />
          <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
