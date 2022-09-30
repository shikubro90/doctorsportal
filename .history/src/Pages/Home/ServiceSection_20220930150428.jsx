import MiniServiceCard from "./MiniServiceCard"
import { serviceMiniCard } from "../../assets/resourse/Resourse"

const ServiceSection = () => {
  return (
    <div className="flex items-center justify-center px-5">

      <div className="title_desc">
        <p>Our Service/p>
      </div>

      {serviceMiniCard.map(({id,icon,title,disc,style})=>{
        return(
            <MiniServiceCard id={id} icon={icon} title={title} disc={disc} style={style}/>
        )
      })}
    </div>
  )
}

export default ServiceSection
