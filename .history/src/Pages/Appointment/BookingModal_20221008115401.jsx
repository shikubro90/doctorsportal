import { format } from 'date-fns'

const BookingModal = ({ date, treatment, setTreatment }) => {

  const { name, slots } = treatment

  const handleSubmit = event =>{
    event.preventDefault()
    const slots = event.target.value;
    console.log(slot);
    setTreatment(null)
    
  }

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
              onSubmit={handleSubmit}
              className="w-full grid grid-cols-1 justify-items-start gap-3"
            >
              <input
                type="text"
                className="input input-bordered w-full bg-[#E6E6E6]"
                value={format(date, 'PP')}
              />
              <select className="select w-full bg-[#E6E6E6]">
                <option disabled selected>
                  Time {`(${slots[0]})`}
                </option>
                {slots.map((slots,index) => {
                  return <option key={index} value={slots}>{slots}</option>
                })}
              </select>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Full Name"
              />
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Phone Number"
              />
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
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
