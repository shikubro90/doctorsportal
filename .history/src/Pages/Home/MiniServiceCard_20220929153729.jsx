import {serviceMiniCard} from '../../assets/resourse/Resourse.js'

const MiniServiceCard = (props) => {
    const {id, icon, title, disc, style} = props;
  return (
    <div style={} className='cardWrapper'>
      <div className="cardContainer">
        <div className="icon"><img src={icon} alt="" /></div>
        <div className="title">{title}</div>
        <div className="desc">{disc}</div>
      </div>
    </div>
  )
}

export default MiniServiceCard
