import MiniCard from './MiniCard'
import { miniCard } from '../../assets/resourse/Resourse.js'

const BasicInfo = () => {
  return (
    <div className="flex items-center justify-center gap-5 px-5">
      {miniCard.map(({ id, icon, title, style, disc }) => {
        return (
          <MiniCard
            
            id={id}
            icon={icon}
            title={title}
            style={style}
            disc={disc}
          />
        )
      })}
    </div>
  )
}

export default BasicInfo
