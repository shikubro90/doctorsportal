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
      <div className="flex items-start justify-around ">
        {footerData.map(({ id, title, list }) => {
          return <FooterSingleCard key={id} title={title} list={list} />
        })}
      </div>
      <div className="copyWrite flex items-center justify-center">
        <span>Copyright 2022 All Rights Reserved</span>
      </div>
    </div>
  )
}

export default FooterSection
