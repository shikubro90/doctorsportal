import MiniServiceCard from "./MiniServiceCard"
import { serviceMiniCard } from "../../assets/resourse/Resourse"

const ServiceSection = () => {
  return (
    <div>
      {serviceMiniCard.map(())}
    </div>
  )
}

export default ServiceSection
