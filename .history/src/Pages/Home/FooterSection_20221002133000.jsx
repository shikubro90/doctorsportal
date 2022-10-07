import React from 'react'
import FooterSingleCard from './FooterSingleCard'
import { footerData } from '../../assets/resourse/Resourse'

const FooterSection = () => {
  return <div>{footerData.map(()=>{})}<FooterSingleCard/></div>
}

export default FooterSection
