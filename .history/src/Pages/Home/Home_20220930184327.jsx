import React from 'react'
import AppointmentSection from './AppointmentSection'
import Banner from './Banner'
import BasicInfo from './BasicInfo'
import ServiceSection from './ServiceSection'

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicInfo/>
      <ServiceSection/>
      <AppointmentSection/>
      
    </div>
  )
}

export default Home
