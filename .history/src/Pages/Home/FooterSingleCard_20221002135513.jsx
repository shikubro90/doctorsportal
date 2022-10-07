import React from 'react'

const FooterSingleCard = (props) => {
  const { title, list } = props
  return (
    <div className="main">
      <div className="container flex k flex-col">
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
