import ButtonPrimary from '../../Shared/ButtonPrimary'


const AppointmentCard = (props) => {
  const { image, title, desc, style, button_text, shortTitle } = props
  return (
    <section className='my-16' style={}>
      <div className={`wrapper flex items-center px-52 ${style}`}>
        <div className="image flex-1">
          <img className="rounded-lg" src={image} alt="bannerImage" />
        </div>
        <div className="details flex-1 flex justify-center flex-col px-16 gap-5">
          <div className="shortTitle uppercase text-primary font-bold">{shortTitle}</div>
          <div className="title text-accent font-bold text-[48px]">{title}</div>
          <div className="desc">{desc}</div>
          <ButtonPrimary>{button_text}</ButtonPrimary>
        </div>
      </div>
    </section>
  )
}

export default AppointmentCard
