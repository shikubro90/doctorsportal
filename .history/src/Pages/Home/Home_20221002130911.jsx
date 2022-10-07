import React from 'react'
import AppointmentSection from './AppointmentSection'
import Banner from './Banner'
import BasicInfo from './BasicInfo'
import FooterSection from './FooterSection'
import Newsletter from './Newsletter'
import ServiceSection from './ServiceSection'
import TestimonialSection from './TestimonialSection'

const Home = () => {
  return (
    <div>
      <Banner />
      <BasicInfo/>
      <ServiceSection/>
      <AppointmentSection/>
      <TestimonialSection/>
      <Newsletter/>
      <FooterSection/>
    </div>
  )
}

export default Home
