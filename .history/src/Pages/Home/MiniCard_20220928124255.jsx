import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  const {icon, title, disc, style} = miniCard

  return (
    <div>
      {miniCard.map(() => {
        return (
          <div className="card card-side bg-base-100 shadow-xl">
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
