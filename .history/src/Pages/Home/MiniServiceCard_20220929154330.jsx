const MiniServiceCard = (props) => {
  const { icon, title, disc } = props
  return (
    <div className="cardWrapper flex flex-col items-center justify-center p-">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="desc">{disc}</div>
    </div>
  )
}

export default MiniServiceCard
