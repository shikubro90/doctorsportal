import React from 'react'
import FooterSingleCard from './FooterSingleCard'
import { footerData } from '../../assets/resourse/Resourse'

const FooterSection = () => {
  return (
    <div cl>
      {footerData.map(({id,title,list}) => {
        return <FooterSingleCard key={id} title={title} list={list} />
      })}
    </div>
  )
}

export default FooterSection
