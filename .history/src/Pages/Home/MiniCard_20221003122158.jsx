const MiniCard = (props) => {
  const { icon, title, style, disc } = props
  return (
    <div className="div"></div>
    <div
      className={`card card-side bg-base-100 shadow-xl flex items-center justify-center px-4${style}`}
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
