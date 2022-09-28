import MiniCard from "./MiniCard"
import { miniCard } from '../../assets/resourse/Resourse.js'

const BasicInfo = () => {
  return <div>{miniCard.map((id,icon,title,style)=>(<MiniCard id={id} icon={icon} />))}</div>
}

export default BasicInfo
