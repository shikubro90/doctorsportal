import React from 'react'
import FooterSingleCard from './FooterSingleCard'
import { footerData } from '../../assets/resourse/Resourse'
import footerBg from '../../assets/images/footer.png'

const FooterSection = () => {
  return (
    <div
      className="main"
      style={{
        background: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPositionY: 'center',
      }}
    >
      <div className="lg:flex sm:gap-4 items-start justify-around py-[76px]">
        {footerData.map(({ id, title, list }) => {
          return <FooterSingleCard key={id} title={title} list={list} />
        })}
      </div>
      <div className="copyWrite flex items-center justify-center py-5 text-black font-medium">
        <span>Copyright 2022 All Rights Reserved</span>
      </div>
    </div>
  )
}

export default FooterSection
