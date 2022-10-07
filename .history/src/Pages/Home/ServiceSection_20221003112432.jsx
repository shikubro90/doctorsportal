import MiniServiceCard from './MiniServiceCard'
import { serviceMiniCard } from '../../assets/resourse/Resourse'

const ServiceSection = () => {
  return (
    <div className="serviceWrapp pt-40">
      <div className="flex items-center justify-center flex-col">
        <p className="text-primary font-bold uppercase">Our Service</p>
        <h2 className="text-3xl my-5">Service We Provide</h2>
      </div>
      <div className="Lgflex items-center justify-center px-5 gap-5">
        {serviceMiniCard.map(({ id, icon, title, disc, style }) => {
          return (
            <MiniServiceCard
              key={id}
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
