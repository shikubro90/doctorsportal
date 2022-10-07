import React from 'react'
import FooterSingleCard from './FooterSingleCard'
import { footerData } from '../../assets/resourse/Resourse'

const FooterSection = () => {
  return (
    <div>
      {footerData.map(({id,title,list}) => {
        return <FooterSingleCard key={id} title= />
      })}
    </div>
  )
}

export default FooterSection
