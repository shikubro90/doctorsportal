import MiniCard from "./MiniCard"
import { miniCard } from '../../assets/resourse/Resourse.js'

const BasicInfo = () => {
  return <div>{miniCard.map((id,icon,title,style,disc)=>(<MiniCard id={id} icon={icon} title={title} style={style} />))}</div>
}

export default BasicInfo
