import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  const {icon, title, disc} = miniCard

  return (
    <div>
      {miniCard.map(() => {
        return (
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              {icon}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">disc</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MiniCard
