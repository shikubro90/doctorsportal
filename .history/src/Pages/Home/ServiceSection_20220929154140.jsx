import MiniServiceCard from "./MiniServiceCard"
import { serviceMiniCard } from "../../assets/resourse/Resourse"

const ServiceSection = () => {
  return (
    <div st>
      {serviceMiniCard.map(({id,icon,title,disc,style})=>{
        return(
            <MiniServiceCard id={id} icon={icon} title={title} disc={disc} style={style}/>
        )
      })}
    </div>
  )
}

export default ServiceSection
