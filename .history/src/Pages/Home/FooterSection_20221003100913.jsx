import React from 'react'
import FooterSingleCard from './FooterSingleCard'
import { footerData } from '../../assets/resourse/Resourse'
import footerBg from '../../assets/images/footer.png'

const FooterSection = () => {
  return (
    <div className='flex items-start justify-around py-[76px]' style={{background : URL()}}>
      {footerData.map(({id,title,list}) => {
        return <FooterSingleCard key={id} title={title} list={list} />
      })}
    </div>
  )
}

export default FooterSection
