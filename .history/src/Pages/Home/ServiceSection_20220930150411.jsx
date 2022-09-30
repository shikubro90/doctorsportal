import MiniServiceCard from "./MiniServiceCard"
import { serviceMiniCard } from "../../assets/resourse/Resourse"

const ServiceSection = () => {
  return (
    <div className="flex items-center justify-center px-5">

      .title_de

      {serviceMiniCard.map(({id,icon,title,disc,style})=>{
        return(
            <MiniServiceCard id={id} icon={icon} title={title} disc={disc} style={style}/>
        )
      })}
    </div>
  )
}

export default ServiceSection
