import MiniCard from './MiniCard'
import { miniCard } from '../../assets/resourse/Resourse.js'

const BasicInfo = () => {
  return
   miniCard.map(({ id, icon, title, style, disc }) => {
    return (
      <MiniCard id={id} icon={icon} title={title} style={style} disc={disc} />
    )
  })
}

export default BasicInfo
