import React from 'react'

const FooterSingleCard = (props) => {
  const { title, list } = props
  return (
    <div className="main flex justify-start items-start">
      <div className="container flex flex-col">
        <div className="title font-bold text-accent uppercase">{title}</div>
        <div className="list">
          <ul>
            {list.map(({ id, item }) => {
              return (
                <div key={id}>
                  <li>{item}</li>
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
