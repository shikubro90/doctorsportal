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
                    {list.map(({id})=>{
                        return(
                            <div key>
                            <li></li>
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