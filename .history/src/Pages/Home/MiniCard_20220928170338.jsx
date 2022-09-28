const MiniCard = (props) => {
  const { id, icon, title, style, disc } = props
  return (
    <div
    key={id}
      className="card card-side bg-base-100 shadow-xl flex items-center justify-center"
      style={style}
    >
      <div className="">
        <img src={icon} alt="icon" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{disc}</p>
      </div>
    </div>
  )
}

export default MiniCard
