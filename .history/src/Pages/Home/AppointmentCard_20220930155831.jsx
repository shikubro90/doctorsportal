import shar

const AppointmentCard = (props) => {
    const {image, title, desc, style} = props
  return (
    <section>
        <div className="wrapper">
            <div className="image">
                <img src={image} alt="image" />
            </div>
            <div className="details">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {desc}
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default AppointmentCard
