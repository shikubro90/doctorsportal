import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  return (
    <div>
      {miniCard.map(({id,icon,title,disc,style}) => {
        return (
          <div className="flex">
            <div key={id} className="card card-side bg-base-100 shadow-xl" style={style}>
              <div className=''>
                <img  src={icon} alt="icon" />
              </div>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{disc}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MiniCard
