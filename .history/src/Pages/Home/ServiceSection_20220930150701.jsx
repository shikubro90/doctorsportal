import MiniServiceCard from './MiniServiceCard'
import { serviceMiniCard } from '../../assets/resourse/Resourse'

const ServiceSection = () => {
  return (
    <div className="serviceWrapp">
      <div className="flex items-center justify-center flex-">
        <p>Our Service</p>
        <h2>Service We Provide</h2>
      </div>
      <div className="flex items-center justify-center px-5">
        {serviceMiniCard.map(({ id, icon, title, disc, style }) => {
          return (
            <MiniServiceCard
              id={id}
              icon={icon}
              title={title}
              disc={disc}
              style={style}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ServiceSection
