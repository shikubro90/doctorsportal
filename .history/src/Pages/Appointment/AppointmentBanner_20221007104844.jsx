import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { useState } from 'react'

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ background: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-md rounded-lg shadow-2xl"
          alt="banner"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  )
}

export default AppointmentBanner
