import MiniCard from "./MiniCard"
import { miniCard } from '../../assets/resourse/Resourse.js'

const BasicInfo = () => {
  return <div>{miniCard.map((id,icon,title,style)=>(<MiniCard  />))}</div>
}

export default BasicInfo
