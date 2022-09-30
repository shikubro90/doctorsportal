const MiniServiceCard = (props) => {
  const { icon, title, disc } = props
  return (
    <div className="cardWrapper flex flex-col items-center justify-center p-6 py-20 px-10 gap-5 shadow-lg rounded-lg">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="desc text-center px-">{disc}</div>
    </div>
  )
}

export default MiniServiceCard
