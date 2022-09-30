import ButtonPrimary from "../../Shared/ButtonPrimary"

const AppointmentCard = (props) => {
    const {image, title, desc, style} = props
  return (
    <section>
        <div className={`wrapper flex ${style}`}>
            <div className="image">
                <img src={image} alt="bannerImage"/>
            </div>
            <div className="details">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {desc}
                </div>
                <ButtonPrimary><ButtonPrimary>
            </div>
        </div>
    </section>
  )
}

export default AppointmentCard
