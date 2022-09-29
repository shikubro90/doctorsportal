const MiniServiceCard = (props) => {
    const {icon, title, disc} = props;
  return (
    <div className='cardWrapper'>
      <div className="cardContainer">
        <div className="icon"><img src={icon} alt="" /></div>
        <div className="title">{title}</div>
        <div className="desc">{disc}</div>
      </div>
    </div>
  )
}

export default MiniServiceCard
