import ButtonPrimary from '../../Shared/ButtonPrimary'

const AppointmentCard = (props) => {
  const { image, title, desc, style, button_text, shortTitle } = props
  return (
    <section>
      <div className={`wrapper flex item ${style}`}>
        <div className="image">
          <img src={image} alt="bannerImage" />
        </div>
        <div className="details">
          <div className="shortTitle">{shortTitle}</div>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <ButtonPrimary>{button_text}</ButtonPrimary>
        </div>
      </div>
    </section>
  )
}

export default AppointmentCard
