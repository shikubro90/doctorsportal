import ButtonPrimary from '../../Shared/ButtonPrimary'

const AppointmentCard = (props) => {
  const { image, title, desc, style, button_text, shortTitle } = props
  return (
    <section>
      <div className={`wrapper flex items-center px-52 ${style}`}>
        <div className="image flex-1">
          <img className='rounded-lg' src={image} alt="bannerImage" />
        </div>
        <div className="details flex-1 flex items-center j">
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
