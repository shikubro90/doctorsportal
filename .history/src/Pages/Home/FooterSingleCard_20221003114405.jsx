import React from 'react'
import { Link } from 'react-router-dom'

const FooterSingleCard = (props) => {
  const { title, list } = props
  return (
    <div className="sm:mb-[50px] main flex justify-start items-start">
      <div className="container flex flex-col">
        <div className="title font-bold text-accent uppercase lg:mb-3">{title}</div>
        <div className="list">
          <ul>
            {list.map(({ id, item }) => {
              return (
                <div key={id}>
                  <li className='text-accent py-1 font-medium'><Link to="/">{item}</Link></li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterSingleCard
