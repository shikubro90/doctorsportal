import MiniServiceCard from "./MiniServiceCard"
import { serviceMiniCard } from "../../assets/resourse/Resourse"

const ServiceSection = () => {
  return (
    <div>
      {serviceMiniCard.map(({id,icon,title,disc,style})=>{
        return(
            <MiniServiceCard id={id} icon={icon} title={title} disc=/>
        )
      })}
    </div>
  )
}

export default ServiceSection
