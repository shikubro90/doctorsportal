import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  return (
    <div>
      {miniCard.map(({id,icon,title,disc}) => {
        return (
          <div className="card card-side bg-base-100 shadow-xl">
            {miniCard.icon}
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{disc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MiniCard
