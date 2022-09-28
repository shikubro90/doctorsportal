import { miniCard } from '../../assets/resourse/Resourse.js'

const MiniCard = () => {

  const {icon, title, disc} = miniCard

  return (
    <div>
      {miniCard.map(() => {
        return (
          <div className="card card-side bg-base-100 shadow-xl">
            {/* <figure>
              {icon}
            </figure> */}
            <svg xmlns={} viewBox="0 0 841.9 595.3"></svg>
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
