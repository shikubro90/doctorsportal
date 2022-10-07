import bg from '../../assets/images/appointment.png'
import ButtonPrimary from '../../Shared/ButtonPrimary'

const Newsletter = () => {
  return (
    <div className="main py-20" style={{ background: `url(${bg})` }}>
      <div className="container flex flex-col items-center justify-center">
        <div className="headingPart flex flex-col items-center justify-center">
          <h4 className='font-bold text-primary uppercase mb-5'>Contact Us</h4>
          <h2>Stay connected with us</h2>
        </div>
        <div className="bodyPart flex flex-col items-center justify-center">
          <form action="" className="flex flex-col items-center justify-center">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="subject" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <ButtonPrimary>{'Submit'}</ButtonPrimary>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
