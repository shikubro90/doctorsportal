import React from 'react'

const FooterSingleCard = (props) => {
    const {title, list} = props
  return (
    <div className='main'>
        <div className="container">
            <div className="title font-bold text-accent uppercase">
                {title}
            </div>
            <div className="list">
                <ul>
                    {list.m}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterSingleCard