import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" style={{background : `url(${bg})`, backgroundSize : 'cover'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <DayPicker />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentBanner
