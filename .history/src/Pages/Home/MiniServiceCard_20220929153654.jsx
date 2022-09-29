import {serviceMiniCard} from '../../assets/resourse/Resourse.js'

const MiniServiceCard = (props) => {
    const {id, icon, title, disc, style} = props;
  return (
    <div className='cardWrapper'>
      <div className="cardContainer">
        <div className="icon"><img src={icon} alt="" /></div>
        <div className="title">Title</div>
        <div className="desc">Wrapper</div>
      </div>
    </div>
  )
}

export default MiniServiceCard
