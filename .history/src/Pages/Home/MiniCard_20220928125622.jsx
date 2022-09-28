import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  const {icon, title, disc} = miniCard

  return (
    <div>
      {miniCard.map(() => {
        return (
          <div className="card card-side bg-base-100 shadow-xl">
            
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MiniCard
